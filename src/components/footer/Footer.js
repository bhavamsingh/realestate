import React from "react";
import {Link} from "react-router-dom"
import "./footer.css"
import {Container,Row,Col} from "react-bootstrap"
import { logos } from "../../const/images"
export default function Footer(){
    return(
        <Container fluid className="footer-container">
            <Row>
                <Col md={6}>
                    <img src={logos[1]} className="footer-brand-logo" />
                    <h4 style={{fontFamily:"Roboto"}} className="text-white mt-3 fw-bolder">Do You Need Help With Anything?
</h4>
<p className="text-muted mt-4">Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month

</p>
<form className= "footer-subscribe-form">
    <input className="form-control"/>
    <button type ="submit">Subscribe</button>
</form>
                </Col>
                <Col md={2} className ="footer-col-1 ">
                <h4 style={{fontFamily:"Oswald"}} className="text-white pt-2 fw-bolder">Layouts</h4>
                <ul>
                    <li className="text-muted py-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">About</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Services</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Blog</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                </Col>
                <Col md={2} className ="footer-col-1 ">
                <h4 style={{fontFamily:"Oswald"}} className="text-white pt-2 fw-bolder">Layouts</h4>
                <ul>
                    <li className="text-muted py-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">About</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Services</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Blog</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                </Col>
                <Col md={2} className ="footer-col-1 ">
                <h4 style={{fontFamily:"Oswald"}} className="text-white pt-2 fw-bolder">Layouts</h4>
                <ul>
                    <li className="text-muted py-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">About</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Services</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Blog</Link>
                    </li>
                    <li className="text-muted py-2">
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
                </Col>
            </Row>
        </Container>
    )
}