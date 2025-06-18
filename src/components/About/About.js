import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Card className="quote-card-view">
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <div style={{ textAlign: "justify" }}>
                        <p>
                          Hi! I'm <strong>Gopichand Reddy</strong>, an AEM Full Stack Developer currently working at <strong>IBM</strong> (as of June 2025), based in Bangalore, India.
                        </p>
                        <p>
                          I completed my engineering in Computer Science in 2020 and began my career at <strong>Mindtree</strong> as a Junior AEM Developer. From day one, I immersed myself in the AEM ecosystem—grasping as much as I could about building scalable, CMS-driven web applications.
                        </p>
                        <p>
                          After nearly three years at Mindtree, I transitioned to <strong>IBM</strong>, where I've had the opportunity to work on large-scale, legacy modernization projects and enterprise-grade AEM implementations. Each project has helped me grow as both a developer and a problem solver.
                        </p>
                        <p>
                          I've gained valuable experience across the AEM stack—components, templates, Sling models, OSGi, workflows, integrations, and more. You can learn more about my project work, responsibilities, and achievements by visiting the Projects section of my portfolio.
                        </p>
                      </div>
                      <p style={{ color: "#0a58ca", textAlign:"right" }}>
                        If you start something, don’t stop until it’s done - even if you fail.
                      </p>
                      <footer className="blockquote-footer">Gopichand</footer>
                    </blockquote>
                  </Card.Body>
                </Card>
          </Col>

        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
