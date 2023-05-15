import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Resources/Capture-removebg-preview.png'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';

function NavScrollExample() {
  const logStatus = false;
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">  <img src={logo} alt="" height="50px" /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav
            className="ms-auto me-3 my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {
              logStatus ? <Nav.Link href="#" > Logout</Nav.Link> : <><Nav.Link href="#"   >Login</Nav.Link><Nav.Link href="#" >
                SignUp
              </Nav.Link>

              
              </>


            }    
            
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
// <Dropdown >
//               <Dropdown.Toggle variant="dark" id="dropdown-basic">
//               <div className="circle center ms-5">
//               <img src={logo} height="100%" alt="" /> </div>
//               </Dropdown.Toggle>

//               <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//               </Dropdown.Menu>
//             </Dropdown>