import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import TechstackClassic from "./TechstackClassic";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";

function About() {
  const [isModern, setIsModern] = useState(true);

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
              Know About{" "}
              <strong
                className="purple"
                style={{ fontSize: "55px", textDecoration: "underline" }}
              >
                ME
              </strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0" style={{ textAlign: "justify" }}>
                  <p>
                    Hi! I'm <span className="purple">Gopichand Reddy</span>, an{" "}
                    <span className="purple">AEM Full Stack Developer</span> currently
                    working at <strong className="purple">IBM</strong> (as of June 2025),
                    based in Bangalore, India.
                  </p>
                  <p>
                    I completed my engineering in{" "}
                    <span className="purple">Computer Science</span> in 2020 and began my
                    career at <span className="purple">Mindtree</span>...
                  </p>
                  <p>
                    I've gained valuable experience across the{" "}
                    <span className="purple">AEM stack</span>...
                  </p>
                  <p className="gopichand-quote" style={{ color: "#0a58ca", textAlign: "right" }}>
                    If you start something, don’t stop until it’s done - even if you fail.
                  </p>
                  <footer className="blockquote-footer">Gopichand</footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Heading + Toggle */}
        <div className="d-flex align-items-center justify-content-center mb-4">
          <h1 className="project-heading mb-0 me-3">
            Professional <strong className="purple">Skillset</strong>
          </h1>

          {/* Toggle Button */}
          <div
            onClick={() => setIsModern(!isModern)}
            style={{
              width: "60px",
              height: "30px",
              borderRadius: "20px",
              padding: "3px",
              backgroundColor: isModern ? "#00cc66" : "#fff",
              cursor: "pointer",
              position: "relative",
              boxShadow: "inset 2px 2px 6px #00000066, inset -2px -2px 6px #ffffff55",
              transition: "background-color 0.3s ease",
            }}
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: isModern ? "#004d26" : "#666",
                position: "absolute",
                top: "3px",
                left: isModern ? "32px" : "3px",
                transition: "left 0.3s ease, background-color 0.3s ease",
                boxShadow: "2px 2px 4px rgba(0,0,0,0.4), -2px -2px 4px rgba(255,255,255,0.2)",
              }}
            ></div>
          </div>
        </div>

        {/* Component Switch */}
        {isModern ? <Techstack /> : <TechstackClassic />}

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
