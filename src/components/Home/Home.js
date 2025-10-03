import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/profilepic.jpeg";
import Particle from "../Particle";

import Type from "./Type";
import About from "../About/About";
import { FaHandSparkles } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{
                        maxHeight: "450px",
                        width: "300px",
                        height: "650px",
                        borderRadius: "10%",
                        objectFit: "cover",
                        opacity:".9",
                  }}
                />
              </Col>

            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hey Hello..!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  <FaHandSparkles />
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> GOPICHAND REDDY PULAGAM</strong>
                <span className="profession">AEM Lead Developer</span>
              </h1>
              <h2 style={{ paddingTop: 100 }} className="skill-heading">Tech-Stack
              </h2>
              <div style={{ paddingTop: 20, paddingLeft: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>


          </Row>
        </Container>
      </Container>
      <About />
    </section>
  );
}

export default Home;
