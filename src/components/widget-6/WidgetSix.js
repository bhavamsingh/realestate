import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { profilePics } from "../../const/images";
import { BsHeartFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { FiFacebook, FiTwitter, FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { MdCall } from "react-icons/md";
import "./widget6.css";
import { Link } from "react-router-dom";

const WidgetSix = () => {
  return (
    <Container className="py-5 widget-6-container">
      <h2 className="widget-6-title">Our Featured Agents</h2>
      <p className="widget-6-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore <br /> magna aliqua. Ut enim ad
        minim veniam.
      </p>
      <Row className="py-4 mt-4">
        <Col md={4}>
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-center widget-5-card-agent-engaging">
              <span>50 Listings</span>
              <BsHeartFill size={40} color="red" />
            </div>
            <Card.Img
              src={profilePics[0]}
              className="mt-5 p-2 mx-auto widget-6-card-profile-img"
            />
            <div className="d-flex justify-content-center align-items-center mt-2 widget-6-card-location">
              <BiMap color="#cc0" size={24} />
              <span>2272 Briarwood Drive</span>
            </div>
            <h3 className="mt-2 text-center widget-6-card-profile-title">
              Michael P. Grimaldo
            </h3>
            <div className="d-flex justify-content-center align-items-center my-3 widget-6-card-social-icons">
              <div>
                <FiFacebook size={30} color="black" />
              </div>
              <div>
                <FaInstagram size={30} color="black" />
              </div>
              <div>
                <TiSocialYoutubeCircular size={30} color="black" />
              </div>
              <div>
                <FiTwitter size={30} color="black" />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3">
              <Link
                to="/"
                className="d-flex align-items-center widget-6-card-message"
              >
                <FiMail size={30} color="black" />
                <span className="ms-2">Message</span>
              </Link>
              <Link to="/" className="widget-6-card-call">
                <MdCall size={30} color="white" />
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-center widget-5-card-agent-engaging">
              <span>50 Listings</span>
              <BsHeartFill size={40} color="red" />
            </div>
            <Card.Img
              src={profilePics[1]}
              className="mt-5 p-2 mx-auto widget-6-card-profile-img"
            />
            <div className="d-flex justify-content-center align-items-center mt-2 widget-6-card-location">
              <BiMap color="#cc0" size={24} />
              <span>2272 Briarwood Drive</span>
            </div>
            <h3 className="mt-2 text-center widget-6-card-profile-title">
              Michael P. Grimaldo
            </h3>
            <div className="d-flex justify-content-center align-items-center my-3 widget-6-card-social-icons">
              <div>
                <FiFacebook size={30} color="black" />
              </div>
              <div>
                <FaInstagram size={30} color="black" />
              </div>
              <div>
                <TiSocialYoutubeCircular size={30} color="black" />
              </div>
              <div>
                <FiTwitter size={30} color="black" />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3">
              <Link
                to="/"
                className="d-flex align-items-center widget-6-card-message"
              >
                <FiMail size={30} color="black" />
                <span className="ms-2">Message</span>
              </Link>
              <Link to="/" className="widget-6-card-call">
                <MdCall size={30} color="white" />
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-center widget-5-card-agent-engaging">
              <span>50 Listings</span>
              <BsHeartFill size={40} color="red" />
            </div>
            <Card.Img
              src={profilePics[2]}
              className="mt-5 p-2 mx-auto widget-6-card-profile-img"
            />
            <div className="d-flex justify-content-center align-items-center mt-2 widget-6-card-location">
              <BiMap color="#cc0" size={24} />
              <span>2272 Briarwood Drive</span>
            </div>
            <h3 className="mt-2 text-center widget-6-card-profile-title">
              Michael P. Grimaldo
            </h3>
            <div className="d-flex justify-content-center align-items-center my-3 widget-6-card-social-icons">
              <div>
                <FiFacebook size={30} color="black" />
              </div>
              <div>
                <FaInstagram size={30} color="black" />
              </div>
              <div>
                <TiSocialYoutubeCircular size={30} color="black" />
              </div>
              <div>
                <FiTwitter size={30} color="black" />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3">
              <Link
                to="/"
                className="d-flex align-items-center widget-6-card-message"
              >
                <FiMail size={30} color="black" />
                <span className="ms-2">Message</span>
              </Link>
              <Link to="/" className="widget-6-card-call">
                <MdCall size={30} color="white" />
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
      <Row className="py-4 mt-4">
        <Col md={4}>
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-center widget-5-card-agent-engaging">
              <span>50 Listings</span>
              {/* <BsHeartFill className=" widget-6-card-fab" size={40} color="red" /> */}
            </div>
            <Card.Img
              src={profilePics[3]}
              className="mt-5 p-2 mx-auto widget-6-card-profile-img"
            />
            <div className="d-flex justify-content-center align-items-center mt-2 widget-6-card-location">
              <BiMap color="#cc0" size={24} />
              <span>2272 Briarwood Drive</span>
            </div>
            <h3 className="mt-2 text-center widget-6-card-profile-title">
              Michael P. Grimaldo
            </h3>
            <div className="d-flex justify-content-center align-items-center my-3 widget-6-card-social-icons">
              <div>
                <FiFacebook size={30} color="black" />
              </div>
              <div>
                <FaInstagram size={30} color="black" />
              </div>
              <div>
                <TiSocialYoutubeCircular size={30} color="black" />
              </div>
              <div>
                <FiTwitter size={30} color="black" />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3">
              <Link
                to="/"
                className="d-flex align-items-center widget-6-card-message"
              >
                <FiMail size={30} color="black" />
                <span className="ms-2">Message</span>
              </Link>
              <Link to="/" className="widget-6-card-call">
                <MdCall size={30} color="white" />
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-center widget-5-card-agent-engaging">
              <span>50 Listings</span>
              <BsHeartFill size={40} color="red" />
            </div>
            <Card.Img
              src={profilePics[4]}
              className="mt-5 p-2 mx-auto widget-6-card-profile-img"
            />
            <div className="d-flex justify-content-center align-items-center mt-2 widget-6-card-location">
              <BiMap color="#cc0" size={24} />
              <span>2272 Briarwood Drive</span>
            </div>
            <h3 className="mt-2 text-center widget-6-card-profile-title">
              Michael P. Grimaldo
            </h3>
            <div className="d-flex justify-content-center align-items-center my-3 widget-6-card-social-icons">
              <div>
                <FiFacebook size={30} color="black" />
              </div>
              <div>
                <FaInstagram size={30} color="black" />
              </div>
              <div>
                <TiSocialYoutubeCircular size={30} color="black" />
              </div>
              <div>
                <FiTwitter size={30} color="black" />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3">
              <Link
                to="/"
                className="d-flex align-items-center widget-6-card-message"
              >
                <FiMail size={30} color="black" />
                <span className="ms-2">Message</span>
              </Link>
              <Link to="/" className="widget-6-card-call">
                <MdCall size={30} color="white" />
              </Link>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-3">
            <div className="d-flex justify-content-between align-items-center widget-5-card-agent-engaging">
              <span>50 Listings</span>
              <BsHeartFill size={40} color="red" />
            </div>
            <Card.Img
              src={profilePics[5]}
              className="mt-5 p-2 mx-auto widget-6-card-profile-img"
            />
            <div className="d-flex justify-content-center align-items-center mt-2 widget-6-card-location">
              <BiMap color="#cc0" size={24} />
              <span>2272 Briarwood Drive</span>
            </div>
            <h3 className="mt-2 text-center widget-6-card-profile-title">
              Michael P. Grimaldo
            </h3>
            <div className="d-flex justify-content-center align-items-center my-3 widget-6-card-social-icons">
              <div>
                <FiFacebook size={30} color="black" />
              </div>
              <div>
                <FaInstagram size={30} color="black" />
              </div>
              <div>
                <TiSocialYoutubeCircular size={30} color="black" />
              </div>
              <div>
                <FiTwitter size={30} color="black" />
              </div>
            </div>

            <div className="d-flex justify-content-between align-items-center py-3">
              <Link
                to="/"
                className="d-flex align-items-center widget-6-card-message"
              >
                <FiMail size={30} color="black" />
                <span className="ms-2">Message</span>
              </Link>
              <Link to="/" className="widget-6-card-call">
                <MdCall size={30} color="white" />
              </Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WidgetSix;
