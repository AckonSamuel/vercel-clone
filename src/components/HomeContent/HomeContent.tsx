import React from 'react';
import { GridSystem, GridBlock } from '@/components/Grid';
import styles from './HomeContent.module.css';
import Link from 'next/link';
import ImpactSection from '../ImpactSection/ImpactSection';
import RollbackContent from '@/components/RollbackSection/RollbackSection';
import ConformanceContent from '@/components/ConformanceSection/ConformanceSection';
import AnalyticsSection from '../AnalyticsSection/AnalyticsSection';
import DeploymentFeatures from '../DeploymentFeatures/DeploymentFeatures';
import HeroPitch from '../HeroPitch/HeroPitch';
import Hero from '../Hero/Hero';
import CTASection from '../CTASection';

export const HomeContent: React.FC = () => {
    return (
        <div className={styles.content}>
            {/* Hero Section */}
            <Hero />

            {/* Hero Pitch Section */}
            <HeroPitch />


            {/* Analytics Section */}
            <AnalyticsSection />

            {/* Deployment Features Section */}
            <DeploymentFeatures />

            <GridSystem
                smRows={1}
                lgRows={1}
                smColumns={2}
                lgColumns={2}
                showGuides
            >
                <GridBlock
                    className={styles.primaryCell}
                    style={{
                        '--sm-grid-row': '1 / span 1',
                        '--sm-grid-column': '1/2',
                        '--sm-cell-rows': '1',
                        '--sm-cell-columns': '1'
                    } as React.CSSProperties}>
                    <RollbackContent />
                </GridBlock>
                <GridBlock
                    className={styles.secondaryCell}
                    style={{
                        '--sm-grid-row': '2 / span 1',
                        '--lg-grid-row': '1 / span 1',
                        '--sm-grid-column': '1/2',
                        '--lg-grid-column': '2/2',
                        '--sm-cell-rows': '1',
                        '--sm-cell-columns': '2',
                        '--lg-cell-columns': '1'
                    } as React.CSSProperties}>
                    <ConformanceContent />
                </GridBlock>
            </GridSystem>

            {/* Impact Section */}
            <ImpactSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default HomeContent;
