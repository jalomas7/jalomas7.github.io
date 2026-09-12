import React, { useEffect, useRef, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === 'dark');
  const manualChoice = useRef(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('theme');
      manualChoice.current = saved === 'light' || saved === 'dark';
    } catch (_) {}
    let preference: MediaQueryList;
    try { preference = window.matchMedia('(prefers-color-scheme: dark)'); } catch (_) { return; }
    const followSystem = () => {
      if (!manualChoice.current) setDark(preference.matches);
    };
    followSystem();
    if (preference.addEventListener) {
      preference.addEventListener('change', followSystem);
      return () => preference.removeEventListener('change', followSystem);
    }
    preference.addListener(followSystem);
    return () => preference.removeListener(followSystem);
  }, []);

  useEffect(() => {
    const theme = dark ? 'dark' : 'light';
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#111923' : '#f7f8fa');
  }, [dark]);

  const toggle = () => {
    manualChoice.current = true;
    setDark(!dark);
    try { window.localStorage.setItem('theme', dark ? 'light' : 'dark'); } catch (_) {}
  };

  return (
    <button className="theme-toggle" type="button" onClick={toggle}
      aria-label="Dark mode" aria-pressed={dark} title={`Switch to ${dark ? 'light' : 'dark'} mode`}>
      <svg className="theme-icon theme-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
      <svg className="theme-icon theme-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
      </svg>
    </button>
  );
};
