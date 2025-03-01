import React from 'react';
import styles from '../Comments.module.css';

const CommentsVisual: React.FC = () => {
  return (
    <div 
      aria-label="A message conversation between two people, and the current user. Each message bubble has a floating cursor. The current user is typing to confirm design changes to the Button component."
      className={styles.commentsRoot}
      role="img"
    >
      {/* Left side comment */}
      <div aria-hidden="true" className={styles.comment} data-side="left">
        <div className={styles.bubble}>
          Swapped out the <code>button</code> for <span aria-hidden="true" style={{ display: 'block' }}></span> some variants we needed.
        </div>
      </div>
      
      {/* Right side comment with cursor */}
      <div aria-hidden="true" className={styles.comment} data-side="right">
        <div className={styles.bubble}>
          <div 
            className={styles.cursor}
            data-animate="false"
            data-color="blue-600"
            data-reverse="false"
            style={{left: '-36px', top: '0', animationDuration: '3.4s'}}
          >
            <div className={styles.cursorWrapper}>
              <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                <path d="M15.5036 3.11002L12.5357 15.4055C12.2666 16.5204 10.7637 16.7146 10.22 15.7049L7.4763 10.6094L2.00376 8.65488C0.915938 8.26638 0.891983 6.73663 1.96711 6.31426L13.8314 1.65328C14.7729 1.28341 15.741 2.12672 15.5036 3.11002ZM7.56678 10.6417L7.56645 10.6416C7.56656 10.6416 7.56667 10.6416 7.56678 10.6417L7.65087 10.4062L7.56678 10.6417Z" fill="currentColor" stroke="var(--ds-background-100)" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div className={styles.cursorName} data-color="blue-600">Pranathi</div>
          </div>
          How about this instead?
        </div>
      </div>
      
      {/* Left side comment with cursor */}
      <div aria-hidden="true" className={styles.comment} data-side="left">
        <div className={styles.bubble}>
          I like it. Does this work with <span aria-hidden="true" style={{ display: 'block' }}></span>the brand tweaks <strong>@mamuso</strong>?
          <div 
            className={styles.cursor}
            data-animate="false"
            data-color="red-700"
            data-reverse="true"
            style={{right: '-48px', bottom: '16px'}}
          >
            <div className={styles.cursorWrapper}>
              <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                <path d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z" fill="currentColor" stroke="var(--ds-background-100)" strokeWidth="1.5"></path>
              </svg>
            </div>
            <div className={styles.cursorName} data-color="red-700">Rauno</div>
          </div>
        </div>
      </div>
      
      {/* Active right side comment with cursor and caret */}
      <div aria-hidden="true" className={styles.comment} data-active="true" data-side="right">
        <div className={styles.bubble}>
          This looks great!
          <div 
            className={styles.cursor}
            data-animate="false"
            data-color="teal-600"
            data-reverse="true"
            style={{right: '-28px', bottom: '-4px', animationDuration: '3.5s'}}
          >
            <div className={styles.cursorWrapper}>
              <svg fill="none" height="18" viewBox="0 0 17 18" width="17">
                <path d="M1.4964 3.11002L4.46428 15.4055C4.73338 16.5204 6.23625 16.7146 6.77997 15.7049L9.5237 10.6094L14.9962 8.65488C16.0841 8.26638 16.108 6.73663 15.0329 6.31426L3.16856 1.65328C2.22708 1.28341 1.25905 2.12672 1.4964 3.11002ZM9.43322 10.6417L9.43355 10.6416C9.43344 10.6416 9.43333 10.6416 9.43322 10.6417L9.34913 10.4062L9.43322 10.6417Z" fill="currentColor" stroke="var(--ds-background-100)" strokeWidth="1.5"></path>
              </svg>
            </div>
          </div>
          <div aria-hidden="true" className={styles.caret}></div>
          <div className={styles.send}>
            <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M8.7071 3.39641C8.31657 3.00588 7.68341 3.00588 7.29288 3.39641L4.21966 6.46963L3.68933 6.99996L4.74999 8.06062L5.28032 7.53029L7.24999 5.56062V12.25V13H8.74999V12.25V5.56062L10.7197 7.53029L11.25 8.06062L12.3107 6.99996L11.7803 6.46963L8.7071 3.39641Z" fill="var(--ds-background-100)" fillRule="evenodd"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsVisual;