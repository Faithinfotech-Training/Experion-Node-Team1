
import {  useEffect, useState } from "react";
import axios from "axios";
// import ResourceDisplay from "./resourceDetails";
import ResourceList from "./resourceList";
//import ResourceDisplay from "./ResourceDetails";
// import ResourceList from "./ResourceList";


function handleHomeChange(props){
    axios
    .put(`http://localhost:4500/pagevisits/${props}`)
    .then(response =>{
        console.log('promise fullfilled')
        console.log(response)
      
        // window.location='/enquirylist';
    })
  }
function Resources(){


    const[resources,setStaffs] = useState([])

    

    useEffect(()=>{
        {handleHomeChange(3)}
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



export default Resources;