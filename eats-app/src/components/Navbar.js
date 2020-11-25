import React from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'


       const Eastnas = ()=>{
   return(
     <>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >East-kebab</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="mr-auto " >
    <Nav.Link><NavLink className="linkBar" to="/">Home</NavLink></Nav.Link> 
    <Nav.Link><NavLink className="linkBar"  to="/menu">Menu</NavLink></Nav.Link> 
    <Nav.Link><NavLink className="linkBar" to="/basket">Basket</NavLink></Nav.Link> 
    <Nav.Link><NavLink className="linkBar" to="/contact">Contact</NavLink></Nav.Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
     </>
   )
}


export default Eastnas
