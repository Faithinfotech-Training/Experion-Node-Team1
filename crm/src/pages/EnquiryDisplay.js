
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import './styles/box.css';
import './styles/display.css';

function EnquiryDisplay(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>

            <div >
            <h3 className="centerfooter">
          Enquiry ID: {props.details.id} </h3>
          <div className="box1">
          <h4 className="color">Name : {props.details.name}</h4>
          <h4 className="color">Email : {props.details.email_id}</h4>
          <h4 className="color">Status: {props.details.status}</h4>
          <h4 className="color">Enquiry: {props.details.enquiry}</h4>
          <div class="col col-3">
          <div className="butto">
          <button className="edit" onClick={()=>navigate(`/queryreview/${props.details.id}`)}>View Enquiry
          </button>
           <br/><br/> 
            </div>
            </div>
          </div>
          <br/><br/>

          
      
  </div>

        </>
    )
}

export default EnquiryDisplay;