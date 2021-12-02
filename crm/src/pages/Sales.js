import React from 'react';
import Table from 'react-bootstrap/Table'
// import {useState,useParams,useEffect} from 'react';
// import axios from 'axios';

 

function Sales(props){
    return(<>
<Table stripped bordered hover size="sm">
<tbody>
    <tr>
      <td width="170">{props.details.EnquiryId}</td>
      <td width="370">{props.details.Name}</td>
     
     
      <td width="170">{props.details.updatedAt.toString().substr(0 ,10)}</td>
      <td width="170">{props.details.Previous_Status}</td>
      <td width="170">{props.details.Current_Status}</td>
     
 
    </tr></tbody></Table>


        </>)
}
 
 

export default Sales



