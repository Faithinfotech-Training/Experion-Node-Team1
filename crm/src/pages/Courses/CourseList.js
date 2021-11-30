import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../styles/display.css';

function CourseList(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>
        <div class="container">
  
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1"> </div>
      <div class="col col-2"><h3>Course Name: <Link to={`/courseview/${props.details.CourseCode}`}> {props.details.CourseName}</Link></h3></div>
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

export default CourseList