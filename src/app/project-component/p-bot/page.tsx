'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ProjectBot() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce website with user authentication, product management, and payment integration.",
      image: "/images/project1.jpg",
      technologies: ["Next.js", "React", "Node.js", "MongoDB"],
      demoLink: "https://demo-ecommerce.example.com",
      githubLink: "https://github.com/username/ecommerce-project"
    },
    {
      id: 2,
      title: "Weather Application",
      description: "Real-time weather forecast application with location detection and 5-day prediction.",
      image: "/images/project2.jpg",
      technologies: ["React", "OpenWeather API", "Tailwind CSS"],
      demoLink: "https://weather-app.example.com",
      githubLink: "https://github.com/username/weather-app"
    },
    {
      id: 3,
      title: "Task Management System",
      description: "Collaborative task management tool with real-time updates and team assignment features.",
      image: "/images/project3.jpg",
      technologies: ["React", "Firebase", "Material UI"],
      demoLink: "https://task-manager.example.com",
      githubLink: "https://github.com/username/task-manager"
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-hilight text-3xl md:text-4xl mb-8 text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-orange-500/20 hover:translate-y-[-5px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        {project.image ? (
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-500 text-lg">No Image</span>
          </div>
        )}
        
        <div className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex gap-4">
            <Link 
              href={project.demoLink} 
              target="_blank" 
              className="px-3 py-2 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600 transition-colors"
            >
              Live Demo
            </Link>
            <Link 
              href={project.githubLink} 
              target="_blank" 
              className="px-3 py-2 border border-white text-white text-sm rounded-md hover:bg-white hover:text-black transition-colors"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-gray-800 text-orange-500 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectBot;