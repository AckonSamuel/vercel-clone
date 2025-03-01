import React from 'react';

interface GridCellProps {
  children: React.ReactNode;
  rowStart?: number;
  rowSpan?: number;
  colStart?: number;
  colSpan?: number;
  className?: string;
}

const GridCell: React.FC<GridCellProps> = ({
  children,
  rowStart,
  rowSpan = 1,
  colStart,
  colSpan = 1,
  className = ''
}) => {
  return (
    <div
      className={className}
      style={{
        gridRow: `${rowStart || 'auto'} / span ${rowSpan}`,
        gridColumn: `${colStart || 'auto'} / span ${colSpan}`,
      }}
    >
      {children}
    </div>
  );
};

export default GridCell;
