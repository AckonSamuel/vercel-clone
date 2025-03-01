import React from 'react';
import styles from '@/styles/Grid.module.css';

interface GridBlockProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const GridBlock: React.FC<GridBlockProps> = ({
  children,
  className = '',
  style = {}
}) => {
  return (
    <div 
      className={`${styles.block} ${className}`}
      style={style}
      data-grid-cell=""
    >
      {children}
    </div>
  );
};

export default GridBlock;
