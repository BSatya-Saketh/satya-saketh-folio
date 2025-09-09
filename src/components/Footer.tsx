import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/BSatya-Saketh',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/satya-saketh-bollepally',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:b.satyasaketh@gmail.com',
      label: 'Email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Satya Saketh Bollepally</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Computer Science student passionate about creating innovative software solutions 
              and contributing to the tech community.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/70 hover:text-accent transition-smooth p-2 hover:scale-110"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'contact', label: 'Contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-primary-foreground/80 hover:text-accent transition-smooth text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📧 b.satyasaketh@gmail.com</p>
              <p>📱 +91 9515754999</p>
              <p>📍 Warangal, India</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-primary-foreground/60">
                Open to internship opportunities and exciting projects!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} Satya Saketh Bollepally. All rights reserved.
            </p>
            <p className="text-primary-foreground/70 text-sm flex items-center mt-2 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-accent" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;