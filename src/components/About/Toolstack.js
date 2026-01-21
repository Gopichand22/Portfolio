import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiSlack,
  SiVercel,
} from "react-icons/si";
import {
 DiWindows,
 DiIntellij,
 DiEclipse,

} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiIntellij />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEclipse />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span style={{fontSize:"30px"}}>Jira</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span style={{fontSize:"30px"}}>etc</span>
    </Col>
    </Row>
  );
}

export default Toolstack;
