import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="geist-footer_footer__pIcfx footer_marketingFooterContainer__cJMpP p-8 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/templates">Templates</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs">Documentation</Link></li>
              <li><Link href="/guides">Guides</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/api">API</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
              <li><Link href="/trademark">Trademark Policy</Link></li>
              <li><Link href="/security">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vercel Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
