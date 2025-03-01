import React from 'react';
import styles from './HomeContent.module.css';
import ImpactSection from '../ImpactSection/ImpactSection';
import AnalyticsSection from '../AnalyticsSection/AnalyticsSection';
import DeploymentFeatures from '../DeploymentFeatures/DeploymentFeatures';
import HeroPitch from '../HeroPitch/HeroPitch';
import Hero from '../Hero/Hero';
import CTASection from '../CTASection';
import RollbackConformanceSection from '../RollbackConformanceSection/RollbackConformanceSection';

export const HomeContent: React.FC = () => {
    return (
        <div className={styles.content}>
            {/* Hero Section */}
            <Hero />

            {/* Hero Pitch Section */}
            <HeroPitch />



            {/* Deployment Features Section */}
            <DeploymentFeatures />

            {/* Analytics Section */}
            <AnalyticsSection />

            {/* Rollback and Conformance Section */}
            <RollbackConformanceSection />

            {/* Impact Section */}
            <ImpactSection />

            {/* CTA Section */}
            <CTASection />
        </div>
    );
};

export default HomeContent;
