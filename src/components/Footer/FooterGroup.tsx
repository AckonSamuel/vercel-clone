import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import { SocialIcon } from './icons/SocialIcon';

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
  icon?: 'github' | 'linkedin' | 'twitter' | 'youtube';
}

interface FooterGroupProps {
  title: string;
  links: FooterLink[];
  social?: boolean;
}

export const FooterGroup: React.FC<FooterGroupProps> = ({ title, links, social }) => {
  return (
    <div className={styles.group}>
      <h2 className={styles.header}>{title}</h2>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href} className={styles.item}>
            <Link
              href={link.href}
              className={`${styles.link} ${social ? styles.socialIcon : ''}`}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener' : undefined}
            >
              {link.icon && <SocialIcon type={link.icon} />}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
