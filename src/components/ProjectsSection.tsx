import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, MessageSquare, Users, Brain, GraduationCap } from 'lucide-react';

const ProjectsSection = () => {
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

export default ProjectsSection;