import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import { MdOutlineAddShoppingCart } from "react-icons/md";



function Header() {
  return (
    <div>

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand to="/"><img src='./logo.png ' /></Navbar.Brand>
          <Nav className="ms-auto">
            <Link to="/">HOME</Link>
            <Link to="/About">ABOUT</Link>
            <Link to="/Product">PRODUCT</Link>
            <Link to="/Blog">BLOG</Link>
            {/* <Link to="/Singlepost">SINGLEPOST</Link> */}
            <Link to="/Contact">CONTACT</Link>
            {/* <Link to="/Carts">
        
          <MdOutlineAddShoppingCart /> 

          </Link> */}



          </Nav>
        </Container>
      </Navbar>



    </div>
  )
}

export default Header