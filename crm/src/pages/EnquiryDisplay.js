
// import {  useEffect, useState } from "react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
// import{useParams} from "react-router-dom";
// import './styles/box.css';
// import './styles/display.css';

// function EnquiryDisplay(){
//     const navigate = useNavigate();
//     const[enq,setStaff] = useState([])

//     const{id} = useParams()

//     useEffect(()=>{
        
//         axios
//         .get(`http://localhost:3001/enquiry/${id}`)
//         .then(
//             response =>{
//                 console.log('promise fullfilled')
//                 console.log(response)
//                 setStaff(response.data)
//             }
//         )
        
//     },[])
//     return(
//         <>

//             <div >
//             <h3 className="centerfooter">
//           Enquiry  </h3>
//           <div className="box1">
//           <h4 className="color">Name : {enq.name}</h4>
//           <h4 className="color">Email : {enq.email_id}</h4>
//           <h4 className="color">Type: {enq.status}</h4>
//           <h4 className="color">Enquiry: {enq.enquiry}</h4>
//           <h4 className="color">Resolution Status: {enq.resolution}</h4>
//           <div class="col col-3">
//           <div className="butto">
//           <button className="edit" onClick={()=>navigate(`/queryreview/${enq.id}`)}>Resolution Status
//           </button>
//            <br/><br/> 
//             </div>
//             </div>
//           </div>
//           <br/><br/>

          
      
//   </div>

//         </>
//     )
// }

// export default EnquiryDisplay;


import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import './styles/box.css';
import './styles/display.css';
 
function EnquiryDisplay(){
    const navigate = useNavigate();
    const[enq,setStaff] = useState([])
 
    const{EnquiryId} = useParams()
 
    useEffect(()=>{
       
        axios
        .get(`http://localhost:4500/enquiries/${EnquiryId}`)
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
          Enquiry  </h3>
          <div className="box1">
          <h4 className="color">Name : {enq.Name}</h4>
          <h4 className="color">Email : {enq.Email_id}</h4>
          <h4 className="color">Date Of Birth : {enq.dob}</h4>
          <h4 className="color">Mobile Number : {enq.mobile_number}</h4>
          <h4 className="color">Address : {enq.Address}</h4>
          <h4 className="color">HighestQualification : {enq.HighestQualification}</h4>
          <h4 className="color">PercentageOfMarks : {enq.PercentageOfMarks}</h4>
          <h4 className="color">YearOfPassout: {enq.YearOfPassout}</h4>
          <h4 className="color">Course_Name : {enq.Course_Name}</h4>
          <h4 className="color">Resource_Name : {enq.Resource_Name}</h4>
 
 
 
 
 
 
          <h4 className="color">EnquiryDate: {enq.EnquiryDate}</h4>
          <h4 className="color">Enquiry: {enq.Enquiry}</h4>
          <h4 className="color">Resolution Status: {enq.Status}</h4>
          <div class="col col-3">
          <div className="butto">
          <button className="edit" onClick={()=>navigate(`/queryreview/${enq.EnquiryId}`)}>Resolution Status
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
 
export default EnquiryDisplay;
 
