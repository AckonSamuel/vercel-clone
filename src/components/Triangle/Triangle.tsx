import React from 'react';
import styles from './Triangle.module.css';

export const TriangleGradient: React.FC = () => (
  <div 
    aria-hidden="true" 
    className={styles.rainbow} 
    data-hero-gradient="true"
  />
);

export const TriangleSvg: React.FC = () => (
  <svg 
    aria-label="Vercel's logo, a triangle, sits in the center of a grid, surrounded by rays of light which are the colors of the rainbow."
    className={styles.triangle} 
    fill="none" 
    role="img" 
    viewBox="0 0 1200 700"
  >
    {/* Main triangle */}
    <polygon 
      fill="var(--geist-background)" 
      points="485,650.3952809568069 715,650.3952809568069 600,451.20943808638606"
    />
    
    {/* Light rays - Main lines */}
    <line 
      opacity="1" 
      stroke="var(--geist-foreground)" 
      x1="600" x2="715" 
      y1="451.20943808638606" y2="650.3952809568069"
    />
    <line 
      opacity="1" 
      stroke="var(--geist-foreground)" 
      x1="600" x2="485" 
      y1="451.20943808638606" y2="650.3952809568069"
    />
    
    {/* Generate light rays with decreasing opacity */}
    {Array.from({length: 35}).map((_, i) => {
      const opacity = 1 - (i * 0.028571);
      const yOffset = i * 4.297233;
      return (
        <React.Fragment key={i}>
          <line
            opacity={opacity}
            stroke="var(--geist-foreground)"
            x1="600"
            x2="715"
            y1={451.20943808638606 + yOffset}
            y2="650.3952809568069"
          />
          <line
            opacity={opacity}
            stroke="var(--geist-foreground)"
            x1="600"
            x2="485"
            y1={451.20943808638606 + yOffset}
            y2="650.3952809568069"
          />
        </React.Fragment>
      );
    })}
  </svg>
);
