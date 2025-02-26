// import MainPage from "./home-page-component/main-page/page";
// import About from "./home-page-component/about/page";
// import Portfolio from "./home-page-component/portfolio/page";
// export default function Home() {
//   return (
//     <div>
//       <MainPage />
//       <About />
//       <Portfolio />
//     </div>
//   );
// }

'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      
      // ให้เวลา animation ทำงาน
      setTimeout(() => {
        router.push('/home-page'); // หรือ route ที่ต้องการไปหลัง intro
      }, 1000);
    }, 3000); // แสดง intro 3 วินาที
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${showIntro ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`text-center transition-transform duration-700 ${showIntro ? 'scale-100' : 'scale-150'}`}>
        <div className="text-highlight text-4xl font-bold mb-4">
          Portfolio Website
        </div>
        <p className="text-white text-xl">Welcome to my portfolio</p>
      </div>
    </div>
  );
}
