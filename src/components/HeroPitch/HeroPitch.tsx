import React from 'react';
import styles from './HeroPitch.module.css';
import { ArrowIcon } from './ArrowIcon';
import { GlobeIcon } from './GlobeIcon';
import { PushIcon } from './PushIcon';

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
        <div aria-hidden="true">
          Develop with your favorite tools <ArrowIcon />
          <span aria-hidden="true" className={styles.lineBreak}></span> 
          Launch globally, instantly <GlobeIcon /> Keep pushing <PushIcon />
        </div>
      </div>
    </div>
  );
};

export default HeroPitch;
