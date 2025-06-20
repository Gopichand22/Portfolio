import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProjectCard({ imgPath, title, description, details, headline, icon: IconComponent, index, media }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="project-card-view text-center">
      <div className="card-image-wrapper">
        <Card.Img variant="top" src={imgPath} alt="project image" className="card-image" style={index === 1 ? { transform: "scale(2.5)" } : {}} />
      </div>
        <Card.Body className="card-body-content">
          <Card.Title className="card-headline">{headline}</Card.Title>
          <Card.Text className="card-description" style={{ textAlign: "justify", marginTop: "10px" }}>
            {description}
          </Card.Text>
        <div className="card-button-wrapper">
          <Button className="button-model" variant="primary" onClick={handleShow}>
            View Details
          </Button>
          </div>
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title} - Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-12 mb-3">
                <img src={media} alt="project" className="img-fluid rounded" />
              </div>
              {/* Add more images or conditionally render from an array */}
            </div>
            <p>{details}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectCard;
