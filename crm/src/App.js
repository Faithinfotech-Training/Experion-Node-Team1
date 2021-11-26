import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import './App.css';
import Home from "./pages/Home";


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
    <div ><Link  to="/">Home</Link></div>

  <Routes>
    <Route path ="/" element={<Home/>}/>        
  </Routes>
    
    <br/><br/><br/>
  </Router>
        
    );
}

function Header(){
    return(
        <>
            <h1 className="formhead">CRM System</h1>
            
                
                <h3>
                </h3>
                <br/><br/><br/><br/>
           
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