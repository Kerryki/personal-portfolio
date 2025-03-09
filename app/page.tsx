import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";
import { Header } from "@/components/header";
import Link from "next/link";
import { NavLink } from "@/components/nav-link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section id="hero" className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[980px] flex-col items-start gap-4 animate-fade-in">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1] animate-slide-up">
              Hi, I'm{" "}
              <span className="transition-colors duration-300 text-primary hover:text-primary/80">
                Kigham Kerry
              </span>
            </h1>
            <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl animate-slide-up [animation-delay:200ms]">
              I'm a developer passionate about building web applications. I
              specialize in creating responsive, user-friendly interfaces with
              modern technologies.
            </p>
          </div>
        </section>

        <section
          id="about"
          className="container py-12 border-t md:py-24 lg:py-32 scroll-mt-16"
        >
          <div className="mx-auto grid max-w-[980px] gap-8 md:grid-cols-2">
            <div className="animate-fade-in [animation-delay:200ms]">
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl animate-slide-up">
                About Me
              </h2>
              <p className="mt-4 text-lg text-muted-foreground animate-slide-up [animation-delay:200ms]">
                I'm a passionate developer with experience in building web
                applications. I enjoy solving complex problems and creating
                intuitive user experiences.
              </p>
              <p className="mt-4 text-lg text-muted-foreground animate-slide-up [animation-delay:300ms]">
                My skills include:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-2 text-muted-foreground">
                {[
                  "JavaScript/TypeScript",
                  "React.js",
                  "Next.js",
                  "Tailwind CSS",
                  "Node.js",
                  "Git",
                  "Java",
                  "Swift",
                  "Python",
                  "AWS",
                ].map((skill, index) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 transition-colors duration-300 animate-slide-up hover:text-primary"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center animate-fade-in [animation-delay:600ms]">
              <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 shadow-xl transition-transform hover:scale-105 duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-primary/10 to-transparent"></div>
                <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-primary/20"></div>
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-32 h-32 rounded-full bg-primary/10"></div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="container py-12 md:py-24 lg:py-32 bg-muted/50 scroll-mt-16"
        >
          <div className="mx-auto max-w-[980px]">
            <h2 className="mb-12 text-3xl font-bold leading-tight tracking-tighter md:text-4xl animate-slide-up">
              My Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="container py-12 border-t md:py-24 lg:py-32 scroll-mt-16"
        >
          <div className="mx-auto max-w-[980px] text-center animate-fade-in">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl animate-slide-up">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground animate-slide-up [animation-delay:200ms]">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
            <form
              action="https://formspree.io/f/xrbpzvpl"
              method="POST"
              className="mt-8 mx-auto max-w-[500px] space-y-4 text-left"
            >
              <div className="animate-slide-up [animation-delay:300ms]">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full transition-all duration-300 hover:border-primary focus:border-primary"
                />
              </div>
              <div className="animate-slide-up [animation-delay:400ms]">
                <Input
                  type="email"
                  name="_replyto"
                  placeholder="Your Email"
                  required
                  className="w-full transition-all duration-300 hover:border-primary focus:border-primary"
                />
              </div>
              <div className="animate-slide-up [animation-delay:500ms]">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full min-h-[150px] transition-all duration-300 hover:border-primary focus:border-primary"
                />
              </div>
              <input type="text" name="_gotcha" style={{ display: "none" }} />
              <div className="text-center animate-slide-up [animation-delay:600ms]">
                <Button
                  type="submit"
                  className="w-full transition-all duration-300 sm:w-auto hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
            <div className="mt-8 flex justify-center gap-4 animate-slide-up [animation-delay:700ms]">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Link
                  href="https://github.com/Kerryki"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
              >
                <Link
                  href="https://www.linkedin.com/in/kinyuy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
