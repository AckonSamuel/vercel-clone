import React from 'react';
import styles from '@/styles/Grid.module.css';

interface GridCrossProps {
  row: number;
  column: number;
  size?: number;
  className?: string;
}

const GridCross: React.FC<GridCrossProps> = ({
  row,
  column,
  size = 16,
  className = ''
}) => {
  return (
    <div 
      className={`${styles.cross} ${className}`}
      data-grid-cross=""
      style={{
        '--cross-row': row,
        '--cross-column': column,
        transform: column === -1 ? 'translateY(1px)' : undefined
      } as React.CSSProperties}
    >
      <div 
        className={styles.crossLine}
        style={{
          width: `var(--cross-half-size, ${size/2}px)`,
          height: `var(--cross-size, ${size}px)`,
          borderRightWidth: 'var(--guide-width, 1px)'
        }}
      />
      <div 
        className={styles.crossLine}
        style={{
          width: `var(--cross-size, ${size}px)`,
          height: `var(--cross-half-size, ${size/2}px)`,
          borderBottomWidth: 'var(--guide-width, 1px)'
        }}
      />
    </div>
  );
};

export default GridCross;
