import React from 'react';
import styles from './Gauge.module.css';

interface GaugeProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  bgColor?: string;
  className?: string;
}

export const Gauge: React.FC<GaugeProps> = ({
  value,
  size = 32,
  strokeWidth = 10,
  color = 'var(--ds-teal-600)',
  bgColor = 'var(--ds-gray-alpha-400)',
  className
}) => {
  const radius = 45; // Fixed radius as per original
  const circumference = 2 * Math.PI * radius;
  const percentToPx = circumference / 100;
  
  return (
    <div 
      className={`${styles.circle} ${styles.animate} ${className || ''}`}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      data-geist-progress-circle=""
      data-version="v1"
      style={{
        '--circle-size': '100px',
        '--circumference': circumference,
        '--percent-to-px': percentToPx,
        '--gap-percent': 6,
        '--offset-factor': 0
      } as React.CSSProperties}
    >
      <svg 
        width={32} 
        height={32} 
        viewBox="0 0 100 100" 
        fill="none"
        aria-hidden="true"
        strokeWidth={2}
      >
        <circle
          cx={50}
          cy={50}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={bgColor}
          className={styles.arcSecondary}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0, '--stroke-percent': '-2' } as React.CSSProperties}
        />
        <circle
          cx={50}
          cy={50}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          className={styles.arc}
          strokeLinecap="round"
          strokeLinejoin="round"
          data-geist-progress-circle-fg=""
          style={{ opacity: 1, '--stroke-percent': value.toString() } as React.CSSProperties}
        />
      </svg>
      <div className={styles.content} aria-hidden="true">
        <p 
          className={styles.value}
          data-version="v1"
          style={{
            '--text-color': 'inherit',
            '--text-size': '0.6875rem',
            '--text-weight': '500'
          } as React.CSSProperties}
        >
          {value}
        </p>
      </div>
    </div>
  );
};
