
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../styles/display.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'


import axios from "axios";
 



function EnquirySummary(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>
        <div class="container">
 
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1"> </div>
      <div class="col col-2"><h3>Course Name: <Link to={`/queryview/${props.details.EnquiryId}`} > {props.details.Course_Name}</Link></h3></div>
      <div class="col col-3">
      <div className="butto">
      {localStorage.getItem('mytoken')&&
          <Button 
          variant="danger"
          className="delete"
           onClick={()=>navigate(`/deleteenquiry/${props.details.EnquiryId}`)}> Delete
          </Button> }
            </div>
        </div>
      </li>
      </ul>
 
     
    </div>
 
 
           
 
        </>
    )
}


 
export default EnquirySummary;
 
