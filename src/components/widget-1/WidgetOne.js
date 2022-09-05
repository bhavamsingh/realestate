import React from "react"
import { Container,Row,Col } from "react-bootstrap"
import "./widgetone.css"
import {GrAchievement,GrConnect} from "react-icons/gr"
import {MdBusinessCenter} from "react-icons/md"
export default function WidgetOne(){
    return(
        <Container fluid className="widget-1-container">
            <p className = "widget-1-subtitle">Our Awards</p>
            <h3 className="widget-1-title">Over 1,24,000+ Happy User Bieng With Us<br/> Still They Love Our Services</h3>
            <Container className="mt-4">
            <Row>
                <Col md={3} className ="widget-1-col">
                    <div className="widget-1-icon">
                        <GrAchievement  color="white" size={40} />
                    </div>
                    <h1>32M</h1>
                    <p >Blue Burmin Award</p>
                </Col>
                <Col md={3} className ="widget-1-col">
                    <div className="widget-1-icon">
                    <MdBusinessCenter  color="white" size={40}/>
                    </div>
                    <h1>32M</h1>
                    <p >Blue Burmin Award</p>
                </Col>
                <Col md={3} className ="widget-1-col">
                    <div className="widget-1-icon">
                        <GrConnect color="white" size={40} />
                    </div>
                    <h1>32M</h1>
                    <p >Blue Burmin Award</p>
                </Col>
                <Col md={3} className ="widget-1-col">
                    <div className="widget-1-icon">
                        <GrAchievement color="white" size={40} />
                    </div>
                    <h1>32M</h1>
                    <p >Blue Burmin Award</p>
                </Col>
            </Row>
            </Container>
        </Container>
    )
}