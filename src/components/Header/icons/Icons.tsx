import React from 'react';
import styles from '@/styles/Header.module.css';

interface IconProps {
  className?: string;
}

export const DropdownArrow: React.FC = () => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    className={styles.dropdownArrow}
  >
    <path 
      d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z" 
      fill="currentColor"
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none" 
    className={className || styles.searchIcon}
  >
    <path 
      d="M10.5 9.5L13.5 12.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none"
    className={className}
  >
    <path 
      d="M2 4.5H14" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M2 11.5H14" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none"
    className={className}
  >
    <path 
      d="M18 6L6 18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M6 6L18 18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronRightIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    width="16" 
    height="16" 
    viewBox="0 0 16 16" 
    fill="none"
    className={className}
  >
    <path 
      d="M6.5 3.5L11 8L6.5 12.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

export const AnalyticsIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none"
    className={className}
  >
    <path 
      d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
    />
  </svg>
);

export const EdgeFunctionIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none"
    className={className}
  >
    <path 
      d="M3 6L12 2L21 6V18L12 22L3 18V6Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
    />
  </svg>
);
