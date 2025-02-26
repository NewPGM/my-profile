'use client'
import MainPage from "../main-content/page";
import About from "../about-content/page";
import Portfolio from "../portfolio/page";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
    
  useEffect(() => {
    // เพิ่ม delay เล็กน้อยเพื่อให้ animation เริ่มทำงานหลังจาก component ถูก render
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
      <MainPage />
      <About />
      <Portfolio />
    </div>
  );
}