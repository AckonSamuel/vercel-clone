import React from 'react';
import GitDeploySection from './GitDeploySection';
import CollabSection from './CollabSection';
import styles from './DeploymentFeatures.module.css';

const DeploymentFeatures: React.FC = () => {
  return (
    <section className={styles.gridContainer} data-grid="">
      <div className={styles.gridCell} data-grid-cell="">
        <div className={styles.cellContent}>
          <GitDeploySection />
        </div>
      </div>
      
      <div className={styles.gridCell} data-grid-cell="">
        <div className={styles.cellContent}>
          <CollabSection />
        </div>
      </div>
      
      {/* Grid Guides */}
      <div aria-hidden="true" className={styles.gridGuides} data-grid-guides="true">
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.xsGuide}`}></div>
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.xsGuide}`}></div>
      </div>
      
      <div aria-hidden="true" className={styles.gridGuides} data-grid-guides="true">
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.smGuide}`}></div>
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.smGuide}`}></div>
      </div>
      
      <div aria-hidden="true" className={styles.gridGuides} data-grid-guides="true">
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.smdGuide}`}></div>
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.smdGuide}`}></div>
      </div>
      
      <div aria-hidden="true" className={styles.gridGuides} data-grid-guides="true">
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.mdGuide}`}></div>
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.mdGuide}`}></div>
      </div>
      
      <div aria-hidden="true" className={styles.gridGuides} data-grid-guides="true">
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.lgGuide}`}></div>
        <div aria-hidden="true" className={`${styles.gridGuide} ${styles.lgGuide}`}></div>
      </div>
    </section>
  );
};

export default DeploymentFeatures;
