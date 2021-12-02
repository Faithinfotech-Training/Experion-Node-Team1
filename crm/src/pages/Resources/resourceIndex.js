
import {  useEffect, useState } from "react";
import axios from "axios";
import ResourceDisplay from "./resourceDetails";
import ResourceList from "./resourceList";

function EnquiryList(){


    const[resources,setStaffs] = useState([])

    

    useEffect(()=>{
        axios
        .get('http://localhost:4500/resources')
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
          Resource List</h1>
          <p>
          <div>
              {resources.map(resource=>
                <li key={resource.id}>
                    <ResourceList details ={resource}/>
                    </li>
                )}
          </div>
          </p>
      
  </div>
  </>

  )
}



export default EnquiryList;