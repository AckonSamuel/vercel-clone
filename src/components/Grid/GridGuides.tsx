import React from 'react';
import styles from '@/styles/Grid.module.css';

interface GridGuidesProps {
  rows?: number;
  columns?: number;
  showGuides?: boolean;
  guideColor?: string;
  className?: string;
}

const GridGuides: React.FC<GridGuidesProps> = ({
  rows = 1,
  columns = 1,
  showGuides = true,
  guideColor = 'rgba(0,0,0,0.1)',
  className = ''
}) => {
  if (!showGuides) return null;

  return (
    <div 
      className={`${styles.guides} ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${guideColor} 1px, transparent 1px),
          linear-gradient(to bottom, ${guideColor} 1px, transparent 1px)
        `,
        backgroundSize: `${100 / columns}% ${100 / rows}%`
      }}
    />
  );
};

export default GridGuides;
