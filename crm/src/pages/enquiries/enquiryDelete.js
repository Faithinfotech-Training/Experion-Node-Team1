import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';

function EnquiryDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[staff,setStaff] = useState([])

    const{EnquiryId} = useParams()

    useEffect(()=>{
        
        axios
        .delete(`http://localhost:4500/enquiries/${EnquiryId}`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
               
                setStaff(response.data)
               
            }
        )
        
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