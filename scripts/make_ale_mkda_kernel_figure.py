import os
from pathlib import Path

os.environ.setdefault("MPLCONFIGDIR", "/tmp/matplotlib")

import matplotlib

matplotlib.use("Agg")

import matplotlib.pyplot as plt
import numpy as np
from matplotlib.collections import LineCollection
from matplotlib.colors import LightSource, LinearSegmentedColormap, ListedColormap, Normalize
from nilearn import datasets, surface


ALE_CMAP = LinearSegmentedColormap.from_list(
    "ale_kernel",
    ["#8c0d13", "#c93212", "#f46d43", "#fdae61", "#fee08b", "#fff7bc"],
)
MKDA_CMAP = ListedColormap(["#ffffff", "#111111"])


def gaussian_1d(x: np.ndarray, sigma: float = 0.7) -> np.ndarray:
    return np.exp(-(x**2) / (2 * sigma**2))


def binary_1d(x: np.ndarray, radius: float = 1.0) -> np.ndarray:
    return (np.abs(x) <= radius).astype(float)


def gaussian_nd(xx: np.ndarray, yy: np.ndarray, zz: np.ndarray | None = None, sigma: float = 0.8):
    squared_radius = xx**2 + yy**2
    if zz is not None:
        squared_radius = squared_radius + zz**2
    return np.exp(-squared_radius / (2 * sigma**2))


def binary_nd(xx: np.ndarray, yy: np.ndarray, zz: np.ndarray | None = None, radius: float = 1.1):
    squared_radius = xx**2 + yy**2
    if zz is not None:
        squared_radius = squared_radius + zz**2
    return (np.sqrt(squared_radius) <= radius).astype(float)


def add_gradient_line(ax, x: np.ndarray, y: np.ndarray) -> None:
    points = np.array([x, y]).T.reshape(-1, 1, 2)
    segments = np.concatenate([points[:-1], points[1:]], axis=1)
    values = 0.5 * (y[:-1] + y[1:])
    collection = LineCollection(
        segments,
        cmap=ALE_CMAP,
        norm=Normalize(vmin=y.min(), vmax=y.max()),
        linewidth=5,
    )
    collection.set_array(values)
    ax.add_collection(collection)
    ax.fill_between(x, 0, y, color="#fdbb84", alpha=0.18)


def style_2d_axis(ax) -> None:
    ax.set_aspect("equal")
    ax.set_xticks([])
    ax.set_yticks([])
    for spine in ax.spines.values():
        spine.set_visible(False)


def style_3d_axis(ax, mesh_data) -> None:
    mins = mesh_data["mins"]
    maxs = mesh_data["maxs"]
    ranges = maxs - mins
    centers = 0.5 * (mins + maxs)
    pads = 0.12 * ranges

    ax.set_box_aspect(ranges)
    ax.view_init(elev=24, azim=-58)
    ax.set_xlabel("x", labelpad=10, fontsize=10)
    ax.set_ylabel("y", labelpad=10, fontsize=10)
    ax.set_zlabel("z", labelpad=10, fontsize=10)
    ax.set_xlim(centers[0] - 0.5 * ranges[0] - pads[0], centers[0] + 0.5 * ranges[0] + pads[0])
    ax.set_ylim(centers[1] - 0.5 * ranges[1] - pads[1], centers[1] + 0.5 * ranges[1] + pads[1])
    ax.set_zlim(centers[2] - 0.5 * ranges[2] - pads[2], centers[2] + 0.5 * ranges[2] + pads[2])
    ax.set_xticks([-1.0, 0.0, 1.0])
    ax.set_yticks([-1.0, 0.0, 1.0])
    ax.set_zticks([-1.0, 0.0, 1.0])
    ax.tick_params(axis="x", pad=2, labelsize=8)
    ax.tick_params(axis="y", pad=2, labelsize=8)
    ax.tick_params(axis="z", pad=3, labelsize=8)
    for axis in [ax.xaxis, ax.yaxis, ax.zaxis]:
        axis.pane.set_facecolor((1, 1, 1, 0))
        axis.pane.set_edgecolor((0.8, 0.8, 0.8, 0.5))
    ax.grid(color="#d9d9d9", linewidth=0.6, alpha=0.5)


def load_anatomical_mesh():
    fsavg = datasets.fetch_surf_fsaverage(mesh="fsaverage5")

    left_coords, left_faces = surface.load_surf_mesh(fsavg["pial_left"])
    right_coords, right_faces = surface.load_surf_mesh(fsavg["pial_right"])
    left_sulc = surface.load_surf_data(fsavg["sulc_left"])
    right_sulc = surface.load_surf_data(fsavg["sulc_right"])

    all_coords = np.vstack([left_coords, right_coords])
    center = all_coords.mean(axis=0)
    scale = np.max(np.linalg.norm(all_coords - center, axis=1))

    def normalize(coords: np.ndarray) -> np.ndarray:
        return (coords - center) / scale

    left_normalized = normalize(left_coords)
    right_normalized = normalize(right_coords)
    all_normalized = np.vstack([left_normalized, right_normalized])

    return {
        "left_coords": left_normalized,
        "right_coords": right_normalized,
        "left_faces": left_faces,
        "right_faces": right_faces,
        "left_sulc": left_sulc,
        "right_sulc": right_sulc,
        "mins": all_normalized.min(axis=0),
        "maxs": all_normalized.max(axis=0),
    }


def add_brain_surface(ax, mesh_data) -> None:
    light = LightSource(azdeg=315, altdeg=35)

    for hemi in ("left", "right"):
        coords = mesh_data[f"{hemi}_coords"]
        faces = mesh_data[f"{hemi}_faces"]
        sulc = mesh_data[f"{hemi}_sulc"]

        face_values = sulc[faces].mean(axis=1)
        normed = (face_values - face_values.min()) / (np.ptp(face_values) + 1e-6)
        grey = 0.68 + 0.20 * (1.0 - normed)
        facecolors = np.column_stack([grey, grey, grey, np.full_like(grey, 0.08)])

        trisurf = ax.plot_trisurf(
            coords[:, 0],
            coords[:, 1],
            coords[:, 2],
            triangles=faces,
            linewidth=0.10,
            antialiased=True,
            shade=False,
            color=(0.82, 0.82, 0.82, 0.08),
            edgecolor=(0.45, 0.45, 0.45, 0.03),
            zorder=0,
        )

        normals = np.cross(
            coords[faces][:, 1] - coords[faces][:, 0],
            coords[faces][:, 2] - coords[faces][:, 0],
        )
        normal_scale = np.linalg.norm(normals, axis=1, keepdims=True) + 1e-6
        normals = normals / normal_scale
        light_vec = np.array(light.direction)
        shading = np.clip(normals @ light_vec, 0, 1)
        shaded = facecolors.copy()
        shaded[:, :3] = np.clip(shaded[:, :3] * (0.76 + 0.28 * shading[:, None]), 0, 1)
        trisurf.set_facecolors(shaded)


def make_sphere(radius: float, center: tuple[float, float, float], resolution: int = 72):
    u = np.linspace(0, 2 * np.pi, resolution)
    v = np.linspace(0, np.pi, resolution // 2)
    uu, vv = np.meshgrid(u, v)
    x = center[0] + radius * np.cos(uu) * np.sin(vv)
    y = center[1] + radius * np.sin(uu) * np.sin(vv)
    z = center[2] + radius * np.cos(vv)
    return x, y, z


def plot_ale_kernel_3d(ax) -> None:
    center = (-0.18, 0.02, 0.03)
    sigma = 0.18
    levels = [0.22, 0.38, 0.56, 0.74, 0.90]
    norm = Normalize(vmin=min(levels), vmax=max(levels))

    for level in levels:
        radius = sigma * np.sqrt(-2.0 * np.log(level))
        x, y, z = make_sphere(radius=radius, center=center, resolution=88)
        rgba = np.array(ALE_CMAP(norm(level)))
        rgba[3] = 0.18 + 0.46 * norm(level)
        ax.plot_surface(
            x,
            y,
            z,
            rstride=1,
            cstride=1,
            color=tuple(rgba),
            linewidth=0,
            antialiased=True,
            shade=True,
            zorder=2,
        )


def plot_mkda_indicator_3d(ax) -> None:
    x, y, z = make_sphere(radius=0.19, center=(-0.18, 0.02, 0.03), resolution=80)
    ax.plot_surface(
        x,
        y,
        z,
        rstride=1,
        cstride=1,
        color=(0.07, 0.07, 0.07, 0.95),
        linewidth=0,
        antialiased=True,
        shade=True,
        zorder=2,
    )


def build_figure() -> plt.Figure:
    fig = plt.figure(figsize=(9.5, 12.2), constrained_layout=False)
    gs = fig.add_gridspec(3, 2, height_ratios=[0.95, 1.1, 1.55], hspace=0.24, wspace=0.03)

    ax11 = fig.add_subplot(gs[0, 0])
    ax12 = fig.add_subplot(gs[0, 1])
    ax21 = fig.add_subplot(gs[1, 0])
    ax22 = fig.add_subplot(gs[1, 1])
    ax31 = fig.add_subplot(gs[2, 0], projection="3d")
    ax32 = fig.add_subplot(gs[2, 1], projection="3d")

    x = np.linspace(-3.0, 3.0, 500)
    y_gauss = gaussian_1d(x)
    y_binary = binary_1d(x)
    mesh_data = load_anatomical_mesh()

    add_gradient_line(ax11, x, y_gauss)
    ax11.set_xlim(x.min(), x.max())
    ax11.set_ylim(0, 1.08)
    ax11.axvline(0, color="#444444", linewidth=1.0, linestyle="--", alpha=0.55)
    ax11.set_ylabel("Kernel weight")
    ax11.set_xticks([])
    ax11.set_yticks([0, 0.5, 1.0])
    ax11.text(0.03, 0.92, "1D", transform=ax11.transAxes, fontsize=12, weight="bold")

    ax12.fill_between(x, 0, y_binary, color="#111111", alpha=1.0, step="mid")
    ax12.plot(x, y_binary, color="#111111", linewidth=2.5, drawstyle="steps-mid")
    ax12.set_xlim(x.min(), x.max())
    ax12.set_ylim(0, 1.08)
    ax12.axvline(0, color="#444444", linewidth=1.0, linestyle="--", alpha=0.55)
    ax12.set_xticks([])
    ax12.set_yticks([])
    grid_2d = np.linspace(-2.6, 2.6, 250)
    xx, yy = np.meshgrid(grid_2d, grid_2d, indexing="xy")
    g2 = gaussian_nd(xx, yy)
    b2 = binary_nd(xx, yy)

    ax21.imshow(
        g2,
        origin="lower",
        extent=[grid_2d.min(), grid_2d.max(), grid_2d.min(), grid_2d.max()],
        cmap=ALE_CMAP,
        vmin=0,
        vmax=1,
    )
    ax21.contour(xx, yy, g2, levels=[0.25, 0.5, 0.75], colors="white", linewidths=0.8, alpha=0.75)
    ax21.text(0.03, 0.92, "2D", transform=ax21.transAxes, fontsize=12, weight="bold")
    style_2d_axis(ax21)

    ax22.imshow(
        b2,
        origin="lower",
        extent=[grid_2d.min(), grid_2d.max(), grid_2d.min(), grid_2d.max()],
        cmap=MKDA_CMAP,
        vmin=0,
        vmax=1,
    )
    ax22.contour(xx, yy, b2, levels=[0.5], colors="#111111", linewidths=1.4)
    style_2d_axis(ax22)

    add_brain_surface(ax31, mesh_data)
    plot_ale_kernel_3d(ax31)
    ax31.text2D(0.03, 0.94, "3D brain", transform=ax31.transAxes, fontsize=12, weight="bold")
    style_3d_axis(ax31, mesh_data)

    add_brain_surface(ax32, mesh_data)
    plot_mkda_indicator_3d(ax32)
    ax32.text2D(0.03, 0.94, "3D brain", transform=ax32.transAxes, fontsize=12, weight="bold")
    style_3d_axis(ax32, mesh_data)

    for axis in [ax11, ax12]:
        axis.spines["top"].set_visible(False)
        axis.spines["right"].set_visible(False)
        axis.spines["left"].set_color("#6b6b6b")
        axis.spines["bottom"].set_color("#6b6b6b")

    fig.subplots_adjust(left=0.08, right=0.97, bottom=0.05, top=0.90)
    fig.suptitle("Gaussian ALE kernels versus binary MKDA indicators", fontsize=20, weight="bold", y=0.965)
    fig.text(0.285, 0.925, "ALE", ha="center", va="bottom", fontsize=16, weight="bold")
    fig.text(0.745, 0.925, "MKDA", ha="center", va="bottom", fontsize=16, weight="bold")
    return fig


def main() -> None:
    repo_root = Path(__file__).resolve().parents[1]
    output_dir = repo_root / "blog" / "img"
    output_dir.mkdir(parents=True, exist_ok=True)

    fig = build_figure()
    png_path = output_dir / "ale_mkda_kernel_comparison.png"
    pdf_path = output_dir / "ale_mkda_kernel_comparison.pdf"
    fig.savefig(png_path, dpi=600, bbox_inches="tight", facecolor="white")
    fig.savefig(pdf_path, bbox_inches="tight", facecolor="white")
    plt.close(fig)

    print(f"Wrote {png_path}")
    print(f"Wrote {pdf_path}")


if __name__ == "__main__":
    main()
