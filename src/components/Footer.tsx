import React from 'react';
import Logo from './Logo';

// Footer navigation links for the Company section
const companyLinks = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

const services = [
  { name: 'Web Development', href: '#services' },
  { name: 'Mobile App Development', href: '#services' },
  { name: 'Digital Marketing', href: '#services' },
  { name: 'SEO & Analytics', href: '#services' },
  { name: 'Cloud Solutions', href: '#services' }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-primary-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-primary-200">
              Building innovative digital solutions for businesses since 2024.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
            {services.map(link => (
                <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <FooterLink>Privacy Policy</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
              <FooterLink>Cookie Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm">
            &copy; {new Date().getFullYear()} debugdream. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-primary-300 text-sm">
              Designed with ❤️ by debugdream team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ children, href }) => {
  return (
    <li>
      <a 
        href={href || '#'}
        className="text-primary-300 hover:text-white transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;