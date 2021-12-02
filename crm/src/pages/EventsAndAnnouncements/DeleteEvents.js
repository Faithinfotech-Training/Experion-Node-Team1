import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';

function EventDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[staff,setStaff] = useState([])

    const{EventCode} = useParams()

    useEffect(()=>{
        
        axios
        .delete(`http://localhost:4500/events/${EventCode}`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert('Event Successfully Deleted')
                setStaff(response.data)
            }
        )
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Event Successfully Deleted</h1>

          <div >
          <button className="back"  onClick={()=>navigate("/events")}>Back to Event List
          </button></div>
         
          
      
  </div>
  </>

  )
}



export default EventDelete;