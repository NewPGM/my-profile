'use client';
import { useState, useEffect } from 'react';

interface BasicCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
  onClick?: () => void;
}

export const BasicCard: React.FC<BasicCardProps> = ({ title, description, imageUrl, className = "",onClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // เพิ่ม delay เล็กน้อยเพื่อให้ animation เริ่มทำงานหลังจาก component ถูก render
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <button 
      className={`
        overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 
        transition-all duration-500 ease-out hover:scale-105 hover:transition-all
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        ${className}
      `}
      onClick={onClick}
    >
      {imageUrl && (
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover bg-white"
        />
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </button>
  );
};