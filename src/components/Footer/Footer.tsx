import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import { FooterGroup } from './FooterGroup';
import { ThemeSwitcher } from './ThemeSwitcher';
import { StatusIndicator } from './StatusIndicator';
import { VercelLogo } from '@/components/icons/VercelLogo';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer} data-version="v1" data-variant="subtle">
            <nav aria-label="Vercel Directory">
                <div className={styles.marketingFooter}>
                    <FooterGroup
                        title="Products"
                        links={[
                            { href: '/ai', label: 'AI' },
                            { href: '/enterprise', label: 'Enterprise' },
                            { href: '/fluid', label: 'Fluid Compute' },
                            { href: '/solutions/nextjs', label: 'Next.js' },
                            { href: '/products/observability', label: 'Observability' },
                            { href: '/products/previews', label: 'Previews' },
                            { href: '/products/rendering', label: 'Rendering' },
                            { href: '/security', label: 'Security' },
                            { href: '/solutions/turborepo', label: 'Turbo' },
                            { href: 'https://v0.dev/', label: 'v0', external: true }
                        ]}
                    />

                    <FooterGroup
                        title="Resources"
                        links={[
                            { href: 'https://vercel.community/', label: 'Community', external: true },
                            { href: '/docs', label: 'Docs' },
                            { href: '/guides', label: 'Guides' },
                            { href: '/help', label: 'Help' },
                            { href: '/integrations', label: 'Integrations' },
                            { href: '/pricing', label: 'Pricing' },
                            { href: '/resources', label: 'Resources' },
                            { href: '/partners/solution-partners', label: 'Solution Partners' },
                            { href: '/templates', label: 'Templates' }
                        ]}
                    />

                    <FooterGroup
                        title="Company"
                        links={[
                            { href: '/about', label: 'About' },
                            { href: '/blog', label: 'Blog' },
                            { href: '/careers', label: 'Careers' },
                            { href: '/changelog', label: 'Changelog' },
                            { href: '/contact', label: 'Contact Us' },
                            { href: '/customers', label: 'Customers' },
                            { href: '/partners', label: 'Partners' },
                            { href: '/legal/privacy-policy', label: 'Privacy Policy' }
                        ]}
                    />

                    <FooterGroup
                        title="Social"
                        social={true}
                        links={[
                            { href: 'https://github.com/vercel', label: 'GitHub', icon: 'github' },
                            { href: 'https://linkedin.com/company/vercel', label: 'LinkedIn', icon: 'linkedin' },
                            { href: 'https://x.com/vercel', label: 'Twitter', icon: 'twitter' },
                            { href: 'https://youtube.com/@VercelHQ', label: 'YouTube', icon: 'youtube' }
                        ]}
                    />

                    <Link href="/home" className={styles.logoVercel}>
                        <VercelLogo />
                    </Link>
                </div>

                <div className={styles.statusRow}>
                    <StatusIndicator />
                    <ThemeSwitcher />
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
