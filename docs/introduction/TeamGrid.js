import React from 'react';
import './TeamGrid.css';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { FaGithub, FaGlobe } from 'react-icons/fa'

// Individual team member card component
const TeamMemberCard = ({ name, title, affiliation, imageUrl, websiteUrl, githubProfile }) => {
  return (
    <div className="team-member-card">
      <img src={imageUrl} alt={name} className="team-member-image" />
      <div className="team-member-info">
        <h3>{name}</h3>
        <p>{title}<br/>
        {affiliation}</p>
        <div className="team-member-links">
          {websiteUrl && <a href={websiteUrl} target="_blank" rel="noopener noreferrer"><FaGlobe size={20} /></a>} 
          <span> </span>
          {githubProfile && (
            <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="github-link">
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
  
  // Team grid component
  const TeamGrid = () => {
    const teamMembers = [
      {
        id: 1,
        name: 'Alejandro de la Vega',
        title: 'Principal Investigator',
        affiliation: 'University of Texas at Austin',
        imageUrl: useBaseUrl('team/delavega.jpg'),
        websiteUrl: 'https://adelavega.github.io/',
        githubProfile: 'https://github.com/adelavega'
      },
      {
        id: 2,
        name: 'James Kent',
        title: 'Postdoctoral Fellow & Principal Engineer',
        affiliation: 'University of Texas at Austin',
        imageUrl: useBaseUrl('team/kent.jpg'),
        githubProfile: 'https://github.com/jdkent'
      },
      {
        id: 3,
        name: 'Nicholas Lee',
        title: 'Frontend Engineer',
        affiliation: 'McGill University',
        imageUrl: useBaseUrl('team/lee.jpg'),
        githubProfile: 'https://github.com/nicoalee'
      },
      {
        id: 4,
        name: 'Taylor Salo',
        title: 'Postdoctoral fellow',
        affiliation: 'University of Pennsylvania',
        imageUrl: useBaseUrl('team/salo.png'),
        websiteUrl: 'tsalo.github.io',
        githubProfile: 'https://github.com/tsalo'
      },
      {
        id: 5,
        name: 'Katie Bottenhorn',
        title: 'Postdoctoral Fellow',
        affiliation: 'University of Southern California',
        imageUrl: useBaseUrl('team/bottenhorn.jpg'),
        websiteUrl: 'katherinebottenhorn.com',
        githubProfile: 'https://github.com/62442katieb'
      },
      {
        id: 6,
        name: 'Jean-Baptiste Poline',
        title: 'Associate Professor',
        affiliation: 'McGill University',
        websiteUrl: 'https://www.mcgill.ca/neuro/jean-baptiste-poline-phd',
        imageUrl: useBaseUrl('team/poline.png'),
      },
      {
        id: 7,
        name: 'Angela Laird',
        title: 'Professor',
        affiliation: 'Florida International University',
        websiteUrl: 'https://case.fiu.edu/about/directory/profiles/laird-angela.html',
        imageUrl: useBaseUrl('team/laird.jpg'),
      },
      {
        id: 8,
        name: 'Julio Peraza',
        title: 'Graduate Student',
        affiliation: 'Florida International University',
        imageUrl: useBaseUrl('team/pedraza.jpg'),
        githubProfile: 'https://github./julioAPeraza'
      },
      {
        id: 9,
        name: 'Russ Poldrack',
        title: 'Professor',
        affiliation: 'Stanford University',
        imageUrl: useBaseUrl('team/poldrack.jpg'),
        websiteUrl: 'http://poldracklab.org/',
        githubProfile: 'https://github./poldrack'

      },
      {
        id: 10,
        name: 'Tom Nichols',
        title: 'Professor',
        affiliation: 'Oxford University',
        websiteUrl: 'https://www.bdi.ox.ac.uk/Team/t-e-nichols',
        imageUrl: useBaseUrl('team/nichols.jpg'),
      },
      {
        id: 11,
        name: 'Yifan Yu',
        title: 'Graduate Student',
        affiliation: 'Oxford University',
        imageUrl: useBaseUrl('team/yu.jpg'),
        githubProfile: 'https://github./yifan0330'
      }
    ];

    return (
      <div className="team-grid">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.id} {...member} />
        ))}
      </div>
    );
  };

export default TeamGrid;