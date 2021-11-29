import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
// import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register"
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
import CourseDelete from "./pages/Courses/DeleteCourses";
import ResourceDelete from "./pages/Resources/DeleteResources";
import './pages/styles/headers.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';


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
        <div className="header">
        <a  class="logo">CRM Project</a>
        <div className="header-right"  >
      
      <div >
        <Link className="a" className="active" to="/">Home</Link></div></div>
        
      <div >
        
          <Link className="a"   to="/courses">Courses</Link>
       
        
      </div>
      {!localStorage.getItem('mytoken')&&<div><Link to="/Login">Login</Link></div>}
        {localStorage.getItem('mytoken')&&<div><Link onClick={()=>window.location='/Login'} to='/Login'>Logout</Link></div>}
      <div ><Link className="a" to="/Register">Resources</Link></div>
      <div ><Link className="a" to="/resources">Resources</Link></div>
      <div ><Link className="a" to="/addresource">Add Resources</Link></div>
      <div ><Link className="a" to="/addcourse">Add Courses</Link></div>
      <div ><Link className="a"  to="/enquiry">Enquiry</Link></div>
      <div ><Link className="a" to="/enquirylist">Enquiry List</Link></div>
      <div ><Link className="a" to="/contact">Contact Us</Link></div>
      
      </div>


  <Routes>
    <Route path ="/" element={<Home/>}/> 
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/Login" element={<Login/>}/>
    <Route path ="/Register" element={<Register/>}/>
    <Route path ="/enquiry" element={<Enquiry/>}/>
    <Route path ="/addresource" element={<AddResource/>}/> 
    <Route path ="/addcourse" element={<AddCourses/>}/> 
    <Route path ="/enquirylist" element={<EnquiryList/>}/>
    <Route path ="/courses" element={<Courses/>}/>
    <Route path ="/editcourses/:id" element={<EditCourse/>}/>
    <Route path ="/deletecourses/:id" element={<CourseDelete/>}/>
    <Route path ="/deleteresources/:id" element={<ResourceDelete/>}/>
    <Route path ="/editresources/:id" element={<EditResource/>}/>
    <Route path ="/queryreview/:id" element={<ViewAdmin/>}/>
     {/* <Route path ="/resource/:id" element={<ViewAdmin/>}/> */}
    <Route path ="/resources" element={<Resources/>}/>      
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