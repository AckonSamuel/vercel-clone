import React from 'react';
import styles from '@/styles/Grid.module.css';

interface GridGuidesDashedProps {
  rows: number;
  columns: number;
  variant: 'xs' | 'sm' | 'md' | 'lg';
}

const GridGuidesDashed: React.FC<GridGuidesDashedProps> = ({
  rows,
  columns,
  variant
}) => {
  return (
    <div 
      className={styles.guides}
      data-grid-guides="true"
      aria-hidden="true"
    >
      {Array.from({ length: rows * columns }, (_, i) => {
        const x = (i % columns) + 1;
        const y = Math.floor(i / columns) + 1;
        
        return (
          <div
            key={`${variant}-${x}-${y}`}
            className={`${styles.guide} ${styles.dashedGuide} ${styles[`${variant}Guide`]}`}
            style={{
              '--x': x,
              '--y': y,
              borderRight: x === columns ? 'none' : undefined,
              borderBottom: y === rows ? 'none' : undefined
            } as React.CSSProperties}
            aria-hidden="true"
          />
        );
      })}
    </div>
  );
};

export default GridGuidesDashed;
