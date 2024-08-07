// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Carousel from 'react-bootstrap/Carousel';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Service from './Service';


// const Navbar1 = () => {    return (
//         <>
//             <Navbar expand="lg" className="bg-body-tertiary  d-flex  " style={{}} >
//                 <Container fluid>
//                     <Navbar.Brand href="#">food factory </Navbar.Brand>
//                     <Navbar.Toggle aria-controls="navbarScroll" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav
//                             className="me-auto my-2 my-lg-0  "
//                             style={{marginLeft:"1100px"}}
//                             navbarScroll
//                         >
//                             <Nav.Link href="./home">home</Nav.Link>
//                             <Nav.Link href="./Service">Service</Nav.Link>
//                             <Nav.Link href="./about">about</Nav.Link>
//                             <Nav.Link href="./cards">menu</Nav.Link>
//                             <Nav.Link href="/FormData">login</Nav.Link>
//                             {/* <Nav.Link href="/Signup">Signup</Nav.Link> */}

//                             {/* <Nav.Link href="./contact">footer</Nav.Link> */}
//                             {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
//                                 <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                                 <NavDropdown.Item href="#action4">
//                                     Another action
//                                 </NavDropdown.Item>
//                                 <NavDropdown.Divider />
//                                 <NavDropdown.Item href="#action5">
//                                     Something else here
//                                 </NavDropdown.Item>
//                             </NavDropdown>
//                             <Nav.Link href="#" disabled>
//                                 Link
//                             </Nav.Link> */}
//                         </Nav>
//                         {/* <Form className="d-flex">
//                             <Form.Control
//                                 type="search"
//                                 placeholder="Search"
//                                 className="me-2"
//                                 aria-label="Search"
//                             />
//                             <Button variant="outline-success">Search</Button>
//                         </Form> */}
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//         </>
//     )
// }



// export default Navbar1;
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { IoFastFood } from "react-icons/io5";
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbar1 = () => {
    return (
        <header className="header">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="header-title">Super Natural Food <IoFastFood /></h1>
          <IoFastFood />
          <Nav className="nav-links d-flex justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="/service">Service</Nav.Link> */}
            <Nav.Link href="/details">login</Nav.Link>
          </Nav>
        </div>
      </header>
    );
};

export default Navbar1;

