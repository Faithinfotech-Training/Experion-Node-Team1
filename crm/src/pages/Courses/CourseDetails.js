import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../styles/box.css';
import '../styles/display.css';


function CourseDisplay() {
    const navigate = useNavigate();
    const [enq, setStaff] = useState([])


    const { CourseCode } = useParams()
    let [user, setUser] = useState(false);

    const Users = () => {
        if (localStorage.getItem("role") === "user" || "User") {
            setUser(true);
        }
    };

    useEffect(() => {
        Users()
        axios
            .get(`http://localhost:4500/courses/${CourseCode}`)
            .then(
                response => {
                    console.log('promise fullfilled')
                    console.log(response)
                    setStaff(response.data)
                }
            )

    }, [])
    return (
        <>

            <div ><br />
                <h3 className="centerfooter">
                {enq.CourseName}  </h3>
                
                <MDBContainer style={{marginLeft:50}} >
                    <MDBRow >
                        <MDBCol ><img src={enq.url} alt="Course image" width="260px" height="300px"></img></MDBCol>
                         <MDBCol md="6" style={{marginLeft:50}}><br /><br />
                            
                         <h3>About The Course</h3>
                            <h6>{enq.Description}</h6>
                            <h6>{enq.Duration}</h6>
                            <h6>Fee : {enq.Fees}</h6>
                            <h6>Qualification : {enq.Qualification}</h6>
                            <h6>Course Modules : {enq.CourseModules}</h6>
                        </MDBCol>
                        <MDBCol>
                            <br /><br />
                            <Button variant="outline-secondary" onClick={() => navigate(`/courses`)}> &nbsp; &nbsp;Back  &nbsp; &nbsp;</Button>
                            <br /><br /><br /><br />
                            {localStorage.getItem("role") === "User" &&
                                <Button variant="outline-secondary" onClick={() => navigate(`/enquiry`)}>&nbsp;&nbsp;Enquiry&nbsp;</Button>}
                                <br /><br /><br /><br />
                                {localStorage.getItem("role") === "User" &&
                                <Button variant="outline-secondary" onClick={() => navigate(`/`)}>&nbsp;&nbsp;Enroll&nbsp;</Button>}
                        </MDBCol> 
                    </MDBRow>
                    <br/><br/>
                    
                </MDBContainer>
                <br/><br/><br/><br/>
            </div>

        </>
    )
}

export default CourseDisplay;