import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';

function ResEnquiryDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[staff,setStaff] = useState([])
    
    var myToken = localStorage.getItem("mytoken")
    

    const{rEnquiryId} = useParams()

    useEffect(()=>{
        
        var config = {
            method: 'delete',
            url: `http://localhost:4500/resenquiries/${rEnquiryId}`,
            headers: { 
              'Authorization': `Bearer ${myToken} `, 
              'Content-Type': 'application/json'
            }
           
            
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert('Resource Enquiry Deleted Successfully')
            
//    navigate('/admincourse')
          })
          .catch(function (error) {
            console.log(error);
            alert('Try Again!')
            navigate('/resenquirylist')
          });
        
    },[])
        
   

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Resource Enquiry Successfully Deleted</h1>

          <div >
          <button className="back"  onClick={()=>navigate("/resenquirylist")}>Back to Enquiry List
          </button></div>
         
          
      
  </div>
  </>

  )
}



export default ResEnquiryDelete;