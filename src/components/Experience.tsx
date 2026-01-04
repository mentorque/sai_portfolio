import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, MapPin, Calendar, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Deloitte USI",
      position: "Analyst - Administrative Business Center",
      location: "Hyderabad, India",
      duration: "May 2022 – Sep 2024",
      logo: "D",
      achievements: [
        {
          impact: "100% Audit Compliance",
          description: "Delivered end-to-end financial operations and management reporting across multiple entities using SAP S/4HANA and Infor SunSystems, supporting monthly revenues exceeding €3 million."
        },
        {
          impact: "Key Financial KPIs Monitoring",
          description: "Owned continuous monitoring and analysis of key financial KPIs including invoice cycle time, vendor ageing, accrual accuracy, exception rates, and expense variance to assess performance, identify risks, and support data-driven decisions."
        },
        {
          impact: "15-20% Improvement in Reporting Accuracy",
          description: "Drove variance analysis, trend analysis, and root cause analysis on month-end close data, reconciliations, and exception reports to improve reporting accuracy and operational predictability."
        },
        {
          impact: "Automated Q&A Dashboards",
          description: "Designed and maintained automated Q&A Excel dashboards and control reports to track invoice quality, processing efficiency, and exception trends, significantly improving KPI visibility and audit readiness."
        },
        {
          impact: "Finance Transformation Leadership",
          description: "Led finance transformation initiatives by analysing existing workflows, mapping process gaps, and supporting redesign of invoice reclassification and inter-department expense allocation processes."
        }
      ],
      technologies: ["SAP S/4HANA", "Infor SunSystems", "Advanced Excel", "Q&A Dashboards", "KPI Monitoring", "Process Improvement"]
    },
    {
      company: "Go Digit General Insurance Company",
      position: "Finance Analyst",
      location: "Bengaluru, India",
      duration: "Jul 2020 – May 2022",
      logo: "G",
      achievements: [
        {
          impact: "€550M+ Portfolio Management",
          description: "Supported annual gross written premium insurance portfolio by managing end-to-end accounts payable and expense accounting operations, processing €22M+ in monthly transactions across 1,000+ vendor invoices."
        },
        {
          impact: "15-20% Improvement in Payment Turnaround",
          description: "Tracked and analysed key financial KPIs including expense ratios, vendor ageing, payment cycle time, and accrual accuracy, contributing to significant improvement in payment turnaround time."
        },
        {
          impact: "Statutory Audit Support",
          description: "Supported quarterly and annual statutory audits by coordinating GST reconciliation and regulatory schedules impacting financial statements exceeding INR 1,000+ crores in expenses annually."
        },
        {
          impact: "25% Reduction in Manual Effort",
          description: "Contributed to finance automation and process improvement initiatives that reduced manual effort by approximately 25% and improved control over high-value vendor payments."
        },
        {
          impact: "€120M Vendor Payments Portfolio",
          description: "Worked closely with finance systems, tax, and business stakeholders during system integrations to align expense classification, revenue-related costs, and operational reporting."
        }
      ],
      technologies: ["ERP Systems", "Advanced Excel", "GST Reconciliation", "Financial Reporting", "Process Automation", "Vendor Management"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            4+ years of experience delivering measurable improvements in financial operations, 
            reporting, and transformation initiatives across large-scale corporate environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-2xl font-bold text-background shadow-lg">
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold text-lg">
                        <Building2 className="w-4 h-4" />
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Key Achievements */}
                <div className="relative">
                  {/* Desktop: Normal stacked layout */}
                  <div className="hidden md:block space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-4 h-4 text-primary" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-primary font-semibold text-lg">
                            {achievement.impact}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mobile: Carousel layout */}
                  <div className="md:hidden">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: true,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <CarouselItem key={achIndex} className="pl-2 basis-full">
                            <div className="flex gap-4 p-4 bg-background/50 rounded-lg border border-primary/10">
                              <div className="flex-shrink-0 mt-1">
                                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                                  <TrendingUp className="w-4 h-4 text-primary" />
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="text-primary font-semibold text-lg">
                                  {achievement.impact}
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {achievement.description}
                                </p>
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </Carousel>
                    
                    {/* Mobile Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                      {exp.achievements.map((_, achIndex) => (
                        <div
                          key={achIndex}
                          className="w-2 h-2 rounded-full bg-muted-foreground/30"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Technologies & Skills Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
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
    </section>
  );
};

export default Experience;
