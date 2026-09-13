import { ArrowUpRight } from '../lib/ArrowUpRight';
import React from 'react';
import { Link } from 'react-router';
import { Projects } from '../lib/Projects';

export const Home: React.FC = () => (
  <>
    <section className="hero" aria-labelledby="hero-title">
      <div><p className="eyebrow">Software engineer · Technical leader</p><h1 id="hero-title">Thoughtful code.<br /><span>Useful things.</span></h1></div>
      <div className="hero-intro"><p>I'm Jacob, a full-stack engineer who enjoys bringing design to life. I build web experiences with React, TypeScript, and Node.js.</p><div className="actions"><a className="button" href="#selected-work">Explore my work <span aria-hidden="true">↓</span></a><Link className="text-link" to="/about">My story <ArrowUpRight /></Link></div></div>
    </section>
    <ul className="expertise" aria-label="Areas of focus"><li>React + TypeScript</li><li>Full-stack development</li><li>Technical leadership</li><li>Mentorship</li></ul>
    <section className="work-section" id="selected-work" aria-labelledby="work-title"><div className="section-heading"><h2 id="work-title">Selected work</h2><span className="section-label">Products + open source / 01–04</span></div><Projects featured /></section>
    <section className="about-summary"><h2>Engineering is<br />a team sport.</h2><div><p>My path began with a family desktop in Henderson, Tennessee. It led to computer science at UT Knoxville, then to building products at Asurion—guiding engineers, mentoring an apprentice, and connecting thoughtful interfaces to the systems behind them.</p><Link className="text-link" to="/about">A little more about me <ArrowUpRight /></Link></div></section>
    <section className="contact-strip"><p>Have something in mind?</p><Link to="/contact">Let's build something useful <ArrowUpRight /></Link></section>
  </>
);
