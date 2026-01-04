import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      skills: ["Java", "Kotlin", "Python", "TypeScript", "SQL"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Frameworks & Libraries",
      skills: ["Spring Boot", "JDBC", "Servlets/JSP", "React", "Retrofit", "Jetpack Compose", "Android SDK", "Coroutines", "Room", "LiveData", "ViewModel"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      skills: ["Docker", "AWS", "Prometheus", "Grafana", "Jaeger", "Git", "GitHub", "CI/CD pipelines"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & Databases",
      skills: ["REST APIs", "MySQL", "PostgreSQL", "Redis", "Firebase", "Neo4j", "Kafka"]
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
            I'm a passionate backend developer with expertise in building scalable systems, 
            distributed architectures, and high-performance backend services. Currently pursuing 
            my B.Tech in Computer Science at IIIT Bhubaneswar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Backend Developer skilled in scalable systems, distributed architectures, 
                  and backend services using Java, Spring Boot, Kafka, Redis, and Docker. 
                  Experienced in Android development with Kotlin (MVVM).
                </p>
                <p>
                  Strong foundation in <span className="text-primary font-semibold">system design, API development, 
                  and CS fundamentals</span> with hands-on experience building microservices-based 
                  applications and high-performance distributed systems.
                </p>
                <p>
                  Built systems processing <span className="text-accent font-semibold">millions of real-time interactions</span> with 
                  sub-100ms latency and sustained throughput of 250-300 RPS with 99.9% uptime.
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Core Concepts */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Concepts & Coursework</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Microservices", "Multithreading", "Caching", "Event-driven Design", "MVC", "MVVM", "Data Structures", "Algorithms", "Operating Systems", "Computer Networks", "DBMS", "OOP", "Distributed Systems"].map((concept, index) => (
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