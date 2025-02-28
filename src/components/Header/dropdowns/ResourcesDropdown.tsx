import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

const ResourcesDropdown = () => {
  return (
    <div className={styles.dropdownMenu} data-type="resources">
      <ul className={styles.dropdownColumns}>
        {/* Tools Section */}
        <li className={styles.dropdownColumn}>
          <h5 className={styles.dropdownHeading} id="heading-tools">Tools</h5>
          <ul aria-describedby="header-tools" className={styles.columnReset}>
            {/* Resource Center */}
            <li>
              <Link 
                href="/resources" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Resource Center</div>
                  <p className={styles.menuItemText}>Today's best practices</p>
                </div>
              </Link>
            </li>

            {/* Marketplace */}
            <li>
              <Link 
                href="/marketplace" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path d="M12.25 14.25V10L12.9212 10.1119C14.1403 10.315 15.25 9.37496 15.25 8.13908V7.86092C15.25 6.62504 14.1403 5.68496 12.9212 5.88813L12.25 6V1.75H8.235L8.30764 2.50382C8.41075 3.57386 7.56957 4.5 6.49457 4.5C5.42349 4.5 4.58361 3.58031 4.68058 2.51362L4.75 1.75H0.75V14.25H12.25Z" stroke="currentColor" fill="transparent" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Marketplace</div>
                  <p className={styles.menuItemText}>Extend and automate workflows</p>
                </div>
              </Link>
            </li>

            {/* Templates */}
            <li>
              <Link 
                href="/templates" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 2.5H1.5V5H3V6H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H5V12.5H6V13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V6H14V5H14.5V2.5ZM1.5 1H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V2.5V1H14.5H1.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Templates</div>
                  <p className={styles.menuItemText}>Jumpstart app development</p>
                </div>
              </Link>
            </li>

            {/* Guides */}
            <li>
              <Link 
                href="/guides" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 1H0.75H5C6.2267 1 7.31583 1.58901 8 2.49963C8.68417 1.58901 9.7733 1 11 1H15.25H16V1.75V13V13.75H15.25H10.7426C10.1459 13.75 9.57361 13.9871 9.15165 14.409L8.53033 15.0303H7.46967L6.84835 14.409C6.42639 13.9871 5.8541 13.75 5.25736 13.75H0.75H0V13V1.75V1Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Guides</div>
                  <p className={styles.menuItemText}>Find help quickly</p>
                </div>
              </Link>
            </li>

            {/* Partner Finder */}
            <li>
              <Link 
                href="/partners/solution-partners" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.7329 1.15933L15.9807 0.0192871L14.8407 0.267122L5.22524 2.35744C3.79024 2.66939 2.66939 3.79024 2.35744 5.22523L0.267122 14.8407L0.0192871 15.9807L1.15933 15.7329L10.7748 13.6426C12.2098 13.3306 13.3306 12.2098 13.6426 10.7748L15.7329 1.15933ZM5.54388 3.8232L14.0193 1.98072L12.1768 10.4561C11.9896 11.3171 11.3171 11.9896 10.4561 12.1768L1.98072 14.0193L3.8232 5.54388C4.01037 4.68288 4.68288 4.01037 5.54388 3.8232Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Partner Finder</div>
                  <p className={styles.menuItemText}>Get help from solution partners</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Company Section */}
        <li className={styles.dropdownColumn}>
          <h5 className={styles.dropdownHeading} id="heading-company">Company</h5>
          <ul aria-describedby="header-company" className={styles.columnReset}>
            {/* Customers */}
            <li>
              <Link 
                href="/customers" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Customers</div>
                  <p className={styles.menuItemText}>Trusted by the best teams</p>
                </div>
              </Link>
            </li>

            {/* Blog */}
            <li>
              <Link 
                href="/blog" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.75 0.189331L9.28033 0.719661L15.2803 6.71966L15.8107 7.24999L15.2803 7.78032L13.7374 9.32322C13.1911 9.8696 12.3733 9.97916 11.718 9.65188L9.54863 13.5568C8.71088 15.0648 7.12143 16 5.39639 16H0.75H0V15.25V10.6036C0 8.87856 0.935237 7.28911 2.4432 6.45136L6.34811 4.28196C6.02084 3.62674 6.13039 2.80894 6.67678 2.26255L8.21967 0.719661L8.75 0.189331Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Blog</div>
                  <p className={styles.menuItemText}>The latest posts and changes</p>
                </div>
              </Link>
            </li>

            {/* Changelog */}
            <li>
              <Link 
                href="/changelog" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.28497 1.5H13V12C13 12.5523 12.5523 13 12 13H6.28497L6.28497 1.5ZM5.03497 1.5H3V12C3 12.5523 3.44772 13 4 13H5.03497L5.03497 1.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Changelog</div>
                  <p className={styles.menuItemText}>See what shipped</p>
                </div>
              </Link>
            </li>

            {/* Press */}
            <li>
              <Link 
                href="/press" 
                className={styles.dropdownItem}
              >
                <div className={styles.dropdownIcon}>
                  <svg data-testid="geist-icon" height="16" strokeLinejoin="round" viewBox="0 0 16 16" width="16">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6 2.5H10C10.2761 2.5 10.5 2.72386 10.5 3V4H5.5V3C5.5 2.72386 5.72386 2.5 6 2.5ZM4 4V3C4 1.89543 4.89543 1 6 1H10C11.1046 1 12 1.89543 12 3V4H14.5H16V5.5V13.5C16 14.8807 14.8807 16 13.5 16H2.5C1.11929 16 0 14.8807 0 13.5V5.5V4H1.5H4Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Press</div>
                  <p className={styles.menuItemText}>Read the latest news</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ResourcesDropdown;
