import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/box.css';
import '../styles/display.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import courseback from './courseback.png'

function EnquiryDisplay() {
    const navigate = useNavigate();
    const [enq, setStaff] = useState([])

    const { EnquiryId } = useParams()

    useEffect(() => {

        axios
            .get(`http://localhost:4500/enquiries/${EnquiryId}`)
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
            <div >
                <img style={{ paddingLeft: 52 }} src={courseback}
                    height="400"
                    width="1350"
                ></img>
                <br /><br />
                <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <MDBTable responsive>
                        <MDBTableHead style={{ width: 70 }}>
                            <tr>
                                <th style={{ width: 30 }}>#</th>
                                <th style={{ width: 40 }}>Name</th>
                                <th style={{ width: 40 }}>Email</th>
                                <th style={{ width: 40 }}>DOB</th>
                                <th style={{ width: 40 }}>Mobile No.</th>
                                <th style={{ width: 40 }}>Address</th>
                                <th style={{ width: 40 }}>Qualification</th>
                                

                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td></td>
                                <td>{enq.Name}</td>
                                <td>{enq.Email_id}</td>
                                <td>{enq.dob}</td>
                                <td>{enq.mobile_number}</td>
                                <td>{enq.Address}</td>
                                <td>{enq.HighestQualification}</td>
                                
                            </tr>

                        </MDBTableBody>
                    </MDBTable>
                    <br/>
                </div>
                <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <MDBTable responsive>
                        <MDBTableHead style={{ width: 70 }}>
                            <tr>
                                <th style={{ width: 40 }}>#</th>
                                <th style={{ width: 40 }}>Marks(%)</th>
                                <th style={{ width: 40 }}>Passout Year</th>
                                <th style={{ width: 40 }}>Course Name</th>
                                <th style={{ width: 40 }}>Enquiry Date</th>
                                <th style={{ width: 40 }}>Resolution Status</th>
                                <th style={{ width: 40 }}>Change Status</th>

                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td></td>
                                <td>{enq.PercentageOfMarks}</td>
                                <td>{enq.YearOfPassout}</td>
                                <td>{enq.Course_Name}</td>
                                <td>{enq.EnquiryDate}</td>
                                <td>{enq.Current_Status}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={() => navigate(`/queryreview/${enq.EnquiryId}`)}>&nbsp;Set Status&nbsp;</Button>
                                </td>
                            </tr>

                        </MDBTableBody>
                    </MDBTable>
                    <br />
                    <Button variant="outline-secondary" onClick={() => navigate(`/enquirylist`)}> &nbsp; &nbsp;&nbsp;Back &nbsp; &nbsp; &nbsp;</Button>
                </div>
            </div>

            

        </>
    )
}

export default EnquiryDisplay;

