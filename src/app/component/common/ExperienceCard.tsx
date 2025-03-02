"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Experience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate?: string; // Optional for current positions
  description?: string;
  logoUrl?: string;
  skills?: string[];
  location?: string;
  responsibilities?: string[];
  projectsUrl?: string;
}

function ExperienceCard({ experience }: { experience: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`
        bg-black bg-opacity-40 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg
        transition-all duration-500 ease-out hover:shadow-orange-500/10
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}
    >
      <div className="p-5">
        <div className="flex items-center mb-4">
          {experience.logoUrl ? (
            <div className="relative w-14 h-14 mr-4 rounded-lg overflow-hidden border-2 border-orange-500/20 flex-shrink-0">
              <Image
                src={experience.logoUrl}
                alt={`${experience.company} logo`}
                fill
                className="object-contain p-1"
              />
            </div>
          ) : (
            <div className="w-14 h-14 mr-4 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          )}
          
          <div>
            <h3 className="text-xl font-semibold">{experience.position}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center">
              <p className="text-orange-500">{experience.company}</p>
              <span className="hidden sm:block mx-2 text-gray-500">•</span>
              <p className="text-gray-400 text-sm">
                {experience.startDate} - {experience.endDate || 'Present'}
              </p>
            </div>
            {experience.location && (
              <p className="text-gray-400 text-sm">
                <span className="inline-block mr-1">📍</span> {experience.location}
              </p>
            )}
          </div>
        </div>
        
        <div className="ml-0 sm:ml-16 mt-4">
          {experience.description && (
            <div className={`
              text-gray-300 text-sm mb-4 overflow-hidden transition-all duration-300
              ${isExpanded ? 'max-h-60' : 'max-h-20'}
            `}>
              <p>{experience.description}</p>
            </div>
          )}
          
          {experience.skills && experience.skills.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium mb-2">Skills</h4>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs bg-gray-800 text-orange-500 px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {experience.responsibilities && experience.responsibilities.length > 0 && (
            <div className={`
              overflow-hidden transition-all duration-300
              ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}>
              <h4 className="text-sm font-medium mb-2">Key Responsibilities</h4>
              <ul className="list-disc list-inside text-sm text-gray-300 ml-2 space-y-1">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="mt-4 flex items-center justify-between">
            {(experience.description || (experience.responsibilities && experience.responsibilities.length > 0)) && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-orange-500 text-sm hover:text-orange-400 transition-colors flex items-center"
              >
                {isExpanded ? 'Show less' : 'Show more'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            )}
            
            {experience.projectsUrl && (
              <a
                href={experience.projectsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 text-sm hover:text-orange-400 transition-colors flex items-center"
              >
                View Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;