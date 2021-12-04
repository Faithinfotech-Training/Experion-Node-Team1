

import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/box.css';
import '../styles/display.css';

function CourseDisplay(){
    const navigate = useNavigate();
    const[enq,setStaff] = useState([])

    const{CourseCode} = useParams()

    useEffect(()=>{
        
        axios
        .get(`http://localhost:4500/courses/${CourseCode}`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setStaff(response.data)
            }
        )
        
    },[])
    return(
        <>

            <div >
            <h3 className="centerfooter">
          Course Details  </h3>
          <div className="box1">
          <h4 className="color">Name : {enq.CourseName}</h4>
          <h4 className="color">Description : {enq.Description}</h4>
          <h4 className="color">Duration: {enq.Duration}</h4>
          {/* <h4 className="color">Course Module: {enq.CourseModules}</h4> */}
          <h4 className="color">Fee: {enq.Fees}</h4>
          <h4 className="color">Qualification: {enq.Qualification}</h4>
          <div class="col col-3">
          <div className="butto">
          <button className="edit" onClick={()=>navigate(`/courses`)}> Back
          </button>
           <br/>   
                 
           <button className="edit" onClick={()=>navigate(`/enquiry`)}> Edit
          </button> 
          {/*
          {localStorage.getItem('mytoken')&&
          <button className="edit" onClick={()=>navigate(`/deletecourses/${enq.CourseCode}`)}> Delete
          </button> } */}
            </div>
            </div>
          </div>
          <br/><br/>

          
      
  </div>

        </>
    )
}

export default CourseDisplay;