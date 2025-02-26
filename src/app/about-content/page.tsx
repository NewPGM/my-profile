'use client';
import { Button } from "@/app/component/common/Button";
import { BasicCard } from "@/app/component/common/card";
import { Icon } from "@iconify/react";
import { useState } from 'react';
export default function about() {
  const data = {
    "projects": [
      {
        "title": "Project 1",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a project"
      },
      {
        "title": "Project 2",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a project"
      },
      {
        "title": "Project 3",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a project"
      },
      {
        "title": "Project 4",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a project"
      },
      {
        "title": "Project 5",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a project"
      },
      {
        "title": "Project 6",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a project"
      },
      {
        "title": "Project 7",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a project"
      }
    ],
    "educational_institution": [
      {
        "title": "Educational institution 1",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a educational institution"
      },
      {
        "title": "Educational institution 2",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a educational institution"
      },
      {
        "title": "Educational institution 3",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a educational institution"
      },
      
    ],
    "experience": [
      {
        "title": "Experience 1",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a experience"
      },
      {
        "title": "Experience 2",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a experience"
      },
      {
        "title": "Experience 3",
        "img": "/images/devicon_nextjs.png",
        "description": "This is a experience"
      },
    ]
  };
const [isClickedProjects, setIsClickedProjects] = useState(false);
const [isClickedEI, setIsClickedEI] = useState(false);
const [isClickedExperience, setIsClickedExperience] = useState(false);

  const ClickButtonProjects = () => {
    setIsClickedProjects(!isClickedProjects)
    setIsClickedEI(false)
    setIsClickedExperience(false)
  }
  const ClickButtonEI = () => {
    setIsClickedEI(!isClickedEI)
    setIsClickedProjects(false)
    setIsClickedExperience(false)
  }
  const ClickButtoEnxperience = () => {
    setIsClickedExperience(!isClickedExperience)
    setIsClickedProjects(false)
    setIsClickedEI(false)
  }
  return (
    <div>
      <div className="w-full text-center">
        <p className="text-hilight text-3xl md:text-4xl mb-6 text-center mt-10 hover:scale-105 hover:transition-all">About Me</p>
      </div>

      {/* ส่วนประวัติส่วนตัว */}
      {/* <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto px-4 gap-8">
        <div className=" flex flex-col md: justify-start text-center md:text-left">
          <p className="text-hilight text-2xl w-fit md:text-4xl text-center md:text-left">ประวัติส่วนตัว</p>
          <p className="text-2xl md:text-4xl w-fit font-semibold mb-2">Jeerasak Tajai</p>
          <div className="max-w-md min-w-[448px] text-gray-300 leading-relaxed">
            ผมชื่อ นายจีระศักดิ์ ต๋าใจ <br />
            ชื่อเล่น นิว
            <br />
            เกิดวันที่ 19 มีนาคม 2545 <br />
            เชื้อชาติ ไทย <br />
            ศาสนา พุทธ <br />
            ความสามารถพิเศษ <br />
            เล่นกีต้าเป็น ร้องเพลงได้นิดหน่อย <br />
            ความใฝ่ฝันอยากเป็นคนรวยครับ
          </div>
        </div>
        <div className="flex justify-center mt-8 md:mt-0">
          <div className="w-64 h-64 md:w-96  md:h-96 rounded-lg flex items-center justify-center">
            <img src="/images/devicon_nextjs.png" alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div> */}
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto  px-4 gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
          <p className="text-3xl md:text-4xl font-semibold mb-2 w-fit hover:scale-105 hover:transition-all">ประวัติส่วนตัว</p>
          <p className="text-hilight text-3xl md:text-4xl mb-4 md:mb-6 hover:scale-105 hover:transition-all">Jeerasak Tajai</p>
          <div className="max-w-md text-gray-300 leading-relaxed">
          ผมชื่อ นายจีระศักดิ์ ต๋าใจ <br />
            ชื่อเล่น นิว
            <br />
            เกิดวันที่ 19 มีนาคม 2545 <br />
            เชื้อชาติ ไทย <br />
            ศาสนา พุทธ <br />
            ความสามารถพิเศษ <br />
            เล่นกีต้าเป็น ร้องเพลงได้นิดหน่อย <br />
            ความใฝ่ฝันอยากเป็นคนรวยครับ
          </div>
        </div>
        
        <div className="flex-1 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full flex items-center justify-center overflow-hidden border-4 border-orange-500 shadow-xl hover:scale-105 hover:transition-all">
            <img src="/images/64143109.jpg" alt="Next.js Icon" className="max-w-full h-auto" />
          </div>
        </div>
      </div>

      {/* ส่วนปุ่มเลือกหมวดหมู่ */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 items-center max-w-6xl mx-auto px-4 my-10">
        <Button className="box h-[100px] w-full sm:w-auto gap-4" variant="primary" onClick={ClickButtonProjects}>
          <Icon icon="line-md:github-loop" className="text-4xl md:text-5xl" />
          <p className="text-hilight text-sm md:text-base text-center">Project 11</p>
        </Button>
        <Button className="box h-[100px] w-full sm:w-auto justify-center gap-4" onClick={ClickButtonEI}>
          <Icon
            icon="material-symbols-light:school-outline-rounded"
            className="text-4xl md:text-5xl"
          />
          <p className="text-hilight text-center text-sm md:text-base w-full md:w-[140px]">educational institution</p>
          <p className="text-hilight text-sm md:text-base text-center">11</p>
        </Button>
        <Button className="box h-[100px] w-full sm:w-auto gap-4" onClick={ClickButtoEnxperience}>
          <Icon icon="mdi:company" className="text-4xl md:text-5xl" />
          <p className="text-hilight text-sm md:text-base text-center">experience 11</p>
        </Button>
      </div>

      {/* ส่วนแสดงการ์ด */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 mt-10">
        {isClickedProjects && data.projects?.map((item, index) => (
          <BasicCard key={index} title={item.title} description={item.description} imageUrl={item.img} className=""/>
        ))}
        {isClickedEI && data.educational_institution?.map((item, index) => (
          <BasicCard key={index} title={item.title} description={item.description} imageUrl={item.img} className=""/>
        ))}
        {isClickedExperience && data.experience?.map((item, index) => (
          <BasicCard key={index} title={item.title} description={item.description} imageUrl={item.img} className=""/>
        ))}
      </div>
    </div>
  );
}