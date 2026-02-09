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
            <h1 style={{paddingBottom: "20px" }}>
              Know About{" "}
              <strong
                className="purple"
                style={{textDecoration: "underline" }}
              >
                ME
              </strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0" style={{ textAlign: "justify" }}>

                  <p>
                    I have over five years of hands-on experience working with{" "}
                    <span className="purple">Adobe Experience Manager</span> across{" "}
                    <span className="purple">Sites, Assets, and Dynamic Media</span> in large
                    enterprise environments. My core strengths include designing and developing
                    custom components using <span className="purple">HTL and Sling Models</span>,
                    building <span className="purple">OSGi services and servlets</span>, and
                    ensuring high code quality through best practices, modular architecture,
                    and performance optimization.
                  </p>

                  <p>
                    In my first major engagement, I migrated legacy{" "}
                    <span className="purple">AEM 6.4 JSP-based components</span> to modern{" "}
                    <span className="purple">AEM 6.5 HTL implementations</span>, separating
                    tightly coupled logic into clean backend services and reusable front-end
                    templates. I later built new components from scratch and enhanced existing
                    ones to improve author experience and performance, and contributed to{" "}
                    <span className="purple">RTL support for Arabic sites</span> to enable
                    seamless multilingual delivery.
                  </p>

                  <p>
                    I led the <span className="purple">Carbon Design System</span> upgrade
                    from version 1 to version 2, a transformation that required full
                    re-architecture of the front-end layer and a structured implementation
                    strategy. I have also worked on complex{" "}
                    <span className="purple">DAM migrations</span> from AEM 6.5 on-prem to{" "}
                    <span className="purple">AEM as a Cloud Service</span>, solving challenges
                    around metadata, renditions, and environment differences.
                  </p>

                  <p>
                    More recently, I contributed to{" "}
                    <span className="purple">real-time and two-way asset synchronization</span>{" "}
                    between on-prem and AEMaaCS, and I am currently involved in large-scale
                    migration of third-party pages into native AEM using a custom migration
                    framework. I have also delivered{" "}
                    <span className="purple">Edge Delivery Services POCs</span> using
                    document-based and Universal Editor approaches, creating blocks and
                    presenting solutions directly to clients.
                  </p>

                  <p
                    className="gopichand-quote"
                    style={{ color: "#0a58ca", textAlign: "right" }}
                  >
                    Building experiences is not just code — it’s architecture with purpose.
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
