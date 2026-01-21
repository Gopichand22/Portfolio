import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiJqueryLogo,
  DiSass,
  DiBootstrap,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJqueryLogo />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
              <span style={{fontSize:"20px"}}>Sling</span>
            </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{fontSize:"20px"}}>Apache</span>
      </Col>

    <Col xs={4} md={2} className="tech-icons">
      <span style={{fontSize:"20px"}}>Carbon</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <span style={{fontSize:"20px"}}>Postman</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
      <span style={{fontSize:"20px"}}>Maven</span>
    </Col>
    <Col xs={4} md={2} className="tech-icons">
            <DiSass />
          </Col>
    <Col xs={4} md={2} className="tech-icons">
      <span style={{fontSize:"20px"}}>Rest-Api</span>
    </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>AEM Sites</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>Assets</span>
        </Col><Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>Schedulers</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>Agile</span>
        </Col><Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>Solr</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
              </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>SonarQube</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>npm</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>Webpack</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
                <DiGit />
              </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>Rtl</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <span style={{fontSize:"20px"}}>AEMaaCS</span>
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <span style={{fontSize:"30px"}}>etc</span>
      </Col>

    </Row>
  );
}

export default Techstack;
