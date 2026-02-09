import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import intern2 from "../../Assets/Projects/internship main.png";
import carbonm from "../../Assets/Projects/cds.png";
import realestate from "../../Assets/Projects/realestate.jpeg";
import sothey from "../../Assets/Projects/sothey.jpeg";
import bhgrem from "../../Assets/Projects/bhgrem.jpeg";
import rtlltr from "../../Assets/Projects/rtlltr.jpg";
import assetsm from "../../Assets/Projects/assetsm.jpg";
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
    description: "IdealVillage is my first internship in web design and development, which I started in 2019.",
    details: "I received this internship in 2019 to work on some web design and development tasks. I had started learning web design back in 2018, and I used to experiment with CSS and HTML. I was always amazed by how simple color and design changes could completely transform a page - it felt exciting and overwhelming at the same time. That fascination kept me motivated to continue with web design and development. Eventually, I moved on to learning JavaScript, jQuery, Java, C, Python, and more. I worked for about a month, mainly designing a few cards for them. Later, as my college midterms started, the work paused, and I eventually ended the internship.",
    imgPath: intern2,
    media: intern,
  },
  {
    headline: "Realogy aka Anywhere",
    icon: TbSquareLetterR,
    title: "Realogy / Anywhere",
    description: "Weather forecasting app using OpenWeather API and React.",
    details: "Realogy is a huge real estate web application which runs on AEM 6.5. Experienced in development and enhancements to the web-application based on business requirements. The project is a B2B Web application. It has almost 6 sub brands called SIR, Bhgre, Leverage, Corcoron, C21, CB",
    imgPath: realogy,
    media: realestate,
  },
  {
    headline: "Sotheby's International Realty",
    icon: TbSquareLetterS,
    title: "SIR",
    description: "My First Project in my career, Which taught so many things not just tech.",
    details:"Started my career with the SIR project. Where I started creating components, templates, dialogs, clientlibs etc. in AEM 6.4 environment, at later point of time we upgraded it to AEM 6.5. I migrated more than 20 components from JSP to HTL(Sightly). Developed stories and moved them to production rollouts. Designed and developed using sightly, servlets, sling services, OSGi configurations, run modes etc. Implemented custom functionalities and extensions using Java, JavaScript, and other relevant technologies to meet specific project requirements. Optimized website performance and ensured adherence to best practices for code quality and maintainability.",
    imgPath: sir,
    media: sothey,
  },
  {
  headline: "BHGRE & Leverage",
  icon: TbSquareLetterB,
      title: "BHGRE & Leverage",
      description: "Here i got to know more about API integration and Few Front end Tech like vintage Angular (AngularJS or Angular 1) lol",
      details:"Mentored junior developers in understanding the project and in migration work (JSP to Sightly) work. Conducted code reviews and provided guidance to junior developers to ensure the adoption of best practices and maintain consistency across projects. Worked in development activities and worked in maintenance and support for the project where we get incidents & service tickets which need to analyse and clarify the users. If required need to do some enhancements for the existing code. Delivered stories on time in sprint activities(Agile Methodology).Consumed REST and SOAP APIs from other vendors for showing up to date real estate data which helped agents to be more productive and build stronger business.",
      imgPath: bhgre,
      media: bhgrem,
    },
    {
    headline: "IBM RTL Implementation",
    icon: TbSquareLetterI,
    title: "IBM RTL version",
    description: "Shifted from LTIM to IBM, IBM is my all time fav as of now (Working culture, Leadership support, Learning curve++, ETC)",
    details:"I moved from LTI Mindtree to IBM, where I got the chance to work on a completely different challenge-RTL migration. We built an Arabic site that required everything to be flipped from LTR to RTL, and I learned a lot about localization, MSM (Multi-Site Management), rollouts, translations, and handling language-based styles dynamically.",
    imgPath: ibmRtl,
    media: rtlltr,
  },
  {
  headline: "Carbon Design Systems",
  icon: TbSquareLetterC,
  title: "Carbon Design System Upgrade",
  description: "I can say this is my Milestone in my career, Where i got the best feedback from my leadship for my hardwork",
  details:"My next project at IBM was a Carbon Web Components and AEM Components upgrade - a huge migration work. I did a POC, presented our approach to the client, and got approval to move forward. It was a high-pressure project since we basically rebuilt everything from scratch in a short time, but we pulled it off successfully. By the  way should really think my Architect(Gopal Agarwal & Kiran Mohan) for the support and guidance",
  imgPath: carbon,
  media: carbonm,
},
    {
    headline: "AEM Assets",
    icon: TbSquareLetterA,
    title: "AEM Assets",
    description: "Moved from comfort zone AEM Sites to AEM Assets lol",
    details:" worked on a DAM-related project, where we synced asset's metadata and binary data from AEM 6.5 (on-prem) to AEM as a Cloud Service (AEMaaCS). Our main code recipe triggers asset replication when specific actions are performed.",
    imgPath: AEMassets,
    media: assetsm,
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
        <hr style={{
            width: "90%",
            margin: "20px auto",
            border: "none",
            height: "6px",
            background: "linear-gradient(to right, transparent, #0a58ca, transparent)"
        }} />
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
                media={project.media}
              />
            </Col>

          ))}
        </Row>
        <hr style={{
            width: "90%",
            margin: "20px auto",
            border: "none",
            height: "6px",
            background: "linear-gradient(to right, transparent, #0a58ca, transparent)"
        }} />
      </Container>
    </Container>
  );
}

export default Projects;

