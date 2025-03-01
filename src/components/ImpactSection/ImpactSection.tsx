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
          <div className={styles.stack}>
            <div className={styles.singleRow}>
              <div className={styles.impact}>
                <div className={styles.titleRow}>
                  <h2 className={styles.title}>Scale your</h2>
                </div>
              </div>
              
              <Link
                href="/enterprise"
                className={styles.actionButton}
              >
                <span className={styles.iconWrapper}>
                  <BuildingIcon />
                </span>
                <span>Enterprise</span>
              </Link>
              
              <div className={styles.impact}>
                <div className={styles.titleRow}>
                  <h2 className={styles.title}>without compromising</h2>
                </div>
              </div>
              
              <Link
                href="/security"
                className={styles.actionButton}
              >
                <span className={styles.iconWrapper}>
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
