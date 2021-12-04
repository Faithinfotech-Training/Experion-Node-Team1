import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import './App.css';

import Login from "./pages/Login";
import Register from "./pages/Register"
//for authentication
import Header1 from "./pages/header/header";
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';
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
import EnquiryDisplay from "./pages/enquiries/enquiryDisplay";
import ResEnquiryDisplay from "./pages/enquiriesResources/enquiryResDisplay";
import Registerartion from "./pages/Registration";
import CourseDisplay from "./pages/courses/courseDetails";
import ResourceDisplay from "./pages/resources/resourceDetails";
import EnquiryDelete from "./pages/enquiries/enquiryDelete";
// import Bootstraptab from "./pages/Salespipeline";
import TableExample from "./pages/Salespipeline";
import Barchartss from "./pages/siteVisit/chart";
import ResEnquiryDelete from './pages/enquiriesResources/enquiryResDelete';
import './pages/styles/headers.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AdminResources from "./pages/admin/resources/adminResource";
import AdminCourses from './pages/admin/courses/adminCourse'
import CarouselDisplay from "./pages/components/carousel";

function App() {
  return (
    <>
      <Header />
      
      <Footer />


    </>

  )
}






function Header() {
  return (

    <Router>
      <Header1/>
      <CarouselDisplay/>
       


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sitevisit" element={<Barchartss />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/salespipeline" element={<TableExample />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registerartion />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/resenquiry" element={<ResEnquiry />} />
        <Route path="/addresource" element={<AddResource />} />
        {/* <Route path="/addevent" element={<AddEvent />} /> */}

        {localStorage.getItem('mytoken') &&
          <Route path="/addcourse" element={<AddCourses />} />}
        {localStorage.getItem('mytoken') &&
          <Route path="/enquirylist" element={<EnquiryList />} />}
        {localStorage.getItem('mytoken') &&
        <Route path="/resenquirylist" element={<ResEnquiryList />} />}
        <Route path="/courses" element={<Courses />} />
        <Route path="/admincourse" element={<AdminCourses />} />
        <Route path="/adminresource" element={<AdminResources />} />
        <Route path="/courseview/:CourseCode" element={<CourseDisplay />} />
        <Route path="/resourceview/:ResourceCode" element={<ResourceDisplay />} />
        <Route path="/editcourses/:CourseCode" element={<EditCourse />} />
        {/* <Route path="/editevents/:EventCode" element={<EditEvent />} />
        <Route path="/deleteevents/:EventCode" element={<EventDelete />} /> */}
        <Route path="/deleteenquiry/:EnquiryId" element={<EnquiryDelete />} />
        <Route path="/resenqdelete/:rEnquiryId" element={<ResEnquiryDelete />} />
        <Route path="/deletecourses/:CourseCode" element={<CourseDelete />} />
        <Route path="/deleteresources/:ResourceCode" element={<ResourceDelete />} />
        <Route path="/editresources/:ResourceCode" element={<EditResource />} />
        <Route path="/queryview/:EnquiryId" element={<EnquiryDisplay />} />
        <Route path="/resqueryview/:rEnquiryId" element={<ResEnquiryDisplay />} />
        <Route path="/queryreview/:EnquiryId" element={<ViewAdmin />} />
        <Route path="/rqueryreview/:rEnquiryId" element={<ResViewAdmin />} />
        <Route path="/resources" element={<Resources />} />
        {/* <Route path="/events" element={<Events />} /> */}
      </Routes>

      <br /><br /><br />
    </Router>
    
  );
}



function Footer() {
  return (
    <>
      <p className="centerfooter">Copyright 2021 - Team 1 - Node</p>
    </>
  )
}

export default App;