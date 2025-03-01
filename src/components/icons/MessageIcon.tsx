import React from 'react';

export const MessageIcon: React.FC = () => {
  return (
    <svg
      height="16" 
      width="16" 
      aria-hidden="true"
      style={{
        shapeRendering: 'unset',
        color: 'var(--ds-gray-900)',
        transform: 'translateZ(0)'
      }}
    >
      <path
        d="M3 3.75C3 3.33579 3.33579 3 3.75 3H12.25C12.6642 3 13 3.33579 13 3.75V10.25C13 10.6642 12.6642 11 12.25 11H9.5V13.5L7 11H3.75C3.33579 11 3 10.6642 3 10.25V3.75ZM3.75 2C2.7835 2 2 2.7835 2 3.75V10.25C2 11.2165 2.7835 12 3.75 12H6.5L9.5 15V12H12.25C13.2165 12 14 11.2165 14 10.25V3.75C14 2.7835 13.2165 2 12.25 2H3.75Z"
        fill="currentColor"
      />
    </svg>
  );
};
