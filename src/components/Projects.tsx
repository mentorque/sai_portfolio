import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, TrendingUp, Zap, Brain, Target, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Business Consulting Project – Celtic Horizon Tours, Ireland",
      description: "Delivered an international market entry strategy for Irish tourism company expanding across 3+ continents using competitive benchmarking and financial feasibility analysis.",
      icon: <Globe className="w-8 h-8" />,
      achievements: [
        {
          metric: "International Market Entry Strategy",
          description: "Developed comprehensive market entry strategy covering 3+ continents with competitive analysis and market positioning recommendations"
        },
        {
          metric: "Competitive Benchmarking",
          description: "Conducted in-depth competitive benchmarking analysis to identify market opportunities and positioning strategies"
        },
        {
          metric: "Financial Feasibility Analysis",
          description: "Performed detailed financial feasibility analysis including revenue projections, cost structures, and ROI calculations"
        }
      ],
      technologies: ["Market Research", "Financial Modelling", "Strategic Planning", "Competitive Analysis", "Business Strategy"],
      category: "Business Consulting",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Unemployment Insurance Framework – India",
      description: "Designed a national-level unemployment insurance framework using fiscal impact analysis and funding modelling to evaluate long-term sustainability for unemployed youth.",
      icon: <Target className="w-8 h-8" />,
      achievements: [
        {
          metric: "National-Level Framework Design",
          description: "Designed comprehensive unemployment insurance framework addressing needs of unemployed youth across India"
        },
        {
          metric: "Fiscal Impact Analysis",
          description: "Conducted detailed fiscal impact analysis to assess government budget implications and funding requirements"
        },
        {
          metric: "Funding Model Development",
          description: "Developed sustainable funding models to evaluate long-term financial viability and economic impact"
        }
      ],
      technologies: ["Policy Research", "Financial Modelling", "Economic Analysis", "Public Finance", "Sustainability Assessment"],
      category: "Policy & Research",
      gradient: "from-purple-500 to-pink-500"
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
            Consulting and research projects demonstrating expertise in business strategy, 
            market analysis, financial modelling, and policy research.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
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
                    <h4 className="text-sm font-semibold text-foreground mb-3">Skills & Methodologies</h4>
                    <div className="flex flex-wrap gap-2 min-h-[60px]">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                I'm always excited to work on challenging problems in finance, business analytics, 
                and consulting. Let's discuss how we can create value together.
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <a href="mailto:saisripavanarveti@gmail.com">
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
