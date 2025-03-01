import React from 'react';
import styles from './AnalyticsSection.module.css';
import { AnalyticsIcon } from '../icons/AnalyticsIcon';
import { CheapLargeAnalyticsGraph } from './CheapLargeAnalyticsGraph';
import { GridBlock } from '../Grid';

export const AnalyticsSection: React.FC = () => {
    return (
        <section className={styles.gridContainer}>
            {/* Analytics Cell */}
            <GridBlock
                className={`${styles.analyticsCell} ${styles.analyticsCellGrid}`}
                data-cell="analytics"
            >
                <div className={styles.largeGraphContainer}>
                    <CheapLargeAnalyticsGraph />
                </div>
                <div className={styles.impact}>
                    <div className={styles.header}>
                        <div className={styles.headerLeft}>
                            <div className={styles.iconWrapper}>
                                <AnalyticsIcon />
                            </div>
                            <h2 className={styles.title}>Frontend Observability</h2>
                        </div>
                    </div>

                    <div className={styles.titleSection}>
                            <strong>Privacy-friendly, lightweight Analytics. </strong>
                            <span aria-hidden="true" className={styles.lineBreak}></span>
                            <p className={styles.description}>
                                Upgrade your post-launch workflow with actionable, real-time insights.
                            </p>
                    </div>
                </div>
            </GridBlock>

            {/* Graph Callout Cell */}

            {/* Grid Cross Element */}
            <div className={styles.gridCross} data-grid-cross="">
                <div className={`${styles.gridCrossLine} ${styles.gridCrossHorizontalLine}`}></div>
                <div className={`${styles.gridCrossLine} ${styles.gridCrossVerticalLine}`}></div>
            </div>
        </section>
    );
};

export default AnalyticsSection;
