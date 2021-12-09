import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../styles/display.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
 
function ResEnquirySummary(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>
        <div class="container">
 
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1"> </div>
      <div class="col col-2"><h3>Resource Name: <Link to={`/resqueryview/${props.details.rEnquiryId}`}> {props.details.resourceName}</Link></h3></div>
      <div class="col col-3">
      <div className="butto">
          {/* <button className="edit" onClick={()=>navigate(`/bookedit/${props.details.id}`)}>Edit
          </button>
           <br/><br/>*/}
           <Button className="delete" onClick={()=>navigate(`/resenqdelete/${props.details.rEnquiryId}`)}>Delete
            </Button> 
            </div>
        </div>
      </li>
      </ul>
 
     
    </div>
 
 
           
 
        </>
    )
}
 
export default ResEnquirySummary;
 
