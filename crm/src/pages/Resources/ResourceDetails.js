
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../styles/box.css';
import '../styles/display.css';

function ResourceDisplay(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>

            <div >
            <h3 className="centerfooter">
          Resource {props.details.id} </h3>
          <div className="box1">
          <h4 className="color">Name : {props.details.ResourceCode}</h4>
          <h4 className="color">Email : {props.details.ResourceName}</h4>
          <h4 className="color">Description: {props.details.Description}</h4>
          <h4 className="color">Fee: {props.details.Fee}</h4>
          <h4 className="color">Qualification: {props.details.Qualification}</h4>
        
          <div class="col col-3">
          <div className="butto">
          <button className="edit" onClick={()=>navigate(`/`)}> Home
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

export default ResourceDisplay;