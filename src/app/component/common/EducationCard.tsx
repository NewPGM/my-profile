"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Education {
  id: number;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear?: number; // Optional for ongoing education
  description?: string;
  logoUrl?: string;
  gpa?: number;
  achievements?: string[];
  location?: string;
}

function EducationCard({ education }: { education: Education }) {
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
        transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}
    >
      <div className="p-5">
        <div className="flex items-center mb-4">
          {education.logoUrl ? (
            <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden border-2 border-orange-500/50">
              <Image
                src={education.logoUrl}
                alt={`${education.institution} logo`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 mr-4 rounded-full bg-orange-500/30 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
          )}
          
          <div>
            <h3 className="text-xl font-semibold">{education.institution}</h3>
            <p className="text-orange-500 text-sm">
              {education.startYear} - {education.endYear || 'Present'}
              {education.location && ` • ${education.location}`}
            </p>
          </div>
        </div>
        
        <div className="ml-16">
          <div className="mb-2">
            <h4 className="font-medium">{education.degree}</h4>
            <p className="text-gray-300 text-sm">{education.fieldOfStudy}</p>
            {education.gpa && (
              <p className="text-gray-400 text-sm">GPA: {education.gpa.toFixed(2)}</p>
            )}
          </div>
          
          {education.description && (
            <div
              className={`
                overflow-hidden transition-all duration-300
                ${isExpanded ? 'max-h-60' : 'max-h-10'}
              `}
            >
              <p className="text-gray-300 text-sm mb-3">
                {education.description}
              </p>
            </div>
          )}
          
          {education.achievements && education.achievements.length > 0 && (
            <div
              className={`
                overflow-hidden transition-all duration-300
                ${isExpanded ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}
              `}
            >
              <h5 className="font-medium text-sm mb-1">Key Achievements:</h5>
              <ul className="list-disc list-inside text-sm text-gray-300 ml-2">
                {education.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}
          
          {(education.description || (education.achievements && education.achievements.length > 0)) && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-orange-500 text-sm hover:text-orange-400 transition-colors mt-2 flex items-center"
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
        </div>
      </div>
    </div>
  );
}

export default EducationCard;