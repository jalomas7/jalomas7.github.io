import { ArrowUpRight } from './ArrowUpRight';
import React from 'react';
import { Link, NavLink } from 'react-router';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => (
  <header className="site-header">
    <Link className="wordmark" to="/" aria-label="Jacob Massengill home">Jacob Massengill<span aria-hidden="true"> /</span></Link>
    <nav aria-label="Main navigation">
      <NavLink to="/portfolio">Work</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/contact">Contact <ArrowUpRight /></NavLink>
    </nav>
    <ThemeToggle />
  </header>
);
