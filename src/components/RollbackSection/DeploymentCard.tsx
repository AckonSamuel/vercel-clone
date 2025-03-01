import React from 'react';
import styles from './RollbackSection.module.css';
import { Gauge } from '@/components/Gauge/Gauge';

interface DeploymentCardProps {
  deploymentId: string;
  timeAgo: string;
  commitHash: string;
  commitMessageShort: string;
  commitMessageLong: string;
  gaugeValue: number;
  gaugeColor: string;
  variant?: 'primary' | 'secondary';
}

export const DeploymentCard: React.FC<DeploymentCardProps> = ({
  deploymentId,
  timeAgo,
  commitHash,
  commitMessageShort,
  commitMessageLong,
  gaugeValue,
  gaugeColor,
  variant = 'primary'
}) => {
  return (
    <div 
      className={`${styles.rollbackDeploymentCard}`} 
      data-version="v1" 
      data-variant={variant}
    >
      {/* Left Column */}
      <div className={styles.rollbackDeploymentInfo}>
        {/* Top Row */}
        <div className={styles.rollbackDeploymentHeader}>
          <span className={styles.rollbackDeploymentId}>
            vercel-site/
            <strong>{deploymentId}</strong>
          </span>
          <span className={styles.rollbackTimeAgo}>{timeAgo}</span>
        </div>
        
        {/* Bottom Row */}
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
          <span className={styles.rollbackCommitHash}>{commitHash}</span>
          <span className={styles.rollbackCommitMessage} data-variant="short">
            {commitMessageShort}
          </span>
          <span className={styles.rollbackCommitMessage} data-variant="long">
            {commitMessageLong}
          </span>
        </div>
      </div>

      {/* Right Column */}
      <div className={styles.rollbackGaugeWrapper}>
        <Gauge 
          value={gaugeValue} 
          color={gaugeColor} 
          size={32} 
        />
      </div>
    </div>
  );
};

export default DeploymentCard;