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
    <GridBlock className={styles.cell}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <RepositoryIcon />
          </div>
          <h2 className={styles.label}>Conformance</h2>
        </div>

        <div className={styles.title}>
          <strong>Move fast, don't break things.</strong>
          <p>Keep quality high while maintaining velocity with Enterprise Monorepos.</p>
        </div>

        <div className={styles.dashboard}>
          <div className={styles.column}>
            <h3 className={styles.heading}>Conformance</h3>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>Excellent</div>
                <div className={styles.metricValue}>
                  <Gauge value={90} size={20} />
                  <span className={styles.score}>9.5</span>
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>Total Issues</div>
                <div className={styles.metricValue}>
                  <span className={styles.score}>34</span>
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>Major Issues</div>
                <div className={styles.metricValue}>
                  <span className={styles.score}>12</span>
                </div>
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.column}>
            <h3 className={styles.heading}>Code Owners</h3>
            <div className={styles.teams}>
              {Object.entries(TEAM_MEMBERS).map(([team, members]) => (
                <div key={team} className={styles.team}>
                  <span className={styles.teamName}>
                    <span className={styles.scope}>@vercel</span>/{team}
                  </span>
                  <div className={styles.avatarGroup}>
                    {members.map(member => (
                      <div key={member.username} className={styles.avatar}>
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
    </GridBlock>
  );
};

export default ConformanceSection;
