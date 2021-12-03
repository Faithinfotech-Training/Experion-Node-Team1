
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../styles/display.css';
 
function EnquirySummary(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>
        <div class="container">
 
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1"> </div>
      <div class="col col-2"><h3>Enquiry Code: <Link to={`/queryview/${props.details.EnquiryId}`}> {props.details.EnquiryId}</Link></h3></div>
      <div class="col col-3">
      <div className="butto">
          {/* <button className="edit" onClick={()=>navigate(`/bookedit/${props.details.id}`)}>Edit
          </button>
           <br/><br/>
           <button className="delete" onClick={()=>navigate(`/bookdelete/${props.details.id}`)}>Delete
            </button> */}
            </div>
        </div>
      </li>
      </ul>
 
     
    </div>
 
 
           
 
        </>
    )
}
 
export default EnquirySummary;
 
