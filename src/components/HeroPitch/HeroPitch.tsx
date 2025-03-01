import React from 'react';
import styles from './HeroPitch.module.css';

const HeroPitch: React.FC = () => {
  return (
    <div className={styles.heroPitchContainer}>
      <div 
        aria-label="Develop with your favorite tools. Launch globally, instantly. Keep pushing." 
        aria-level={2} 
        data-heading={true} 
        role="heading"
        className={styles.heroPitchHeading}
      >
        <div aria-hidden="true" className={styles.contentWrapper}>
          Develop with your favorite tools 
          <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 28 28" width="28">
            <path d="M2.50012 25.5L11.2151 16.3009C11.3749 16.1322 11.3749 15.8679 11.2151 15.6991L2.50012 6.5" 
                  stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="3.5"></path>
            <path d="M14.75 26.25H26.25" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="3.5"></path>
          </svg>
          
          Launch globally, instantly 
          <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 28 28" width="28">
            <circle cx="14" cy="14" r="12.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></circle>
            <path d="M1.75 10.8756C4.90656 10.102 9.23046 9.625 14 9.625C18.7695 9.625 23.0934 10.102 26.25 10.8756M1.75 17.1244C4.90656 17.898 9.23046 18.375 14 18.375C18.7695 18.375 23.0934 17.898 26.25 17.1244" 
                  stroke="currentColor" strokeLinejoin="round" strokeWidth="3.5"></path>
            <path d="M14 1.75C14.2667 1.75 14.6587 1.86617 15.1678 2.35835C15.6853 2.85867 16.2313 3.66714 16.7278 4.80194C17.7184 7.06634 18.375 10.317 18.375 14C18.375 17.683 17.7184 20.9337 16.7278 23.1981C16.2313 24.3329 15.6853 25.1413 15.1678 25.6416C14.6587 26.1338 14.2667 26.25 14 26.25C13.7333 26.25 13.3413 26.1338 12.8322 25.6416C12.3147 25.1413 11.7687 24.3329 11.2722 23.1981C10.2816 20.9337 9.625 17.683 9.625 14C9.625 10.317 10.2816 7.06634 11.2722 4.80194C11.7687 3.66714 12.3147 2.85867 12.8322 2.35835C13.3413 1.86617 13.7333 1.75 14 1.75Z" 
                  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
          </svg>
          
          Keep pushing 
          <svg aria-hidden="true" fill="none" height="28" viewBox="0 0 28 28" width="28">
            <path d="M7 10.9375V9.1875H3.5V10.9375H7ZM3.5 10.9375V28H7V10.9375H3.5Z" fill="currentColor"></path>
            <path d="M22.75 26.25C20.817 26.25 19.25 24.683 19.25 22.75C19.25 20.817 20.817 19.25 22.75 19.25C24.683 19.25 26.25 20.817 26.25 22.75C26.25 24.683 24.683 26.25 22.75 26.25Z" 
                  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
            <path d="M5.25 8.75C3.317 8.75 1.75 7.183 1.75 5.25C1.75 3.317 3.317 1.75 5.25 1.75C7.183 1.75 8.75 3.317 8.75 5.25C8.75 7.183 7.183 8.75 5.25 8.75Z" 
                  stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5"></path>
            <path d="M19.25 22.75C15.537 22.75 11.976 21.275 9.35051 18.6495C6.725 16.024 5.25 12.463 5.25 8.75" 
                  stroke="currentColor" strokeLinejoin="round" strokeWidth="3.5"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroPitch;
