import React, { useState, useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import Logo from './Logo';
import MainNav from './MainNav';
import AuthButtons from './AuthButtons';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect for transparent until scroll header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`${styles.wrapper} ${styles.sticky} ${styles.canGrow} ${styles.transparentUntilScroll} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        {/* Logo Component */}
        <Logo />

        {/* Main Navigation Component */}
        <MainNav />

        {/* Auth Actions Component */}
        <AuthButtons toggleMobileMenu={toggleMobileMenu} />

        {/* Mobile Menu Component - Only render when open */}
        {mobileMenuOpen && (
          <MobileMenu onClose={toggleMobileMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;
