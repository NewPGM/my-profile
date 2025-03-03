'use client';
import { Icon } from "@iconify/react";
import { Button } from "@/app/component/common/Button";
import { useState } from 'react';
import SkillTag from "../component/common/SkillCard";
import CertificateCard from "../component/common/Certificate";

 function Portfolio() {
  const data = {
    "projects": [
      {
        "title": "Project 1",
        "description": "Description of Project 1",
        "imageUrl": "/images/devicon_nextjs.png"
      },
      {
        "title": "Project 2",
        "description": "Description of Project 2",
        "imageUrl": "/images/devicon_nextjs.png"
      }
    ],
    "certificates": [
      {
        id: 1,
    title: "Certificate สำหรับพนักงานและเด็กฝึกงานดีเด่น จากบริษัท Dudee-Indeed Co.,Ltd",
    description: "กิจกรรม แจกใบ Certificate สำหรับพนักงานและเด็กฝึกงานดีเด่น",
    image: "/images/CC/CC.png",
    issuedBy: "คุณธนกร ศิรินทร์ CEO/Manager(Chief Executive Officer)",
    issueDate: "ธันวาคม 2567",
    certificateLink: "https://example.com/certificate/react"
      },
      {
        id: 2,
    title: "การพัฒนา JAVA Web Applocation ด้วย Spiring boot Framework และ Angular JS",
    description: "กิจกรรมพี่สอนน้อง การพัฒนา JAVA Web Applocation ด้วย Spiring boot Framework และ Angular JS",
    image: "/images/CC/java.png",
    issuedBy: "ผู้ช่วยศาสตราจารย์ ดร.รสลิน เพตะกร หัวหน้าภาควิชาคอมพิวเตอร์",
    issueDate: "มีนาคม 2567",
    certificateLink: "https://example.com/certificate/react"   
      },
      {
        id: 3,
    title: "โครงการส่งเสริมสมรรถนะและทักษะด้านดิจิทัล สำหรับนักศึกษาชั้นปีสุดท้าย",
    description: "กิจกรรม โครงการเพิ่มพูนทักษะวิชาการและทักษะแห่งศตวรรษ ที่ ๒๑ กิจกรรม โครงการส่งเสริมสมรรถนะและทักษะด้านดิจิทัล สำหรับนักศึกษาชั้นปีสุดท้าย",
    image: "/images/CC/cmru.png",
    issuedBy: "ผู้ช่วยศาสตราจารย์ ดร.รสลิน เพตะกร หัวหน้าภาควิชาคอมพิวเตอร์",
    issueDate: "กรกฎาคม 2567",
    certificateLink: "https://example.com/certificate/react"   
      },
      {
        id: 4,
      title: "เตรียมความพร้อมและทบททวนความรู้สมรรถนะดิจิทัล(Digital Literacy)",
      description: "กิจกรรม เตรียมความพร้อมและทบททวนความรู้สมรรถนะดิจิทัล(Digital Literacy)",
      image: "/images/CC/DL.png",
      issuedBy: "ผู้ช่วยศาสตราจารย์ ดร.กัลยา ใจรักษ์ ผู้อํานวยการสำนักงานดิจิทัล",
      issueDate: "สิงหาคม 2567",
      certificateLink: "https://example.com/certificate/react"
    },
      {
        id: 4,
    title: "Design Thinking",
    description: "ผ่านอบรม Design Thinking set e-learning",
    image: "/images/CC/design.png",
    issuedBy: "SET",
    issueDate: "มิถุนายน 2567",
    certificateLink: "https://example.com/certificate/react"   
      },
      {
        id: 5,
    title: "Digital Marketing",
    description: "ผ่านอบรม Digital Marketing set e-learning",
    image: "/images/CC/DSMT.png",
    issuedBy: "SET",
    issueDate: "กรกฎาคม 2567",
    certificateLink: "https://example.com/certificate/react"   
      },
      {
        id: 6,
    title: "UX Development",
    description: "ผ่านอบรม UX Development set e-learning",
    image: "/images/CC/UX.png",
    issuedBy: "SET",
    issueDate: "กรกฎาคม 2567",
    certificateLink: "https://example.com/certificate/react"   
      },
      {
        id: 7,
    title: "Customer Validation",
    description: "ผ่านอบรม Customer Validation set e-learning",
    image: "/images/CC/CV.png",
    issuedBy: "SET",
    issueDate: "มิถุนายน 2567",
    certificateLink: "https://example.com/certificate/react"   
      },
      {
        id: 8,
    title: "Content Creater ออนไลน์",
    description: "ผ่านอบรม Content Creater ออนไลน์ set e-learning",
    image: "/images/CC/CCO.png",
    issuedBy: "SET",
    issueDate: "มิถุนายน 2567",
    certificateLink: "https://example.com/certificate/react"   
      },
      {
        id: 9,
    title: "เปลี่ยนการถ่ายภาพเป็นรายได้แบบมืออาชีพ",
    description: "ผ่านอบรมเปลี่ยนการถ่ายภาพเป็นรายได้แบบมืออาชีพ set e-learning",
    image: "/images/CC/Photo.png",
    issuedBy: "SET",
    issueDate: "มิถุนายน 2567",
    certificateLink: "https://example.com/certificate/react"   
      },
    ],
    "skills": [
      {
        id: 1,
      name: "React",
      icon: "skill-icons:react-light",
      category: "Frontend",
      color: "#61DAFB"
      },
      {
        id: 2,
      name: "Node.js",
      icon: "devicon:nodejs",
      category: "Backend",
      color: "#339933"
      },
      {
        id: 3,
      name: "Vue.js",
      icon: "skill-icons:vuejs-light",
      category: "Frontend",   
      color: "#47A248"
      },  
      {
        id: 4,
      name: "Next.js",
      icon: "skill-icons:nextjs-dark",
      category: "Frontend",
      color: "#ededed"
      },
      {
        id: 5,
      name: "Tailwind CSS",
      icon: "skill-icons:tailwindcss-light",
      category: "Frontend",
      color: "#06B6D4"
      },
      {
        id: 6,
      name: "HTML",
      icon: "skill-icons:html",
      category: "Frontend",
      color: "#ff6600"
      },
      {
        id: 7,
      name: "JavaScript",
      icon: "skill-icons:javascript",
      category: "Frontend",
      color: "#F7DF1E"
      },
      {
        id: 8,
      name: "Pug",
      icon: "skill-icons:pug-light",
      category: "Frontend",
      color: "#A86454"
      },
      {
        id: 9,
      name: "CSS",
      icon: "skill-icons:css",
      category: "Frontend",
      color: "#1572B6"
      },
      {
        id: 10,
      name: "Nuxt.js",
      icon: "skill-icons:nuxtjs-dark",
      category: "Frontend",
      color: "#00DC82"
      },
      {
        id: 11,
      name: "Git",
      icon: "skill-icons:git",
      category: "Frontend",
      color: "#F05032"
      },
      {
        id: 12,
      name: "GitHub",
      icon: "skill-icons:github-dark",
      category: "Frontend",
      color: "#ededed"
      },
      {
        id: 13,
      name: "Figma",
      icon: "skill-icons:figma-dark",
      category: "Design",
      color: "#F24E1E"
      },
      {
        id: 14,
      name: "Rast API",
      icon: "hugeicons:api",
      category: "Backend",
      color: "#ededed"
      },
      {
        id: 15,
      name: "Clickup",
      icon: "lineicons:clickup",
      category: "Project Management",
      color: "#ededed"
      },
      {
        id: 16,
      name: "Fork",
      icon: "file-icons:fork",
      category: "Frontend",
      color: "#1572B6"
      },
      {
        id:17,
      name: "Postman",
      icon: "vscode-icons:file-type-postman",
      category: "Backend",
      color: "#FF6C37"
      },
      {
        id: 18,
      name: "Visual Studio Code",
      icon: "vscode-icons:file-type-vscode",
      category: "Frontend",
      color: "#007ACC"
      },
      {
        id: 19,
      name: "Notion",
      icon: "devicon:notion",
      category: "Frontend",
      color: "#ededed"
      },
      {
        id: 20,
      name: "Yarn",
      icon: "vscode-icons:file-type-yarn",
      category: "Frontend",
      color: "#2C8EBB"
      },
      {
        id: 21,
      name: "GitLab",
      icon: "vscode-icons:file-type-gitlab",
      category: "Frontend",
      color: "#FF6C37"
      },
      {
        id: 22,
      name: "Miro",
      icon: "logos:miro-icon",
      category: "Frontend",
      color: "#FCA326"
      },
    ]
  };
  
  const [isClickedProject, setIsClickedProject] = useState(false);
  const [isClickedCertificate, setIsClickedCertificate] = useState(false);
  const [isClickedSkill, setIsClickedSkill] = useState(true);

  const ClickButtonProject = () => {
    setIsClickedProject(!isClickedProject)
    setIsClickedCertificate(false)
    setIsClickedSkill(false)
  }
  const ClickButtonCertificate = () => {
    setIsClickedCertificate(!isClickedCertificate)
    setIsClickedProject(false)
    setIsClickedSkill(false)
  }
  const ClickButtonSkill = () => {
    setIsClickedSkill(!isClickedSkill)
    setIsClickedProject(false)
    setIsClickedCertificate(false)
  }

  return (
    <div>
  <div className="w-full text-center mt-10 md:mt-20">
    <div className="text-hilight text-3xl text-center w-full md:text-4xl mb-4 md:mb-6 text-center hover:scale-105 hover:transition-all">
      Portfolio
    </div>
  </div>
  

  <div className="flex flex-col justify-center sm:flex-row gap-4 sm:gap-10 items-center max-w-6xl mx-auto px-4 mb-6">
    <Button 
      onClick={ClickButtonProject} 
      className="box h-[100px] w-full sm:w-full gap-4"
    >
      <Icon icon="line-md:github-loop" className="text-4xl md:text-5xl" />
      <p className="text-hilight text-2xl md: text-center">
        Project
      </p>
    </Button>
    
    <Button 
      onClick={ClickButtonCertificate} 
      className="box h-[100px] w-full sm:w-full justify-center gap-4"
    >
      <Icon
        icon="material-symbols-light:school-outline-rounded"
        className="text-4xl md:text-5xl"
      />
      <p className="text-hilight text-center text-2xl ">
        Certificate
      </p>
    </Button>
    
    <Button 
      onClick={ClickButtonSkill} 
      className="box h-[100px] w-full sm:w-full gap-4"
    >
      <Icon icon="mdi:company" className="text-4xl md:text-5xl" />
      <p className="text-hilight text-2xl md:text-center">
        Skill
      </p>
    </Button>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 mt-6 md:mt-10">
    {isClickedProject && data.certificates?.map((item, index) => (
      <CertificateCard key={index} certificate={item} />
    ))}
    
    {isClickedCertificate && data.certificates?.map((item, index) => (
      <CertificateCard key={index} certificate={item} />
    ))}
    
    {isClickedSkill && data.skills?.map((item, index) => (
      <SkillTag  key={index} skill={item}  />
    ))}
  </div>
</div>
  );
}

export default Portfolio;