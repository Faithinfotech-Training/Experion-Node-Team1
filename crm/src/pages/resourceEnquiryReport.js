import React from 'react';
import Table from 'react-bootstrap/Table'
// import {useState,useParams,useEffect} from 'react';
// import axios from 'axios';

 

function ResourceEnquiryReport(props){


    return(<>
<Table stripped bordered hover size="sm">
<tbody>
    <tr>
      <td width="170">{props.details.rEnquiryId}</td>
      {/* <td width="370">{props.details.Name}</td> */}
      <td width="370">{props.details.resourceName}</td>
     
      <td width="170">{props.details.updatedAt.toString().substr(0 ,10)}</td>
      <td width="170">{props.details.Previous_Status}</td>
      <td width="170">{props.details.rStatus}</td>
     
 
    </tr></tbody></Table>


        </>)
}
 
 

export default ResourceEnquiryReport


