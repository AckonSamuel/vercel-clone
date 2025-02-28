import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

const SolutionsDropdown = () => {
  return (
    <div className={styles.dropdownMenu} data-type="solutions">
      <ul className={styles.dropdownColumns}>
        {/* Use Cases Column */}
        <li className={styles.dropdownColumn}>
          <h5 className={styles.dropdownHeading} id="header-use-case">Use Cases</h5>
          <ul aria-describedby="header-use-case" className={styles.columnReset}>
            {/* AI Apps */}
            <li>
              <Link href="/solutions/ai-apps" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2.5 0.5V0H3.5V0.5C3.5 1.60457 4.39543 2.5 5.5 2.5H6V3V3.5H5.5C4.39543 3.5 3.5 4.39543 3.5 5.5V6H3H2.5V5.5C2.5 4.39543 1.60457 3.5 0.5 3.5H0V3V2.5H0.5C1.60457 2.5 2.5 1.60457 2.5 0.5Z" fill="currentColor"></path>
                    <path d="M14.5 4.5V5H13.5V4.5C13.5 3.94772 13.0523 3.5 12.5 3.5H12V3V2.5H12.5C13.0523 2.5 13.5 2.05228 13.5 1.5V1H14H14.5V1.5C14.5 2.05228 14.9477 2.5 15.5 2.5H16V3V3.5H15.5C14.9477 3.5 14.5 3.94772 14.5 4.5Z" fill="currentColor"></path>
                    <path d="M8.40706 4.92939L8.5 4H9.5L9.59294 4.92939C9.82973 7.29734 11.7027 9.17027 14.0706 9.40706L15 9.5V10.5L14.0706 10.5929C11.7027 10.8297 9.82973 12.7027 9.59294 15.0706L9.5 16H8.5L8.40706 15.0706C8.17027 12.7027 6.29734 10.8297 3.92939 10.5929L3 10.5V9.5L3.92939 9.40706C6.29734 9.17027 8.17027 7.29734 8.40706 4.92939Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>AI Apps</div>
                  <p className={styles.menuItemText}>Deploy at the speed of AI</p>
                </div>
              </Link>
            </li>

            {/* Composable Commerce */}
            <li>
              <Link href="/solutions/composable-commerce" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7496 1.89953C13.2746 1.32956 12.571 1 11.8291 1H4.17093C3.42897 1 2.72535 1.32956 2.25037 1.89955L1.07944 3.30467C0.705039 3.75395 0.5 4.32028 0.5 4.90512V5V13.5V15H2H6.04951H9.95049H14H15.5V13.5V5V4.90513C15.5 4.32029 15.295 3.75395 14.9205 3.30466L13.7496 1.89953ZM14 5V4.90513C14 4.67119 13.918 4.44466 13.7682 4.26494L14.9205 3.30466L13.7682 4.26494L12.5973 2.85981C12.4073 2.63182 12.1258 2.5 11.8291 2.5H4.17093C3.87415 2.5 3.5927 2.63182 3.4027 2.85982L2.23178 4.26494C2.08202 4.44465 2 4.67119 2 4.90512V5C2 5.82843 2.67157 6.5 3.5 6.5C4.32843 6.5 5 5.82843 5 5H6.5C6.5 5.82843 7.17157 6.5 8 6.5C8.82843 6.5 9.5 5.82843 9.5 5H11C11 5.82843 11.6716 6.5 12.5 6.5C13.3284 6.5 14 5.82843 14 5ZM14 7.59865C13.5587 7.85391 13.0464 8 12.5 8C11.604 8 10.7997 7.60718 10.25 6.98437C9.70029 7.60718 8.89602 8 8 8C7.10398 8 6.29971 7.60718 5.75 6.98437C5.20029 7.60718 4.39602 8 3.5 8C2.95357 8 2.44126 7.85391 2 7.59865V13.5H6V12C6 10.8954 6.89543 10 8 10C9.10457 10 10 10.8954 10 12V13.5H14V7.59865ZM8.5 12V13.5H7.5V12C7.5 11.7239 7.72386 11.5 8 11.5C8.27614 11.5 8.5 11.7239 8.5 12Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Composable Commerce</div>
                  <p className={styles.menuItemText}>Power storefronts that convert</p>
                </div>
              </Link>
            </li>

            {/* Marketing Sites */}
            <li>
              <Link href="/solutions/marketing-sites" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 1v11.75A2.25 2.25 0 0 0 3.25 15H15v-1.5H3.25a.75.75 0 0 1-.75-.75V1H1Zm13.297 5.013.513-.547-1.094-1.026-.513.547-3.22 3.434-2.276-2.275a1 1 0 0 0-1.414 0L4.22 8.22l-.53.53 1.06 1.06.53-.53L7 7.56l2.287 2.287a1 1 0 0 0 1.437-.023l3.573-3.811Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Marketing Sites</div>
                  <p className={styles.menuItemText}>Launch campaigns fast</p>
                </div>
              </Link>
            </li>

            {/* Multi-tenant Platforms */}
            <li>
              <Link href="/solutions/multi-tenant-saas" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1 3.75C1 2.23122 2.23122 1 3.75 1C5.26878 1 6.5 2.23122 6.5 3.75V5H9.5V3.75C9.5 2.23122 10.7312 1 12.25 1C13.7688 1 15 2.23122 15 3.75C15 5.26878 13.7688 6.5 12.25 6.5H11V9.5H12.25C13.7688 9.5 15 10.7312 15 12.25C15 13.7688 13.7688 15 12.25 15C10.7312 15 9.5 13.7688 9.5 12.25V11H6.5V12.25C6.5 13.7688 5.26878 15 3.75 15C2.23122 15 1 13.7688 1 12.25C1 10.7312 2.23122 9.5 3.75 9.5H5V6.5H3.75C2.23122 6.5 1 5.26878 1 3.75ZM11 5H12.25C12.9404 5 13.5 4.44036 13.5 3.75C13.5 3.05964 12.9404 2.5 12.25 2.5C11.5596 2.5 11 3.05964 11 3.75V5ZM9.5 6.5H6.5V9.5H9.5V6.5ZM11 12.25V11H12.25C12.9404 11 13.5 11.5596 13.5 12.25C13.5 12.9404 12.9404 13.5 12.25 13.5C11.5596 13.5 11 12.9404 11 12.25ZM5 11H3.75C3.05964 11 2.5 11.5596 2.5 12.25C2.5 12.9404 3.05964 13.5 3.75 13.5C4.44036 13.5 5 12.9404 5 12.25V11ZM5 3.75V5H3.75C3.05964 5 2.5 4.44036 2.5 3.75C2.5 3.05964 3.05964 2.5 3.75 2.5C4.44036 2.5 5 3.05964 5 3.75Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Multi-tenant Platforms</div>
                  <p className={styles.menuItemText}>Scale apps with one codebase</p>
                </div>
              </Link>
            </li>

            {/* Web Apps */}
            <li>
              <Link href="/solutions/web-apps" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.5 2.5H14.5V12.5C14.5 13.0523 14.0523 13.5 13.5 13.5H2.5C1.94772 13.5 1.5 13.0523 1.5 12.5V2.5ZM0 1H1.5H14.5H16V2.5V12.5C16 13.8807 14.8807 15 13.5 15H2.5C1.11929 15 0 13.8807 0 12.5V2.5V1ZM3.75 5.5C4.16421 5.5 4.5 5.16421 4.5 4.75C4.5 4.33579 4.16421 4 3.75 4C3.33579 4 3 4.33579 3 4.75C3 5.16421 3.33579 5.5 3.75 5.5ZM7 4.75C7 5.16421 6.66421 5.5 6.25 5.5C5.83579 5.5 5.5 5.16421 5.5 4.75C5.5 4.33579 5.83579 4 6.25 4C6.66421 4 7 4.33579 7 4.75ZM8.75 5.5C9.16421 5.5 9.5 5.16421 9.5 4.75C9.5 4.33579 9.16421 4 8.75 4C8.33579 4 8 4.33579 8 4.75C8 5.16421 8.33579 5.5 8.75 5.5Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Web Apps</div>
                  <p className={styles.menuItemText}>Ship features, not infrastructure</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>

        {/* Users Column */}
        <li className={styles.dropdownColumn}>
          <h5 className={styles.dropdownHeading} id="heading-user-solutions">Users</h5>
          <ul aria-describedby="heading-user-solutions" className={styles.columnReset}>
            {/* Platform Engineers */}
            <li>
              <Link href="/solutions/platform-engineering" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12.798 1.24199L13.3283 1.77232L14.0567 1.04389L13.1398 0.574402L12.798 1.24199ZM9.95705 4.0829L9.42672 3.55257L9.95705 4.0829ZM6.5844 6.95555L7.11473 7.48588L7.46767 7.13295L7.27837 6.67111L6.5844 6.95555ZM1.49995 12.04L2.03027 12.5703L2.03028 12.5703L1.49995 12.04ZM1.49994 14.54L0.969615 15.0703H0.969615L1.49994 14.54ZM3.99995 14.54L4.53028 15.0703L3.99995 14.54ZM9.10147 9.43848L9.37633 8.74066L8.91883 8.56046L8.57114 8.90815L9.10147 9.43848ZM14.7848 3.25519L15.4568 2.92229L14.9931 1.98617L14.2544 2.72486L14.7848 3.25519ZM11.9571 6.0829L11.4267 5.55257L11.9571 6.0829ZM10.5428 6.0829L11.0732 5.55257L11.0732 5.55257L10.5428 6.0829ZM9.95705 5.49711L9.42672 6.02744L9.42672 6.02745L9.95705 5.49711ZM12.2676 0.711655L9.42672 3.55257L10.4874 4.61323L13.3283 1.77232L12.2676 0.711655ZM10.7499 1.5C11.3659 1.5 11.9452 1.64794 12.4562 1.90957L13.1398 0.574402C12.4221 0.206958 11.6091 0 10.7499 0V1.5ZM6.99994 5.25C6.99994 3.17893 8.67888 1.5 10.7499 1.5V0C7.85045 0 5.49994 2.3505 5.49994 5.25H6.99994ZM7.27837 6.67111C7.09913 6.23381 6.99994 5.75443 6.99994 5.25H5.49994C5.49994 5.95288 5.63848 6.62528 5.89043 7.23999L7.27837 6.67111ZM6.05407 6.42522L0.969615 11.5097L2.03028 12.5703L7.11473 7.48588L6.05407 6.42522ZM0.969616 11.5097C-0.0136344 12.4929 -0.013635 14.0871 0.969615 15.0703L2.03027 14.0097C1.63281 13.6122 1.63281 12.9678 2.03027 12.5703L0.969616 11.5097ZM0.969615 15.0703C1.95287 16.0536 3.54703 16.0536 4.53028 15.0703L3.46962 14.0097C3.07215 14.4071 2.42774 14.4071 2.03027 14.0097L0.969615 15.0703ZM4.53028 15.0703L9.6318 9.96881L8.57114 8.90815L3.46962 14.0097L4.53028 15.0703ZM10.7499 9C10.2637 9 9.80071 8.90782 9.37633 8.74066L8.82661 10.1363C9.4232 10.3713 10.0724 10.5 10.7499 10.5V9ZM14.4999 5.25C14.4999 7.32107 12.821 9 10.7499 9V10.5C13.6494 10.5 15.9999 8.1495 15.9999 5.25H14.4999ZM14.1127 3.5881C14.3604 4.08811 14.4999 4.65168 14.4999 5.25H15.9999C15.9999 4.4156 15.8047 3.62465 15.4568 2.92229L14.1127 3.5881ZM12.4874 6.61323L15.3151 3.78552L14.2544 2.72486L11.4267 5.55257L12.4874 6.61323ZM10.0125 6.61323C10.6959 7.29665 11.804 7.29665 12.4874 6.61323L11.4267 5.55257C11.3291 5.6502 11.1708 5.6502 11.0732 5.55257L10.0125 6.61323ZM9.42672 6.02745L10.0125 6.61323L11.0732 5.55257L10.4874 4.96678L9.42672 6.02745ZM9.42672 3.55257C8.7433 4.23599 8.7433 5.34403 9.42672 6.02744L10.4874 4.96678C10.3898 4.86915 10.3897 4.71086 10.4874 4.61323L9.42672 3.55257Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Platform Engineers</div>
                  <p className={styles.menuItemText}>Automate away repetition</p>
                </div>
              </Link>
            </li>
            
            {/* Design Engineers */}
            <li>
              <Link href="/solutions/design-engineering" className={styles.dropdownItem}>
                <div className={styles.dropdownIcon}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" strokeLinejoin="round" style={{color: "currentcolor"}}>
                    <path d="M9 7L12.5 2.5" stroke="#E5484D" strokeWidth="1.5"></path>
                    <path d="M10.5 9.5L15.75 10.5" stroke="#52AEFF" strokeWidth="1.5"></path>
                    <path d="M10 8L15.75 6" stroke="#45DEC4" strokeWidth="1.5"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.14568 3.56625L7 2L7.85432 3.56625L12.1818 11.5L13 13H11.2914H2.70863H1L1.81818 11.5L3.31818 8.75H0V7.25H4.13636L6.14568 3.56625ZM3.52681 11.5L7 5.13249L10.4732 11.5H3.52681Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div className={styles.menuSubLinkContent}>
                  <div className={styles.menuItemHeading}>Design Engineers</div>
                  <p className={styles.menuItemText}>Deploy for every idea</p>
                </div>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SolutionsDropdown;
