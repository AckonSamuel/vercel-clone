import React from 'react';
import { GridSystem, GridBlock } from '@/components/Grid';
import Link from 'next/link';
import styles from './ImpactSection.module.css';
import { BuildingIcon, SecurityIcon } from '@/components/icons';

export const ImpactSection: React.FC = () => {
  return (
    <section className={styles.impactSection}>
      <GridSystem 
        smRows={1}
        lgRows={1}
        smColumns={1}
        lgColumns={1}
        showGuides={false}
      >
        <GridBlock>
          <div className={styles.impactStack}>
            <div className={styles.impactSingleRow}>
              <div className={styles.impactTextBlock}>
                <div className={styles.impactTitleRow}>
                  <h2 className={styles.impactTitle}>Scale your</h2>
                </div>
              </div>
              
              <Link
                href="/enterprise"
                className={styles.impactActionButton}
              >
                <span className={styles.impactIconWrapper}>
                  <BuildingIcon />
                </span>
                <span>Enterprise</span>
              </Link>
              
              <div className={styles.impactTextBlock}>
                <div className={styles.impactTitleRow}>
                  <h2 className={styles.impactTitle}>without compromising</h2>
                </div>
              </div>
              
              <Link
                href="/security"
                className={styles.impactActionButton}
              >
                <span className={styles.impactIconWrapper}>
                  <SecurityIcon />
                </span>
                <span>Security</span>
              </Link>
            </div>
          </div>
        </GridBlock>
      </GridSystem>
    </section>
  );
};

export default ImpactSection;
