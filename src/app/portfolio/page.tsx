'use client';
import { Icon } from "@iconify/react";
import { BasicCard } from "../component/common/card";
import { Button } from "@/app/component/common/Button";
import { useState } from 'react';
export default function Portfolio() {
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
          <div className="w-full text-center mt-20">
        <p className="text-hilight text-4xl mb-6 text-center">Portfolio</p>
      </div>
      <div className="flex justify-center gap-10 items-center max-w-6xl mx-auto px-4 ">
        <Button onClick={ClickButtonProject} className="box h-[100px] gap-4">
          <Icon icon="line-md:github-loop" className="text-5xl " />
          <p className="text-hilight text-4 text-center ">Project 11</p>
        </Button>
        <Button onClick={ClickButtonCertificate} className="box h-[100px] justify-center gap-4">
          <Icon
            icon="material-symbols-light:school-outline-rounded"
            className="text-5xl "
          />
          <p className="text-hilight text-center ">
          Certificate
          </p>
          <p className="text-hilight text-4 text-center ">11</p>
        </Button>
        <Button onClick={ClickButtonSkill} className="box h-[100px]  gap-4">
          <Icon icon="mdi:company" className="text-5xl " />
          <p className="text-hilight text-4 text-center ">skill</p>
        </Button>
      </div>
      <div className="flex grid grid-cols-3 gap-4 max-w-6xl mx-auto px-4 mt-10 ">
      {isClickedProject && data.projects?.map((item, index) => (
        <BasicCard key={index} title={item.title} description={item.description} imageUrl={item.imageUrl}  className=""/>
      ))}
      {isClickedCertificate && data.certificates?.map((item, index) => (
        <BasicCard key={index} title={item.title} description={item.description} imageUrl={item.imageUrl}  className=""/>
      ))}
      {isClickedSkill && data.skills?.map((item, index) => (
        <BasicCard key={index} title={item.title} description={item.description}  className=""/>
      ))}
    </div>
    </div>
  );
}
