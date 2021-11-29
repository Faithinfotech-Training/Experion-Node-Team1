import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';

function CourseDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[staff,setStaff] = useState([])

    const{CourseCode} = useParams()

    useEffect(()=>{
        
        axios
        .delete(`http://localhost:4500/courses/${CourseCode}`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert('Course Successfully Deleted')
                setStaff(response.data)
            }
        )
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Course Successfully Deleted</h1>

          <div >
          <button className="back"  onClick={()=>navigate("/courses")}>Back to Course List
          </button></div>
         
          
      
  </div>
  </>

  )
}



export default CourseDelete;