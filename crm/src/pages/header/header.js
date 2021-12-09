import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Container, Nav, Table } from 'react-bootstrap';
import { useState, useEffect } from "react";

function Header1() {
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

  return (

    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>

        <Navbar.Brand href="#home">CRM-Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">


          <Nav>
            <Nav.Link href='/'>Home</Nav.Link>

            <NavDropdown

              id="nav-dropdown-dark-example"
              title="Courses"
              menuVariant="dark">

              <NavDropdown.Item href="/courses" >Courses</NavDropdown.Item>

              {/* { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
       <NavDropdown.Item href="/addcourse" >Manage Course */}
              {localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
                <NavDropdown.Item className="a" href="/admincourse">Manage Course</NavDropdown.Item>}
              {/* { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
    <Nav.Link className="a" href="/addcourse">Add Course</Nav.Link>} */}


              {/* </NavDropdown.Item>    */}


            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Resource"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/resources">Resources</NavDropdown.Item>
              {localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
                <NavDropdown.Item className="a" href="/adminresource">Manage Resource</NavDropdown.Item>}
              {/* { localStorage.getItem('mytoken') && localStorage.getItem("role") === "admin" &&
        <Nav.Link className="a" href="/addresource">Add Resources</Nav.Link>} */}


            </NavDropdown>





            {localStorage.getItem("role") === "admin" &&
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Enquires"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/enquirylist">Course Enquiry</NavDropdown.Item>
                <NavDropdown.Item href="/resenquirylist">Resource Enquiry</NavDropdown.Item>

              </NavDropdown>}

            

            {!localStorage.getItem('mytoken') &&
              <Nav.Link className="a" href="/Register">Register</Nav.Link>}
            {localStorage.getItem("role") === "admin" &&
              <Nav.Link className="a" href="/Register">Register</Nav.Link>}

            {localStorage.getItem("role") === "admin" &&
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Sales Pipeline"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/coursepipeline">Course Pipeline</NavDropdown.Item>
                <NavDropdown.Item href="/resourcepipeline">Resource Pipeline</NavDropdown.Item>

              </NavDropdown>}

            {localStorage.getItem("role") === "manager" &&
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Sales Pipeline"
                menuVariant="dark"
              >
                <NavDropdown.Item href="/coursepipeline">Course Sales Pipeline</NavDropdown.Item>
                <NavDropdown.Item href="/resourcepipeline">Resource Pipeline</NavDropdown.Item>

              </NavDropdown>}


            {!localStorage.getItem('mytoken') &&
              <Nav.Link className="a" href="/contact">Contact Us</Nav.Link>}

            

            {localStorage.getItem("role") === "admin" &&
              <Nav.Link className="a" href="/sitevisit" >Site View</Nav.Link>}



            {localStorage.getItem("role") === "manager" &&
              <Nav.Link className="a" href="/sitevisit" >Site View</Nav.Link>}

            {!localStorage.getItem('mytoken') && <div><Nav.Link href="/Login">Login</Nav.Link></div>}
            {localStorage.getItem('mytoken') && <div><Nav.Link onClick={() => window.location = '/Login'} href='/Login'>Logout</Nav.Link></div>}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header1;