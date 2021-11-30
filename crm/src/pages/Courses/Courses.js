//comment
import {  useEffect, useState } from "react";
import axios from "axios";
import CourseList from "./CourseList";

function Courses(){


    const[courses,setStaffs] = useState([])

    

    useEffect(()=>{
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
              {courses.map(course=>
                <li key={course.CourseCode}>
                    <CourseList details ={course}/>
                    </li>
                )}
          </div>
          </p>
      
  </div>
  </>

  )
}



export default Courses;