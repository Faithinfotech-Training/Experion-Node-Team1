import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../styles/box.css';
import '../styles/display.css';

function ResourceDisplay() {
  const navigate = useNavigate();
  const [enq, setStaff] = useState([])

  const { ResourceCode } = useParams()

  useEffect(() => {

    axios
      .get(`http://localhost:4500/resources/${ResourceCode}`)
      .then(
        response => {
          console.log('promise fullfilled')
          console.log(response)
          setStaff(response.data)
        }
      )

  }, [])
  return (<>

      <div >
        <br/>
        <h3 className="centerfooter">
        {enq.ResourceName} </h3>
          <br/><br/>
       
        <MDBContainer style={{marginLeft:50}} >
                    <MDBRow>
                        <MDBCol ><img src={enq.url} alt="Course image" width="320px" height="360px"></img></MDBCol>
                        <MDBCol md="5" style={{width: 650}}><br /><br />
                        <h3>About the Resource</h3>
                            <h6>{enq.Description}</h6>
                            <h6>Fee: {enq.Fees}</h6>
                        </MDBCol>
                    </MDBRow>
                    
                </MDBContainer>
                <br /> 
                <br /> 
                    <Button style={{marginLeft:45}} variant="outline-secondary" onClick={() => navigate(`/resources`)}> &nbsp; &nbsp;Back  &nbsp; &nbsp;</Button>
                            
                            {localStorage.getItem("role") === "User" &&
                                <Button style={{marginLeft:40}} variant="outline-secondary" onClick={() => navigate(`/resenquiry`)}>&nbsp;&nbsp;Enquiry&nbsp;</Button>}
                <br />
      </div>
      </>
  )
}

export default ResourceDisplay;