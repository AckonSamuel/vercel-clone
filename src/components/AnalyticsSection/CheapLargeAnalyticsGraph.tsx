import React from 'react';
import Image from 'next/image';
import styles from './AnalyticsGraphs.module.css';

export const CheapLargeAnalyticsGraph: React.FC = () => {
  return (
    <div className={styles.cheapLargeGraph}>
      <Image 
        data-version="v1"
        alt="A chart showing two lines that represent views and clicks of a website. The user can move their cursor along the axis to see their current value, and the percentage gain from the last time period."
        loading="lazy"
        width={982}
        height={345}
        className={`${styles.intrinsic} ${styles.hideOnMobile} ${styles.lightMode}`}
        src="https://assets.vercel.com/image/upload/v1715228589/front/home/new/grid/analytics-large-light.png"
      />
      <Image 
        data-version="v1"
        alt="A chart showing two lines that represent views and clicks of a website. The user can move their cursor along the axis to see their current value, and the percentage gain from the last time period."
        loading="lazy"
        width={982}
        height={345}
        className={`${styles.intrinsic} ${styles.hideOnMobile} ${styles.darkMode}`}
        src="https://assets.vercel.com/image/upload/v1715228588/front/home/new/grid/analytics-large-dark.png"
      />
    </div>
  );
};
