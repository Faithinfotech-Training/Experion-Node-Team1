
import {  useEffect, useState } from "react";
import axios from "axios";
import EnquiryDisplay from "./CourseDetails";

function EnquiryList(){


    const[enquiries,setStaffs] = useState([])

    

    useEffect(()=>{
        axios
        .get('http://localhost:3003/course')
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
  <div>
      <h1 className="centerfooter">
          Course List</h1>
          <p>
          <div>
              {enquiries.map(enquiry=>
                <li key={enquiry.id}>
                    <EnquiryDisplay details ={enquiry}/>
                    </li>
                )}
          </div>
          </p>
      
  </div>
  </>

  )
}



export default EnquiryList;