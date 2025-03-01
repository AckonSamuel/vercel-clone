import React from 'react';

export const BuildingIcon: React.FC = () => (
  <svg 
    height="16" 
    width="16" 
    viewBox="0 0 16 16" 
    stroke-linejoin="round"
    style={{ color: 'var(--ds-gray-1000)' }}
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M2.5 2.25C2.5 1.83579 2.83579 1.5 3.25 1.5H6.75C7.16421 1.5 7.5 1.83579 7.5 2.25V7.5V14.5H2.5V2.25ZM7.5 16H1.75H1V15.25V2.25C1 1.00736 2.00736 0 3.25 0H6.75C7.99264 0 9 1.00736 9 2.25V6.5H12.25C13.4926 6.5 14.5 7.50736 14.5 8.75V15.25V16H13.75H9H8.25H7.5ZM9 14.5H13V8.75C13 8.33579 12.6642 8 12.25 8H9V14.5Z"
      fill="currentColor"
    />
  </svg>
);
