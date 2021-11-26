import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar,NavDropdown,Container,Nav } from 'react-bootstrap';
import {BrowserRouter as NavLink,Router,Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiries";
import EnquiryList from "./pages/EnquiryList";
import Courses from "./pages/Courses/Courses";
import Resources from "./pages/Resources/Resources";
import ViewAdmin from "./pages/EnquiryViewAdmin";
import AddResource from "./pages/Resources/AddResource";
import AddCourses from "./pages/Courses/AddCourses";
import EditCourse from "./pages/Courses/EditCourses";
import EditResource from "./pages/Resources/EditResources";
import './pages/styles/headers.css';

export default function App() {
return (
    <>
	<Navbar variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">CRM-Project</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Courses"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
          <NavDropdown.Item href="/science">Science</NavDropdown.Item>
          <NavDropdown.Item href="/math">Math</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Programming</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Resource"
          menuVariant="dark"
        >
          <NavDropdown.Item href="/">Res 1</NavDropdown.Item>
          <NavDropdown.Item href="/resources">Res 2</NavDropdown.Item>
          <NavDropdown.Item href="/contact">Res 3</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
    </Navbar.Collapse>

    {/* <Router>
    <div ><Link className="a" to="/resources">Resources</Link></div>
      <div ><Link className="a" to="/addresource">Add Resources</Link></div>
      <div ><Link className="a" to="/addcourse">Add Courses</Link></div>
      <div ><Link className="a"  to="/enquiry">Enquiry</Link></div>
      <div ><Link className="a" to="/enquirylist">Enquiry List</Link></div>
      <div ><Link className="a" to="/visit" to="/contact">Contact Us</Link></div>
    </Router> */}
    <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
    
  </Container>
</Navbar>

<Router>
<Routes>
    <Route path ="/" element={<Home/>}/> 
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/enquiry" element={<Enquiry/>}/>
    <Route path ="/addresource" element={<AddResource/>}/> 
    <Route path ="/addcourse" element={<AddCourses/>}/> 
    <Route path ="/enquirylist" element={<EnquiryList/>}/>
    <Route path ="/courses" element={<Courses/>}/>
    <Route path ="/editcourses/:id" element={<EditCourse/>}/>
    <Route path ="/editresources/:id" element={<EditResource/>}/>
    <Route path ="/queryreview/:id" element={<ViewAdmin/>}/>
     {/* <Route path ="/resource/:id" element={<ViewAdmin/>}/> */}
    <Route path ="/resources" element={<Resources/>}/>      
  </Routes>  
</Router>

</>
);
}
