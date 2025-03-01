import React from 'react';
import CommentsVisual from './visuals/CommentsVisual';
import { MessageIcon } from '../icons/MessageIcon';
import styles from './CollabSection.module.css';

const CollabSection: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.iconWrapper}>
              <MessageIcon />
            </div>
            <h2 className={styles.title}>Collaborative pre-production</h2>
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.titleContent}>
            <strong>Every deploy is remarkable.</strong>
            <p className={styles.description}>Chat with your team on real, production-grade UI, not just designs.</p>
          </div>
        </div>
      </div>
      
      <div className={styles.visualContainer}>
        <CommentsVisual />
      </div>
    </>
  );
};

export default CollabSection;
