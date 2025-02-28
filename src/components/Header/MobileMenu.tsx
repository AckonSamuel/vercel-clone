import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { CloseIcon } from './icons/Icons';

interface MobileMenuProps {
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenuContainer}>
        <div className={styles.mobileMenuHeader}>
          <button className={styles.mobileMenuClose} onClick={onClose}>
            <CloseIcon />
          </button>
        </div>
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuSection}>
            <h3 className={styles.mobileMenuHeading}>Navigation</h3>
            <Link href="/products" className={styles.mobileMenuItem}>Products</Link>
            <Link href="/solutions" className={styles.mobileMenuItem}>Solutions</Link>
            <Link href="/resources" className={styles.mobileMenuItem}>Resources</Link>
            <Link href="/pricing" className={styles.mobileMenuItem}>Pricing</Link>
            <Link href="/enterprise" className={styles.mobileMenuItem}>Enterprise</Link>
            <Link href="/docs" className={styles.mobileMenuItem}>Docs</Link>
          </div>
          <div className={styles.mobileMenuDivider}></div>
          <div className={styles.mobileMenuSection}>
            <h3 className={styles.mobileMenuHeading}>Account</h3>
            <Link href="/login" className={styles.mobileMenuItem}>Log in</Link>
            <Link href="/signup" className={styles.mobileMenuSignup}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
