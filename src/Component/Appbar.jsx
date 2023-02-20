import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='main-nav'>
        <h2 className='title'>iSHOP</h2>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <br/>
          <Nav className="me-auto">
            <NavLink to="/" className="home" id='home'>Home</NavLink>
            <NavLink to="/Store" className="home" id='home'>Store</NavLink>
            <NavLink to="/Iphone" className="home" id='home'>I-Phone</NavLink>
            <NavLink to="/Ipad" className="home" id='bar'>I-Pad</NavLink> 
            <NavLink to="/Macbook" className="home" id='bar'>Macbook</NavLink> 
            <NavLink to="/Accesories" className="home" id='bar'>Accesories</NavLink> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
