import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./widgettwo.css"
export default function WidgetTwo(){
    return (
        <Container fluid className="widgettwo-container">
            <Row>
                <Col md={8} className="text-white" >
                <h1>Do You Have Questions ?</h1>
                <p className="fw-light">
                We'll help you to grow your career and growth.
                </p>
                </Col>
                <Col md={4}
                  className="d-flex align-items-center justify-content-end pe-3 ">
                    <Link className="widgettwo-button-contact" to="/">
                      Contact Us Today
                     </Link>
                 
                </Col>
            </Row>

        </Container>
    );
}