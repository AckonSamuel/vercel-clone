import React from 'react';
import { GridSystem, GridBlock } from '@/components/Grid';
import RollbackSection from '@/components/RollbackSection';
import ConformanceSection from '@/components/ConformanceSection/ConformanceSection';
import styles from './RollbackConformanceSection.module.css';

const RollbackConformanceSection: React.FC = () => {
  return (
    <div className={styles.rcGridContainer}>
      <GridSystem
        smRows={1}
        lgRows={1}
        smColumns={2}
        lgColumns={2}
        showGuides
      >
        <GridBlock className={styles.rcPrimaryCell}>
            <RollbackSection />
        </GridBlock>
        <GridBlock className={styles.rcSecondaryCell}>
            <ConformanceSection />
        </GridBlock>
      </GridSystem>
    </div>
  );
};

export default RollbackConformanceSection;
