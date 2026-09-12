import React from 'react';
import { Link } from 'react-router';
import portrait from '../img/Jacob_1.jpeg';

export const About: React.FC = () => (
  <>
    <section className="page-intro"><p className="eyebrow">The person behind the work</p><h1>Curiosity brought me here.</h1><p>I'm Jacob—a full-stack engineer who enjoys the space where programming, art, and teamwork meet.</p></section>
    <div className="biography-layout">
      <figure className="portrait"><img src={portrait} alt="Jacob Massengill smiling in a navy suit" width="374" height="512" /><figcaption>Jacob Massengill / Software engineer</figcaption></figure>
      <div className="prose">
        <section><h2>From Henderson to Knoxville.</h2><p>I grew up in Henderson, a small town in West Tennessee. Video games and the family desktop sparked my interest in computers. With internet access mostly limited to school, I learned through self-taught trial and error.</p><p>That curiosity led me to a bachelor's degree in Computer Science at the University of Tennessee, Knoxville. I arrived without programming experience, learned C and C++ first, and then moved into Python and JavaScript.</p></section>
        <section><h2>Learning to build together.</h2><p>After graduating, I moved to the Nashville area and joined Asurion. There, I learned that software engineering means more than writing code: it means working with a team to create meaningful products.</p><p>I became especially familiar with React and TypeScript. My work included a survey application to replace an existing paid tool, a site to help customers optimize and replace phone batteries, and the customer device replacement experience.</p></section>
        <section><h2>Helping others grow.</h2><p>As a mentor in Asurion's Software Engineering Apprenticeship Program, I taught an apprentice who began without programming experience. Within twelve months, she was hired as a full-time software engineer.</p><p>I also served as technical leader for three years on a team building tools to replace customers' broken technology. I guided ten other engineers, represented the team in meetings and demonstrations, and helped shape the application's technical decisions.</p></section>
        <section><h2>What I’m working on now.</h2><p>I’m currently at CoStar, working to integrate AI into CoStar’s hospitality data analytics product.</p></section>
        <section><h2>Where design meets engineering.</h2><p>My experience spans front-end and back-end development with React, TypeScript, and Node.js. I particularly enjoy front-end work because it brings together my love of programming and art, and gives me the chance to collaborate with designers to bring their vision to life.</p><div className="actions"><Link className="button" to="/portfolio">Explore my work <span aria-hidden="true">↗</span></Link><Link className="text-link" to="/skills">My toolkit <span aria-hidden="true">↗</span></Link></div></section>
      </div>
    </div>
  </>
);
