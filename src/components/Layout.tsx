import React from 'react';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <footer className="geist-footer_footer__pIcfx footer_marketingFooterContainer__cJMpP" data-version="v1">
        {/* Footer content will go here */}
      </footer>
    </>
  );
};

export default Layout;
