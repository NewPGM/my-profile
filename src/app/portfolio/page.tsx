'use client';
import { Icon } from "@iconify/react";
import { BasicCard } from "../component/common/card";
import { Button } from "@/app/component/common/Button";
import { useState } from 'react';

 function Portfolio() {
  const data = {
    "projects": [
      {
        "title": "Project 1",
        "description": "Description of Project 1",
        "imageUrl": "https://example.com/project1.jpg"
      },
      {
        "title": "Project 2",
        "description": "Description of Project 2",
        "imageUrl": "https://example.com/project2.jpg"
      }
    ],
    "certificates": [
      {
        "title": "Certificate 1",
        "description": "Description of Certificate 1",
        "imageUrl": "https://example.com/certificate1.jpg"    
      },
      {
        "title": "Certificate 2",
        "description": "Description of Certificate 2",
        "imageUrl": "https://example.com/certificate2.jpg"    
      }
    ],
    "skills": [
      {
        "title": "Skill 1",
        "description": "Description of Skill 1"
      },
      {
        "title": "Skill 2",
        "description": "Description of Skill 2"
      }
    ]
  };
  
  const [isClickedProject, setIsClickedProject] = useState(false);
  const [isClickedCertificate, setIsClickedCertificate] = useState(false);
  const [isClickedSkill, setIsClickedSkill] = useState(false);

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
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 mt-6 md:mt-10">
    {isClickedProject && data.projects?.map((item, index) => (
      <BasicCard 
        key={index} 
        title={item.title} 
        description={item.description} 
        imageUrl={item.imageUrl} 
        className=""
      />
    ))}
    
    {isClickedCertificate && data.certificates?.map((item, index) => (
      <BasicCard 
        key={index} 
        title={item.title} 
        description={item.description} 
        imageUrl={item.imageUrl} 
        className=""
      />
    ))}
    
    {isClickedSkill && data.skills?.map((item, index) => (
      <BasicCard 
        key={index} 
        title={item.title} 
        description={item.description} 
        className=""
      />
    ))}
  </div>
</div>
  );
}

export default Portfolio;