import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, Award, Target, Zap } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "15-25% Organisation-wide Improvements",
      description: "Delivered measurable improvements across reporting accuracy, KPI visibility, audit readiness, and process efficiency through ERP upgrades, automation, and data-driven analysis at Deloitte USI.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "Deloitte USI",
      category: "Process Improvement",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["15-25% Improvement", "Multiple KPIs", "Organisation-wide"]
    },
    {
      title: "100% Audit Compliance",
      description: "Maintained perfect audit compliance while delivering end-to-end financial operations and management reporting across multiple entities, supporting €3M+ in monthly revenues using SAP S/4HANA and Infor SunSystems.",
      icon: <Award className="w-8 h-8" />,
      company: "Deloitte USI",
      category: "Financial Operations",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["100% Compliance", "€3M+ Monthly Revenue", "Multi-entity"]
    },
    {
      title: "€550M+ Portfolio Management",
      description: "Successfully managed and supported a €550M+ annual gross written premium insurance portfolio, processing €22M+ in monthly transactions across 1,000+ vendor invoices at Go Digit General Insurance.",
      icon: <Target className="w-8 h-8" />,
      company: "Go Digit",
      category: "Portfolio Management",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["€550M+ Portfolio", "€22M+ Monthly", "1,000+ Invoices"]
    },
    {
      title: "25% Reduction in Manual Effort",
      description: "Contributed to finance automation and process improvement initiatives that reduced manual effort by 25% and improved control over high-value vendor payments, enhancing operational efficiency.",
      icon: <Zap className="w-8 h-8" />,
      company: "Go Digit",
      category: "Process Automation",
      gradient: "from-orange-500 to-red-500",
      metrics: ["25% Reduction", "Process Automation", "Improved Control"]
    },
    {
      title: "Top 2% Academic Performance",
      description: "Achieved 66.8% score ranking in Top 2% of cohort in MSc International Business at Maynooth University, Ireland, demonstrating academic excellence and strong analytical capabilities.",
      icon: <Award className="w-8 h-8" />,
      company: "Maynooth University",
      category: "Academic Excellence",
      gradient: "from-indigo-500 to-purple-500",
      metrics: ["66.8% Score", "Top 2%", "MSc International Business"]
    },
    {
      title: "Finance Transformation Leadership",
      description: "Led finance transformation initiatives by analysing existing workflows, mapping process gaps, and supporting redesign of invoice reclassification and inter-department expense allocation processes.",
      icon: <Target className="w-8 h-8" />,
      company: "Deloitte USI",
      category: "Transformation",
      gradient: "from-pink-500 to-rose-500",
      metrics: ["Process Redesign", "Workflow Analysis", "Transformation"]
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Demonstrating measurable impact in financial operations, process improvement, 
            and business transformation across multiple organizations and projects.
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
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(achievement.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {achievement.company}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {achievements.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">4+ Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">15-25%</div>
                  <div className="text-sm text-muted-foreground">Improvements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">€550M+</div>
                  <div className="text-sm text-muted-foreground">Portfolio Managed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">Top 2%</div>
                  <div className="text-sm text-muted-foreground">Academic Ranking</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
