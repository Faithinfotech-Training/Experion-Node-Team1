import { Link } from "react-router-dom";
import { Navbar,NavDropdown,Container,Nav,Table } from 'react-bootstrap';
import { useState,useEffect } from "react";

function Header1(){
    let [user, setUser] = useState(false);
  let [admin, setAdmin] = useState(false);
  let [manager, setManager] = useState(false);

  const Admin = () => {
    if (localStorage.getItem("role") === "Admin" || "admin") {
      setAdmin(true);
    }
  };

  const Manager = () => {
    if (localStorage.getItem("role") === "Manager") {
      setManager(true);
    }
  };

  const Users = () => {
    if (localStorage.getItem("role") === "User") {
      setUser(true);
    }
  };
  useEffect(() => {
    Admin();
    Manager();
    Users();
  });

  const User = () => {
    let role = localStorage.getItem("role");
    let username = localStorage.getItem("username");
    if (localStorage.getItem("mytoken") && role === "Admin") {
      return role;
    } else if (localStorage.getItem("mytoken") && role === "User") {
      return username;
    } else {
      return "CRM App";
    }
  };

  return(
      
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
        
       <NavDropdown.Item href="/courses" >Courses</NavDropdown.Item>
       
       {/* { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
       <NavDropdown.Item href="/addcourse" >Manage Course */}
        { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/admincourse">Manage Course</Nav.Link>}
    { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/addcourse">Add Course</Nav.Link>}
   
        
       {/* </NavDropdown.Item>    */}
       
      
        </NavDropdown>

        <NavDropdown
       id="nav-dropdown-dark-example"
       title="Resource"
       menuVariant="dark"
     >
       <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
       { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
        <Nav.Link className="a" href="/adminresource">Manage Resource</Nav.Link>}
        { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
        <Nav.Link className="a" href="/addresource">Add Resources</Nav.Link>}
       
       
    </NavDropdown>



    <Nav.Link href='/'>Home</Nav.Link>




    {!localStorage.getItem('mytoken')&&<div><Nav.Link href="/Login">Login</Nav.Link></div>}
    {localStorage.getItem('mytoken')&&<div><Nav.Link onClick={()=>window.location='/Login'} href='/Login'>Logout</Nav.Link></div>}
       
    {!localStorage.getItem('mytoken') &&
    <Nav.Link className="a" href="/Register">Register</Nav.Link> }
    {localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/Register">Register</Nav.Link> }

      

    {localStorage.getItem('mytoken')&& localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/enquirylist">Course Enquiries</Nav.Link>}

  {localStorage.getItem('mytoken')&& localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/resenquirylist">Resource Enquiries</Nav.Link>}

     {/* { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/addresource">Add Resources</Nav.Link>} */}

     {/* {localStorage.getItem('mytoken')&& 
    <Nav.Link className="a" href="/addcourse">Add Courses</Nav.Link>} */}

    {!localStorage.getItem('mytoken') &&
    <Nav.Link className="a" href="/contact">Contact Us</Nav.Link>}

     
    {localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/salespipeline">Sales Pipeline</Nav.Link>}

    {localStorage.getItem("role") === "manager" &&
    <Nav.Link className="a" href="/salespipeline">Sales Pipeline</Nav.Link>}

    {/* { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/admincourse">Manage Course</Nav.Link>}
    { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/adminresource">Manage Resource</Nav.Link>} */}

    {localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/sitevisit" >Site View</Nav.Link>}

    

    {localStorage.getItem("role") === "manager" &&
    <Nav.Link className="a" href="/sitevisit" >Site View</Nav.Link>}

    {/* <Nav.Link className="a" href="/sitevisit" >Site View</Nav.Link> */}
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>

  )
}

export default Header1;