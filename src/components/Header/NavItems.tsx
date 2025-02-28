import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';
import ProductsDropdown from './dropdowns/ProductsDropdown';
import SolutionsDropdown from './dropdowns/SolutionsDropdown';
import ResourcesDropdown from './dropdowns/ResourcesDropdown';

const NavItems: React.FC = () => {
  return (
    <div className={styles.navGroup}>
      {/* Products Dropdown */}
      <ProductsDropdown />

      {/* Solutions Dropdown */}
      <SolutionsDropdown />

      {/* Resources Dropdown */}
      <ResourcesDropdown />

      {/* Standard Links */}
      <Link href="/enterprise" className={styles.navLink}>Enterprise</Link>
      <Link href="/pricing" className={styles.navLink}>Pricing</Link>
    </div>
  );
};

export default NavItems;
