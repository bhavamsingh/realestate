import React from "react";
import { Container,Carousel } from "react-bootstrap"
import { bgImages } from "../../const/images";
import "./slider.css"
export default function Slider(){
    return(
        <Container fluid className = "slider-container">
    <Carousel>
      <Carousel.Item  className = "slider-item">
        <img
          className="d-block w-100"
          src={bgImages[0]}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className = "slider-item">
        <img
          className="d-block w-100"
          src={bgImages[1]}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className = "slider-item">
        <img
          className="d-block w-100"
          src={bgImages[0]}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  



            </Container>
    )
}