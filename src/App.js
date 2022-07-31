import { Container } from "react-bootstrap"
import "./App.css"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter} from "react-router-dom"
export default function App(){
  return(
    <Container fluid>
      
      <BrowserRouter>
      <Navbar/>
      <Footer/>
      </BrowserRouter>
    </Container>
  )
}