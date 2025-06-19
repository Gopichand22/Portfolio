import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
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
                          Hi! I'm <span className="purple">Gopichand Reddy</span>, an <span className="purple">AEM Full Stack Developer</span> currently working at <strong className="purple">IBM</strong> (as of June 2025), based in Bangalore, India.
                        </p>
                        <p>
                          I completed my engineering in  <span className="purple">Computer Science</span> in 2020 and began my career at <span className="purple">Mindtree</span> as a Junior AEM Developer. From day one, I immersed myself in the AEM ecosystem—grasping as much as I could about building scalable, CMS-driven web applications.
                        </p>
                        <p>
                          After nearly <span  className="purple">three years at Mindtree</span>, I transitioned to <strong>IBM</strong>, where I've had the opportunity to work on large-scale, legacy modernization projects and enterprise-grade AEM implementations. Each project has helped me grow as both a <span className="purple">developer and a problem solver</span>.
                        </p>
                        <p>
                          I've gained valuable experience across the <span  className="purple">AEM stack—components, templates, Sling models, OSGi, Java, schedulers, services, configs, jobs, and more</span>. You can learn more about my project work, responsibilities, and achievements by visiting the <span  className="purple">Projects section</span> of my portfolio.
                        </p>
                      </div>
                      <p className="gopichand-quote" style={{ color: "#0a58ca", textAlign:"right" }}>
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
