import {  useEffect, useState } from "react";
import axios from "axios";
import EventList from "./EventList";


function Events(){


    const[courses,setStaffs] = useState([])

    

    useEffect(()=>{
        axios
        .get('http://localhost:4500/events')
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
          Event List</h1>
          <p>
          <div>
              {courses.map(course=>
                <li key={course.CourseCode}>
                    <EventList details ={course}/>
                    </li>
                )}
          </div>
          </p>
      
  </div>
  </>

  )
}



export default Events;