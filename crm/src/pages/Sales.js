import React from 'react';
import Table from 'react-bootstrap/Table'
// import {useState,useParams,useEffect} from 'react';
// import axios from 'axios';

 

function Sales(props){
    return(<>
<Table stripped bordered hover size="sm">
<tbody>
    <tr>
      <td>{props.details.EnquiryId}</td>
      <td>{props.details.Name}</td>
      <td>{props.details.Status}</td>
      <td>{props.details.updatedAt}</td>
     
 
    </tr></tbody></Table>


        </>)
}
 
 

export default Sales



