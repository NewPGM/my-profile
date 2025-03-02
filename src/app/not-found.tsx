'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Animation fade in
    setIsVisible(true);
    
    // Countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div 
        className={`bg-black bg-opacity-70 backdrop-blur-md p-8 md:p-12 rounded-lg border border-orange-500 shadow-2xl max-w-lg w-full text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="text-orange-500 text-9xl font-bold mb-4">404</div>
        <h1 className="text-hilight text-3xl md:text-4xl mb-4">หน้าไม่พบ</h1>
        <p className="text-gray-300 mb-8">
          ขออภัย เราไม่พบหน้าที่คุณกำลังมองหา อาจจะถูกย้ายหรือลบไปแล้ว
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button 
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
          >
            กลับหน้าหลัก
          </button>
          <button 
            onClick={() => router.back()}
            className="px-6 py-3 border border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
          >
            กลับหน้าก่อนหน้า
          </button>
        </div>
        
        <div className="mt-8 text-gray-400">
          คุณจะถูกนำกลับไปยังหน้าหลักอัตโนมัติใน <span className="text-orange-500">{countdown}</span> วินาที
        </div>
      </div>
    </div>
  );
}