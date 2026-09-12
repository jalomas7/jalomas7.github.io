import React from 'react';

const projects = [
  { category: 'Product engineering', name: 'Asurion Home+', description: 'Helping customers replace broken technology. Front-end and back-end work on the replacement experience.', href: 'https://www.asurion.com/homeplus/', action: 'Visit Home+', tags: 'React · TypeScript · Node.js', note: 'The replacement experience requires an active claim. This link opens the public Home+ overview.' },
  { category: 'Open source', name: 'Simply Typed Universal Bus', description: 'A simple, type-safe event bus for TypeScript, designed to work across client and server environments.', href: 'https://www.npmjs.com/package/simply-typed-universal-bus?activeTab=readme', action: 'Explore the package', tags: 'TypeScript · Client + server' },
  { category: 'Creative tool', name: 'Gradient Generator', description: 'Create and customize gradients, then copy the CSS straight into your project.', href: 'https://gradient-generator.com', action: 'Try the generator', tags: 'Design tools · CSS' },
  { category: 'Multiplayer game', name: 'Sort Racer', description: 'A real-time sorting game: put colored balls in order faster than your opponent.', href: 'https://github.com/jalomas7/sort-racer', action: 'View the source', tags: 'WebSockets · Docker · Express' },
];

const featuredProjects = projects.map(project => project.name === 'Gradient Generator'
  ? { ...project, category: 'Under construction', name: 'Pantheon Labs', description: 'Currently in progress.', href: 'https://pantheonlab.dev/', action: 'Visit Pantheon Labs', tags: '' }
  : project);

export const Projects: React.FC<{ detailed?: boolean; featured?: boolean }> = ({ detailed = false, featured = false }) => (
  <div className="project-grid">
    {(featured ? featuredProjects : projects).map((project, index) => (
      <article className="project" key={project.name}>
        <p className="eyebrow">0{index + 1} / {project.category}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <a className="text-link" href={project.href} target="_blank" rel="noopener noreferrer">{project.action}<span aria-hidden="true"> ↗</span><span className="sr-only"> (opens in a new tab)</span></a>
        {project.tags && <p className="project-tags">{project.tags}</p>}
        {detailed && project.note && <p className="project-note">{project.note}</p>}
      </article>
    ))}
  </div>
);
