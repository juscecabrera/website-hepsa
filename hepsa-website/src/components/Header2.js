import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../stylesheets/main.css";
import HepsaLogo from "../images/logohepsa2.png";

function Header2() {
  return (
    <Navbar collapseOnSelect sticky="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#top"><img className="header-navbar-logo-img" src={HepsaLogo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#top">Inicio</Nav.Link>
            <Nav.Link href="#aboutid">Nosotros</Nav.Link>
            <Nav.Link href="#productsid">Productos</Nav.Link>
            <Nav.Link href="#contactid">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header2;