import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';
import { useTheme } from '@/context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  // Handle scroll effect for transparent until scroll header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setMobileSubmenuOpen(null);
  };

  // Toggle mobile submenu
  const toggleMobileSubmenu = (submenu: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === submenu ? null : submenu);
  };

  return (
    <header className={`${styles.wrapper} ${styles.sticky} ${styles.canGrow} ${styles.transparentUntilScroll} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/vc-ap-vercel-marketing/_next/static/media/vercel-logotype-light.cf7eca76.svg"
              alt="Vercel Logo"
              width={120}
              height={24}
              priority
              className={styles.darkThemeLogo}
            />
            <Image 
              src="/vc-ap-vercel-marketing/_next/static/media/vercel-logotype-dark.01246f11.svg"
              alt="Vercel Logo"
              width={120}
              height={24}
              priority
              className={styles.lightThemeLogo}
            />
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className={styles.mainNav}>
          <div className={styles.navGroup}>
            {/* Products Dropdown - Hover activated */}
            <div className={styles.dropdownContainer}>
              <button className={styles.navDropdown}>
                Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.dropdownArrow}>
                  <path d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z" fill="currentColor"></path>
                </svg>
              </button>
              <div className={styles.dropdownMenu} data-type="products">
                <div className={styles.dropdownSection}>
                  <h4 className={styles.dropdownHeading}>Frontend Cloud</h4>
                  <div className={styles.dropdownGrid}>
                    <Link href="/analytics" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Analytics</div>
                        <div className={styles.dropdownItemDescription}>Real-time insights for your frontend</div>
                      </div>
                    </Link>
                    <Link href="/edge-functions" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M3 6L12 2L21 6V18L12 22L3 18V6Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Edge Functions</div>
                        <div className={styles.dropdownItemDescription}>Dynamic functionality without complexity</div>
                      </div>
                    </Link>
                    <Link href="/storage" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V8C22 9.10457 21.1046 10 20 10H4C2.89543 10 2 9.10457 2 8V6Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M2 14C2 12.8954 2.89543 12 4 12H20C21.1046 12 22 12.8954 22 14V16C22 17.1046 21.1046 18 20 18H4C2.89543 18 2 17.1046 2 16V14Z" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Storage</div>
                        <div className={styles.dropdownItemDescription}>Persist and serve user-generated content</div>
                      </div>
                    </Link>
                    <Link href="/previews" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19M5 12C3.89543 12 3 11.1046 3 10V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V10C21 11.1046 20.1046 12 19 12M5 12C3.89543 12 3 12.8954 3 14V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V14C21 12.8954 20.1046 12 19 12" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Previews</div>
                        <div className={styles.dropdownItemDescription}>Zero-config preview deployments</div>
                      </div>
                    </Link>
                    <Link href="/infrastructure" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3L21 8V16L12 21L3 16V8L12 3Z" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Infrastructure</div>
                        <div className={styles.dropdownItemDescription}>Global, fast, and secure by default</div>
                      </div>
                    </Link>
                    <Link href="/ai-sdk" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M10 5H8.2C7.08 5 6.52 5 6.092 5.218C5.716 5.41 5.41 5.716 5.218 6.092C5 6.52 5 7.08 5 8.2V15.8C5 16.92 5 17.48 5.218 17.908C5.41 18.284 5.716 18.59 6.092 18.782C6.52 19 7.08 19 8.2 19H10M10 12H19M19 12L15 8M19 12L15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>AI SDK</div>
                        <div className={styles.dropdownItemDescription}>Add AI to your frontend web apps</div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className={styles.dropdownFooter}>
                  <Link href="/all-products" className={styles.dropdownFooterLink}>
                    <span>View all products</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6.5 3.5L11 8L6.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Solutions Dropdown - Hover activated */}
            <div className={styles.dropdownContainer}>
              <button className={styles.navDropdown}>
                Solutions
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.dropdownArrow}>
                  <path d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z" fill="currentColor"></path>
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownSection}>
                  <h4 className={styles.dropdownHeading}>By Framework</h4>
                  <div className={styles.dropdownList}>
                    <Link href="/solutions/nextjs" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Next.js</div>
                        <div className={styles.dropdownItemDescription}>The React framework for production</div>
                      </div>
                    </Link>
                    <Link href="/solutions/react" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M21 12C21 14.5 16.9706 18 12 18C7.02944 18 3 14.5 3 12C3 9.5 7.02944 6 12 6C16.9706 6 21 9.5 21 12Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M15 4.5C14.6565 6.97254 13.6057 9.30192 12 11.3001C10.3943 13.2983 8.27862 14.9365 5.87222 16.0482" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M18.1278 15.9518C15.7214 14.8401 13.6057 13.2019 12 11.2037C10.3943 9.20545 9.34348 6.87607 9 4.40353" stroke="currentColor" strokeWidth="1.5"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>React</div>
                        <div className={styles.dropdownItemDescription}>A JavaScript library for building user interfaces</div>
                      </div>
                    </Link>
                    <Link href="/solutions/svelte" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M16.7639 3.85337C14.7548 1.84428 11.522 1.84428 9.51286 3.85337L3 10.3662L12 19.3662L21 10.3662L16.7639 3.85337Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                          <path d="M16.8306 15.2337L16.7639 3.85337C14.7548 1.84428 11.522 1.84428 9.51286 3.85337L9.34619 15.3004C9.33856 16.7264 10.4736 17.8944 11.8996 17.9021C13.3256 17.9097 14.5 16.7502 14.5 15.3242V11.3661C14.5 9.93408 13.3299 8.76611 11.8978 8.76734C10.4657 8.76856 9.29636 9.93875 9.29636 11.3708" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Svelte</div>
                        <div className={styles.dropdownItemDescription}>Cybernetically enhanced web apps</div>
                      </div>
                    </Link>
                    <Link href="/solutions/vue" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L18 14H22L12 22L2 14H6L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 2L8 14H16L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Vue</div>
                        <div className={styles.dropdownItemDescription}>The progressive JavaScript framework</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className={styles.dropdownContainer}>
              <button className={styles.navDropdown}>
                Resources
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.dropdownArrow}>
                  <path d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z" fill="currentColor"></path>
                </svg>
              </button>
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownSection}>
                  <h4 className={styles.dropdownHeading}>Resources</h4>
                  <div className={styles.dropdownList}>
                    <Link href="/docs" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Documentation</div>
                        <div className={styles.dropdownItemDescription}>Start integrating with Vercel</div>
                      </div>
                    </Link>
                    <Link href="/guides" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Guides</div>
                        <div className={styles.dropdownItemDescription}>Learn concepts and techniques</div>
                      </div>
                    </Link>
                    <Link href="/templates" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M12.1 2H11.9C11.5134 2 11.2 2.31342 11.2 2.7V4.8C11.2 5.18658 11.5134 5.5 11.9 5.5H12.1C12.4866 5.5 12.8 5.18658 12.8 4.8V2.7C12.8 2.31342 12.4866 2 12.1 2ZM17.4 11.2H19.5C19.8866 11.2 20.2 11.5134 20.2 11.9V12.1C20.2 12.4866 19.8866 12.8 19.5 12.8H17.4C17.0134 12.8 16.7 12.4866 16.7 12.1V11.9C16.7 11.5134 17.0134 11.2 17.4 11.2ZM4.5 11.2H6.6C6.98658 11.2 7.3 11.5134 7.3 11.9V12.1C7.3 12.4866 6.98658 12.8 6.6 12.8H4.5C4.11342 12.8 3.8 12.4866 3.8 12.1V11.9C3.8 11.5134 4.11342 11.2 4.5 11.2ZM15.8839 4.13618L15.7439 4.27618C15.4732 4.54691 15.4732 4.98618 15.7439 5.25691L17.1839 6.69691C17.4546 6.96765 17.8939 6.96765 18.1646 6.69691L18.3046 6.55691C18.5753 6.28618 18.5753 5.84691 18.3046 5.57618L16.8646 4.13618C16.5939 3.86544 16.1546 3.86544 15.8839 4.13618ZM5.69546 17.3031L5.83546 17.1631C6.1062 16.8924 6.1062 16.4531 5.83546 16.1824L4.39546 14.7424C4.12473 14.4717 3.68546 14.4717 3.41473 14.7424L3.27473 14.8824C3.00399 15.1531 3.00399 15.5924 3.27473 15.8631L4.71473 17.3031C4.98546 17.5738 5.42473 17.5738 5.69546 17.3031ZM18.3046 18.4231L18.1646 18.2831C17.8939 18.0124 17.4546 18.0124 17.1839 18.2831L15.7439 19.7231C15.4732 19.9938 15.4732 20.4331 15.7439 20.7038L15.8839 20.8438C16.1546 21.1146 16.5939 21.1146 16.8646 20.8438L18.3046 19.4038C18.5753 19.1331 18.5753 18.6938 18.3046 18.4231ZM4.71473 6.69691L3.27473 5.25691C3.00399 4.98618 3.00399 4.54691 3.27473 4.27618L3.41473 4.13618C3.68546 3.86544 4.12473 3.86544 4.39546 4.13618L5.83546 5.57618C6.1062 5.84691 6.1062 6.28618 5.83546 6.55691L5.69546 6.69691C5.42473 6.96765 4.98546 6.96765 4.71473 6.69691ZM12.1 18.5H11.9C11.5134 18.5 11.2 18.8134 11.2 19.2V21.3C11.2 21.6866 11.5134 22 11.9 22H12.1C12.4866 22 12.8 21.6866 12.8 21.3V19.2C12.8 18.8134 12.4866 18.5 12.1 18.5Z" fill="currentColor" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Templates</div>
                        <div className={styles.dropdownItemDescription}>Ready-to-deploy starter templates</div>
                      </div>
                    </Link>
                    <Link href="/blog" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor" />
                          <path d="M14 17H7V15H14V17ZM17 13H7V11H17V13ZM17 9H7V7H17V9Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Blog</div>
                        <div className={styles.dropdownItemDescription}>The latest updates and articles</div>
                      </div>
                    </Link>
                    <Link href="/learn" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Learn</div>
                        <div className={styles.dropdownItemDescription}>Learn frontend development</div>
                      </div>
                    </Link>
                    <Link href="/community" className={styles.dropdownItem}>
                      <div className={styles.dropdownIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M3 21C3.95728 17.9237 6.41998 16 9.5 16H14.5C17.58 16 20.0427 17.9237 21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <div className={styles.dropdownItemTitle}>Community</div>
                        <div className={styles.dropdownItemDescription}>Connect with the Vercel community</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/enterprise" className={styles.navLink}>Enterprise</Link>
            <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          </div>
          
          <div className={styles.navDivider}></div>

          <div className={styles.secondaryNav}>
            <div className={styles.searchBar}>
              <button className={styles.searchButton}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.searchIcon}>
                  <path d="M10.5 9.5L13.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M6.5 11C8.98528 11 11 8.98528 11 6.5C11 4.01472 8.98528 2 6.5 2C4.01472 2 2 4.01472 2 6.5C2 8.98528 4.01472 11 6.5 11Z" stroke="currentColor" strokeWidth="1.5"></path>
                </svg>
                <span className={styles.searchText}>Search...</span>
                <div className={styles.searchShortcut}>⌘K</div>
              </button>
            </div>
          </div>
        </nav>

        {/* Auth Actions */}
        <div className={styles.authButtons}>
          <ThemeToggle className={styles.themeToggle} />
          <Link href="/login" className={styles.loginButton}>Log in</Link>
          <Link href="/signup" className={styles.signupButton}>Sign Up</Link>
          <button 
            className={styles.menuButton} 
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
              <path d="M2 11.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            <div className={styles.mobileMenuContainer}>
              <div className={styles.mobileMenuHeader}>
                <button className={styles.mobileMenuClose} onClick={toggleMobileMenu}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              <div className={styles.mobileMenuContent}>
                <div className={styles.mobileMenuSection}>
                  <h3 className={styles.mobileMenuHeading}>Navigation</h3>
                  <Link href="/features" className={styles.mobileMenuItem}>Features</Link>
                  <Link href="/resources" className={styles.mobileMenuItem}>Resources</Link>
                  <Link href="/pricing" className={styles.mobileMenuItem}>Pricing</Link>
                  <Link href="/enterprise" className={styles.mobileMenuItem}>Enterprise</Link>
                </div>
                <div className={styles.mobileMenuDivider}></div>
                <div className={styles.mobileMenuSection}>
                  <h3 className={styles.mobileMenuHeading}>Account</h3>
                  <Link href="/login" className={styles.mobileMenuItem}>Log in</Link>
                  <Link href="/signup" className={styles.mobileMenuSignup}>Sign Up</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
