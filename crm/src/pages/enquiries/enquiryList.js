

import {  useEffect, useState } from "react";
import axios from "axios";
import EnquirySummary from "./enquirySummary";
 
function EnquiryList(){
 
 
    const[enquiries,setStaffs] = useState([])
 
    
 
    useEffect(()=>{
        axios
        .get('http://localhost:4500/enquiries')
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setStaffs(response.data)
            }
        )
        
    },[])
 
  return(
  <>
  <div><br/>
      <h1 className="centerfooter">
          Course Enquiry List</h1><br/>
          <p>
          <div>
              {enquiries.map(enquiry=>
                <li style={{listStyleType:"none"}} key={enquiry.id}>
                    <EnquirySummary details ={enquiry}/>
                 
                    </li>
                )}
          </div>
          </p>
      
  </div>
  </>
 
  )
}
 
 
 
export default EnquiryList;
