import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, TrendingUp, Zap, Brain, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Social Graph — Distributed Social Feed & Relationship Engine",
      description: "A Spring Boot + Kafka based microservices backend processing and ranking millions of real-time interactions with sub-100ms median feed retrieval latency.",
      icon: <Brain className="w-8 h-8" />,
      achievements: [
        {
          metric: "<100ms Latency",
          description: "Achieved sub-100ms median feed retrieval latency processing millions of real-time interactions"
        },
        {
          metric: "250-300 RPS Throughput",
          description: "Load-tested to sustain ~250–300 RPS with ~99.9% simulated uptime using Redis caching and Resilience4j"
        },
        {
          metric: "50% Faster Incident Response",
          description: "Integrated Prometheus–Grafana monitoring with Jaeger tracing, reducing incident response time by ~50%"
        }
      ],
      technologies: ["Spring Boot", "Java", "Kafka", "Redis", "PostgreSQL", "Neo4j", "Docker", "Prometheus", "Grafana", "Jaeger"],
      category: "Distributed Systems",
      gradient: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com/Sumit-22"
    },
    {
      title: "Multithreaded Proxy Server with LRU Cache",
      description: "High-performance multithreaded HTTP proxy server that processed 1M+ total requests during load testing, sustaining ~10k concurrent connections using ExecutorService and TCP sockets.",
      icon: <Target className="w-8 h-8" />,
      achievements: [
        {
          metric: "1M+ Requests Processed",
          description: "Processed 1M+ total requests during load testing with ~10k concurrent connections"
        },
        {
          metric: "60% Faster Response",
          description: "Integrated thread-safe LRU cache, achieving ~60% faster response time on repeated network requests"
        }
      ],
      technologies: ["Java", "Multithreading", "TCP Sockets", "ExecutorService", "LRU Cache", "Logging"],
      category: "Backend",
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/Sumit-22"
    },
    {
      title: "Paper Trading App — Frontend Development",
      description: "Developed the frontend for a Paper Trading app using TypeScript + Firebase, building multiple trading, portfolio, and authentication screens with clear user-flow logic.",
      icon: <Zap className="w-8 h-8" />,
      achievements: [
        {
          metric: "Freelance Project",
          description: "Delivered complete frontend for Paper Trading application within 2 months (May 2025 – June 2025)"
        },
        {
          metric: "4-Member Team Collaboration",
          description: "Collaborated with team to define functional & non-functional requirements and build modular UI components"
        }
      ],
      technologies: ["TypeScript", "Firebase", "React", "NoSQL"],
      category: "Frontend",
      gradient: "from-green-500 to-teal-500",
      githubUrl: "https://github.com/Sumit-22"
    },
    {
      title: "Grabit — Zepto-Style Delivery App",
      description: "Built a scalable delivery app with 40+ products, real-time cart sync, product filtering, & smooth UI using Coroutines & StateFlow with role-based access control.",
      icon: <Target className="w-8 h-8" />,
      achievements: [
        {
          metric: "40+ Products",
          description: "Built scalable delivery app with real-time cart sync and product filtering"
        },
        {
          metric: "Razorpay Integration",
          description: "Integrated secure payments with order verification and transaction logging"
        },
        {
          metric: "Role-Based Access",
          description: "Implemented role-based access for users/admins/delivery partners using Firebase Auth & Firestore in MVVM"
        }
      ],
      technologies: ["Kotlin", "Firebase", "Razorpay", "MVVM", "Coroutines", "StateFlow"],
      category: "Android",
      gradient: "from-orange-500 to-red-500",
      githubUrl: "https://github.com/Sumit-22"
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions demonstrating expertise in distributed systems, backend development, 
            Android applications, and modern web technologies to solve real-world challenges.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="h-full min-h-[600px]">
                    <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                <Zap className="w-3 h-3 text-primary" />
                              </div>
                            </div>
                            <div>
                              <div className="text-primary font-semibold text-sm">
                                {achievement.metric}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 min-h-[60px]">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 mt-auto">
                        <Button variant="outline" size="sm" asChild className="w-full">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                I'm always excited to work on challenging problems and innovative solutions. 
                Let's discuss how we can build something amazing together.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:sumitgaurav048@gmail.com">
                    Get In Touch
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;