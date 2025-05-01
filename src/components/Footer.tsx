import React from 'react';
import { Github, Twitter, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="font-bold text-xl text-white">MARS</span>
            </div>
            <p className="text-slate-400 mb-6">
              MARS is a discovery platform, archive service, and analysis toolkit for data about research software 
              and related researchers and papers.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/mars-project" icon={<Github size={20} />} />
              <SocialLink href="https://twitter.com/mars_project" icon={<Twitter size={20} />} />
              <SocialLink href="mailto:info@mars-project.org" icon={<Mail size={20} />} />
              <SocialLink href="https://mars-project.org" icon={<Globe size={20} />} />
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <FooterLink href="#features" text="Features" />
              <FooterLink href="#audience" text="For Whom" />
              <FooterLink href="#benefits" text="Benefits" />
              <FooterLink href="#api" text="API" />
              <FooterLink href="#get-started" text="Get Started" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <FooterLink href="#about" text="Our Mission" />
              <FooterLink href="https://github.com/mars-project" text="Open Source" />
              <FooterLink href="#team" text="Team" />
              <FooterLink href="#contact" text="Contact" />
              <FooterLink href="#privacy" text="Privacy Policy" />
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © 2025 MARS Project. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-2 md:mt-0">
            MARS is in the process of becoming a 501(c)3 US-based non-profit.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <a 
      href={href}
      className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white transition duration-300"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
}

const FooterLink = ({ href, text }: FooterLinkProps) => {
  return (
    <li>
      <a href={href} className="text-slate-400 hover:text-indigo-400 transition duration-300">
        {text}
      </a>
    </li>
  );
};

export default Footer;