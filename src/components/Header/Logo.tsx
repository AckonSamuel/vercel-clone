import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

const Logo: React.FC = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href="/" className={styles.logoLink}>
        <Image 
          src="/vercel-logotype-light.cf7eca76.svg"
          alt="Vercel Logo"
          width={90}
          height={24}
          priority
          className={styles.lightThemeLogo}
        />
        <Image 
          src="/vercel-logotype-dark.01246f11.svg"
          alt="Vercel Logo"
          width={90}
          height={24}
          priority
          className={styles.darkThemeLogo}
        />
      </Link>
    </div>
  );
};

export default Logo;
