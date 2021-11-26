import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiries";


function AppRoute(){
  return(
  <> 
    <Header/>
    <MyRouter/>
    <Footer/>
 </>

  )
}

function MyRouter(){
return(
  <Router>
    <div>
      <div ><Link  to="/">Home</Link></div>
      <div ><Link  to="/contact">Contact</Link></div>
      <div ><Link  to="/enquiry">Enquiry</Link></div>
    </div>
    

  <Routes>
    <Route path ="/" element={<Home/>}/> 
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/enquiry" element={<Enquiry/>}/>        
  </Routes>
    
    <br/><br/><br/>
  </Router>
        
    );
}

function Header(){
    return(
        <>
            <h1 >CRM System</h1>
            
                
                <h3>
                </h3>
                
           
        </>

    )
}

function Footer(){
    return(
        <>
            <p className="centerfooter">Copyright 2021 - Kiran</p>
        </>
    )
}

export default AppRoute;