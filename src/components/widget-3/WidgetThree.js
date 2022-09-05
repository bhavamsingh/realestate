import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { smallImages } from "../../const/images";
import "./widgetthree.css";
export default function WidgetThree() {
  return (
    <Container className = " my-4 py-3 widget-3-container">
      <h2 className="widget-3-title">Featured Property Types</h2>
      <p className="widget-3-subtitle">Find All Type of Property.</p>
      <Row className="py-3">
        <Col md={1}></Col>
        <Col md={2}>
          <div className="widget-3-box">
            <div className="widget-3-box-img">
              <img src={smallImages[0]} />
            </div>
            <h5>Family House</h5>
            <p>122 Property</p>
          </div>
        </Col>
        <Col md={2}>
          <div className="widget-3-box">
            <div className="widget-3-box-img">
              <img src={smallImages[1]} />
            </div>
            <h5>House & Villa</h5>
            <p>155 Property</p>
          </div>
        </Col>
        <Col md={2}>
          <div className="widget-3-box">
            <div className="widget-3-box-img">
              <img src={smallImages[2]} />
            </div>
            <h5>Apartment</h5>
            <p>300 Property</p>
            
          </div>
        </Col>
        <Col md={2}>
          <div className="widget-3-box">
            <div className="widget-3-box-img">
              <img src={smallImages[3]} />
            </div>
            <h5>Office & Studio</h5>
            <p>80 Property</p>
          </div>
        </Col>
        <Col md={2}>
          <div className="widget-3-box">
            <div className="widget-3-box-img">
              <img src={smallImages[4]} />
            </div>
            <h5>Villa & Condo

            </h5>
            <p>80 Property

             </p>
          </div>
        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>
  );
}
