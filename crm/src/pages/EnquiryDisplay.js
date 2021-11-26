
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../styles/box.css'

function EnquiryDisplay(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>

            <div >
            <h3 className="centerfooter">
          Enquiry ID: {props.details.id} </h3>
          <div className="box1">
          <h4 className="color">User ID (Enquirer) : {props.details.user_id}</h4>
          <h4 className="color">Enquiry: {props.details.enquiry}</h4>
          </div>
          <br/><br/>

          
      
  </div>

        </>
    )
}

export default EnquiryDisplay;