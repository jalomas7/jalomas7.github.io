import { ArrowUpRight } from './lib/ArrowUpRight';
import React, { useEffect, useRef } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Skills } from './pages/Skills';
import { Portfolio } from './pages/Portfolio';
import { Navbar } from './lib/Navbar';

const titles: Record<string, string> = { '/': 'Software engineer & technical leader', '/about': 'About', '/skills': 'Skills', '/portfolio': 'Work', '/contact': 'Contact' };

function App() {
  const { pathname } = useLocation();
  const main = useRef<HTMLElement>(null);
  const previousPath = useRef(pathname);
  useEffect(() => {
    document.title = `${titles[pathname] || 'Page not found'} — Jacob Massengill`;
    if (previousPath.current !== pathname) {
      window.scrollTo(0, 0);
      main.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" ref={main} tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<section className="page-intro"><p className="eyebrow">404 / Page not found</p><h1>Let's get you back.</h1><Link className="button" to="/">Back to the homepage</Link></section>} />
        </Routes>
      </main>
      <footer className="site-footer">
        <Link className="footer-name" to="/">Jacob Massengill</Link>
        <p>Thoughtful code. Useful things.</p>
        <nav aria-label="Footer navigation"><Link to="/skills">Skills</Link><Link to="/contact">Let's talk <ArrowUpRight /></Link></nav>
      </footer>
    </div>
  );
}
export default App;
