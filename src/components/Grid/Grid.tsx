import React from 'react';
import styles from '@/styles/Grid.module.css';

interface GridProps {
  children: React.ReactNode;
  gridRows?: number;
  gridColumns?: number;
  height?: string;
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  gridRows = 1,
  gridColumns = 1,
  height,
  className = ''
}) => {
  return (
    <div 
      className={`${styles.wrapper} ${className}`}
      style={{
        '--grid-rows': gridRows,
        '--grid-columns': gridColumns,
        '--sm-height': height
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default Grid;
