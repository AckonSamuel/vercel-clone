import React from 'react';
import { GridSystem, GridBlock } from '../Grid';
import styles from './GridContent.module.css';
import Link from 'next/link';

const GridContent: React.FC = () => {
  return (
    <div className={styles.gridSystemLazyContent}>
      <GridSystem 
        smRows={2}
        lgRows={1}
        smColumns={2}
        lgColumns={3}
        showGuides
      >
        <GridBlock
          className={styles.primaryCell}
          style={{
            '--sm-grid-row': '1 / span 1',
            '--sm-grid-column': '1/3',
            '--sm-cell-rows': 1,
            '--sm-cell-columns': 2,
          } as React.CSSProperties}
        >
          <div className={styles.primaryContent}>
            <div className={styles.primaryDescription}>
              <p>
                <b>Ready to deploy? </b>
                Start building with a free account. Speak to an expert for your{' '}
                <i>Pro</i> or <u>Enterprise</u> needs.
              </p>
            </div>
            <div className={styles.buttonGroup}>
              <Link
                href="/new"
                className={styles.primaryButton}
                data-track="true"
                data-track-intent="Get Started"
              >
                Start Deploying
              </Link>
              <Link
                href="/contact/sales"
                className={styles.secondaryButton}
                data-track="true"
                data-track-intent="Contact Sales"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </GridBlock>

        <GridBlock
          className={styles.secondaryCell}
          style={{
            '--sm-grid-row': '2 / span 1',
            '--lg-grid-row': '1 / span 1',
            '--sm-grid-column': '1/3',
            '--lg-grid-column': '3/4',
            '--sm-cell-rows': 1,
            '--sm-cell-columns': 2,
            '--lg-cell-columns': 1,
          } as React.CSSProperties}
        >
          <div className={styles.secondaryContent}>
            <div className={styles.secondaryDescription}>
              <p>
                <b>Explore Vercel Enterprise</b> with an interactive product tour,
                trial, or a personalized demo.
              </p>
            </div>
            <div className={styles.enterpriseButton}>
              <Link
                href="/try-enterprise"
                className={styles.secondaryButton}
                data-track="true"
                data-track-intent="Contact Sales"
              >
                Explore Enterprise
              </Link>
            </div>
          </div>
        </GridBlock>
      </GridSystem>
    </div>
  );
};

export default GridContent;
