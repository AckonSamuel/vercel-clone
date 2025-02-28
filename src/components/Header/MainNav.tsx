import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import { DropdownArrow } from './icons/Icons';
import { ProductsDropdown, ResourcesDropdown, SolutionsDropdown } from './dropdowns';

const MainNav: React.FC = () => {
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navGroup}>
        {/* Products Dropdown */}
        <div className={styles.dropdownContainer}>
          <button className={styles.navDropdown}>
            Products
            <DropdownArrow />
          </button>
          <ProductsDropdown />
        </div>

        {/* Solutions Dropdown */}
        <div className={styles.dropdownContainer}>
          <button className={styles.navDropdown}>
            Solutions
            <DropdownArrow />
          </button>
          <SolutionsDropdown />
        </div>

        {/* Resources Dropdown */}
        <div className={styles.dropdownContainer}>
          <button className={styles.navDropdown}>
            Resources
            <DropdownArrow />
          </button>
          <ResourcesDropdown />
        </div>
      </div>

      <div className={styles.navGroup}>

        <Link href="/enterprise" className={styles.navLink}>
          Enterprise
        </Link>

        <Link href="/docs" className={styles.navLink}>
          Docs
        </Link>

        <Link href="/pricing" className={styles.navLink}>
          Pricing
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
