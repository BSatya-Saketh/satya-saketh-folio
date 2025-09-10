import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const AboutSection = () => {
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

export default AboutSection;