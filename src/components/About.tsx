import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Database, TrendingUp, Users } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Technical Skills",
      skills: ["SQL Advanced", "Python", "Power BI", "Tableau", "Advanced Excel", "Infor SunSystems", "ERP Testing", "Q&A Excel Reporting"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Financial & Analytical Skills",
      skills: ["Financial Reporting", "KPI Monitoring & Dashboards", "Variance Analysis", "Revenue & Expense Analysis", "Accounts Payable", "Audit & Compliance Support", "Risk Awareness", "GST Reconciliation", "Management Reporting"]
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Professional & Consulting Skills",
      skills: ["Finance and Business Process Transformation", "Data-Driven Decision Making", "Stakeholder Engagement", "Cross-Functional Collaboration", "Agile Project Support", "Process Automation Exposure", "Client Operations & Management"]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Coursework & Business Skills",
      skills: ["Strategic Management", "International Business", "Cross-Cultural Management", "Sustainability in Business", "Financial Modelling", "Business Management & Consulting", "Insurance Management", "Business Modelling & Research"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Finance and Administration analyst with 4+ years of experience delivering measurable improvements 
            across financial operations, reporting, and transformation initiatives. Currently pursuing MSc 
            International Business at Maynooth University, Ireland.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Finance and Administration analyst with 4+ years of experience delivering measurable improvements 
                  across financial operations, reporting, and transformation initiatives in large-scale corporate environments.
                </p>
                <p>
                  Delivered <span className="text-primary font-semibold">15–25% organisation-wide improvements</span> in 
                  reporting accuracy, KPI visibility, audit readiness, and process efficiency through ERP upgrades, 
                  automation, and data-driven analysis.
                </p>
                <p>
                  Targeting <span className="text-accent font-semibold">consulting, business analytics, and finance transformation</span> roles, 
                  bringing strong expertise in KPI monitoring, stakeholder engagement, and executive reporting.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Competencies */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Competencies</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["SAP S/4HANA", "ERP Systems", "Financial Operations", "KPI Analysis", "Process Improvement", "Audit Compliance", "Vendor Management", "Management Reporting", "Data Analytics", "Stakeholder Management", "Finance Transformation"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
