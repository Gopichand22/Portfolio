import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Card from "react-bootstrap/Card";

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

        <hr style={{
            width: "90%",
            margin: "20px auto",
            border: "none",
            height: "6px",
            background: "linear-gradient(to right, transparent, #0a58ca, transparent)"
        }} />
        <h1 className="project-heading mb-0 me-3">
            Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <hr style={{
            width: "90%",
            margin: "20px auto",
            border: "none",
            height: "6px",
            background: "linear-gradient(to right, transparent, #0a58ca, transparent)"
        }} />
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
