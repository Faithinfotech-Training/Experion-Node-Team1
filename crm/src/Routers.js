
//login 
import Login from "./pages/login/login";

//Registration
import Reg from "./pages/registration/registration";

//components
import Header1 from "./pages/header/header";

//Company Details
import Home from "./pages/Home";
import Contact from "./pages/Contact";

//Course Enquiry
import Enquiry from "./pages/enquiries/enquiriesIndex";
import EnquiryList from "./pages/enquiries/enquiryList";
import ViewAdmin from "./pages/enquiries/enquiryViewAdmin";
import EnquiryDisplay from "./pages/enquiries/enquiryDisplay";
import EnquiryDelete from "./pages/enquiries/enquiryDelete";

//Resource Enquiry
import ResEnquiry from "./pages/enquiriesResources/enquiriesResIndex";
import ResEnquiryList from "./pages/enquiriesResources/enquiryResList";
import ResViewAdmin from "./pages/enquiriesResources/enquiryResViewAdmin";
import ResEnquiryDisplay from "./pages/enquiriesResources/enquiryResDisplay";
import ResEnquiryDelete from './pages/enquiriesResources/enquiryResDelete';

//Course Details
import Courses from "./pages/courses/coursesIndex";
import AddCourses from "./pages/courses/addCourses";
import EditCourse from "./pages/courses/editCourses";
import CourseDelete from "./pages/courses/deleteCourses";
import CourseDisplay from "./pages/courses/courseDetails";

//Resource Details
import Resources from "./pages/resources/resourceIndex";
import AddResource from "./pages/resources/addResource";
import EditResource from "./pages/resources/editResources";
import ResourceDelete from "./pages/resources/deleteResources";
import ResourceDisplay from "./pages/resources/resourceDetails";

//Admin View
import AdminResources from "./pages/admin/resources/adminResource";
import AdminCourses from './pages/admin/courses/adminCourse'

//Sales Pipeline
import CoursePipeline from "./pages/sales-pipeline.js/Course/course-pipeline";
import ResourcePipeline from "./pages/sales-pipeline.js/Resource/resource-pipeline"

//Site View 
import Barchartss from "./pages/siteVisit/chart";

//Additionl Components
import TableExample from "./pages/Salespipeline";
import './pages/styles/headers.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


function Routers(props) {
    return (
      <Router><Header1/> 
        <Routes>

        {/* Details */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/sitevisit" element={<Barchartss />} />
          
          {/* <Route path="/salespipeline" element={<TableExample />} /> */}

          {/* Login and Registration */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Reg />} />

          {/* Course Enquiry */}
          <Route path="/enquiry" element={<Enquiry />} />
          {localStorage.getItem('mytoken') &&
            <Route path="/enquirylist" element={<EnquiryList />} />}
          <Route path="/deleteenquiry/:EnquiryId" element={<EnquiryDelete />} />
          <Route path="/queryview/:EnquiryId" element={<EnquiryDisplay />} />
          <Route path="/queryreview/:EnquiryId" element={<ViewAdmin />} />


          {/* Resource Enquiry */}
          <Route path="/resenquiry" element={<ResEnquiry />} />
          {localStorage.getItem('mytoken') &&
          <Route path="/resenquirylist" element={<ResEnquiryList />} />}
          <Route path="/resqueryview/:rEnquiryId" element={<ResEnquiryDisplay />} />
          <Route path="/rqueryreview/:rEnquiryId" element={<ResViewAdmin />} />
          <Route path="/resenqdelete/:rEnquiryId" element={<ResEnquiryDelete />} />


          {/* Course Details */}
          {localStorage.getItem('mytoken') &&
            <Route path="/addcourse" element={<AddCourses />} />}
          <Route path="/courses" element={<Courses />} />
          <Route path="/courseview/:CourseCode" element={<CourseDisplay />} />
          <Route path="/editcourses/:CourseCode" element={<EditCourse />} />
          <Route path="/deletecourses/:CourseCode" element={<CourseDelete />} />



          {/* Resource Details */}
          <Route path="/addresource" element={<AddResource />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resourceview/:ResourceCode" element={<ResourceDisplay />} />
          <Route path="/deleteresources/:ResourceCode" element={<ResourceDelete />} />
          <Route path="/editresources/:ResourceCode" element={<EditResource />} />
         
          {/* Admin View */}
          <Route path="/admincourse" element={<AdminCourses />} />
          <Route path="/adminresource" element={<AdminResources />} />
        
          {/* Sales Pipeline */}
          <Route path="/coursepipeline" element={<CoursePipeline/>}/>
          <Route path="/resourcepipeline" element={<ResourcePipeline/>}/>
          {/* <Route path="/events" element={<Events />} /> */}
        </Routes>
  
        <br /><br /><br />
      </Router>
      
    );
  }

export default Routers;