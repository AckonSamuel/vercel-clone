import React from 'react';
import Image from 'next/image';
import styles from './AnalyticsGraphs.module.css';

export const CheapSmallAnalyticsGraph: React.FC = () => {
  return (
    <>
      <Image 
        data-version="v1"
        alt="A chart showing two lines that represent views and clicks of a website. The user can move their cursor along the axis to see their current value, and the percentage gain from the last time period."
        loading="lazy"
        width={332}
        height={181}
        className={`${styles.intrinsic} ${styles.showOnMobile} ${styles.lightMode}`}
        src="https://assets.vercel.com/image/upload/v1715229353/front/home/new/grid/analytics-small-light.png"
      />
      <Image 
        data-version="v1"
        alt="A chart showing two lines that represent views and clicks of a website. The user can move their cursor along the axis to see their current value, and the percentage gain from the last time period."
        loading="lazy"
        width={332}
        height={181}
        className={`${styles.intrinsic} ${styles.showOnMobile} ${styles.darkMode}`}
        src="https://assets.vercel.com/image/upload/v1715229352/front/home/new/grid/analytics-small-dark.png"
      />
    </>
  );
};
