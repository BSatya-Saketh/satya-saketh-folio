import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Cpu, Award, BookOpen } from 'lucide-react';

const SkillsSection = () => {
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
          <div className="grid md:grid-cols-3 gap-8">
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

export default SkillsSection;