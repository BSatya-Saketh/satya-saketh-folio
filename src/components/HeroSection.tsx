import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 fade-in">
            <img
              src={profilePhoto}
              alt="Satya Saketh Bollepally"
              className="w-40 h-40 rounded-full mx-auto border-4 border-white/20 shadow-glow object-cover"
            />
          </div>

          {/* Main Content */}
          <div className="fade-in-up fade-in-delay-1">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Satya Saketh
              <span className="block text-accent">Bollepally</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-2 fade-in-delay-2">
              Computer Science Student
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto fade-in-delay-3">
              Passionate about software development, machine learning, and creating innovative solutions. 
              Currently pursuing B.Tech in Computer Science at SR University.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-delay-3">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('projects')}
              className="bg-white text-primary hover:bg-white/90 shadow-elegant hover-lift"
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="hero"
              className="shadow-elegant hover-lift"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 fade-in-delay-3">
            <a
              href="https://github.com/BSatya-Saketh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-smooth hover-lift p-2"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/satya-saketh-bollepally"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-smooth hover-lift p-2"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:b.satyasaketh@gmail.com"
              className="text-white/80 hover:text-white transition-smooth hover-lift p-2"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;