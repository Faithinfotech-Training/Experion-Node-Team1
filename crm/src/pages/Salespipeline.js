import React from 'react';
import Table from 'react-bootstrap/Table';
import {useState,useParams,useEffect} from 'react';
import axios from 'axios';
import ResourceEnquiryReport from './resourceEnquiryReport.js';
import Sales from './Sales.js';
function SalesTable(){
  return(<>
   <CourseEnquiryStatus/>
   <ResourceEnquiryStatus/> 
</>)}
 


function CourseEnquiryStatus(){
  const[enquiries,setStaff] = useState([])
  useEffect(()=>{
    axios
        .get("http://localhost:4500/enquiries")
        .then(
            response =>{
                console.log('promise fullfilled');
                console.log(response);
                setStaff(response.data);
            }
        )
       
    },[])
    return(<>
     <h3 className="centerfooter"> Activity Log - Course</h3>
 <br/>
  <Table stripped bordered hover size="sm">
   <thead>
     <tr>
       <th width="170">Enquiry Code</th>
       <th width="370">User Name</th>
       {/* <th width="170">Course Name</th> */}
       <th width="170">Updated Date</th>
       <th width="170">Previous Status</th>
       <th width="170">Current Status</th>
     
    
     </tr> 
   </thead>
  

    

   </Table>
           {enquiries.map(enquiry=>
      <li style={{listStyleType:"none"}} key={enquiry.EnquiryId}>
          <Sales details ={enquiry}/>
          
        </li>
      )}
      <br/>
      
              </>)
      }

      function ResourceEnquiryStatus(){
        const[renquiries,setEnquiry] = useState([])
        useEffect(()=>{
          axios
              .get("http://localhost:4500/resenquiries/")
              .then(
                  response =>{
                      console.log('promise fullfilled');
                      console.log(response);
                      setEnquiry(response.data);
                  }
              )
             
          },[])
          return(<>
           <h3 className="centerfooter"> Activity Log - Resource </h3>
       <br/>
        <Table stripped bordered hover size="sm">
         <thead>
           <tr>
             <th width="170">Enquiry Code</th>
             <th width="370">Resource Name</th>
             {/* <th width="170">Resource Name</th> */}
             <th width="170">Updated Date</th>
             <th width="170">Previous Status</th>
             <th width="170">Current Status</th>
           
          
           </tr> 
         </thead>
        
      
          
      
         </Table>
                 {renquiries.map(renquiry=>
            <li style={{listStyleType:"none"}} key={renquiry.rEnquiryId}>
                <ResourceEnquiryReport details ={renquiry}/>
                
              </li>
            )}
            
            
                    </>)
            }



// import Sales from './Sales';

 

// function Sales(props){
//     return(<>
// <Table stripped bordered hover variant="dark" size="sm"></Table>
// <tbody>
//     <tr>
//       <td>{props.details.EnquiryId}</td>
//       <td>{props.details.Name}</td>
//       <td>{props.details.Status}</td>
//       <td>{props.details.updatedAt}</td>
     
 
//     </tr></tbody>


//         </>)
// }
 //3


// function Sales(props){
   

// function Resource(props){
//   return(<>
// <Table stripped bordered hover size="sm">
// <tbody>
//   <tr>
//     <td  width="170">{props.details.rEnquiryId}</td>
//     <td  width="370">{props.details.Name}</td>
//     <td  width="170">{props.details.updatedAt}</td>
//     <td  width="170">{props.details.Status}</td>
   

//   </tr></tbody></Table>


//       </>)
// }
 
// function TableExample() {
//     const[enquiries,setStaff] = useState([])
//     const[renquiries,setEnquiry]=useState([])
  
//     //const{EnquiryId} = useParams()
//     // let endpoints = [
//     //   'http://localhost:4500/enquiries'
//     // ];
    
//     // axios.all(endpoints.map((endpoint) => axios.post(endpoint,inputs))).then(response =>{
//     //   console.log('promise fullfilled')







 
    // useEffect(()=>{
    //   let endpoints = [
    //     "http://localhost:4500/enquiries/",
    //     "http://localhost:4500/resenquiries/"

    //   ];
    //   axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(response =>{
    //     console.log('promise fullfilled');
    //     console.log(response);
    //     setStaff(response.data);
    //     setEnquiry(response.data);
    //   })
//     },[])




//     //    


//   return (
//     <>
 
// <h3> SalesPipeline Report</h3>
//  <br/>
//  <Table stripped bordered hover size="sm">
//   <thead>
//     <tr>
//       <th width="170">Enquiry Code</th>
//       <th width="370">User Name</th>
//       <th width="170">Updated Date</th>
//       <th width="170">Status</th>
     
    
//     </tr> 
//   </thead>
  

    

//   </Table>
//   {/* {enquiries.map(enquiry=>
//       <li style={{listStyleType:"none"}} key={enquiry.EnquiryId}>
//           <Sales details ={enquiry}/>
//           {/* <ViewAdmin details ={enquiry}/> */}
//         {/*</li>
//       )} */}
//   <h3> Course Enquiry Report</h3>
//  <br/>
//   <Table stripped bordered hover size="sm">
//   <thead>
//     <tr>
//       <th width="170">Enquiry Code</th>
//       <th width="370">User Name</th>
//       <th width="170">Updated Date</th>
//       <th width="170">Current Status</th>
     
    
//     </tr> 
//   </thead>
  

    

//   </Table>

 
  

//   {/* {renquiries.map(renquiry=>
//       <li style={{listStyleType:"none"}} key={renquiry.rEnquiryId}>
//           <Resource details ={renquiry}/>
//           {/* <ViewAdmin details ={enquiry}/> */}
//           {/*</li>
//       )} */}
  
 

 


// </>
// )}
export default SalesTable







