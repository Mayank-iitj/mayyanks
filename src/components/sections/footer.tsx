import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: Linkedin },
    { name: 'X/Twitter', href: 'https://x.com', icon: Twitter },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/#projects' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="bg-background text-foreground" id="contact">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
            Interested in working together?
          </h2>
          <p className="text-base sm:text-lg text-muted">
            Have a project in mind or want to connect? I'd love to hear from you. Let's discuss how we can bring your AI vision to life.
          </p>
        </div>

        <div className="mt-16 mb-20 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm font-medium text-muted uppercase tracking-[0.2em] mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-y-2">
              <a 
                href="mailto:ms1591934@gmail.com" 
                className="text-lg md:text-xl font-medium text-foreground transition-colors hover:text-primary"
              >
                ms1591934@gmail.com
              </a>
              <a 
                href="mailto:b24bs1555@iitj.ac.in" 
                className="text-lg md:text-xl font-medium text-foreground transition-colors hover:text-primary"
              >
                b24bs1555@iitj.ac.in
              </a>
            </div>
          </div>
          <div className="md:text-right">
            <h3 className="text-sm font-medium text-muted uppercase tracking-[0.2em] mb-4 text-left md:text-right">
              Socials
            </h3>
            <div className="flex gap-x-6 justify-start md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-muted transition-colors hover:text-primary"
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-y-6">
          <p className="text-sm text-muted">© {new Date().getFullYear()} Mayank Sharma. All Rights Reserved.</p>
          <nav>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;