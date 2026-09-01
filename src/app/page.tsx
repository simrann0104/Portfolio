"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, ExternalLink, GraduationCap, Code2, Cpu, Brain, Database, Wrench, MapPin, Award } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function Home() {
  const pfp = PlaceHolderImages.find(img => img.id === "profile-photo");
  const pehchaanImg = PlaceHolderImages.find(img => img.id === "project-pehchaan");
  const studySphereImg = PlaceHolderImages.find(img => img.id === "project-kizashi"); 
  const eventSystemImg = PlaceHolderImages.find(img => img.id === "project-segmentation"); 

  const skills = {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "C++", "SQL"],
    frameworks: ["React.js", "Next.js", "Node.js", "Express.js", "FastAPI", "Scikit-learn"],
    fullstack: ["MERN Stack", "RESTful APIs", "Microservices", "State Management", "Authentication"],
    databases: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    tools: ["Git", "Postman", "VS Code", "Docker", "AWS", "Jupyter Notebook"],
    core: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Software Engineering", "System Design"],
    soft: ["Analytical Thinking", "Problem Solving", "Team Collaboration", "Leadership"]
  };

  const projects = [
    {
      title: "StudySphere AI",
      subtitle: "AI-Powered Learning Platform",
      description: "A comprehensive learning ecosystem leveraging Generative AI to provide personalized study paths, intelligent content summarization, and real-time query resolution for students.",
      tech: ["Next.js", "Genkit", "Node.js", "MongoDB", "Tailwind CSS"],
      image: studySphereImg?.imageUrl,
      hint: "artificial intelligence"
    },
    {
      title: "Pehchaan",
      subtitle: "Voter ID Verification System",
      description: "Engineered a robust Voter Verification System using the MERN stack. Integrated a Machine Learning model for identity validation using Aadhaar data and address verification to prevent fraud.",
      tech: ["MongoDB", "Express", "React", "Node.js", "Python", "Machine Learning"],
      image: pehchaanImg?.imageUrl,
      hint: "security verification"
    },
    {
      title: "Event Management System",
      subtitle: "Enterprise Event Coordination",
      description: "Developed a full-stack platform for seamless event planning, attendee management, and real-time scheduling. Features include ticket generation, venue booking, and automated notifications.",
      tech: ["Java", "Spring Boot", "MySQL", "React", "Bootstrap"],
      image: eventSystemImg?.imageUrl,
      hint: "event management"
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Lovely Professional University",
      period: "2025 - Present",
      location: "Punjab, India",
      score: "CGPA: 7.96"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Lovely Professional University",
      period: "2022 - 2025",
      location: "Punjab, India",
      score: "CGPA: 8.05"
    },
    {
      degree: "Intermediate (Science)",
      school: "Khalsa Model Senior Secondary School",
      period: "2021 - 2022",
      location: "Kolkata, West Bengal",
      score: "Percentage: 73.6%"
    }
  ];

  const certificates = [
    { title: "Java Programming", issuer: "Oracle / Scaler", date: "FEB 2026" },
    { title: "Software Engineering Specialization", issuer: "IBM / Coursera", date: "JAN 2026" },
    { title: "Introduction to Generative AI Studio", issuer: "Google Cloud / Simplilearn", date: "FEB 2026" }
  ];

  const achievements = [
    { title: "200+ LeetCode Problems Solved", detail: "Consistent problem-solving in Data Structures and Algorithms.", icon: <Code2 className="h-12 w-12 text-primary mb-4" /> },
    { title: "Dean's List - Top 10%", detail: "Recognized for academic excellence at Lovely Professional University.", icon: <Award className="h-12 w-12 text-secondary mb-4" /> }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1">
                Full-Stack / Software Developer
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm <br />
                <span className="text-primary glow-text">Simran Kaur</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Developer passionate about building intelligent, scalable backend architectures and seamless full-stack applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" asChild>
                <a href="https://github.com/simrann0104" target="_blank" rel="noopener noreferrer">View My Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
                <a 
                  href="/Simran%20Kaur%20-%20Backend%20Dev.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
              <div className="flex items-center gap-4 ml-2">
                <a href="https://linkedin.com/in/simrankaur2004" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/simrann0104" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] animate-pulse" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl animate-float">
                <Image
                  src={pfp?.imageUrl || "/hehehehe.jpg"}
                  alt="Simran Kaur"
                  fill
                  className="object-cover"
                  data-ai-hint="professional woman"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />
            <div className="space-y-12 relative">
              {education.map((edu, idx) => (
                <div key={idx} className={cn(
                  "flex flex-col md:flex-row items-center",
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                )}>
                  <div className="absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-primary shadow-[0_0_8px_rgba(147,104,227,0.5)] hidden md:block z-10" />
                  <Card className={cn(
                    "glass border-white/5 p-8 w-full md:w-[45%] hover:border-primary/30 transition-all group relative",
                    idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  )}>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{edu.degree}</h3>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {edu.period}
                        </Badge>
                      </div>
                      <div className="flex flex-col gap-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-primary" /> 
                          <span className="text-sm font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-secondary" /> 
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold px-3 py-1">
                          {edu.score}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-24 bg-card/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Technical Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Languages" items={skills.languages} icon={<Code2 className="text-primary" />} />
            <SkillCard title="Development" items={skills.frameworks} icon={<Cpu className="text-secondary" />} />
            <SkillCard title="Architecture" items={skills.fullstack} icon={<Brain className="text-primary" />} />
            <SkillCard title="Databases" items={skills.databases} icon={<Database className="text-secondary" />} />
            <SkillCard title="Tools & Cloud" items={skills.tools} icon={<Wrench className="text-primary" />} />
            <SkillCard title="CS Core" items={skills.core} icon={<Brain className="text-secondary" />} />
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground max-w-xl text-lg">
                Backend engineering meets machine learning for smarter digital solutions.
              </p>
            </div>
            <Button variant="link" className="text-primary group" asChild>
              <a href="https://github.com/simrann0104" target="_blank" rel="noopener noreferrer">
                View GitHub <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="grid gap-12">
            {projects.map((project, idx) => (
              <div key={project.title} className={cn(
                "group grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-white/5 bg-card/40 p-4 md:p-8 hover:bg-card/60 transition-colors",
                idx % 2 !== 0 && "lg:flex-row-reverse"
              )}>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={project.image || "https://picsum.photos/seed/project/800/600"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.hint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className={cn("space-y-6", idx % 2 !== 0 ? "lg:pr-12" : "lg:pl-12")}>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-secondary font-medium tracking-wide uppercase text-xs">{project.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <Badge key={t} variant="secondary" className="bg-primary/10 border-primary/20 text-primary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Certifications */}
      <section id="achievements" className="py-24 bg-card/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-12">Achievements</h2>
              <div className="space-y-6">
                {achievements.map((ach, idx) => (
                  <Card key={idx} className="glass border-white/5 p-6 hover:border-primary/30 transition-all flex gap-6 items-center">
                    <div className="shrink-0">{ach.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{ach.title}</h3>
                      <p className="text-sm text-muted-foreground">{ach.detail}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-12">Certifications</h2>
              <div className="grid gap-4">
                {certificates.map((cert, idx) => (
                  <div key={idx} className="glass p-5 rounded-2xl border-white/5 hover:border-primary/20 transition-all flex justify-between items-center group">
                    <div>
                      <h4 className="font-bold text-sm mb-1">{cert.title}</h4>
                      <p className="text-xs text-primary font-medium">{cert.issuer}</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Portal */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Let's Connect & <span className="text-primary glow-text">Build.</span></h2>
            <p className="text-muted-foreground text-lg">
              Open to opportunities in Full-Stack Development and Software Engineering. 
              Available for <span className="text-foreground font-semibold">innovative projects</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="mailto:54321jit93@gmail.com" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Email</span>
            </a>
            <a href="https://linkedin.com/in/simrankaur2004" target="_blank" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">LinkedIn</span>
            </a>
            <a href="https://github.com/simrann0104" target="_blank" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">GitHub</span>
            </a>
          </div>

          <div className="pt-12 text-muted-foreground text-sm flex items-center justify-center gap-2">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" /> Kolkata, India
            </span>
            <span className="mx-2">•</span>
            <span>© 2026 Simran Kaur</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillCard({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <Card className="glass border-white/5 group hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
            {icon}
          </div>
          <h3 className="font-headline font-bold text-lg">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map(item => (
            <Badge key={item} variant="outline" className="border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
