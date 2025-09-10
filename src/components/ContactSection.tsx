import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
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

export default ContactSection;