import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, DollarSign, Clock, Users, Zap, Target } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "ESSPL Hackathon Top 6 Finalist",
      description: "Achieved Top 6 finalist position out of 2,500 teams in ESSPL Hackathon for developing a real-time disaster response application with innovative features and robust architecture.",
      icon: <Target className="w-8 h-8" />,
      company: "ESSPL Hackathon",
      category: "Competition",
      gradient: "from-green-500 to-emerald-500",
      metrics: ["Top 6", "2,500 Teams", "Real-time App"]
    },
    {
      title: "LeetCode 750+ Problems Solved",
      description: "Solved 750+ DSA problems on LeetCode with a 1800+ rating, outperforming 93% of competitors globally. Demonstrates strong problem-solving skills and algorithmic thinking.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "LeetCode",
      category: "Competitive Programming",
      gradient: "from-blue-500 to-cyan-500",
      metrics: ["750+ Problems", "1800+ Rating", "Top 7% Globally"]
    },
    {
      title: "Flipkart Grid 6.0 Round 2 Qualifier",
      description: "Qualified for Round 2 in Flipkart Grid 6.0, one of India's premier engineering challenges, competing against thousands of talented engineers across the country.",
      icon: <Zap className="w-8 h-8" />,
      company: "Flipkart",
      category: "Competition",
      gradient: "from-purple-500 to-pink-500",
      metrics: ["Round 2 Qualified", "National Competition", "Engineering Challenge"]
    },
    {
      title: "EY Techathon 5.0 Round 2 Qualifier",
      description: "Qualified for Round 2 in EY Techathon 5.0, demonstrating strong technical skills and innovative problem-solving abilities in a competitive national-level technology competition.",
      icon: <Target className="w-8 h-8" />,
      company: "EY",
      category: "Competition",
      gradient: "from-orange-500 to-red-500",
      metrics: ["Round 2 Qualified", "EY Techathon", "National Level"]
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
            Recognition and achievements demonstrating strong problem-solving skills, 
            competitive programming excellence, and innovation in national-level competitions.
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
                  <div className="text-3xl font-bold text-primary mb-2">Top 6</div>
                  <div className="text-sm text-muted-foreground">ESSPL Hackathon</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">750+</div>
                  <div className="text-sm text-muted-foreground">LeetCode Problems</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1800+</div>
                  <div className="text-sm text-muted-foreground">LeetCode Rating</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">Top 7%</div>
                  <div className="text-sm text-muted-foreground">Global Ranking</div>
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
