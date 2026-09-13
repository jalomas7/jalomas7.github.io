import { ArrowUpRight } from '../lib/ArrowUpRight';
import React from 'react';
import { Projects } from '../lib/Projects';

export const Portfolio: React.FC = () => (
  <>
    <section className="page-intro"><p className="eyebrow">Products · Open source · Experiments</p><h1>A few useful things.</h1><p>From customer experiences to small developer tools, here's a selection of things I've worked on.</p></section>
    <section className="work-section portfolio-work" aria-labelledby="projects-title"><div className="section-heading"><h2 id="projects-title">Project index</h2><span className="section-label">01–04</span></div><Projects detailed /></section>
    <section className="work-section portfolio-work" aria-labelledby="in-progress-title">
      <div className="section-heading"><h2 id="in-progress-title">Currently in progress</h2></div>
      <div className="project-grid">
        <article className="project">
          <p className="eyebrow">Under construction</p>
          <h3>Pantheon Labs</h3>
          <a className="text-link" href="https://pantheonlab.dev/" target="_blank" rel="noopener noreferrer">Visit Pantheon Labs <ArrowUpRight /><span className="sr-only"> (opens in a new tab)</span></a>
        </article>
      </div>
    </section>
  </>
);
