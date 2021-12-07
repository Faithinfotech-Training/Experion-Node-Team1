import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/box.css';
import '../styles/display.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import resback from './resback.png'


function ResEnquiryDisplay() {
    const navigate = useNavigate()
    const [enq, setStaff] = useState([])

    const { rEnquiryId } = useParams()

    useEffect(() => {

        axios
            .get(`http://localhost:4500/resenquiries/${rEnquiryId}`)
            .then(
                response => {

                    setStaff(response.data)
                }
            )

    }, [])
    return (
        <>

            <div >
                <img style={{ paddingLeft: 52 }} src={resback}
                    height="400"
                    width="1350"
                ></img>
                <br /><br />
                <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <MDBTable responsive>
                        <MDBTableHead style={{ width: 70 }}>
                            <tr>
                                <th style={{ width: 50 }}>#</th>
                                <th style={{ width: 70 }}>Name</th>
                                <th style={{ width: 70 }}>Email</th>
                                <th style={{ width: 70 }}>Resource Name</th>
                                <th style={{ width: 70 }}>Enquiry Date</th>
                                <th style={{ width: 70 }}>Resolution Status</th>
                                <th style={{ width: 70 }}>Change Status</th>

                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            <tr>
                                <td></td>
                                <td>{enq.name}</td>
                                <td>{enq.email}</td>
                                <td>{enq.resourceName}</td>
                                <td>{enq.rEnquiryDate}</td>
                                <td>{enq.rStatus}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={() => navigate(`/rqueryreview/${enq.rEnquiryId}`)}>&nbsp;Set Status&nbsp;</Button>
                                </td>
                            </tr>

                        </MDBTableBody>
                    </MDBTable>
                    <br />
                    <Button variant="outline-secondary" onClick={() => navigate(`/resenquirylist`)}> &nbsp; &nbsp;&nbsp;Back &nbsp; &nbsp; &nbsp;</Button>
                </div>
            </div>
        </>
    )
}

export default ResEnquiryDisplay;

