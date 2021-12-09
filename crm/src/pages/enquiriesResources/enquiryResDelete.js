import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function ResEnquiryDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    
    
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
            toast.success('Enquiry deleted ',{
                 
              position: toast.POSITION.TOP_CENTER, width:100,autoClose:2000})
              setTimeout(() => {
                navigate("/resenquirylist")
                }, 2000);
            
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
    <br/><br/>
      <h1 className="centerfooter">
          Resource Enquiry Successfully Deleted</h1>

          {/* <div >
          <button className="back"  onClick={()=>navigate("/resenquirylist")}>Back to Enquiry List
          </button></div> */}
         
          
      
  </div>
  </>

  )
}



export default ResEnquiryDelete;