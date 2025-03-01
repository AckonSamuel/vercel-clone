import React from 'react';
import { GridSystem, GridBlock } from '@/components/Grid';
import styles from './RollbackSection.module.css';
import { Gauge } from '@/components/Gauge/Gauge';
import { RotateIcon } from '@/components/icons';
import RollbackContent from './RollbackContent';

export const RollbackSection: React.FC = () => {
  return (
    <GridSystem 
      smRows={2}
      smColumns={2}
      showGuides={false}
      
    >
      <GridBlock>
        <div className={styles.content}>

          <div className={styles.deployments}>
            <div className={styles.deployment}>
              {/* First deployment details */}
              {/* <Gauge value={90} color="var(--ds-teal-600)" /> */}
              <RollbackContent />
            </div>
            <div className={styles.rewindLine} />
            <div className={styles.deployment}>
              {/* Second deployment details */}
              <Gauge value={55} color="var(--ds-red-700)" />
            </div>
          </div>
        </div>
      </GridBlock>
    </GridSystem>
  );
};

export default RollbackSection;
