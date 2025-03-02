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
import { Icon } from "@iconify/react";

 function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      
      
      setTimeout(() => {
        router.push('/home-page'); 
      }, 1000);
    }, 3000); 
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${showIntro ? 'opacity-100' : 'opacity-0'}`}>
      <div className={`text-center transition-transform duration-700 ${showIntro ? 'scale-100' : 'scale-150'}`}>
        <div className='flex justify-center items-center gap-4'>
          <Icon icon="line-md:github-loop" width="50" height="50"></Icon>
          <Icon icon="line-md:cog-filled-loop" width="50" height="50"></Icon>
          <Icon icon="line-md:downloading-loop" width="50" height="50"></Icon>
        </div>
        <div className=" text-6xl font-bold mb-4">
        Welcome To My
        </div>
        <p className="text-hilight text-white text-4xl font-bold">Portfolio Website</p>
      </div>
    </div>
  );
}

export default Home;