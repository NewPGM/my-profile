"use client";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

interface Skill {
  id: number;
  name: string;
  icon?: string; // ชื่อไอคอนหรือ URL
  category: string;
  color?: string; // สีของทักษะ
}

function SkillTag({ skill }: { skill: Skill }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // กำหนดสีเริ่มต้นเป็นสีส้ม
  const skillColor = skill.color || "#f97316";
  
  return (
    <div 
      className={`
        bg-black bg-opacity-40 backdrop-blur-sm p-4 rounded-xl 
        transition-all duration-500 hover:shadow-lg
        transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
      `}
      style={{ borderBottom: `3px solid ${skillColor}` }}
    >
      <div className="flex items-center">
        {/* ไอคอน */}
        {skill.icon && (
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center mr-3"
            style={{ backgroundColor: `${skillColor}15` }}
          >
            <Icon className={`${skill.icon} text-2xl`} style={{ color: skillColor }} icon={skill.icon}/>
          </div>
        )}
        
        {/* ข้อมูลทักษะ */}
        <div>
          <h3 className="font-bold">{skill.name}</h3>
          <span 
            className="text-xs px-2 py-0.5 rounded-full inline-block mt-1"
            style={{ backgroundColor: `${skillColor}20`, color: skillColor }}
          >
            {skill.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillTag;