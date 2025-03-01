import React from 'react';
import styles from './Triangle.module.css';

export const TriangleGradient: React.FC = () => {
  return <div aria-hidden="true" className={styles.triangleRainbow} data-hero-gradient="true" />;
};

export const TriangleSvg: React.FC = () => {
  return (
    <svg 
      aria-label="Vercel's logo, a triangle, sits in the center of a grid, surrounded by rays of light which are the colors of the rainbow."
      className={styles.triangleSvg}
      fill="none"
      role="img"
      viewBox="0 0 1200 700"
    >
      <polygon 
        fill="var(--geist-background)" 
        points="485,650.3952809568069 715,650.3952809568069 600,451.20943808638606"
      />
      {/* Generate triangle rays with decreasing opacity */}
      {Array.from({ length: 50 }).map((_, i) => {
        const opacity = 1 - (i * 0.02);
        const y1 = 451.20943808638606 + (i * 3);
        return (
          <React.Fragment key={i}>
            <line 
              opacity={opacity} 
              stroke="var(--geist-foreground)" 
              x1="600" 
              x2="715" 
              y1={y1} 
              y2="650.3952809568069"
            />
            <line 
              opacity={opacity} 
              stroke="var(--geist-foreground)" 
              x1="600" 
              x2="485" 
              y1={y1} 
              y2="650.3952809568069"
            />
          </React.Fragment>
        );
      })}
    </svg>
  );
};
