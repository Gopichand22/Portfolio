import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import intern from "../../Assets/Projects/internship.png";
import realogy from "../../Assets/Projects/Realogy.png";
import sir from "../../Assets/Projects/Sothebys_Logo.svg.png";
import bhgre from "../../Assets/Projects/Bhgre.png";
import ibmRtl from "../../Assets/Projects/rtl.webp";
import carbon from "../../Assets/Projects/carbonds.png";
import AEMassets from "../../Assets/Projects/AEM.png";
import { TbSquareLetterI,TbSquareLetterR, TbSquareLetterS, TbSquareLetterB, TbSquareLetterC, TbSquareLetterA   } from "react-icons/tb";

// Simple array of project data
const projectList = [
  {
    headline: "Internship",
    icon: TbSquareLetterI,
    title: "IdealVillage Internship",
    description: "This was my first internship in web design and development, which I started in 2018.",
    details: "I received this internship in 2019 to work on some web design and development tasks. I had started learning web design back in 2018, and I used to experiment with CSS and HTML. I was always amazed by how simple color and design changes could completely transform a page - it felt exciting and overwhelming at the same time. That fascination kept me motivated to continue with web design and development. Eventually, I moved on to learning JavaScript, jQuery, Java, C, Python, and more. I worked for about a month, mainly designing a few cards for them. Later, as my college midterms started, the work paused, and I eventually ended the internship.",
    imgPath: intern,
  },
  {
    headline: "Realogy aka Anywhere",
    icon: TbSquareLetterR,
    title: "Realogy / Anywhere",
    description: "Weather forecasting app using OpenWeather API and React.",
    imgPath: realogy,
  },
  {
    headline: "Sotheby's International Realty",
    icon: TbSquareLetterS,
    title: "SIR",
    description: "My personal developer portfolio showcasing projects and skills.",
    imgPath: sir,
  },
  {
  headline: "BHGRE & Leverage",
  icon: TbSquareLetterB,
      title: "BHGRE & Leverage",
      description: "My personal developer portfolio showcasing projects and skills.",
      imgPath: bhgre,
    },
    {
    headline: "IBM RTL Implementation",
    icon: TbSquareLetterI,
    title: "IBM RTL version",
    description: "My personal developer portfolio showcasing projects and skills.",
    imgPath: ibmRtl,
  },
  {
  headline: "Carbon Design Systems",
  icon: TbSquareLetterC,
  title: "Carbon Design System Upgrade",
  description: "My personal developer portfolio showcasing projects and skills.",
  imgPath: carbon,
},
    {
    headline: "AEM Assets",
    icon: TbSquareLetterA,
    title: "AEM Assets",
    description: "My personal developer portfolio showcasing projects and skills.",
    imgPath: AEMassets,
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Work <strong className="purple">Profiles </strong>
        </h1>
        <p style={{ color: "white" }}>
          Projects That Shaped My AEM Developer Journey.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectList.map((project, index) => (
            <Col md={6} className="project-card" key={index}>
              <ProjectCard
                index= {index}
                headline={project.headline}
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                details={project.details}
                icon={project.icon}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

