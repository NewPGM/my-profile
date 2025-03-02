"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
interface Project {
  password: string;
  username: string;
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
  const [openPassword, setOpenPassword] = useState(false);

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

        <div
          className={`absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
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
        {project.password && (
           <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-md">
           <div className="flex items-center mb-2">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
             </svg>
             <div className="flex justify-between w-full">
             <h4 className="text-red-400 font-medium text-sm">รหัสผ่านการเข้าใช้งาน</h4>
             <button 
        className="text-red-400 text-xs font-mono bg-red-900/30 px-2 py-1 rounded
                   hover:bg-red-900/50 transition-all duration-300 focus:outline-none
                   group overflow-hidden"
        onClick={() => setOpenPassword(!openPassword)}
        aria-label={openPassword ? "Hide password" : "Show password"}
      >
        <div className={`flex justify-center items-center transition-transform duration-300 ${openPassword ? 'rotate-90' : 'rotate-0'}`}>
          <span className="relative">
            |||
          </span>
        </div>
      </button>
              </div>
           </div>

       {openPassword && (
          <div 
          className={`
            ml-6 space-y-1 
            overflow-hidden transition-all duration-300 ease-in-out
            ${openPassword 
              ? 'max-h-20 opacity-100 transform translate-y-0' 
              : 'max-h-0 opacity-0 transform -translate-y-4'
            }
          `}
        >
          <div className="flex items-center">
            <span className="text-gray-400 text-xs w-20">Username:</span>
            <span className="text-red-400 text-xs font-mono bg-red-900/30 px-2 py-1 rounded">
              {project.username || "demo_user"}
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-400 text-xs w-20">Password:</span>
            <span className="text-red-400 text-xs font-mono bg-red-900/30 px-2 py-1 rounded">
              {project.password}
            </span>
          </div>
        </div>
       )}
         </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;