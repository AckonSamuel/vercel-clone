import React from 'react';
import Link from 'next/link';
import { GridSystem, GridBlock } from '@/components/Grid';
import styles from './CTASection.module.css';

const CTASection: React.FC = () => {
  return (
    <section className={styles.ctaHomeSection}>
      <GridSystem
        smRows={1}
        lgRows={1}
        smColumns={1}
        lgColumns={3}
        showGuides
      >
        <GridBlock className={styles.ctaCell}>
          <div className={styles.stack}>
            <div className={styles.primaryContent}>
                <p>
                  <b className={styles.boldWhite}>Ready to deploy? </b>
                  Start building with a free account. Speak to an expert for your{' '}
                  <i>Pro</i> or <u>Enterprise</u> needs.
                </p>
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

        <GridBlock className={styles.enterpriseCell}>
          <div className={styles.stack}>
            <div className={styles.secondaryContent}>
                <p>
                  <b>Explore Vercel Enterprise</b> with an interactive product tour,
                  trial, or a personalized demo.
                </p>
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
  );
};

export default CTASection;
