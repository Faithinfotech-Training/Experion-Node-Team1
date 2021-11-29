
import {  useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import{useParams} from "react-router-dom";
import './styles/box.css';
import './styles/display.css';

function EnquiryDisplay(){
    const navigate = useNavigate();
    const[enq,setStaff] = useState([])

    const{id} = useParams()

    useEffect(()=>{
        
        axios
        .get(`http://localhost:3001/enquiry/${id}`)
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
          Enquiry  </h3>
          <div className="box1">
          <h4 className="color">Name : {enq.name}</h4>
          <h4 className="color">Email : {enq.email_id}</h4>
          <h4 className="color">Type: {enq.status}</h4>
          <h4 className="color">Enquiry: {enq.enquiry}</h4>
          <h4 className="color">Resolution Status: {enq.resolution}</h4>
          <div class="col col-3">
          <div className="butto">
          <button className="edit" onClick={()=>navigate(`/queryreview/${enq.id}`)}>Resolution Status
          </button>
           <br/><br/> 
            </div>
            </div>
          </div>
          <br/><br/>

          
      
  </div>

        </>
    )
}

export default EnquiryDisplay;