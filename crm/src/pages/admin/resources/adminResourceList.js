


import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

import {Table,Button} from "react-bootstrap"



function AdminResourceDisplay(props){
    const navigate = useNavigate();
    const[adm,setadm] = useState([])

    let [admin, setAdmin] = useState(false);

    const Users = () => {
        if (localStorage.getItem("role") === "admin" || "Admin") {
            setAdmin(true);
        }
    };

    useEffect(()=>{
        Users()
        axios
        .get(`http://localhost:4500/resources`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setadm(response.data)
            }
        )
        
    },[])
   
    return (<>
        
        <Table striped bordered hover variant ='white'>
            <tbody>
                <tr>
                    <th>Image</th>
                    <th>Resource Name</th>
                    <th>Description</th>
                    <th>Fees</th> 
                    <th>Action</th>
                </tr>
                <tr>
                    <td><img src={props.details.url} alt="Resource image" width="100px" height="100px"/></td>
                    <td>{props.details.ResourceName}</td>
                    <td>{props.details.Description}</td>
                    <td>{props.details.Fees}</td>
                    
                    {admin && <td>
                        <Button type='button' onClick={()=>navigate(`/editresources/${props.details.ResourceCode}`)}>Edit</Button>
                         &nbsp;&nbsp; 
                        <Button  type='button' variant='primary' onClick={() =>navigate(`/deleteresources/${props.details.ResourceCode}`)}>Delete</Button>
                        &nbsp;&nbsp;
                        <Button type='button'  onClick={() => navigate(`/addresource`)}>Add</Button>
                    </td>}
                </tr>
               
        </tbody>
         
        </Table>       
       
      </>
      );
}

export default AdminResourceDisplay;