import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "InternTrack",
    description:
      "A web application for tracking and managing internship applications",
    image: "/placeholder.svg?height=200&width=350",
    technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    details:
      "Led the development of a comprehensive internship tracking system, implementing user authentication, real-time database updates, and a responsive dashboard interface.",
    githubUrl: "https://github.com/Kerryki/InternTrack.git",
  },
  {
    id: 2,
    title: "ReviewMate",
    description:
      "A peer review platform for university students to evaluate team projects",
    image: "/placeholder.svg?height=200&width=350",
    technologies: ["React", "MongoDB", "Node.js", "Express.js"],
    details:
      "Contributed to developing a platform enabling students to peer review each other on cooperation, conceptual contribution, practical contribution, and work ethic.",
    githubUrl:
      "https://github.com/Vinuyans/Mega_Chug_Lords-SOEN341_Project_F24.git",
  },
  {
    id: 3,
    title: "Fisap Wildfire",
    description: "A frontend application for wildfire tracking and management",
    image: "/placeholder.svg?height=200&width=350",
    technologies: ["React", "JavaScript", "API Integration", "Mapping Tools"],
    details:
      "Developed frontend components and integrated mapping functionality for real-time wildfire tracking and management system.",
    githubUrl: "https://github.com/Horisofine/FiSAP-Frontend.git",
  },
  {
    id: 4,
    title: "License Selling Website",
    description: "An e-commerce platform for selling software licenses",
    image: "/placeholder.svg?height=200&width=350",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    details:
      "Created a responsive e-commerce website for software license sales, implementing user authentication and payment integration.",
    githubUrl: "https://github.com/StanOfOld/HTML-Project-SOEN-287.git",
  },
];
