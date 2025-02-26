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
        <p className="text-hilight text-4xl mb-6 text-center">About Me</p>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <div className="flex-1">
          <p className="text-hilight text-4xl text-center">ประวัติส่วนตัว</p>
          <p className="text-4xl font-semibold mb-2">Jeerasak Tajai</p>
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
        <div className="flex justify-center">
          <div className="w-96 h-96  rounded-lg flex items-center justify-center">
            <img src="/images/devicon_nextjs.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 items-center max-w-6xl mx-auto px-4 ">
        <Button className="box h-[100px] gap-4 " variant="primary" onClick={ClickButtonProjects}>
          <Icon icon="line-md:github-loop" className="text-5xl " />
          <p className="text-hilight text-4 text-center ">Project 11</p>
        </Button>
        <Button className="box h-[100px] justify-center gap-4" onClick={ClickButtonEI}>
          <Icon
            icon="material-symbols-light:school-outline-rounded"
            className="text-5xl "
          />
          <p className="text-hilight text-center w-[140px] ">educational institution
          </p>
          <p className="text-hilight text-4 text-center ">11</p>
        </Button>
        <Button className="box h-[100px]  gap-4" onClick={ClickButtoEnxperience}>
          <Icon icon="mdi:company" className="text-5xl " />
          <p className="text-hilight text-4 text-center ">experience 11</p>
        </Button>
      </div>
      <div className="flex grid grid-cols-3 gap-4 max-w-6xl mx-auto px-4 mt-10 ">

      {isClickedProjects && data.projects?.map((item, index) => (
        <BasicCard key={index} title={item.title} description={item.description} imageUrl={item.img}  className=""/>
      ))}
      {isClickedEI && data.educational_institution?.map((item, index) => (
        <BasicCard key={index} title={item.title} description={item.description} imageUrl={item.img}  className=""/>
      ))}
      {isClickedExperience && data.experience?.map((item, index) => (
        <BasicCard key={index} title={item.title} description={item.description} imageUrl={item.img}  className=""/>
      ))}
      </div>
      
    </div>
  );
}
