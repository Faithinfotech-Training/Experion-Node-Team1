import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
// import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiries";
import EnquiryList from "./pages/EnquiryList";
import Courses from "./pages/Courses";
import Resources from "./pages/Resources";
import '../src/styles/headers.css'


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
    <div className="header-right"  ></div>
      
      <div ><Link className="a" className="active" to="/">Home</Link></div>
      <div ><Link className="a" to="/visit" to="/contact">Contact</Link></div>
      <div ><Link className="a" to="/addbook" to="/enquiry">Enquiry</Link></div>
      <div ><Link className="a" to="/enquirylist">Enquiry List</Link></div>
      <div ><Link className="a" to="/about"  to="/courses">Courses</Link></div>
      <div ><Link className="a" to="/resources">Resources</Link></div>
      </div>


     

      
    

  <Routes>
    <Route path ="/" element={<Home/>}/> 
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/enquiry" element={<Enquiry/>}/> 
    <Route path ="/enquirylist" element={<EnquiryList/>}/>
    <Route path ="/courses" element={<Courses/>}/>
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