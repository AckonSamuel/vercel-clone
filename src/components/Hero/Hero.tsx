import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { TriangleGradient, TriangleSvg } from './TriangleComponent';

const Hero: React.FC = () => {
  return (
    <main className={styles.heroMain}>
      <div className={styles.heroGridWrapper}>
        {/* Mobile version for smaller screens */}
        <section className={`${styles.mobileGrid} ${styles.mobileDisplay}`} data-grid="">
          <div className={styles.heroContentCell}>
            <div>
              <h1 className={styles.heroTitle}>Your complete platform for the web.</h1>
              <p className={styles.heroSubtitle}>
                Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
              </p>
            </div>
            
            <div className={styles.buttonContainer}>
              <Link 
                href="/new" 
                role="link" 
                tabIndex={0}
                className={styles.heroButtonPrimary}
              >
                <span className={styles.buttonIconPrefix}>
                  <svg aria-label="Vercel logomark" height="14" role="img" viewBox="0 0 74 64">
                    <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="var(--ds-background-200)"></path>
                  </svg>
                </span>
                <span className={styles.buttonTextContent}>
                  <span className={styles.buttonTextSmall}>Deploy</span>
                  <span className={styles.buttonTextLarge}>Start Deploying</span>
                </span>
              </Link>
              
              <Link 
                href="/contact/sales" 
                role="link" 
                tabIndex={0}
                className={styles.heroButtonSecondary}
              >
                <span className={styles.buttonTextContent}>Get a Demo</span>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Desktop version with triangle graphic */}
        <section className={`${styles.desktopGrid} ${styles.desktopDisplay}`} data-grid="">
          {/* Gradient background block */}
          <div className={styles.gradientBg} data-grid-cell="">
            <TriangleGradient />
          </div>
          
          {/* Triangle SVG block */}
          <div className={styles.triangleContainer} data-grid-cell="">
            <TriangleSvg />
          </div>
          
          {/* Content block */}
          <div className={styles.desktopDisplay} data-grid-cell="">
            <div className={styles.heroContentCell}>
              <div>
                <h1 className={styles.heroTitle}>Your complete platform for the web.</h1>
                <p className={styles.heroSubtitle}>
                  Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
                </p>
              </div>
              
              <div className={styles.buttonContainer}>
                <Link 
                  href="/new" 
                  role="link" 
                  tabIndex={0}
                  className={styles.heroButtonPrimary}
                >
                  <span className={styles.buttonIconPrefix}>
                    <svg aria-label="Vercel logomark" height="14" role="img" viewBox="0 0 74 64">
                      <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" fill="var(--ds-background-200)"></path>
                    </svg>
                  </span>
                  <span className={styles.buttonTextContent}>
                    <span className={styles.buttonTextSmall}>Deploy</span>
                    <span className={styles.buttonTextLarge}>Start Deploying</span>
                  </span>
                </Link>
                
                <Link 
                  href="/contact/sales" 
                  role="link" 
                  tabIndex={0}
                  className={styles.heroButtonSecondary}
                >
                  <span className={styles.buttonTextContent}>Get a Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
