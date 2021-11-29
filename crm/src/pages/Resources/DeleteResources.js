import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/display.css';

function ResourceDelete(){

    //initialize use case to empty
    const navigate = useNavigate();
    const[staff,setStaff] = useState([])

    const{ResourceCode} = useParams()

    useEffect(()=>{
        
        axios
        .delete(`http://localhost:4500/resources/${ResourceCode}`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
               
                setStaff(response.data)
                alert('Resource Successfully Deleted')
            }
        )
        
    },[])

  return(
  <>
  <div>
      <h1 className="centerfooter">
          Resource Successfully Deleted</h1>

          <div >
          <button className="back"  onClick={()=>navigate("/resources")}>Back to Resource List
          </button></div>
         
          
      
  </div>
  </>

  )
}



export default ResourceDelete;