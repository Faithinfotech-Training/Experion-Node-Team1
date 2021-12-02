import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/box.css';
import '../styles/display.css';
 
function ResEnquiryDisplay(){
    const navigate = useNavigate()
    const[enq,setStaff] = useState([])
 
    const{rEnquiryId} = useParams()
 
    useEffect(()=>{
       
        axios
        .get(`http://localhost:4500/resenquiries/${rEnquiryId}`)
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
 
            <div >
            <h3 className="centerfooter">
          Resource Enquiry  </h3>
          <div className="box1">
          
          <h4 className="color">Resource_Name : {enq.resourceName}</h4>
          <h4 className="color">EnquiryDate: {enq.rEnquiryDate}</h4>
          <h4 className="color">Resolution Status: {enq.rStatus}</h4>
          <div class="col col-3">
          <div className="butto">
          <button className="edit" onClick={()=>navigate(`/rqueryreview/${enq.rEnquiryId}`)}>Resolution Status
          </button>
           <br/><br/>
            </div>
            </div>
          </div>
          <br/><br/>
 
         
     
  </div>
 
        </>
    )
}
 
export default ResEnquiryDisplay;
 
