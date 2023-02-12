import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MobileNav from './MobileNav';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Badge from '@mui/material/Badge';


function NavTab({cartItems}) {
  return (
<div >
<Navbar bg="light" expand="lg" id = 'navtab'>
      <Container fluid>
        <Navbar.Brand href="#"><AutoAwesomeIcon /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">  <Link className="link" to="/">Home</Link></Nav.Link>
            <Nav.Link href="#action2"> <Link className="link"  to="/products">Product</Link></Nav.Link>
            <NavDropdown title="Cart" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><Link to="/cart"><Badge badgeContent={cartItems.length === 0 ? '0' : cartItems.length} color="secondary"><CardGiftcardIcon/></Badge> </Link></NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />

          <div>
            <MobileNav cartItems = {cartItems}   />
          </div>
</div>
  )
}

export default NavTab
