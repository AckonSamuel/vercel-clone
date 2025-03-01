import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import ThemeToggle from '../ThemeToggle';
import { MenuIcon } from './icons/Icons';

interface AuthButtonsProps {
  toggleMobileMenu: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ toggleMobileMenu }) => {
  return (
    <div className={styles.authButtons}>
      <ThemeToggle className={styles.themeToggle} />
      <Link href="/login" className={styles.loginButton}>Log in</Link>
      <Link href="/login" className={styles.loginButton}>Contact</Link>
      <Link href="/signup" className={styles.signupButton}>Sign Up</Link>
      <button 
        className={styles.menuButton} 
        aria-label="Menu"
        onClick={toggleMobileMenu}
      >
        <MenuIcon />
      </button>
    </div>
  );
};

export default AuthButtons;
