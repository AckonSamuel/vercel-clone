import React from 'react';
import styles from '@/styles/Grid.module.css';
import GridGuidesDashed from './GridGuidesDashed';
import GridCross from './GridCross';

interface GridSystemProps {
  children: React.ReactNode;
  smRows?: number;
  lgRows?: number;
  smColumns?: number;
  lgColumns?: number;
  showGuides?: boolean;
  className?: string;
}

const GridSystem: React.FC<GridSystemProps> = ({
  children,
  smRows = 2,
  lgRows = 1,
  smColumns = 2,
  lgColumns = 3,
  showGuides = true,
  className = ''
}) => {
  return (
    <section 
      className={`${styles.grid} ${className}`}
      data-grid=""
      style={{
        '--sm-grid-rows': smRows,
        '--lg-grid-rows': lgRows,
        '--sm-grid-columns': smColumns,
        '--lg-grid-columns': lgColumns,
        '--sm-height': 'fit-content'
      } as React.CSSProperties}
    >
      {children}
      
      <GridCross row={1} column={1} />
      <GridCross 
        row={smRows + 1} 
        column={-1}
        className={styles.bottomCross}
      />

      {showGuides && (
        <>
          <GridGuidesDashed rows={smRows} columns={smColumns} variant="xs" />
          <GridGuidesDashed rows={smRows} columns={smColumns} variant="sm" />
          <GridGuidesDashed rows={smRows} columns={smColumns} variant="md" />
          <GridGuidesDashed rows={lgRows} columns={lgColumns} variant="lg" />
        </>
      )}
    </section>
  );
};

export default GridSystem;
