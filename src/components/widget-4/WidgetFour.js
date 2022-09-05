
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { mediamImages } from "../../const/images";
import { BsHeartFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import "./widget4.css";

const WidgetFour = () => {
  return (
    <Container className="py-5 widget-4-container">
      <h2 className="widget-4-title">Recent Property Listed</h2>
      <p className="widget-4-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad
        minim veniam.
      </p>
      <Row className="py-4 mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={mediamImages[0]} />
            <Card.Body>
              <div className="pb-4 d-flex justify-content-between align-items-center">
                <span className="widget-4-card-label-sale">For Sale</span>
                <BsHeartFill size={24} color="gray" />
              </div>
              <div>
                <h5 className="widget-4-card-title">Red Carpet Real Estate</h5>
                <p className="d-flex  align-items-center">
                  <BiMap size={21} color="gray" />
                  <span className="widget-4-card-location">
                    210 Zirak Road, Canada
                  </span>
                </p>
              </div>
              <hr />
              <div className="d-flex align-items-center widget-4-card-price-info">
                <button>£3,700</button>
                <span>/sqFt.</span>
                <span className="">Apartment </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={mediamImages[1]} />
            <Card.Body>
              <div className="pb-4 d-flex justify-content-between align-items-center">
                <span className="widget-4-card-label-rent">For Rent</span>
                <BsHeartFill size={24} color="gray" />
              </div>
              <div>
                <h5 className="widget-4-card-title">The Real Estate Corner</h5>
                <p className="d-flex  align-items-center">
                  <BiMap size={21} color="gray" />
                  <span className="widget-4-card-location">
                    5624 Mooker Market, USA
                  </span>
                </p>
              </div>
              <hr />
              <div className="d-flex align-items-center widget-4-card-price-info">
                <button>£3,700</button>
                <span>/sqFt.</span>
                <span className="">Condos </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={mediamImages[2]} />
            <Card.Body>
              <div className="pb-4 d-flex justify-content-between align-items-center">
                <span className="widget-4-card-label-rent">For Rent</span>
                <BsHeartFill size={24} color="gray" />
              </div>
              <div>
                <h5 className="widget-4-card-title">Brick Lane Realty</h5>
                <p className="d-flex  align-items-center">
                  <BiMap size={21} color="gray" />
                  <span className="widget-4-card-location">
                    5621 Liverpool, London
                  </span>
                </p>
              </div>
              <hr />
              <div className="d-flex align-items-center widget-4-card-price-info">
                <button>£3,700</button>
                <span>/sqFt.</span>
                <span className="">Offices </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="py-4 mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={mediamImages[3]} />
            <Card.Body>
              <div className="pb-4 d-flex justify-content-between align-items-center">
                <span className="widget-4-card-label-sale">For Sale</span>
                <BsHeartFill size={24} color="gray" />
              </div>
              <div>
                <h5 className="widget-4-card-title">Herringbone Realty</h5>
                <p className="d-flex  align-items-center">
                  <BiMap size={21} color="gray" />
                  <span className="widget-4-card-location">
                    210 Zirak Road, Canada
                  </span>
                </p>
              </div>
              <hr />
              <div className="d-flex align-items-center widget-4-card-price-info">
                <button>£3,700</button>
                <span>/sqFt.</span>
                <span className="">Homes & Villas </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={mediamImages[4]} />
            <Card.Body>
              <div className="pb-4 d-flex justify-content-between align-items-center">
                <span className="widget-4-card-label-sale">For Sale</span>
                <BsHeartFill size={24} color="gray" />
              </div>
              <div>
                <h5 className="widget-4-card-title">Banyon Tree Realty</h5>
                <p className="d-flex  align-items-center">
                  <BiMap size={21} color="gray" />
                  <span className="widget-4-card-location">
                  {/* <i class="fa-regular fa-address-card"></i> */}
                    5698 Zirak Road, NewYork
                  </span>
                </p>
              </div>
              <hr />
              <div className="d-flex align-items-center widget-4-card-price-info">
                <button>£3,700</button>
                <span>/sqFt.</span>
                <span className="">Commercial </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={mediamImages[5]} />
            <Card.Body>
              <div className="pb-4 d-flex justify-content-between align-items-center">
                <span className="widget-4-card-label-rent">For Rent</span>
                <BsHeartFill size={24} color="gray" />
              </div>
              <div>
                <h5 className="widget-4-card-title">Red Carpet Real Estate</h5>
                <p className="d-flex  align-items-center">
                  <BiMap size={21} color="gray" />
                  <span className="widget-4-card-location">
                    5621 Liverpool, London
                  </span>
                </p>
              </div>
              <hr />
              <div className="d-flex align-items-center widget-4-card-price-info">
                <button>£3,700</button>
                <span>/sqFt.</span>
                <span className="">Apartment </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WidgetFour;
