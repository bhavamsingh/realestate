import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { locationImages } from "../../const/images";
import "./widget5.css";

const WidgetFive = () => {
  return (
    <Container className="py-5 widget-5-container">
      <h2 className="widget-5-title">Explore By Location</h2>
      <p className="widget-5-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad
        minim veniam.
      </p>

      <Row className="my-5">
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img src={locationImages[0]} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center widget-5-card-overlay-container">
              <div className=" p-4 widget-5-card-overlay">
                <Card.Title className="widget-5-card-title">
                  New Orleans, Louisiana
                </Card.Title>
                <Card.Text className="widget-5-card-description">
                  <span>12</span> Villas <span>07</span> Offices <span>10</span>{" "}
                  Apartments
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img src={locationImages[1]} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center widget-5-card-overlay-container">
              <div className=" p-4 widget-5-card-overlay">
                <Card.Title className="widget-5-card-title">
                  New Orleans, Louisiana
                </Card.Title>
                <Card.Text className="widget-5-card-description">
                  <span>12</span> Villas <span>07</span> Offices <span>10</span>{" "}
                  Apartments
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img src={locationImages[2]} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center widget-5-card-overlay-container">
              <div className=" p-4 widget-5-card-overlay">
                <Card.Title className="widget-5-card-title">
                  New Orleans, Louisiana
                </Card.Title>
                <Card.Text className="widget-5-card-description">
                  <span>12</span> Villas <span>07</span> Offices <span>10</span>{" "}
                  Apartments
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img src={locationImages[3]} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center widget-5-card-overlay-container">
              <div className=" p-4 widget-5-card-overlay">
                <Card.Title className="widget-5-card-title">
                  New Orleans, Louisiana
                </Card.Title>
                <Card.Text className="widget-5-card-description">
                  <span>12</span> Villas <span>07</span> Offices <span>10</span>{" "}
                  Apartments
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img src={locationImages[4]} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center widget-5-card-overlay-container">
              <div className=" p-4 widget-5-card-overlay">
                <Card.Title className="widget-5-card-title">
                  New Orleans, Louisiana
                </Card.Title>
                <Card.Text className="widget-5-card-description">
                  <span>12</span> Villas <span>07</span> Offices <span>10</span>{" "}
                  Apartments
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-dark text-white">
            <Card.Img src={locationImages[5]} alt="Card image" />
            <Card.ImgOverlay className="d-flex align-items-center justify-content-center widget-5-card-overlay-container">
              <div className=" p-4 widget-5-card-overlay">
                <Card.Title className="widget-5-card-title">
                  New Orleans, Louisiana
                </Card.Title>
                <Card.Text className="widget-5-card-description">
                  <span>12</span> Villas <span>07</span> Offices <span>10</span>{" "}
                  Apartments
                </Card.Text>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WidgetFive;
