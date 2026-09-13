import React from 'react';

// Use a drawn icon so mobile platforms cannot substitute an emoji glyph.
export const ArrowUpRight: React.FC = () => (
  <svg className="arrow-up-right" width="1em" height="1em" viewBox="0 0 16 16"
    fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d="M4 12 12 4M4 4h8v8" />
  </svg>
);
