import React from 'react';
const groups = [
  { title: 'Expert', items: ['TypeScript, JavaScript, Node.js', 'HTML and CSS', 'React with Context API', 'Git', 'Responsive design', 'REST APIs', 'Front-end development', 'AI-Assisted Development', 'Creative problem solving', 'Unit testing with Jest', 'Agile methodology'] },
  { title: 'Proficient', items: ['Back-end development', 'Serverless', 'AWS services', 'Infrastructure development', 'Relational databases', 'NoSQL databases', 'Analytics services', 'End-to-end testing', 'Styled components', 'Single-page application design'] },
  { title: 'Familiar', items: ['Mobile development with React Native', 'Authentication and authorization', 'CI/CD', 'Docker', 'Webpack'] },
  { title: 'Working with people', items: ['People management', 'Code review', 'Documentation', 'Conflict resolution', 'Continuous learning', 'Communication', 'Mentoring'] },
  { title: 'Currently Learning', items: ['C# .NET services', 'AI Product Integration'] },
];
export const Skills: React.FC = () => (
  <>
    <section className="page-intro"><p className="eyebrow">Tools + practice</p><h1>Across the stack.<br />Alongside a team.</h1><p>The technologies and skills I bring to building products, solving problems, and helping engineers grow.</p></section>
    <div className="skills-grid">{groups.map((group, index) => <section className="skill-group" key={group.title}><p className="eyebrow">0{index + 1} / Capabilities</p><h2>{group.title}</h2><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></section>)}</div>
  </>
);
