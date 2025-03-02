'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

 function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto mt-20 px-4">
      <div className="container mx-auto px-4">
        <div className={`mb-12 text-center transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl font-bold mb-2 mt-10">เกี่ยวกับฉัน</h2>
          <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* รูปโปรไฟล์ */}
          <div className={`w-full md:w-1/3 transition-all duration-700 delay-300 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
            <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-orange-500 shadow-xl">
              <Image 
                src="/images/64143109.jpg" 
                alt="โปรไฟล์" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* ข้อมูลส่วนตัว */}
          <div className={`w-full md:w-2/3 transition-all duration-700 delay-500 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-50 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-4">Web Developer</h3>
            <p className="text-gray-300 mb-6">
              สวัสดีครับ ผมชื่อ นายจีระศักดิ์ ต๋าใจ ผมมีความหลงใหลในการพัฒนาเว็บไซต์ที่สวยงามและใช้งานง่าย 
              ผมเป็นคนชอบเรียนรู้สิ่งใหม่ๆ และพัฒนาตัวเองอยู่เสมอ มีความมุ่งมั่นตั้งใจในการทำงาน 
              ผมมีความสนใจในด้านเทคโนโลยีและการพัฒนาซอฟต์แวร์ โดยหวังว่าจะได้นำความรู้และประสบการณ์มาใช้ให้เกิดประโยชน์กับองค์กรครับ
            </p>

            {/* ทักษะและความสามารถ */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-4">ทักษะและความสามารถ</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>HTML/CSS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>JavaScript</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>React</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Next.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Vue.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Nuxt.js</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span>Rest API</span>
                </div>
              </div>
            </div>

            {/* ประสบการณ์ */}
            <div>
              <h4 className="text-xl font-semibold mb-4">ประวัติการศึกษา</h4>
              <div className="mb-4">
                <div className="flex items-center mb-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="font-medium">ปริญญาตรี สาขาวิทยาการคอมพิวเตอร์</span>
                </div>
                <p className="text-gray-400 ml-4">มหาวิทยาลัยราชภัฏเชียงใหม่, 2564-2567</p>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                  <span className="font-medium">มัธยมศึกษาตอนปลาย</span>
                </div>
                <p className="text-gray-400 ml-4">โรงเรียน ฮอดพิยาคม, 2559-2564</p>
              </div>
            </div>

            {/* ปุ่ม */}
            <div className="mt-8 flex gap-4">
              <a 
                href="https://resume.superresume.com/ViewResume?Key=RZkQEQkaibtiD5yQQxxZidIZNZF&Enc=bUyLVrUKBwaMvEsiiVcUSMViTSWTgo&_gl=1*1k36lvy*_gcl_aw*R0NMLjE3NDA2NDg0MTkuQ2p3S0NBaUF0NEMtQmhCY0Vpd0E4S3AwQ1YtZUlFSkg3dXJ2ZjVhdDRPOUJ2ZGxCRGh4cFgyZ2FzVm45ZlBzY24wUEhuMFBzQUpTb014b0M0LTRRQXZEX0J3RQ..*_gcl_au*MTAxNjMxMTc0LjE3NDA2NDg0MTQuOTQ4NjY5MDM2LjE3NDA2NDg0NDMuMTc0MDY0ODUzNg..*_ga*MTYyNjAzNjMwMC4xNzQwNjQ4NDE0*_ga_QWCXJT2JHN*MTc0MDY0ODQxNS4xLjEuMTc0MDY0ODU0MS41OC4wLjA.&_ga=2.130987846.819802818.1740648414-1626036300.1740648414&_gac=1.191660504.1740648415.CjwKCAiAt4C-BhBcEiwA8Kp0CV-eIEJH7urvf5at4O9BvdlBDhxpX2gasVn9fPscn0PHn0PsAJSoMxoC4-4QAvD_BwE" 
                target="_blank"
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors"
              >
                เปิด Super Resume
              </a>
              <a 
                href="/contact-page" 
                className="px-6 py-3 border border-orange-500 text-orange-500 font-medium rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
              >
                ติดต่อฉัน
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;