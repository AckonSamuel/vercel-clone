import React from 'react';
import { GridSystem, GridBlock } from '@/components/Grid';
import styles from './HomeContent.module.css';
import Link from 'next/link';

export const HomeContent: React.FC = () => {
  return (
    <div className={styles.gridSystemLazyContent}>
      <section className={styles.homeSection}>
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
              '--sm-cell-rows': '1',
              '--sm-cell-columns': '2'
            } as React.CSSProperties}
          >
            <div className={styles.stack} data-version="v1">
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
                  >
                    Start Deploying
                  </Link>
                  <Link
                    href="/contact/sales"
                    className={styles.secondaryButton}
                  >
                    Talk to an Expert
                  </Link>
                </div>
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
              '--sm-cell-rows': '1',
              '--sm-cell-columns': '2',
              '--lg-cell-columns': '1'
            } as React.CSSProperties}
          >
            <div className={styles.stack} data-version="v1">
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
                  >
                    Explore Enterprise
                  </Link>
                </div>
              </div>
            </div>
          </GridBlock>
        </GridSystem>
      </section>
    </div>
  );
};

export default HomeContent;
