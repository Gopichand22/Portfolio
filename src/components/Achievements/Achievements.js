import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <Container fluid className="achievements-section">
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
              <strong className="purple">Achievements</strong> in my career
            </h1>
            <Card className="quote-card-view">
                  <Card.Body>
                    <h1>Need to update this page - due to tight projet work - not getting time to do it</h1>
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

      </Container>
    </Container>
  );
}

export default About;
