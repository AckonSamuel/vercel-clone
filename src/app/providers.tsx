'use client';

import React, { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Initialize theme based on localStorage or system preference
    const applyTheme = () => {
      const root = document.documentElement;
      const savedTheme = localStorage.getItem('theme');
      
      if (savedTheme === 'dark') {
        root.classList.add('dark-theme');
        root.style.colorScheme = 'dark';
      } else if (savedTheme === 'light') {
        root.classList.add('light-theme');
        root.style.colorScheme = 'light';
      } else {
        // System preference
        const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.style.colorScheme = isDarkMode ? 'dark' : 'light';
      }
    };

    applyTheme();

    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (!localStorage.getItem('theme')) {
        applyTheme();
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return <>{children}</>;
}
