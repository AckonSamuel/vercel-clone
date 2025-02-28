import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

const ProductsDropdown = () => {
  return (
    <div className={styles.dropdownMenu} data-type="products">
      <ul className={styles.dropdownColumns}>
        {/* DX Platform Column */}
        <li className={styles.dropdownColumn}>
          <h5 className={styles.dropdownHeading} id="header-dx">DX Platform</h5>
          <ul aria-describedby="header-dx" className={styles.columnReset}>
            {/* Previews */}
            <li>
              <Link href="/products/previews" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.5 2.5H1.5V5.005H14.5V2.5ZM14.5 6.255H6.245V13.5H13.5C14.0523 13.5 14.5 13.0523 14.5 12.5V6.255ZM4.995 6.255H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H4.995V6.255ZM1.5 1H0V2.5V12.5C0 13.8807 1.11929 15 2.5 15H13.5C14.8807 15 16 13.8807 16 12.5V2.5V1H14.5H1.5Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Previews</div>
                  <p className={styles.menuItemText}>Helping teams ship 6× faster</p>
                </div>
              </Link>
            </li>

            {/* AI */}
            <li>
              <Link href="/ai" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path>
                    <path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path>
                    <path d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>AI</div>
                  <p className={styles.menuItemText}>Powering breakthroughs</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Managed Infrastructure Column */}
        <li className={styles.dropdownColumn}>
          <h5 className={styles.dropdownHeading} id="header-managed-infrastructure">Managed Infrastructure</h5>
          <ul aria-describedby="header-managed-infrastructure" className={styles.columnReset}>
            {/* Fluid compute */}
            <li>
              <Link href="/fluid" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 2H9V0.75V0H10.5V0.75V2H13C13.5523 2 14 2.44772 14 3V5.5H15.25H16V7H15.25H14V9H15.25H16V10.5H15.25H14V13C14 13.5523 13.5523 14 13 14H10.5V15.25V16H9V15.25V14H7V15.25V16H5.5V15.25V14H3C2.44772 14 2 13.5523 2 13V10.5H0.75H0V9H0.75H2V7H0.75H0V5.5H0.75H2V3C2 2.44772 2.44772 2 3 2H5.5V0.75V0H7V0.75V2ZM3.5 8.98228V3.5H12.5V9H10C9.56114 9 9.29513 8.85208 9.13685 8.68588C8.96919 8.50984 8.875 8.26309 8.875 8C8.875 7.73691 8.96919 7.49016 9.13685 7.31412C9.29513 7.14792 9.56114 7 10 7V5.5C8.82792 5.5 7.9118 5.74294 7.16034 6.13019C6.41599 6.51379 5.87229 7.01955 5.42887 7.4794C5.29221 7.62111 5.17056 7.75171 5.05789 7.87267L5.05789 7.87267C4.78031 8.17066 4.55724 8.41014 4.2986 8.6132C4.04734 8.81045 3.80061 8.93775 3.5 8.98228ZM3.5 10.4907V12.5H12.5V10.5H10C9.18886 10.5 8.51737 10.2104 8.05065 9.72037C7.59331 9.24016 7.375 8.61191 7.375 8C7.375 7.91436 7.37928 7.8284 7.38788 7.74258C7.06615 7.96886 6.78522 8.23377 6.50863 8.5206C6.41912 8.61343 6.32548 8.71405 6.22828 8.8185L6.22819 8.8186C5.92315 9.14637 5.58298 9.5119 5.22484 9.79305C4.75982 10.1581 4.20727 10.437 3.5 10.4907Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Fluid compute</div>
                  <p className={styles.menuItemText}>Servers, in serverless form</p>
                </div>
              </Link>
            </li>

            {/* Rendering */}
            <li>
              <Link href="/products/rendering" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.268 14.0934C11.9051 13.4838 13.2303 12.2333 13.9384 10.6469C13.1192 10.7941 12.2138 10.9111 11.2469 10.9925C11.0336 12.2005 10.695 13.2621 10.268 14.0934ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.48347 14.4823C8.32384 14.494 8.16262 14.5 8 14.5C7.83738 14.5 7.67616 14.494 7.51654 14.4823C7.5132 14.4791 7.50984 14.4759 7.50647 14.4726C7.2415 14.2165 6.94578 13.7854 6.67032 13.1558C6.41594 12.5744 6.19979 11.8714 6.04101 11.0778C6.67605 11.1088 7.33104 11.125 8 11.125C8.66896 11.125 9.32395 11.1088 9.95899 11.0778C9.80021 11.8714 9.58406 12.5744 9.32968 13.1558C9.05422 13.7854 8.7585 14.2165 8.49353 14.4726C8.49016 14.4759 8.4868 14.4791 8.48347 14.4823ZM11.4187 9.72246C12.5137 9.62096 13.5116 9.47245 14.3724 9.28806C14.4561 8.87172 14.5 8.44099 14.5 8C14.5 7.55901 14.4561 7.12828 14.3724 6.71194C13.5116 6.52755 12.5137 6.37904 11.4187 6.27753C11.4719 6.83232 11.5 7.40867 11.5 8C11.5 8.59133 11.4719 9.16768 11.4187 9.72246ZM10.1525 6.18401C10.2157 6.75982 10.25 7.36805 10.25 8C10.25 8.63195 10.2157 9.24018 10.1525 9.81598C9.46123 9.85455 8.7409 9.875 8 9.875C7.25909 9.875 6.53877 9.85455 5.84749 9.81598C5.7843 9.24018 5.75 8.63195 5.75 8C5.75 7.36805 5.7843 6.75982 5.84749 6.18401C6.53877 6.14545 7.25909 6.125 8 6.125C8.74091 6.125 9.46123 6.14545 10.1525 6.18401ZM11.2469 5.00748C12.2138 5.08891 13.1191 5.20593 13.9384 5.35306C13.2303 3.7667 11.9051 2.51622 10.268 1.90662C10.695 2.73788 11.0336 3.79953 11.2469 5.00748ZM8.48347 1.51771C8.4868 1.52089 8.49016 1.52411 8.49353 1.52737C8.7585 1.78353 9.05422 2.21456 9.32968 2.84417C9.58406 3.42562 9.80021 4.12856 9.95899 4.92219C9.32395 4.89118 8.66896 4.875 8 4.875C7.33104 4.875 6.67605 4.89118 6.04101 4.92219C6.19978 4.12856 6.41594 3.42562 6.67032 2.84417C6.94578 2.21456 7.2415 1.78353 7.50647 1.52737C7.50984 1.52411 7.51319 1.52089 7.51653 1.51771C7.67615 1.50597 7.83738 1.5 8 1.5C8.16262 1.5 8.32384 1.50597 8.48347 1.51771ZM5.73202 1.90663C4.0949 2.51622 2.76975 3.7667 2.06159 5.35306C2.88085 5.20593 3.78617 5.08891 4.75309 5.00748C4.96639 3.79953 5.30497 2.73788 5.73202 1.90663ZM4.58133 6.27753C3.48633 6.37904 2.48837 6.52755 1.62761 6.71194C1.54392 7.12828 1.5 7.55901 1.5 8C1.5 8.44099 1.54392 8.87172 1.62761 9.28806C2.48837 9.47245 3.48633 9.62096 4.58133 9.72246C4.52807 9.16768 4.5 8.59133 4.5 8C4.5 7.40867 4.52807 6.83232 4.58133 6.27753ZM4.75309 10.9925C3.78617 10.9111 2.88085 10.7941 2.06159 10.6469C2.76975 12.2333 4.0949 13.4838 5.73202 14.0934C5.30497 13.2621 4.96639 12.2005 4.75309 10.9925Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Rendering</div>
                  <p className={styles.menuItemText}>Fast, scalable, and reliable</p>
                </div>
              </Link>
            </li>

            {/* Observability */}
            <li>
              <Link href="/products/observability" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.75 1V1.75V14.25V15H7.25V14.25V1.75V1H8.75ZM3.5 9V9.75V14.25V15H2V14.25V9.75V9H3.5ZM14 6.75V6H12.5V6.75V14.25V15H14V14.25V6.75Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Observability</div>
                  <p className={styles.menuItemText}>Trace every step</p>
                </div>
              </Link>
            </li>

            {/* Security */}
            <li>
              <Link href="/security" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.5 4.057V9.52717C3.5 10.9221 4.27429 12.2018 5.50997 12.849L8 14.1533L10.49 12.849C11.7257 12.2018 12.5 10.9221 12.5 9.52717V4.057C12.3094 4.00405 12.1074 3.9513 11.8932 3.89539C11.746 3.85699 11.5932 3.81709 11.4344 3.7746C10.8476 3.61758 10.204 3.43066 9.61101 3.17017C9.02666 2.91351 8.44336 2.56529 8 2.05704C7.55664 2.56529 6.97334 2.91351 6.38899 3.17017C5.79596 3.43066 5.15243 3.61758 4.5656 3.7746C4.40682 3.81709 4.25396 3.85699 4.10684 3.89539C3.89262 3.9513 3.69055 4.00405 3.5 4.057Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Security</div>
                  <p className={styles.menuItemText}>Scale without compromising</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Open Source Column */}
        <li className={styles.dropdownColumn}>
          <h5 className={styles.dropdownHeading} id="header-open-source">Open Source</h5>
          <ul aria-describedby="header-open-source" className={styles.columnReset}>
            {/* Next.js */}
            <li>
              <Link href="/frameworks/nextjs" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg className={styles.invertTheme} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_53_108)">
                      <circle cx="8" cy="8" r="7.375" fill="black" stroke="var(--ds-gray-1000)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"></circle>
                      <path d="M10.63 11V5" stroke="url(#paint0_linear_53_108r53)" strokeWidth="1.25" strokeMiterlimit="1.41421"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.995 5.00087V5H4.745V11H5.995V6.96798L12.3615 14.7076C12.712 14.4793 13.0434 14.2242 13.353 13.9453L5.99527 5.00065L5.995 5.00087Z" fill="url(#paint1_linear_53_108r53)"></path>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_53_108r53" x1="11.13" y1="5" x2="11.13" y2="11" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"></stop>
                        <stop offset="0.609375" stopColor="white" stopOpacity="0.57"></stop>
                        <stop offset="0.796875" stopColor="white" stopOpacity="0"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </linearGradient>
                      <linearGradient id="paint1_linear_53_108r53" x1="9.9375" y1="9.0625" x2="13.5574" y2="13.3992" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </linearGradient>
                      <clipPath id="clip0_53_108">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Next.js</div>
                  <p className={styles.menuItemText}>The native Next.js platform</p>
                </div>
              </Link>
            </li>

            {/* Turborepo */}
            <li>
              <Link href="/solutions/turborepo" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_872_3188)">
                      <path fillRule="evenodd" clipRule="evenodd" d="M8 0V2C11.3137 2 14 4.68629 14 8C14 11.1453 11.5798 13.7254 8.5 13.9795V15.9846C12.6854 15.7265 16 12.2504 16 8C16 3.58172 12.4183 0 8 0ZM7.5 15.9846V13.9795C6.2188 13.8738 5.05174 13.3655 4.12558 12.5815L2.70769 13.9994C4.00133 15.1415 5.66717 15.8716 7.5 15.9846ZM2.00058 13.2923C0.755509 11.882 0 10.0292 0 8H2C2 9.47685 2.53358 10.8291 3.41847 11.8744L2.00058 13.2923Z" fill="url(#paint0_linear_872_3188)"></path>
                      <rect x="4.5" y="4.5" width="7" height="7" rx="3.5" stroke="var(--ds-gray-1000)" fill="transparent" strokeWidth="2"></rect>
                    </g>
                    <defs>
                      <linearGradient id="paint0_linear_872_3188" x1="8.68832" y1="1.98437" x2="1.79792" y2="8.82805" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0096FF"></stop>
                        <stop offset="1" stopColor="#FF1E56"></stop>
                      </linearGradient>
                      <clipPath id="clip0_872_3188">
                        <rect width="16" height="16" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>

                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Turborepo</div>
                  <p className={styles.menuItemText}>Speed with Enterprise scale</p>
                </div>
              </Link>
            </li>

            {/* AI SDK */}
            <li>
              <Link href="https://sdk.vercel.ai/" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 0.154663L8.34601 0.334591L14.596 3.58459L15 3.79466V4.25V11.75V12.2053L14.596 12.4154L8.34601 15.6654L8 15.8453L7.65399 15.6654L1.40399 12.4154L1 12.2053V11.75V4.25V3.79466L1.40399 3.58459L7.65399 0.334591L8 0.154663ZM2.5 11.2947V5.44058L7.25 7.81559V13.7647L2.5 11.2947ZM8.75 13.7647L13.5 11.2947V5.44056L8.75 7.81556V13.7647ZM8 1.84534L12.5766 4.22519L7.99998 6.51352L3.42335 4.2252L8 1.84534Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>AI SDK</div>
                  <p className={styles.menuItemText}>The AI Toolkit for TypeScript</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ProductsDropdown;
