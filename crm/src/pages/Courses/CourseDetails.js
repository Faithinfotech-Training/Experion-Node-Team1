

import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../styles/box.css';
import '../styles/display.css';

function CourseDisplay(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>

            <div >
            <h3 className="centerfooter">
          Course {props.details.CourseCode} </h3>
          <h4 className="color">Name : {props.details.CourseName}</h4>
          <div className="box1">
          <h4 className="color">Name : {props.details.CourseName}</h4>
          <h4 className="color">Email : {props.details.CourseCode}</h4>
          <h4 className="color">Description: {props.details.Description}</h4>
          <h4 className="color">Duration: {props.details.Duration}</h4>
          <h4 className="color">Fee: {props.details.Fees}</h4>
          <h4 className="color">Qualification: {props.details.Qualification}</h4>
        
          <div class="col col-3">
          <div className="butto">
          <button className="edit" onClick={()=>navigate(`/`)}> Home
          </button>
           <br/>
           <button className="edit" onClick={()=>navigate(`/editcourses/${props.details.CourseCode}`)}> Edit
          </button>
          <button className="edit" onClick={()=>navigate(`/deletecourses/${props.details.CourseCode}`)}> Delete
          </button>
           <br/> 
            </div>
            </div>
          </div>
          <br/><br/>

          
      
  </div>

        </>
    )
}

export default CourseDisplay;