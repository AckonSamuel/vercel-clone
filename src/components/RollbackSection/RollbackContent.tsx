import React from 'react';
import styles from './RollbackSection.module.css';
import { Gauge } from '@/components/Gauge/Gauge';
import { RotateIcon } from '@/components/icons';
import { DeploymentCard } from './DeploymentCard';

export const RollbackContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <div className={styles.iconWrapper}>
            <RotateIcon />
          </div>
          <h2 className={styles.label}>Instant Rollbacks</h2>
        </div>
      </div>

      <div className={styles.titleSection}>
        <div className={styles.title}>
          <strong>Go ahead, deploy on Friday. </strong>
          <p className={styles.description}>Instantly rollback to a working deployment.</p>
        </div>
      </div>

      <div className={styles.deploymentsSection} role="img" aria-label="Two Git deployment cards are connected with a line, starting from the Deployment that regressed on performance metrics, and was rolled back as a result.">
        <DeploymentCard 
          deploymentId="jvjb4ynna"
          timeAgo="1d ago"
          commitHash="ba5f55f"
          commitMessageShort="Update bento"
          commitMessageLong="Update bento box design"
          gaugeValue={90}
          gaugeColor="var(--ds-teal-600)"
        />
        {/* Connecting line with exact SVG from original */}
        <div aria-hidden="true">
          <svg  fill="none" height="152" viewBox="0 0 117 152" width="117">
            <path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint0_linear_1364_100888)" strokeWidth="2"></path>
            <path d="M3.99999 4L3.99999 60C3.99999 66.6274 9.37258 72 16 72L104 72C110.627 72 116 77.3726 116 84L116 152" stroke="url(#paint1_linear_1364_100888)" strokeWidth="2"></path>
            <g clipPath="url(#clip0_1364_100888)">
              <path clipRule="evenodd" d="M4 0.5L8 7.5H0L4 0.5Z" fill="#45DEC4" fillRule="evenodd"></path>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1364_100888" x1="116" x2="4" y1="72" y2="72">
                <stop stopColor="#E5484D"></stop>
                <stop offset="0.5" stopColor="#FFC634"></stop>
                <stop offset="1" stopColor="#45DEC4"></stop>
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1364_100888" x1="116" x2="116" y1="152" y2="1.56712e-05">
                <stop stopColor="var(--ds-background-200)"></stop>
                <stop offset="0.322368" stopColor="var(--ds-background-200)" stopOpacity="0"></stop>
              </linearGradient>
              <clipPath id="clip0_1364_100888">
                <rect fill="white" height="8" width="8"></rect>
              </clipPath>
            </defs>
          </svg>
          
          <div className={`${styles.stack} ${styles.rewindIconContainer}`} data-version="v1" style={{'--stack-flex': 'initial', '--stack-direction': 'column', '--stack-align': 'center', '--stack-justify': 'center', '--stack-padding': '0px', '--stack-gap': '0px'} as React.CSSProperties}>
            <RotateIcon />
          </div>
        </div>

        {/* Second deployment card */}
        <DeploymentCard 
          deploymentId="gigj178pv"
          timeAgo="10m ago"
          commitHash="bx012mm"
          commitMessageShort="Fix ESLint error"
          commitMessageLong="Fix ESLint error on query"
          gaugeValue={55}
          gaugeColor="var(--ds-red-700)"
        />
      </div>
    </div>
  );
};

export default RollbackContent;
