import React from 'react';

export const AnalyticsIcon: React.FC = () => {
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
        d="M14.5 13h-13c-.3 0-.5.2-.5.5s.2.5.5.5h13c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zM2 10.5h3c.3 0 .5-.2.5-.5V4c0-.3-.2-.5-.5-.5H2c-.3 0-.5.2-.5.5v6c0 .3.2.5.5.5zm.5-6h2v5h-2v-5zM6.5 10.5h3c.3 0 .5-.2.5-.5V2c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5v8c0 .3.2.5.5.5zm.5-8h2v7h-2v-7zM11 10.5h3c.3 0 .5-.2.5-.5V6c0-.3-.2-.5-.5-.5h-3c-.3 0-.5.2-.5.5v4c0 .3.2.5.5.5zm.5-4h2v3h-2v-3z" 
        fill="currentColor"
      />
    </svg>
  );
};
