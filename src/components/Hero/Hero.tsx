import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { TriangleGradient, TriangleSvg } from './TriangleComponent';
import { Grid, GridBlock } from '../Grid';

const Hero: React.FC = () => {
  return (
    <Grid className={styles.root}>
      <GridBlock className={styles.gradient}>
        <TriangleGradient />
      </GridBlock>
      
      <GridBlock className={styles.triangle}>
        <TriangleSvg />
      </GridBlock>
      
      <GridBlock className={styles.desktop}>
        <div className={styles.heroCell}>
          <div>
            <h1 className={styles.heading}>
              Your complete platform for the web.
            </h1>
            <p className={styles.subHeading}>
              Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
            </p>
          </div>
          
          <div className={styles.buttons}>
            <Link 
              href="/new" 
              className={styles.primaryButton}
            >
              <span className={styles.buttonPrefix}>
                <svg 
                  aria-label="Vercel logomark" 
                  height="14" 
                  role="img" 
                  viewBox="0 0 74 64"
                >
                  <path 
                    d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" 
                    fill="var(--ds-background-200)"
                  />
                </svg>
              </span>
              <span className={styles.buttonContent}>
                <span className={styles.small}>Deploy</span>
                <span className={styles.large}>Start Deploying</span>
              </span>
            </Link>
            
            <Link 
              href="/contact/sales" 
              className={styles.secondaryButton}
            >
              <span className={styles.buttonContent}>Get a Demo</span>
            </Link>
          </div>
        </div>
      </GridBlock>
    </Grid>
  );
};

export default Hero;
