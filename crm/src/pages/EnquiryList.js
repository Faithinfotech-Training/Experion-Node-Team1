
// import {  useEffect, useState } from "react";
// import axios from "axios";
// import EnquiryDisplay from "./EnquiryDisplay";
// import ViewAdmin from "./EnquiryViewAdmin";
// import EnquirySummary from "./EnquirySummary";

// function EnquiryList(){


//     const[enquiries,setStaffs] = useState([])

    

//     useEffect(()=>{
//         axios
//         .get('http://localhost:3001/enquiry')
//         .then(
//             response =>{
//                 console.log('promise fullfilled')
//                 console.log(response)
//                 setStaffs(response.data)
//             }
//         )
        
//     },[])

//   return(
//   <>
//   <div>
//       <h1 className="centerfooter">
//           Enquiry List</h1>
//           <p>
//           <div>
//               {enquiries.map(enquiry=>
//                 <li key={enquiry.id}>
//                     <EnquirySummary details ={enquiry}/>
//                     {/* <ViewAdmin details ={enquiry}/> */}
//                     </li>
//                 )}
//           </div>
//           </p>
      
//   </div>
//   </>

//   )
// }



// export default EnquiryList;

import {  useEffect, useState } from "react";
import axios from "axios";
import EnquiryDisplay from "./EnquiryDisplay";
import ViewAdmin from "./EnquiryViewAdmin";
import EnquirySummary from "./EnquirySummary";
 
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
  <div>
      <h1 className="centerfooter">
          Enquiry List</h1>
          <p>
          <div>
              {enquiries.map(enquiry=>
                <li key={enquiry.id}>
                    <EnquirySummary details ={enquiry}/>
                    {/* <ViewAdmin details ={enquiry}/> */}
                    </li>
                )}
          </div>
          </p>
      
  </div>
  </>
 
  )
}
 
 
 
export default EnquiryList;
