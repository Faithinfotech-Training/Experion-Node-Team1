import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';

function EnquiryDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[staff,setStaff] = useState([])
    var myToken = localStorage.getItem("mytoken")

    const{EnquiryId} = useParams()

    useEffect(()=>{
        
        var config = {
            method: 'delete',
            url: `http://localhost:4500/enquiries/${EnquiryId}`,
            headers: { 
              'Authorization': `Bearer ${myToken} `, 
              'Content-Type': 'application/json'
            }
           
            
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert('Course Enquiry Deleted Successfully')
            
//    navigate('/admincourse')
          })
          .catch(function (error) {
            console.log(error);
            alert('Try Again!')
            navigate('/enquirylist')
          });
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Course Enquiry Successfully Deleted</h1>

          <div >
          <button className="back"  onClick={()=>navigate("/enquirylist")}>Back to Enquiry List
          </button></div>
         
          
      
  </div>
  </>

  )
}



export default EnquiryDelete;