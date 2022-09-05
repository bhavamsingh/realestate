import React from "react" ;
import { Container } from "react-bootstrap"
import "./App.css"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
export default function App(){
  return(
    <Container fluid>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route path = "/about" element = {<About/>} />
        <Route path = "/contact" element = {<Contact/>} />
        <Route path = "/services" element = {<Services/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </Container>
  )
}