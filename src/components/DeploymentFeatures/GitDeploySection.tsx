import React from 'react';
import styles from './DeploymentFeatures.module.css';
import TerminalVisual from './visuals/TerminalVisual';

const GitDeploySection: React.FC = () => {
  return (
    <div className={styles.section}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.label}>Git Integration</span>
        </div>
        <h2 className={styles.title}>
          <strong>Deploy every commit. Preview all branches.</strong>
        </h2>
        <p className={styles.description}>
          Automatically deploy previews for every git push. Get instant, 
          shareable URLs for review and feedback. All without touching a server.
        </p>
      </div>
      <div className={styles.visual}>
        <TerminalVisual />
      </div>
    </div>
  );
};

export default GitDeploySection;
