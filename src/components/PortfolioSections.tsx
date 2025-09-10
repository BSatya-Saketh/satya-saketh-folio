import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ExternalLink, 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar,
  Code,
  Database,
  Globe,
  Cpu,
  BookOpen,
  MessageSquare,
  Users,
  Brain,
  Building,
  Phone,
  Send,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import profilePhoto from '@/assets/profile-photo.jpg';

// Hero Section Component
export const HeroSection = () => {
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

// About Section Component
export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a dedicated Computer Science student with a passion for technology and innovation. 
            With a strong foundation in programming and a keen interest in machine learning and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Get to know me</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate Computer Science student at SR University with a strong academic record (CGPA: 9.3/10). 
                I love solving complex problems through code and am particularly interested in machine learning, 
                data structures, and full-stack development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey in technology began with curiosity and has evolved into a deep commitment to creating 
                meaningful software solutions. I enjoy working on projects that challenge me to learn new 
                technologies and apply theoretical concepts to real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, I enjoy mentoring fellow students, contributing to open-source projects, 
                and staying updated with the latest trends in technology.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>Warangal, India</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 text-accent" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Education</h3>
            
            {/* Current Education */}
            <Card className="hover-lift shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">
                      Bachelor of Technology
                    </h4>
                    <p className="text-accent font-medium">Computer Science and Engineering</p>
                    <p className="text-muted-foreground">SR University, Warangal</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-muted-foreground">Aug 2023 - May 2027</span>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-accent mr-1" />
                        <span className="font-semibold text-accent">CGPA: 9.3</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Relevant Coursework: Data Structures, Operating Systems, Computer Networks, 
                      Discrete Mathematics, Theory of Computation, Algorithm Design, Discrete Mathematics
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Previous Education */}
            <Card className="hover-lift shadow-elegant">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-secondary/50 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg text-foreground">
                      Intermediate Education
                    </h4>
                    <p className="text-primary font-medium">TSBIE Board</p>
                    <p className="text-muted-foreground">Jr. College, Hanamkonda</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-muted-foreground">June 2021 - Mar 2023</span>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-primary mr-1" />
                        <span className="font-semibold text-primary">CGPA: 8.61</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Subjects: Mathematics, Physics, Chemistry, Sanskrit, English
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['C', 'C++', 'Java', 'Python', 'PHP'],
      color: 'bg-accent/10 text-accent'
    },
    {
      title: 'Libraries & Frameworks',
      icon: BookOpen,
      skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-Learn', 'Seaborn', 'Sklearn', 'Joblib', 'PyTorch', 'TensorFlow'],
      color: 'bg-primary/10 text-primary'
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      skills: ['HTML', 'CSS', 'JavaScript'],
      color: 'bg-secondary/50 text-primary'
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      skills: ['Oracle', 'MySQL', 'JDBC', 'GitHub', 'Git'],
      color: 'bg-muted text-muted-foreground'
    },
    {
      title: 'Specialized Skills',
      icon: Cpu,
      skills: ['Java Networking', 'Multi-threading', 'Java Swing', 'Java NIO', 'Data Structures & Algorithms', 'Machine Learning', 'Deep Learning'],
      color: 'bg-accent/10 text-accent'
    }
  ];

  const certifications = [
    {
      title: 'C Programming',
      issuer: 'NPTEL, IIT Kanpur',
      icon: Award
    },
    {
      title: 'Data Analysis',
      issuer: 'IBM',
      icon: Award
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and certifications acquired through 
            academic studies, personal projects, and professional experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover-lift shadow-elegant transition-smooth">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center text-lg">
                    <div className={`p-2 rounded-lg mr-3 ${category.color}`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-card-gradient rounded-xl p-8 shadow-elegant">
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="flex items-center p-4 bg-background rounded-lg border border-border hover-lift transition-smooth"
                >
                  <div className="bg-accent/10 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{cert.title}</h4>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Highlights */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Key Strengths</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Code className="h-8 w-8 text-accent mx-auto mt-1" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Problem Solving</h4>
              <p className="text-muted-foreground text-sm">
                Strong analytical skills with experience in data structures, algorithms, and complex system design.
              </p>
            </div>
            <div className="p-6">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Cpu className="h-8 w-8 text-primary mx-auto mt-1" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
              <p className="text-muted-foreground text-sm">
                Experience with ML algorithms, reinforcement learning, and anomaly detection systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Multi-Client Communication System',
      description: 'A real-time chat system with GUI-based client and server control panel using Java Swing. Features multi-threaded socket programming for simultaneous communication between multiple clients.',
      technologies: ['Java', 'Java Swing', 'Java NIO','Socket Programming', 'Multi-threading', 'GUI Design'],
      features: [
        'Real-time messaging between multiple clients',
        'Custom message framing protocol',
        'Direct messaging and broadcasting capabilities',
        'Server control panel for client management',
        'Thread-safe communication handling'
      ],
      icon: MessageSquare,
      color: 'bg-accent/10 text-accent',
      github: 'https://github.com/BSatya-Saketh/Projects/tree/main/Multi-Client%20Communication'
    },
    {
      title: 'Career Guidance Website for Rural Students',
      description: 'A comprehensive web platform designed to help rural students make informed decisions about their educational paths after 10th and 12th grade, including information about entrance exams.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'GitHub Pages', 'Responsive Design'],
      features: [
        'Information about available streams after 10th & 12th',
        'Details about entrance exams for renowned institutions',
        'Resources specifically tailored for rural students',
        'Mobile-responsive design for accessibility',
        'Hosted on GitHub Pages for easy access'
      ],
      icon: GraduationCap,
      color: 'bg-primary/10 text-primary',
      github: 'https://github.com/BSatya-Saketh/What-s-Next-Project',
      demo: 'https://bsatya-saketh.github.io/What-s-Next-Project/'
    },
    {
      title: 'Anomaly Detection using Reinforcement Learning',
      description: 'Advanced machine learning project implementing a custom RL environment to model IoT network traffic using the WUSTL IOT 2021 dataset with exceptional performance metrics.',
      technologies: ['Python', 'PyTorch', 'Reinforcement Learning', 'QN', 'DQN', 'IoT Security', 'Data Analysis'],
      features: [
        'Custom RL environment for IoT network modeling',
        '98% accuracy with 88% precision',
        '100% recall rate for anomaly detection',
        '93% F1-score demonstrating balanced performance',
        'Implementation of Deep Q-Network (DQN) algorithm'
      ],
      icon: Brain,
      color: 'bg-accent/10 text-accent',
      github: 'https://github.com/BSatya-Saketh/Projects/tree/main/Reinforcement%20Learning%201',
      metrics: {
        accuracy: '98%',
        precision: '88%',
        recall: '100%',
        f1Score: '93%'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects demonstrating skills in software development,
            machine learning, and problem-solving across various domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={index} className="hover-lift shadow-elegant transition-smooth overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-xl mb-2">
                    <div className={`p-3 rounded-lg mr-4 ${project.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="hover:bg-accent hover:text-accent-foreground transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Performance Metrics (for ML project) */}
                  {project.metrics && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Performance Metrics</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center p-3 bg-accent/5 rounded-lg">
                          <div className="text-2xl font-bold text-accent">{project.metrics.accuracy}</div>
                          <div className="text-sm text-muted-foreground">Accuracy</div>
                        </div>
                        <div className="text-center p-3 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{project.metrics.precision}</div>
                          <div className="text-sm text-muted-foreground">Precision</div>
                        </div>
                        <div className="text-center p-3 bg-accent/5 rounded-lg">
                          <div className="text-2xl font-bold text-accent">{project.metrics.recall}</div>
                          <div className="text-sm text-muted-foreground">Recall</div>
                        </div>
                        <div className="text-center p-3 bg-primary/5 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{project.metrics.f1Score}</div>
                          <div className="text-sm text-muted-foreground">F1-Score</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="hover-lift"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    {project.demo && (
                      <Button 
                        variant="secondary" 
                        size="sm"
                        className="hover-lift"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card-gradient rounded-xl p-8 shadow-elegant">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in my work?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always working on new projects and exploring innovative technologies. 
              Check out my GitHub for more projects and contributions.
            </p>
            <Button 
              size="lg"
              className="hover-lift shadow-elegant"
              onClick={() => window.open('https://github.com/BSatya-Saketh/Projects', '_blank')}
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
export const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Teaching Assistant',
      company: 'Bits and Bytes Programming Institute',
      location: 'Offline',
      duration: 'April 2024 - July 2024',
      type: 'Internship',
      icon: Users,
      color: 'bg-accent/10 text-accent',
      description: 'Mentored students in programming fundamentals and advanced concepts during weekend sessions.',
      responsibilities: [
        'Assisted students with C, Python, and Java programming concepts',
        'Conducted weekend mentoring sessions for skill development',
        'Helped explain Data Structures and Algorithms (DSA) topics',
        'Debugged code and provided solutions during lab practice sessions',
        'Created learning materials and exercises for student practice'
      ],
      skills: ['Teaching', 'Mentoring', 'C Programming', 'Python', 'Java', 'Data Structures', 'Algorithms'],
      achievements: [
        'Successfully mentored 20+ students in programming fundamentals',
        'Improved student understanding of complex DSA concepts',
        'Received positive feedback for clear explanations and patience'
      ]
    },
    {
      title: 'Research Intern - IoT & Machine Learning',
      company: 'MITW: Anomaly Detection Project',
      location: 'Offline',
      duration: 'May 2025 - July 2025',
      type: 'Research Internship',
      icon: Brain,
      color: 'bg-primary/10 text-primary',
      description: 'Worked on cutting-edge federated learning implementation for IoT security architecture.',
      responsibilities: [
        'Developed prototype for six-layered IoT Architecture (Edge, Gateway, Fog, Proxy, Cloud, Application)',
        'Implemented homogeneous federated learning using custom Transformer and Autoencoder architecture',
        'Focused on data preprocessing and attack classification for IoT networks',
        'Integrated XAI (Explainable AI) with advanced visualization tools',
        'Conducted research on anomaly detection in distributed IoT environments'
      ],
      skills: ['Federated Learning', 'IoT Security', 'Transformers', 'Autoencoders', 'XAI', 'Data Preprocessing', 'Python', 'Machine Learning'],
      achievements: [
        'Successfully implemented FL-based IoT architecture prototype',
        'Developed custom architecture combining Transformers and Autoencoders',
        'Created comprehensive attack classification system',
        'Integrated explainable AI for better model interpretability'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey showcasing hands-on experience in software development, 
            teaching, and cutting-edge research in machine learning and IoT security.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => {
            const IconComponent = experience.icon;
            return (
              <Card key={index} className="hover-lift shadow-elegant transition-smooth overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <CardTitle className="flex items-center text-xl">
                      <div className={`p-3 rounded-lg mr-4 ${experience.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-xl font-bold text-foreground">{experience.title}</div>
                        <div className="text-lg text-primary font-semibold">{experience.company}</div>
                      </div>
                    </CardTitle>
                    
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge variant="secondary" className="w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        {experience.duration}
                      </Badge>
                      <Badge variant="outline" className="w-fit">
                        <MapPin className="h-3 w-3 mr-1" />
                        {experience.location}
                      </Badge>
                      <Badge 
                        variant="default" 
                        className="w-fit bg-accent text-accent-foreground"
                      >
                        {experience.type}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mt-4">
                    {experience.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Building className="h-4 w-4 mr-2 text-accent" />
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start text-muted-foreground">
                          <span className="text-accent mr-2 mt-1">•</span>
                          <span className="text-sm leading-relaxed">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Used */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Code className="h-4 w-4 mr-2 text-primary" />
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary"
                          className="hover:bg-accent hover:text-accent-foreground transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3 flex items-center">
                      <Brain className="h-4 w-4 mr-2 text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-muted-foreground">
                          <span className="text-accent mr-2 mt-1">✓</span>
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Experience Summary */}
        <div className="mt-16">
          <div className="bg-card-gradient rounded-xl p-8 shadow-elegant">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Experience Highlights
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent mx-auto mt-1" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Teaching & Mentoring</h4>
                <p className="text-muted-foreground text-sm">
                  Experience in mentoring students and explaining complex programming concepts
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary mx-auto mt-1" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Research & Innovation</h4>
                <p className="text-muted-foreground text-sm">
                  Hands-on experience with cutting-edge ML research and IoT security
                </p>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Code className="h-8 w-8 text-accent mx-auto mt-1" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Technical Leadership</h4>
                <p className="text-muted-foreground text-sm">
                  Proven ability to work on complex projects and deliver innovative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Satya,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:b.satyasaketh@gmail.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'b.satyasaketh@gmail.com',
      href: 'mailto:b.satyasaketh@gmail.com',
      color: 'bg-accent/10 text-accent'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9515754999',
      href: 'tel:+919515754999',
      color: 'bg-primary/10 text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Warangal, India',
      href: '#',
      color: 'bg-secondary/50 text-primary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/BSatya-Saketh',
      color: 'hover:text-accent'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/satya-saketh-bollepally',
      color: 'hover:text-primary'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:b.satyasaketh@gmail.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking for a talented developer, want to collaborate on a project, 
                or just want to say hello, I'd love to hear from you. I'm currently open to 
                internship opportunities and exciting projects.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-background rounded-lg border border-border hover-lift transition-smooth"
                    >
                      <div className={`p-3 rounded-lg mr-4 ${info.color}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        {info.href !== '#' ? (
                          <a
                            href={info.href}
                            className="text-muted-foreground hover:text-accent transition-smooth"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 bg-background rounded-lg border border-border hover-lift transition-smooth text-muted-foreground ${social.color}`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <MessageCircle className="h-5 w-5 mr-2 text-accent" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="transition-smooth"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="transition-smooth"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What would you like to discuss?"
                    className="transition-smooth"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    rows={6}
                    className="transition-smooth resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full hover-lift shadow-elegant"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-accent/5 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  📧 This form will open your email client with the message pre-filled. 
                  You can also reach me directly at{' '}
                  <a 
                    href="mailto:b.satyasaketh@gmail.com" 
                    className="text-accent hover:underline"
                  >
                    b.satyasaketh@gmail.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <div className="bg-card-gradient rounded-xl p-8 shadow-elegant">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to work together?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm currently seeking internship opportunities and exciting projects where I can 
              contribute my skills in software development and machine learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('mailto:b.satyasaketh@gmail.com?subject=Let\'s Work Together', '_blank')}
                className="hover-lift shadow-elegant"
              >
                <Mail className="h-5 w-5 mr-2" />
                Email Me
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://linkedin.com/in/satya-saketh-bollepally', '_blank')}
                className="hover-lift"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};