import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';

function CourseDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    
    var myToken = localStorage.getItem("mytoken")
    const[staff,setStaff] = useState([])


    const{CourseCode} = useParams()

    useEffect(()=>{
        
        var config = {
            method: 'delete',
            url: `http://localhost:4500/courses/${CourseCode}`,
            headers: { 
              'Authorization': `Bearer ${myToken} `, 
              'Content-Type': 'application/json'
            }
           
            
          };
          
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert('Course Deleted Successfully')
            
//    navigate('/admincourse')
          })
          .catch(function (error) {
            console.log(error);
            alert('Try Again!')
            navigate('/addcourse')
          });
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Course Successfully Deleted</h1>

          <div >
          <button className="back"  onClick={()=>navigate("/admincourse")}>Back to Course List
          </button></div>
         
          
      
  </div>
  </>

  )
}



export default CourseDelete;