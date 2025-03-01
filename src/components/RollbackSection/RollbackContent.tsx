import React from 'react';
import styles from './RollbackSection.module.css';
import { Gauge } from '@/components/Gauge/Gauge';
import { RotateIcon } from '@/components/icons';

const RollbackContent: React.FC = () => {
  return (
    <div className={styles.rollbackDeploymentCard}>
      <div className={styles.rollbackDeploymentInfo}>
        <div className={styles.rollbackDeploymentHeader}>
          <span className={styles.rollbackDeploymentId}>
            vercel-site/
            <strong>abc123</strong>
          </span>
          <span className={styles.rollbackTimeAgo}>2h ago</span>
        </div>
        
        <div className={styles.rollbackCommitInfo}>
          <svg 
            data-testid="geist-icon" 
            height="16" 
            width="16" 
            viewBox="0 0 16 16"
            className={styles.rollbackCommitIcon}
          >
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5ZM8 12C9.95279 12 11.5787 10.6006 11.9298 8.75H15.25H16V7.25H15.25H11.9298C11.5787 5.39935 9.95279 4 8 4C6.04721 4 4.42125 5.39935 4.0702 7.25H0.75H0V8.75H0.75H4.0702C4.42125 10.6006 6.04721 12 8 12Z" 
              fill="currentColor"
            />
          </svg>
          <span className={styles.rollbackCommitHash}>f8d3e9a</span>
          <span className={styles.rollbackCommitMessage} data-variant="short">
            Fix layout issue
          </span>
          <span className={styles.rollbackCommitMessage} data-variant="long">
            Fix layout issue in mobile navigation
          </span>
        </div>
      </div>

      <div className={styles.rollbackGaugeWrapper}>
        <Gauge 
          value={95} 
          color="var(--ds-green-700)" 
          size={32} 
        />
      </div>
    </div>
  );
};

export default RollbackContent;
