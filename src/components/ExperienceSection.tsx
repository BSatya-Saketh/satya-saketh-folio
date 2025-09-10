import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Code, Brain, Building } from 'lucide-react';

const ExperienceSection = () => {
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

export default ExperienceSection;