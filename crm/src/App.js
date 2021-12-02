import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
// import './App.css';

import Login from "./pages/Login";
import Register from "./pages/Register"

import { Navbar,NavDropdown,Container,Nav } from 'react-bootstrap';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Enquiry from "./pages/enquiries/enquiriesIndex";
import ResEnquiry from "./pages/enquiriesResources/enquiriesResIndex";
import EnquiryList from "./pages/enquiries/enquiryList";
import ResEnquiryList from "./pages/enquiriesResources/enquiryResList";
import Courses from "./pages/courses/coursesIndex";
import Resources from "./pages/resources/resourceIndex";
import ViewAdmin from "./pages/enquiries/enquiryViewAdmin";
import ResViewAdmin from "./pages/enquiriesResources/enquiryResViewAdmin";
import AddResource from "./pages/resources/addResource";
import AddCourses from "./pages/courses/addCourses";
import EditCourse from "./pages/courses/editCourses";
import EditResource from "./pages/resources/editResources";
import CourseDelete from "./pages/courses/deleteCourses";
import ResourceDelete from "./pages/resources/deleteResources";
import './pages/styles/headers.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import EnquiryDisplay from "./pages/enquiries/enquiryDisplay";
import ResEnquiryDisplay from "./pages/enquiriesResources/enquiryResDisplay";
import Registerartion from "./pages/Registration";
import CourseList from "./pages/courses/courseList";
import CourseDisplay from "./pages/courses/courseDetails";
import ResourceDisplay from "./pages/resources/resourceDetails";
import AddEvent from "./pages/EventsAndAnnouncements/AddEvent";
import Events from "./pages/EventsAndAnnouncements/Events";
import EditEvent from "./pages/EventsAndAnnouncements/EditEvents";
import EventDelete from "./pages/EventsAndAnnouncements/DeleteEvents";
//Course
// import CourseList from "./pages/Courses/CourseList";
// import CourseDisplay from "./pages/Courses/CourseDetails";
// import ResourceDisplay from "./pages/Resources/ResourceDetails";
import Bootstraptab from "./pages/Salespipeline";
import TableExample from "./pages/Salespipeline";

function App(){
  return(
  <> 
    <Header/>
    <Footer/>
    
  
 </>

  )
}

function Header(){
return(
  
      <Router>
        <Navbar variant="dark" bg="dark" expand="lg">
     <Container fluid>

  <Navbar.Brand href="#home">CRM-Project</Navbar.Brand>
   <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
     
      <Nav>
      <NavDropdown
           id="nav-dropdown-dark-example"
           title="Courses"
           menuVariant="dark">
           <NavDropdown.Item href="/courses">Courses</NavDropdown.Item>
         
            </NavDropdown>
            <NavDropdown
           id="nav-dropdown-dark-example"
           title="Resource"
           menuVariant="dark"
         >
           <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
          
        </NavDropdown>
        <Nav.Link href='/'>Home</Nav.Link>
        {!localStorage.getItem('mytoken')&&<div><Nav.Link href="/Login">Login</Nav.Link></div>}
        {localStorage.getItem('mytoken')&&<div><Nav.Link onClick={()=>window.location='/Login'} href='/Login'>Logout</Nav.Link></div>}
      <Nav.Link className="a" href="/Register">Register</Nav.Link>
        <Nav.Link className="a"  href="/enquiry"> Course Enquiry</Nav.Link>
        <Nav.Link className="a"  href="/resenquiry"> Resource Enquiry</Nav.Link>
        <Nav.Link className="a"  href="/events">Events</Nav.Link>
        <Nav.Link className="a"  href="/addevent">Add Event</Nav.Link>
        {localStorage.getItem('mytoken')&&
        <Nav.Link className="a" href="/enquirylist">Enquiry List</Nav.Link>}
        {localStorage.getItem('mytoken')&&
        <Nav.Link className="a" href="/resenquirylist"> Resource Enquiry List</Nav.Link>}
        {localStorage.getItem('mytoken')&&
        <Nav.Link className="a" href="/addresource">Add Resources</Nav.Link>}
        {localStorage.getItem('mytoken')&&
        <Nav.Link className="a" href="/addcourse">Add Courses</Nav.Link>}
        <Nav.Link className="a" href="/contact">Contact Us</Nav.Link>
        <Nav.Link className="a" href="/salespipeline">SalesPipeline</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    

  <Routes>
    <Route path ="/" element={<Home/>}/> 
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/salespipeline" element={<TableExample/>}/>
    <Route path ="/Login" element={<Login/>}/>
    <Route path ="/Register" element={<Registerartion/>}/>
    <Route path ="/enquiry" element={<Enquiry/>}/>
    <Route path ="/resenquiry" element={<ResEnquiry/>}/>
    <Route path ="/addresource" element={<AddResource/>}/>
    <Route path ="/addevent" element={<AddEvent/>}/>
     
    {localStorage.getItem('mytoken')&&
    <Route path ="/addcourse" element={<AddCourses/>}/> }
    {localStorage.getItem('mytoken')&&
    <Route path ="/enquirylist" element={<EnquiryList/>}/>}
    {localStorage.getItem('mytoken')&&
    <Route path ="/resenquirylist" element={<ResEnquiryList/>}/>}
    
    <Route path ="/courses" element={<Courses/>}/> 
    {/* <Route path ="/courselist" element={<CourseList/>}/> */}
    {/* <Route path ="/courseview/:CourseCode" element={<CourseDisplay/>}/> */}

 
    <Route path ="/courseview/:CourseCode" element={<CourseDisplay/>}/>
 
    <Route path ="/resourceview/:ResourceCode" element={<ResourceDisplay/>}/>

    <Route path ="/editcourses/:CourseCode" element={<EditCourse/>}/>
    <Route path ="/editevents/:EventCode" element={<EditEvent/>}/>
    <Route path ="/deleteevents/:EventCode" element={<EventDelete/>}/>
    <Route path ="/deletecourses/:CourseCode" element={<CourseDelete/>}/>

    <Route path ="/deleteresources/:ResourceCode" element={<ResourceDelete/>}/>

    <Route path ="/editresources/:ResourceCode" element={<EditResource/>}/>
    <Route path ="/queryview/:EnquiryId" element={<EnquiryDisplay/>}/>
    <Route path ="/resqueryview/:rEnquiryId" element={<ResEnquiryDisplay/>}/>
    <Route path ="/queryreview/:EnquiryId" element={<ViewAdmin/>}/>
    <Route path ="/rqueryreview/:rEnquiryId" element={<ResViewAdmin/>}/>


     {/* <Route path ="/resource/:id" element={<ViewAdmin/>}/> */}
    <Route path ="/resources" element={<Resources/>}/> 
    <Route path ="/events" element={<Events/>}/>      
  </Routes>
    
    <br/><br/><br/>
  </Router>
        
    );
}



function Footer(){
    return(
        <>
            <p className="centerfooter">Copyright 2021 - Team 1 - Node</p>
        </>
    )
}

export default App;