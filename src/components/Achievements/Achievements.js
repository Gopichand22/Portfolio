import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
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
              <strong className="purple">Achievements</strong> in my career
            </h1>
            <Card className="quote-card-view">
                  <Card.Body>
                    <h1>Work in Progress</h1>
                  </Card.Body>
                </Card>
          </Col>

        </Row>


      </Container>
    </Container>
  );
}

export default About;
