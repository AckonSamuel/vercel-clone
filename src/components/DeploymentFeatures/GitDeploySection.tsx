import React from 'react';
import TerminalVisual from './visuals/TerminalVisual';
import { TerminalIcon } from '../icons/TerminalIcon';
import styles from './GitDeploySection.module.css';

const GitDeploySection: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.iconWrapper}>
              <TerminalIcon />
            </div>
            <h2 className={styles.title}>Git-connected Deploys</h2>
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.titleContent}>
            <strong>From localhost to https, in seconds.</strong>
            <p className={styles.description}>Deploy from Git or your CLI.</p>
          </div>
        </div>
      </div>
      
      <TerminalVisual />
    </>
  );
};

export default GitDeploySection;
