import { Navbar, Nav, FormControl,  InputGroup } from "react-bootstrap";
import LoginModal from "./loginModal";

const Header = () => {
  return (
    <Navbar expand="lg" className="justify-content-around Head"  fixed="top">
      <Navbar.Brand href="#home" className="col-4 Title">E-boyebi</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="col-8">
        <Nav className="col-12 col-sm-7 row">
          <Nav.Link href="#home" className="linkMenu ">Home</Nav.Link>
          <Nav.Link href="#link" className="linkMenu">Cours</Nav.Link>
          <Nav.Link href="#link" className="linkMenu">À propos</Nav.Link>
        </Nav>
        <InputGroup className="col-sm-4 col-12">
          <InputGroup.Text id="basic-addon1"><i class="fas fa-search"></i></InputGroup.Text>
          <FormControl
            placeholder="cours"
            aria-label="cours"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <LoginModal  className="col-sm-1 col-12"/>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
