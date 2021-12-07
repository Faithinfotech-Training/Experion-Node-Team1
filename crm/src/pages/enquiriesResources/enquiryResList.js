import {  useEffect, useState } from "react";
import axios from "axios";
import ResEnquirySummary from "./enquiryResSummary";
 
function ResEnquiryList(){
 
 
    const[enquiries,setEnq] = useState([])
 
    
 
    useEffect(()=>{
        axios
        .get('http://localhost:4500/resenquiries')
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setEnq(response.data)
            }
        )
        
    },[])
 
  return(
  <>
  <div>&nbsp;
      <h1 className="centerfooter">
          Resource Enquiry List</h1>&nbsp;
          <p>
          <div>
              {enquiries.map(enquiry=>
                <li style={{listStyleType:"none"}} key={enquiry.id}>
                    <ResEnquirySummary  details ={enquiry}/>
                    {/* <ViewAdmin details ={enquiry}/> */}
                    </li>
                )}
          </div>
          </p>
      
  </div>
  </>
 
  )
}
 
 
 
export default ResEnquiryList;
