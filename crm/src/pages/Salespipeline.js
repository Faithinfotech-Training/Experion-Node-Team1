import React from 'react';
import Table from 'react-bootstrap/Table';
import {useState,useParams,useEffect} from 'react';
import axios from 'axios';
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
 
function Sales(props){
    return(<>
<Table stripped bordered hover size="sm">
<tbody>
    <tr>
      <td  width="170">{props.details.EnquiryId}</td>
      <td  width="370">{props.details.Name}</td>
      <td  width="170">{props.details.updatedAt}</td>
      <td  width="170">{props.details.Status}</td>
     
 
    </tr></tbody></Table>


        </>)
}
 
function TableExample() {
    const[enquiries,setStaff] = useState([])
 
    //const{EnquiryId} = useParams()
 
    useEffect(()=>{
       
        axios
        .get("http://localhost:4500/enquiries/")
        .then(
            response =>{
                console.log('promise fullfilled');
                console.log(response);
                setStaff(response.data);
            }
        )
       
    },[])



  return (
    <>
 
<h3> SalesPipeline Report</h3>
 <br/>
 <Table stripped bordered hover size="sm">
  <thead>
    <tr>
      <th width="170">Enquiry Code</th>
      <th width="370">User Name</th>
      <th width="170">Updated Date</th>
      <th width="170">Status</th>
     
    
    </tr> 
  </thead>
  

    

  </Table>
  {enquiries.map(enquiry=>
      <li style={{listStyleType:"none"}} key={enquiry.EnquiryId}>
          <Sales details ={enquiry}/>
          {/* <ViewAdmin details ={enquiry}/> */}
          </li>
      )}
  
 


</>
)}
export default TableExample







