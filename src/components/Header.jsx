import { Navbar, Nav, FormControl,  InputGroup } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" className="justify-content-around Head"  fixed="top">
      <Navbar.Brand href="#home" className="col-4 Title">Eboyebi</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="col-8">
        <Nav className="col-12 col-sm-8 row">
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
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
