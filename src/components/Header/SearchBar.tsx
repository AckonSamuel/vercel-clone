import React from 'react';
import styles from '@/styles/Header.module.css';
import { SearchIcon } from './icons/Icons';

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <button className={styles.searchButton}>
        <SearchIcon />
        <span className={styles.searchText}>Search...</span>
        <div className={styles.searchShortcut}>⌘K</div>
      </button>
    </div>
  );
};

export default SearchBar;
