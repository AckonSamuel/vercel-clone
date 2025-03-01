import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.gridBackground}>
        <div className={styles.gradient}>
          <div className={styles.triangleGradient} />
        </div>
        <div className={styles.triangle}>
          <svg viewBox="0 0 2000 2000" className={styles.triangleSvg}>
            <path 
              d="M1000 0L2000 2000H0L1000 0Z" 
              fill="none" 
              stroke="rgba(255,255,255,0.1)" 
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.textStack}>
          <h1 className={styles.heading}>Your complete platform for the web.</h1>
          <p className={styles.subHeading}>
            Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
          </p>
        </div>
        
        <div className={styles.buttons}>
          <Link href="/new" className={styles.primaryButton}>
            <span className={styles.prefix}>
              <svg viewBox="0 0 74 64" height="14">
                <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="currentColor" />
              </svg>
            </span>
            <span className={styles.buttonContent}>
              <span className={styles.small}>Deploy</span>
              <span className={styles.small}>Deploy</span>
              <span className={styles.large}>Start Deploying</span>
            </span>
          </Link>
          
          <Link href="/contact/sales" className={styles.secondaryButton}>
            <span className={styles.buttonContent}>Get a Demo</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
