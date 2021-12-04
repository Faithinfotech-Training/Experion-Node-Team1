
import {  useEffect, useState } from "react";
import axios from "axios";
import {Table} from "react-bootstrap"
import AdminResourceDisplay from "./adminResourceList";

function AdminResources(){

    var bullet={
        listStyle : "none"
    }
    const[resources,setStaffs] = useState([])

    let [user, setUser] = useState(false);

    const Users = () => {
        if (localStorage.getItem("role") === "User") {
            setUser(true);
        }
    };

    useEffect(()=>{
        Users();
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
          <h2 style={{marginTop:50}}><b>Resource Details</b></h2>
          <Table striped bordered hover variant ='black'>    
            
            <ul style={bullet}>
              {resources.map(resource=>
                <li key={resource.ResourceCode}>
                    <AdminResourceDisplay details ={resource}/>
                    </li>
                )}
            </ul>
            </Table>
          </div>
          </p>
      
  </div>
  </>

  )
}



export default AdminResources;
