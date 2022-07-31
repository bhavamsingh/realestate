import {Container,Row,Col} from "react-bootstrap"
import { NavLink,Link } from "react-router-dom"
import { logos } from "../../const/images"
import "./navbar.css"
export default function Navbar(){
    return(
        <Container className="py-3">
            <Row>
                <Col md={3}>
                <img className="navbar-brand" src={logos[0]} />
                </Col>
                <Col md={6}>
                <ul className="navbar-menus">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                </ul>
                </Col>
                <Col md={3}>
                <div className="navbar-buttons ">
                    <Link to="/login">
                    Login
                    </Link>
                    <Link to="/signup">
                    Signup
                    </Link>
                </div>
                </Col>
            </Row>
        </Container>
    )
}