import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/display.css';

function CourseList(props) {
  const navigate = useNavigate();
  console.log(props)
  return (
    <>
      <div class="container">

        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1"><img src={props.details.url} alt="Course image" width="100px" height="120px" /> </div>
            <div class="col col-2"><h3>Course Name: <Link to={`/courseview/${props.details.CourseCode}`}> {props.details.CourseName}</Link></h3></div>
            <div class="col col-3">
              <div className="butto">
              {/* {localStorage.getItem('mytoken')&&
           <button className="edit" onClick={()=>navigate(`/editcourses/${props.details.CourseCode}`)}> Edit
          </button>}
          {localStorage.getItem('mytoken')&&
          <button className="delete" onClick={()=>navigate(`/deletecourses/${props.details.CourseCode}`)}> Delete
          </button> } */}
              </div>
            </div>
          </li>
        </ul>


      </div>




    </>
  )
}



export default CourseList