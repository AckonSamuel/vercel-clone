import React from 'react';
import styles from '../Terminal.module.css';

const TerminalVisual: React.FC = () => {
  return (
    <div 
      aria-label="Two abstract window frames are stacked on top of each other. The bottom window displays a successful &quot;git push&quot; command terminal output. The top window shows a corresponding deployment preview inside a browser." 
      className={styles.root}
      role="img"
    >
      {/* Terminal Window */}
      <div aria-hidden="true" className={`${styles.window} ${styles.terminal}`}>
        <div className={`${styles.trafficLights}`} data-colored="false">
          <div className={styles.trafficLight}></div>
          <div className={styles.trafficLight}></div>
          <div className={styles.trafficLight}></div>
        </div>
        
        <div className={styles.codeContainer}>
          <div className={`${styles.codeLine}`}>
            <span className={styles.dimText}>▲ ~ vercel-site/</span> git push
          </div>
          <div className={styles.codeLine}>Enumerating objects: 1, done.</div>
          <div className={styles.codeLine}>Counting objects: 100% (1/1), done.</div>
          <div className={styles.codeLine}>Writing objects: 100% (1/1), 72 bytes, done.</div>
          <div className={styles.codeLine}>Total 1 (delta 0), reused 0 (delta 0).</div>
          <div className={styles.codeLine}>To github.com:vercel/vercel-site.git</div>
          <div className={styles.codeLine}>&nbsp;&nbsp;&nbsp;21326a9..81663c3 main -&gt; main</div>
        </div>
      </div>
      
      {/* Browser Window */}
      <div aria-hidden="true" className={`${styles.window} ${styles.browser}`}>
        <div className={styles.toolbar} aria-hidden="true">
          <div className={styles.trafficLights} data-colored="true">
            <div className={styles.trafficLight}></div>
            <div className={styles.trafficLight}></div>
            <div className={styles.trafficLight}></div>
          </div>
          
          <div className={styles.url}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
              <path clipRule="evenodd" d="M9.5 6V7H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6ZM5 7V6C5 4.34315 6.34315 3 8 3C9.65685 3 11 4.34315 11 6V7H12V11.5C12 12.3284 11.3284 13 10.5 13H5.5C4.67157 13 4 12.3284 4 11.5V7H5Z" fill="var(--ds-gray-900)" fillRule="evenodd"></path>
            </svg>
            <div className={styles.urlText}>vercel.com</div>
          </div>
        </div>
        
        <div className={styles.vercel}>
          <span className={styles.heroText}>
            What will you ship?
          </span>
          <svg className={styles.grid} fill="none" height="144" viewBox="0 0 312 144" width="312">
            <rect height="181" stroke="var(--ds-gray-100)" width="311" x="0.5" y="0.5"></rect>
            <g filter="url(#filter1_d_1086_110200)">
              <path clipRule="evenodd" d="M155.5 78L200 156H111L155.5 78Z" fill="var(--ds-background-100)" fillRule="evenodd"></path>
              <path clipRule="evenodd" d="M155.5 78L200 156H111L155.5 78Z" fillRule="evenodd" stroke="var(--ds-gray-500)"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TerminalVisual;
