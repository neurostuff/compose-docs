import React from 'react'

export default function AnnotationTableExample({ children }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Study</th>
                    <th>Analysis</th>
                    <th>included</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowSpan={3}>Effects of varenicline on smoking cue-triggered neural and craving responses</td>
                    <td>smoking &lt; nonsmoking</td>
                    <td>
                        <input type="checkbox" defaultChecked />
                    </td>
                </tr>
                <tr>
                    <td>smoking &gt; nonsmoking</td>
                    <td>
                        <input type="checkbox" defaultChecked />
                    </td>
                </tr>
                <tr>
                    <td>smoking vs placebo</td>
                    <td>
                        <input type="checkbox" />
                    </td>
                </tr>
                <tr>
                    <td rowSpan={1}>Nicotine effects on default mode network during resting state</td>
                    <td>post placebo &lt; pre placebo</td>
                    <td>
                        <input type="checkbox" defaultChecked />
                    </td>
                </tr>
                <tr>
                    <td>Effects of an alpha 7-nicotinic agonist on default network activity in schizophrenia</td>
                    <td>Placebo &gt; DMXB-A</td>
                    <td>
                        <input type="checkbox" defaultChecked />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
