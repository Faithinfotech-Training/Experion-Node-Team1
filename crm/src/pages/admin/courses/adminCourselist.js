

import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
// import '../courses/box.css';
// import '../courses/display.css';
import {Table,Button} from "react-bootstrap"



function AdminDisplay(props){
    const navigate = useNavigate();
    const[adm,setadm] = useState([])

    const{CourseCode} = useParams()

    let [admin, setAdmin] = useState(false);

    const Users = () => {
        if (localStorage.getItem("role") === "admin" || "Admin") {
            setAdmin(true);
        }
    };

    useEffect(()=>{
        Users()
        axios
        .get(`http://localhost:4500/courses`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setadm(response.data)
            }
        )
        
    },[])
   
    return (<>
       
        {/* <div style={{
            marinTop :40,
            width: 700,
            marginLeft: '25%'
        }}>  */}

        {/* <h1 className="title">Book Details</h1> */}
        
        <Table striped bordered hover variant ='white'>
            <tbody>
                <tr>
                    <th>Image</th>
                    <th>Course Name</th>
                    <th>Course Module</th>
                    <th>Description</th>
                    <th>Duration</th> 
                    <th>Fee</th>
                    <th>Qualification</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td><img src={props.details.url} alt="Course image" width="100px" height="120px"/></td>
                    <td>{props.details.CourseName}</td>
                    <td>{props.details.CourseModules}</td>
                    <td>{props.details.Description}</td>
                    <td>{props.details.Duration}</td>
                    <td>{props.details.Fees}</td>
                    <td>{props.details.Qualification}</td>
                   {admin && <td >
                        <Button type="button" onClick={()=>navigate(`/editcourses/${props.details.CourseCode}`)}>Edit</Button>
                         &nbsp;&nbsp; 
                        <Button  type='button' variant='primary' onClick={() =>navigate(`/deletecourses/${props.details.CourseCode}`)}>Delete</Button>
                        &nbsp;&nbsp;
                        <Button type='button'  onClick={() => navigate(`/addcourse`)}>Add</Button>
                    </td>}

                </tr>
               
       {/* <tr>
         <td>
        <Button type="button" onClick={()=>navigate(`/editcourses/${enq.CourseCode}`)}>Edit</Button>
        </td>
        <td>
        <Button type='button' variant='primary' onClick={() =>navigate(`/deletecourses/${enq.CourseCode}`)}>Delete</Button>
        </td>
        </tr> */}
        
        {/* <tr>
            <a href= "/admindisplay" style={{ marginLeft: '64%'},{align:'center'}}>Go to Course List</a> 
            
        </tr>  */}
        </tbody>
         
        </Table>       
       
      </>
      );
}

export default AdminDisplay;