import React from 'react';
import styles from './AnalyticsSection.module.css';
import { AnalyticsIcon } from '../icons/AnalyticsIcon';
import { CheapSmallAnalyticsGraph } from './CheapSmallAnalyticsGraph';
import { CheapLargeAnalyticsGraph } from './CheapLargeAnalyticsGraph';
import { GridBlock } from '../Grid';

export const AnalyticsSection: React.FC = () => {
    return (
        <section className={styles.gridContainer}>
            {/* Analytics Cell */}
            <GridBlock
                className={styles.analyticsCell}
                style={{
                    '--sm-grid-row': '1 / span 1',
                    '--sm-grid-column': '1 / span 2',
                    '--sm-cell-rows': '1',
                    '--sm-cell-columns': '2',
                    pointerEvents: 'none',
                    contentVisibility: 'auto',
                    containIntrinsicHeight: '455px',
                    width: '100%',
                    position: 'relative', // Added position relative
                } as React.CSSProperties}
                data-cell="analytics"
            >
                <div className={styles.largeGraphContainer} style={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <CheapLargeAnalyticsGraph />
                </div>
                <div className={styles.impact} style={{ position: 'relative', zIndex: 1 }}>
                    <div className={styles.header}>
                        <div className={styles.headerLeft}>
                            <div className={styles.iconWrapper}>
                                <AnalyticsIcon />
                            </div>
                            <h2 className={styles.title}>Frontend Observability</h2>
                        </div>
                    </div>

                    <div className={styles.titleSection}>
                        <div className={styles.titleContent}>
                            <strong>Privacy-friendly, lightweight Analytics. </strong>
                            <span aria-hidden="true" style={{ display: 'block' }}></span>
                            <p className={styles.description}>
                                Upgrade your post-launch workflow with actionable, real-time insights.
                            </p>
                        </div>
                    </div>
                </div>
            </GridBlock>

            {/* Graph Callout Cell */}

            {/* Grid Cross Element */}
            <div className={styles.gridCross} data-grid-cross="">
                <div className={styles.gridCrossLine} style={{
                    width: 'var(--cross-half-size)',
                    height: 'var(--cross-size)',
                    borderRightWidth: 'var(--guide-width)'
                }}></div>
                <div className={styles.gridCrossLine} style={{
                    width: 'var(--cross-size)',
                    height: 'var(--cross-half-size)',
                    borderBottomWidth: 'var(--guide-width)'
                }}></div>
            </div>
        </section>
    );
};

export default AnalyticsSection;
