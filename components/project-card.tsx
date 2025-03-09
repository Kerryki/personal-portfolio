import Link from "next/link";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50">
      <CardHeader>
        <CardTitle className="text-xl font-bold transition-colors duration-300 hover:text-primary">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold mb-2">What I Did:</h4>
            <p className="text-sm text-muted-foreground">{project.details}</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary transition-colors duration-300 hover:bg-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end">
        {project.githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary group"
            asChild
          >
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
              View Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
