'use client';

import React, { useEffect, useState } from 'react';
import styles from './ThemeSwitcher.module.css';

type Theme = 'system' | 'dark' | 'light';

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);

  // Initialize theme state from localStorage when component mounts
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    
    if (theme === 'system') {
      localStorage.removeItem('theme');
      root.classList.remove('dark-theme', 'light-theme');
      
      // Apply theme based on system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        root.style.colorScheme = 'dark';
      } else {
        root.style.colorScheme = 'light';
      }
    } else {
      localStorage.setItem('theme', theme);
      root.style.colorScheme = theme;
      
      if (theme === 'dark') {
        root.classList.remove('light-theme');
        root.classList.add('dark-theme');
      } else {
        root.classList.remove('dark-theme');
        root.classList.add('light-theme');
      }
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div className={styles.switcher}>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
        className={styles.select}
        aria-label="Theme selector"
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
