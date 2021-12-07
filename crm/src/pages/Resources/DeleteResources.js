import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';
// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function ResourceDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[staff,setStaff] = useState([])
    var myToken = localStorage.getItem("mytoken")

    const{ResourceCode} = useParams()

    useEffect(()=>{
        
        var config = {
            method: 'delete',
            url: `http://localhost:4500/resources/${ResourceCode}`,
            headers: { 
              'Authorization': `Bearer ${myToken} `, 
              'Content-Type': 'application/json'
            }
           
            
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            toast.success('Resource deleted successfully',{
                 
              position: toast.POSITION.TOP_CENTER, width:100,autoClose:2000})
              
            
//    navigate('/admincourse')
          })
          .catch(function (error) {
            console.log(error);
            alert('Try Again!')
            navigate('/addresource')
          });
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Resource Successfully Deleted</h1>

          <div >
          <button className="back"  onClick={()=>navigate("/adminresource")}>Back to Resource List
          </button></div>
         
          
      
  </div>
  </>

  )
}



export default ResourceDelete;