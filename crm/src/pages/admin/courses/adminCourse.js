
import {  useEffect, useState } from "react";
import axios from "axios";
// import CourseList from "./CourseList";
// import CourseDisplay from "./CourseDetails";
import {Table} from "react-bootstrap"
import AdminDisplay from "./adminCourselist";

function AdminCourses(){

    var bullet={
        listStyle : "none"
    }
    const[courses,setStaffs] = useState([])

    let [user, setUser] = useState(false);

    const Users = () => {
        if (localStorage.getItem("role") === "User") {
            setUser(true);
        }
    };
    // let inc = 0;
    // const updateVisitCount = (CourseCode) => {
    //     axios.get(`http://localhost:4500/courses/${CourseCode}`).then((res) => {
    //         //   setCounter(response.data.visit + 1);
    //         console.log('initial visit', res.data.visit);
    //         let x = res.data.visit + 1;
    //         axios
    //             .put(`http://localhost:4500/courses/${CourseCode}`, { visit: x })
    //             .then((response) => {
    //                 console.log('Updated count', inc);
    //             });
    //     });
    // };

    useEffect(()=>{
        Users();
        axios
        .get('http://localhost:4500/courses')
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setStaffs(response.data)
            }
        )
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Course List</h1>
          <p>
          <div>
          <h2 style={{marginTop:50}}><b>Course Details</b></h2>
          <Table striped bordered hover variant ='black'>    
            
            <ul style={bullet}>
              {courses.map(course=>

                <li key={course.CourseCode}>
                    <AdminDisplay details ={course}/>
                    </li>
                )}
                
            </ul>
            </Table>
          </div>
          </p>
      
  </div>
  </>

  )
}



export default AdminCourses;
