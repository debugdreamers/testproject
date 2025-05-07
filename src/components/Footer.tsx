import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-primary-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-primary-200">
              Building innovative digital solutions for businesses since 2025.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              <FooterLink>Web Development</FooterLink>
              <FooterLink>Mobile Development</FooterLink>
              <FooterLink>UI/UX Design</FooterLink>
              <FooterLink>Cloud Services</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Team</FooterLink>
              <FooterLink>Careers</FooterLink>
              <FooterLink>Contact</FooterLink>
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
}

const FooterLink: React.FC<FooterLinkProps> = ({ children }) => {
  return (
    <li>
      <a 
        href="#" 
        className="text-primary-300 hover:text-white transition-colors"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;