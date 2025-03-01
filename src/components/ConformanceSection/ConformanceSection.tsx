import React from 'react';
import { GridSystem, GridBlock } from '@/components/Grid';
import { Gauge } from '@/components/Gauge/Gauge';
import styles from './ConformanceSection.module.css';
import { RepositoryIcon } from '@/components/icons/RepositoryIcon';

const TEAM_MEMBERS = {
  design: [
    { username: 'rauno', name: 'Rauno' },
    { username: 'gennydee', name: 'Genny' },
    { username: 'gln', name: 'Glen' }
  ],
  engineering: [
    { username: 'timer', name: 'Joe' },
    { username: 'jared', name: 'Jared' },
    { username: 'cramforce', name: 'Malte' },
    { username: 'gkaragkiaouris', name: 'George' },
    { username: 'tomocchino', name: 'Tom' }
  ],
  marketing: [
    { username: 'greetah', name: 'Greta' },
    { username: 'm0rgane', name: 'Morgane' },
    { username: 'lindsaygilson', name: 'Lindsay' }
  ]
};

export const ConformanceSection: React.FC = () => {
  return (
      <div className={styles.conformanceCell}>
        <div className={styles.conformanceHeader}>
          <div className={styles.conformanceIconWrapper}>
            <RepositoryIcon />
          </div>
          <h2 className={styles.conformanceLabel}>Conformance</h2>
        </div>

        <div className={styles.conformanceTitle}>
        <p><strong>Move fast, don't break things. </strong>
          Keep quality high while maintaining velocity with Enterprise Monorepos.</p>
        </div>

        <div className={styles.conformanceDashboard}>
          <div className={styles.conformanceColumn}>
            <h3 className={styles.conformanceHeading}>Conformance</h3>
            <div className={styles.conformanceMetrics}>
              <div className={styles.conformanceMetric}>
                <div className={styles.conformanceMetricLabel}>Excellent</div>
                <div className={styles.conformanceMetricValue}>
                  <Gauge value={90} size={20} />
                  <span className={styles.conformanceScore}>9.5</span>
                </div>
              </div>
              <div className={styles.conformanceMetric}>
                <div className={styles.conformanceMetricLabel}>Total Issues</div>
                <div className={styles.conformanceMetricValue}>
                  <span className={styles.conformanceScore}>34</span>
                </div>
              </div>
              <div className={styles.conformanceMetric}>
                <div className={styles.conformanceMetricLabel}>Major Issues</div>
                <div className={styles.conformanceMetricValue}>
                  <span className={styles.conformanceScore}>12</span>
                </div>
              </div>
            </div>
          </div>

          <hr className={styles.conformanceDivider} />

          <div className={styles.conformanceColumn}>
            <h3 className={styles.conformanceHeading}>Code Owners</h3>
            <div className={styles.conformanceTeams}>
              {Object.entries(TEAM_MEMBERS).map(([team, members]) => (
                <div key={team} className={styles.conformanceTeam}>
                  <span className={styles.conformanceTeamName}>
                    <span className={styles.conformanceScope}>@vercel</span>/{team}
                  </span>
                  <div className={styles.conformanceAvatarGroup}>
                    {members.map(member => (
                      <div key={member.username} className={styles.conformanceAvatar}>
                        <img
                          src={`https://vercel.com/api/www/avatar?u=${member.username}&s=44`}
                          alt={`Avatar for ${member.name}`}
                          width={22}
                          height={22}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default ConformanceSection;
