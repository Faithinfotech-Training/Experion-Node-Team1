

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Table, Button } from "react-bootstrap"



function AdminDisplay(props) {
    const navigate = useNavigate();
    const [adm, setadm] = useState([])

    const { CourseCode } = useParams()

    let [admin, setAdmin] = useState(false);

    const Users = () => {
        if (localStorage.getItem("role") === "admin" || "Admin") {
            setAdmin(true);
        }
    };

    useEffect(() => {
        Users()
        axios
            .get(`http://localhost:4500/courses`)
            .then(
                response => {
                    console.log('promise fullfilled')
                    console.log(response)
                    setadm(response.data)
                }
            )

    }, [])

    return (<>


        <Table striped bordered hover variant='white'>
            <tbody>
                <tr>
                    <th style={{ width: 90 }}>Image</th>
                    <th style={{ width: 150 }}>Course Name</th>
                    <th style={{ width: 140 }}>Course Module</th>
                    <th style={{ width: 440 }}>Description</th>
                    <th style={{ width: 120 }}>Duration</th>
                    <th style={{ width: 100 }}>Fee</th>
                    <th style={{ width: 150 }}>Qualification</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td ><img src={props.details.url} alt="Course image" width="100px" height="120px" /></td>
                    <td>{props.details.CourseName}</td>
                    <td>{props.details.CourseModules}</td>
                    <td>{props.details.Description}</td>
                    <td>{props.details.Duration}</td>
                    <td>{props.details.Fees}</td>
                    <td>{props.details.Qualification}</td>
                    {admin && <td >
                        <Button type="button" onClick={() => navigate(`/editcourses/${props.details.CourseCode}`)}>Edit</Button>
                        &nbsp;&nbsp;
                        <Button type='button' variant='danger' onClick={() => navigate(`/deletecourses/${props.details.CourseCode}`)}>Delete</Button>
                        &nbsp;&nbsp;
                        
                    </td>}

                </tr>

               
            </tbody>

        </Table>

    </>
    );
}

export default AdminDisplay;