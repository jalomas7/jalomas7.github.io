import { ArrowUpRight } from '../lib/ArrowUpRight';
import React from 'react';

export const Contact: React.FC = () => (
  <>
    <section className="page-intro"><p className="eyebrow">Start a conversation</p><h1>Let's build something useful.</h1><p>Have a project in mind, a question, or just want to connect? I'd love to hear from you.</p></section>
    <div className="contact-layout"><div><h2>Say hello.</h2><p className="muted">Tell me a little about yourself and what you're thinking.</p></div>
      <form className="contact-form" action="https://formsubmit.co/3b669ebf25a4eb39db6ad01283edba11" method="POST">
        <div className="form-row"><label htmlFor="contact-name">Your name<input id="contact-name" name="name" type="text" autoComplete="name" required /></label><label htmlFor="contact-email">Email address<input id="contact-email" name="email" type="email" autoComplete="email" required /></label></div>
        <label htmlFor="contact-message">Your message<textarea id="contact-message" name="message" rows={7} required /></label>
        <div className="form-submit"><button className="button" type="submit">Send message <ArrowUpRight /></button><p>All fields are required.</p></div>
      </form>
    </div>
  </>
);
