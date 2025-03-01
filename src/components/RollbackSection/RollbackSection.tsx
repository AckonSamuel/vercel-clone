import React from 'react';
import { GridSystem, GridBlock } from '@/components/Grid';
import styles from './RollbackSection.module.css';
import { Gauge } from '@/components/Gauge/Gauge';
import { RotateIcon } from '@/components/icons';
import { DeploymentCard } from './DeploymentCard';

export const RollbackSection: React.FC = () => {
  return (
    <div className=''><div className={styles.rollbackHeader}>
      <div className={styles.rollbackHeaderLeft}>
        <span className={styles.rollbackIconWrapper}>
          <RotateIcon />
        </span>
        <span className={styles.rollbackLabel}>Instant Rollbacks</span>
      </div>
    </div><div className={styles.rollbackTitleSection}>
    <p><strong>Go ahead and deploy on Friday.</strong>
        Instantly rollback to a working deployment</p>
      </div><div className={styles.rollbackDeploymentsSection}>
        <div className={styles.rollbackDeployments}>
          {/* First deployment (current) */}
          <div className={styles.rollbackDeployment}>
            <DeploymentCard
              deploymentId="fg742d1"
              timeAgo="2h ago"
              commitHash="f8d3e9a"
              commitMessageShort="Fix bento box design"
              commitMessageLong="Fix bento box design"
              gaugeValue={95}
              gaugeColor="var(--ds-green-700)" />
          </div>

          {/* Connecting line with SVG paths */}
          <div className={styles.rollbackConnectingLine} aria-hidden="true">
            <svg 
              data-size="large" 
              fill="none" 
              height="152" 
              viewBox="0 0 117 152" 
              width="117"
              className={styles.rollbackSvgLarge}
            >
              <path 
                d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" 
                stroke="url(#paint0_linear_large)" 
                strokeWidth="2"
              />
              <path 
                d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" 
                stroke="url(#paint1_linear_large)" 
                strokeWidth="2"
              />
              <g clipPath="url(#clip0_large)">
                <path 
                  clipRule="evenodd" 
                  d="M4 0.5L8 7.5H0L4 0.5Z" 
                  fill="#45DEC4" 
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <linearGradient 
                  gradientUnits="userSpaceOnUse" 
                  id="paint0_linear_large" 
                  x1="116" 
                  x2="4" 
                  y1="72" 
                  y2="72"
                >
                  <stop stopColor="#E5484D" />
                  <stop offset="0.5" stopColor="#FFC634" />
                  <stop offset="1" stopColor="#45DEC4" />
                </linearGradient>
                <linearGradient 
                  gradientUnits="userSpaceOnUse" 
                  id="paint1_linear_large" 
                  x1="116" 
                  x2="116" 
                  y1="152" 
                  y2="1.56712e-05"
                >
                  <stop stopColor="var(--ds-background-200)" />
                  <stop offset="0.322368" stopColor="var(--ds-background-200)" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_large">
                  <rect fill="white" height="8" width="8" />
                </clipPath>
              </defs>
            </svg>
            
            <svg 
              data-size="small" 
              fill="none" 
              height="88" 
              viewBox="0 0 129 88" 
              width="129"
              className={styles.rollbackSvgSmall}
            >
              <path 
                d="M3.99999 4.00001L3.99999 28.4324C3.99999 35.0598 9.37258 40.4324 16 40.4324L116 40.4324C122.627 40.4324 128 45.805 128 52.4324L128 88" 
                stroke="url(#paint0_linear_small)" 
                strokeWidth="2"
              />
              <path 
                d="M3.99999 4.00001L3.99999 28.4324C3.99999 35.0598 9.37258 40.4324 16 40.4324L116 40.4324C122.627 40.4324 128 45.805 128 52.4324L128 88" 
                stroke="url(#paint1_linear_small)" 
                strokeWidth="2"
              />
              <g clipPath="url(#clip0_small)">
                <path 
                  clipRule="evenodd" 
                  d="M4 0.5L8 7.5H0L4 0.5Z" 
                  fill="#45DEC4" 
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <linearGradient 
                  gradientUnits="userSpaceOnUse" 
                  id="paint0_linear_small" 
                  x1="98" 
                  x2="34" 
                  y1="40.4324" 
                  y2="40.4324"
                >
                  <stop stopColor="#E5484D" />
                  <stop offset="0.5" stopColor="#FFC634" />
                  <stop offset="1" stopColor="#45DEC4" />
                </linearGradient>
                <linearGradient 
                  gradientUnits="userSpaceOnUse" 
                  id="paint1_linear_small" 
                  x1="98" 
                  x2="98" 
                  y1="88" 
                  y2="-2.37837"
                >
                  <stop stopColor="var(--ds-background-200)" />
                  <stop offset="0.322368" stopColor="var(--ds-background-200)" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_small">
                  <rect fill="white" height="8" width="8" />
                </clipPath>
              </defs>
            </svg>
            
            <div className={styles.rollbackRewind}>
              <svg 
                data-testid="geist-icon" 
                height="16" 
                width="16" 
                viewBox="0 0 16 16"
                strokeLinejoin="round"
                className={styles.rollbackRewindIcon}
              >
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M7.96452 2.5C11.0257 2.5 13.5 4.96643 13.5 8C13.5 11.0336 11.0257 13.5 7.96452 13.5C6.12055 13.5 4.48831 12.6051 3.48161 11.2273L3.03915 10.6217L1.828 11.5066L2.27046 12.1122C3.54872 13.8617 5.62368 15 7.96452 15C11.8461 15 15 11.87 15 8C15 4.13001 11.8461 1 7.96452 1C5.06835 1 2.57851 2.74164 1.5 5.23347V3.75V3H0V3.75V7.25C0 7.66421 0.335786 8 0.75 8H3.75H4.5V6.5H3.75H2.63724C3.29365 4.19393 5.42843 2.5 7.96452 2.5ZM8.75 5.25V4.5H7.25V5.25V7.8662C7.25 8.20056 7.4171 8.51279 7.6953 8.69825L9.08397 9.62404L9.70801 10.0401L10.5401 8.79199L9.91603 8.37596L8.75 7.59861V5.25Z" 
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          {/* Second deployment (previous) */}
          <div className={styles.rollbackDeployment}>
            <DeploymentCard
              deploymentId="c54f21e"
              timeAgo="1d ago"
              commitHash="3d7e8b1"
              commitMessageShort="Fix ESLint error on query"
              commitMessageLong="Fix ESLint error on query"
              gaugeValue={55}
              gaugeColor="var(--ds-red-700)"
              variant="secondary" />
          </div>
        </div>
      </div></div>
  );
};

export default RollbackSection;
