import React from 'react';
import styles from '@/styles/Footer.module.css';

export const StatusIndicator: React.FC = () => {
  return (
    <a
      href="https://vercel-status.com"
      rel="noopener"
      target="_blank"
      data-no-border="true"
      data-testid="footer/status"
      data-zone="null"
      className={styles.statusIndicator}
    >
      <div className={styles.statusContent}>
        <span 
          className={styles.statusDot} 
          data-testid="footer/status/success" 
        />
        <p 
          className={styles.statusText}
          data-version="v1"
        >
          All systems normal
        </p>
      </div>
    </a>
  );
};
