
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminDisplay from "./adminCourselist";
import { Table, Button } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";

function AdminCourses() {
    const navigate = useNavigate();
    var bullet = {
        listStyle: "none"
    }
    const [courses, setStaffs] = useState([])

    // let [user, setUser] = useState(false);
    let [admin, setAdmin] = useState(false);

    const Users = () => {
        if (localStorage.getItem("role") === "admin" || "Admin") {
            setAdmin(true);
        }
    };

    useEffect(() => {
        Users();
        axios
            .get('http://localhost:4500/courses')
            .then(
                response => {
                    console.log('promise fullfilled')
                    console.log(response)
                    setStaffs(response.data)
                }
            )

    }, [])

    return (
        <>
            <div>
                <br />
                <h1 className="centerfooter">
                    Course Details</h1>
                <p>
                    <div>

                        {admin &&
                            <Button style={{ marginLeft: 1255, marginBottom: 20 }} type='button' onClick={() => navigate(`/addcourse`)}>{<AddIcon />}Add Course</Button>}

                        <h2 style={{ marginTop: 50 }}><b></b></h2>
                        <Table striped bordered hover variant='black'>

                            <ul style={bullet}>
                                {courses.map(course =>

                                    <li key={course.CourseCode}>
                                        <AdminDisplay details={course} />
                                    </li>
                                )}

                            </ul>
                        </Table>
                    </div>
                </p>


            </div>
        </>

    )
}



export default AdminCourses;
