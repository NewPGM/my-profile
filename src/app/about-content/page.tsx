"use client";
import { Button } from "@/app/component/common/Button";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ProjectCard from "@/app/component/common/ProjectCard";
import EducationCard from "../component/common/EducationCard";
import ExperienceCard from "../component/common/ExperienceCard";
function AboutContent() {
  const data = {
    projects: [
      {
        id: 1,
      title: "Develop a chatbot to provide information and services regarding the Computer Department",
      description: "การพัฒนาแชทบอทเพื่อให้ข้อมูลและบริการเกี่ยวกับภาควิชาคอมพิวเตอร์",
      image: "/images/project/Linebot.png",
      technologies: ["JavaScript", "Line", "Node.js"],
      demoLink: "https://contact-bot-cmru.vercel.app/",
      githubLink: "https://github.com/NewPGM/cmru-bot",
      password: "",
      username: "",
      },
      {
        id: 2,
        title: "A website for managing a chatbot offering information and services for the Computer Science Department",
        description: "เว็บไซต์สำหรับจัดการ Chatbot นำเสนอข้อมูลและบริการสำหรับภาควิชาวิทยาการคอมพิวเตอร์",
        image: "/images/project/Web-cmru.png",
        technologies: ["JavaScript", "Vue", "Node.js"],
        demoLink: "https://web-cmru.vercel.app/login",
        githubLink: "https://github.com/NewPGM/web-back-end",
        password: "12345",
        username: "admin",
      },
      {
        id: 3,
        title: "API Create in the Chatbot Management section provides service information for the Department of Computer Science.",
        description: "สร้าง API สําหรับจัดการ Chatbot นำเสนอข้อมูลและบริการสำหรับภาควิชาวิทยาการคอมพิวเตอร์",
        image: "/images/project/Apibot.png",
        technologies: ["JavaScript", "Node.js"],
        demoLink: "https://api-cmru.vercel.app/",
        githubLink: "https://github.com/NewPGM/api-cmru",
        password: "",
        username: "",
      },
    ],
    educational_institution: [
      {
        id: 1,
        institution: "มหาลัยราชภัฏเชียงใหม่",
        degree: "ปริญญาตรี",
        fieldOfStudy: "วิทยาการคอมพิวเตอร์",
        startYear: 2564,
        endYear: 2567,
        description: "ศึกษาด้านการพัฒนาซอฟต์แวร์",
        logoUrl: "/images/EI/Cmru.png",
        gpa: 3.23,
        achievements: [
          "ปีการศึกษาปีที่ 2 ได้รับใบรับรองเรียนดีคะแนน gpa เกิน 3.25",
          "ปีการศึกษาปีที่ 3 ได้รับใบรับรองเรียนดีคะแนน gpa เกิน 3.25"
        ],
        location: "เชียงใหม่"
      },
      {
        id: 2,
        institution: "โรงเรียนฮอดพิยาคม",
        degree: "มัธยมศึกษาตอนปลาย",
        fieldOfStudy: "คอมพิวเตอร์ธุรกิจ",
        startYear: 2561,
        endYear: 2564,
        description: "ศึกษาด้านคอมพิวเตอร์ธุรกิจ",
        logoUrl: "/images/EI/Hot.png",
        gpa: 3.40,
        achievements: [
          "แข่งขันการทำหนังสั้นระดับภาคเหนือร่วมกับทีมได้ที่ 13 ",
          "ได้ทุนการศึกษาแข่งขันทางวิชาการ"
        ],
        location: "เชียงใหม่"
      },
      {
        id: 3,
        institution: "โรงเรียนฮอดพิยาคม",
        degree: "มัธยมศึกษาตอนต้น",
        fieldOfStudy: "วิทย์-คณิต",
        startYear: 2558,
        endYear: 2561,
        description: "ศึกษาด้านคอมพิวเตอร์ธุรกิจ",
        logoUrl: "/images/EI/Hot.png",
        gpa: 0.00,
        achievements: [
          "แข่งขันการตัดต่อวีดีโอระดับภาคเหนือร่วมกับเพื่อนได้ที่ 21 ",
          "ได้ทุนการศึกษาแข่งขันทางวิชาการ"
        ],
        location: "เชียงใหม่"
      },

    ],
    experience: [
      {
        id: 1,
      company: "Dudee-Indeed Co.,Ltd",
      position: "Intern Frontend Developer",
      startDate: "ตุลาคม 2567",
      endDate: "กุมภาพันธ์ 2568",
      description: "ฝึกงานที่บริษัท Dudee-Indeed Co.,Ltd ในตำแหน่ง Frontend Developer ทำหน้าที่พัฒนาเว็บไซต์ให้กับลูกค้า",
      logoUrl: "/images/EX/dudee.png",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS","Vue.js","Nuxt.js","JavaScript","HTML","CSS","Git","GitHub","Pug"],
      location: "79 อาคาร ซ.6 ถ.นิมมานเหมินทร์ ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่ 50200",
      responsibilities: [
        "พัฒนาและดูแลส่วนของ Frontend สำหรับเว็บแอปพลิเคชันในหลายโครงการ เช่น เกษมรุ่งเรืองขนส่ง และทิพยประกันภัย",
        "ทำงานร่วมกับทีมในการพัฒนาและดูแล Frontend สำหรับเว็บแอปพลิเคชันใหม่",
        "ฝึกการทำงานเป็นทีมร่วมกับ Backend และ UX/UI ในกระบวนการพัฒนาเว็บแอปพลิเคชัน",
        "เรียนรู้และปฏิบัติงานด้วยกระบวนการ Scrum และ Agile ในการพัฒนาเว็บแอปพลิเคชัน",
        "ได้รับรางวัลนักศึกษาฝึกงานดีเด่นจากกาประเมินของพนักงานในบริษัท",

      ],
      projectsUrl: "#"
      },
    ],
  };

  
  const [isClickedProjects, setIsClickedProjects] = useState(false);
  const [isClickedEI, setIsClickedEI] = useState(false);
  const [isClickedExperience, setIsClickedExperience] = useState(false);

  const ClickButtonProjects = () => {
    setIsClickedProjects(!isClickedProjects);
    setIsClickedEI(false);
    setIsClickedExperience(false);
  };
  const ClickButtonEI = () => {
    setIsClickedEI(!isClickedEI);
    setIsClickedProjects(false);
    setIsClickedExperience(false);
  };
  const ClickButtoEnxperience = () => {
    setIsClickedExperience(!isClickedExperience);
    setIsClickedProjects(false);
    setIsClickedEI(false);
  };

  const Linkpage = (link: string) => {
    window.location.href = link;
  };
  return (
    <div>
      <div className="w-full text-center">
        <p className="text-hilight  text-3xl md:text-4xl mb-6 text-center mt-10 hover:scale-105 hover:transition-all">
          About Me
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center max-w-6xl mx-auto  px-4">
        <div className="flex  flex-col items-center w-[540px] md:items-start text-center md:text-left order-2 md:order-1">
          <p className="text-3xl md:text-4xl font-semibold mb-2 w-fit hover:scale-105 hover:transition-all">
            ประวัติส่วนตัว
          </p>
          <p className="text-hilight text-3xl md:text-4xl mb-4 md:mb-6 hover:scale-105 hover:transition-all">
            Jeerasak Tajai
          </p>
          <div className="max-w-md text-gray-300 leading-relaxed">
            ผมชื่อ นายจีระศักดิ์ ต๋าใจ หรือเรียกสั้นๆ ว่า "นิว" ครับ <br />
            วันเกิด: 19 มีนาคม 2545 <br />
            เชื้อชาติ: ไทย <br />
            ศาสนา: พุทธ <br />
            ความสามารถพิเศษ
            <br />
            <div className="flex justify-start items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2 "></div>
              เล่นกีตาร์ <br />
            </div>
            <div className="flex justify-start items-center">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
              ร้องเพลง 🎶 (ถึงจะไม่ได้มืออาชีพ แต่ก็ร้องจากใจ!) <br />
            </div>
            เป้าหมายในชีวิต
            <br />
            <div className="flex justify-start items-start">
              <div className="w-2 h-2  rounded-full mr-2"></div>
              ผมมุ่งมั่นที่จะประสบความสำเร็จ และอยากมีชีวิตที่มั่นคง ไม่ใช่แค่{" "}
              <br /> "อยากรวย"
              แต่ต้องการสร้างคุณค่าและความมั่งคั่งให้กับตัวเองและคนรอบข้างครับ
            </div>
          </div>
        </div>

        <div className=" flex justify-center order-1 md:order-2 mb-6 md:mb-0">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-80 lg:h-80 rounded-full flex items-center justify-center overflow-hidden border-4 border-orange-500 shadow-xl hover:scale-105 hover:transition-all">
            <img
              src="/images/64143109.jpg"
              alt="Next.js Icon"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* ส่วนปุ่มเลือกหมวดหมู่ */}
      <div className="flex flex-col justify-center sm:flex-row items-center gap-4 sm:gap-10 items-center max-w-6xl mx-auto px-4 my-10">
        <Button
          className="box h-[100px] w-full sm:w-full gap-4"
          variant="primary"
          onClick={ClickButtonProjects}
        >
          <Icon icon="line-md:github-loop" className="text-4xl md:text-5xl" />
          <p className="text-hilight text-2xl md:text-center">Project </p>
        </Button>
        <Button
          className="box h-[100px] w-full sm:w-full gap-4"
          onClick={ClickButtonEI}
        >
          <Icon
            icon="material-symbols-light:school-outline-rounded"
            className="text-4xl md:text-5xl"
          />
          <p className="text-hilight  text-2xl  md:w-[140px]">
            educational institution
          </p>
        </Button>
        <Button
          className="box h-[100px] w-full sm:w-full gap-4"
          onClick={ClickButtoEnxperience}
        >
          <Icon icon="mdi:company" className="text-4xl md:text-5xl" />
          <p className="text-hilight text-2xl md: text-center">experience</p>
        </Button>
      </div>

      {/* ส่วนแสดงการ์ด */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 mt-10">
        {isClickedProjects &&
          data.projects?.map((item) => (
            <ProjectCard key={item.id} project={item} />
          ))}
        {isClickedEI &&
          data.educational_institution?.map((item, index) => (
            <EducationCard key={index} education={item} />
          ))}
        {isClickedExperience &&
          data.experience?.map((item, index) => (
            <ExperienceCard key={index} experience={item} />
          ))}
      </div>
    </div>
  );
}

export default AboutContent;
