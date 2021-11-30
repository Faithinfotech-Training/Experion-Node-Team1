import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import '../styles/box.css';
import '../styles/display.css';

function ResourceDisplay(){
  const navigate = useNavigate();
  const[enq,setStaff] = useState([])

  const{ResourceCode} = useParams()

  useEffect(()=>{
      
      axios
      .get(`http://localhost:4500/resources/${ResourceCode}`)
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
        Resource  </h3>
        <div className="box1">
        <h4 className="color">Resource Name : {enq.ResourceName}</h4>
        <h4 className="color">Description : {enq.Description}</h4>
        <h4 className="color">Fees: {enq.Fees}</h4>
        <h4 className="color">Resource Modules: {enq.ResourceModules}</h4>
        {/* <h4 className="color">Resolution Status: {enq.resolution}</h4> */}
        
          <div class="col col-3">
          <div className="butto">
          <button className="edit" onClick={()=>navigate(`/`)}> Home
          </button>
           <br/>
           <button className="edit" onClick={()=>navigate(`/editresources/${enq.ResourceCode}`)}> Edit
          </button>
          <button className="edit" onClick={()=>navigate(`/deleteresources/${enq.ResourceCode}`)}> Delete
          </button> 
            </div>
            </div>
          </div>
          <br/><br/>

          
      
  </div>

        </>
    )
}

export default ResourceDisplay;