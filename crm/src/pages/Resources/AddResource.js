import {useState} from 'react';
import axios from 'axios';
import '../styles/forms.css'
import { useNavigate } from 'react-router-dom';






function AddResource(){

    const navigate = useNavigate();
    const[inputs,setInputs] = useState({})

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}))
    }
        function handleSubmit(event){
           
            
            event.preventDefault();
            console.log(inputs);
            //send info to server
            axios
            .post('http://localhost:4500/resources',inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert('Resource Added')
                navigate('/resources');
               
            })
        }
    return(
        <>
        <h1 className="centerfooter">Add New Resource</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            <div >
            <label className="element">Resource Code:</label>
            <br></br>
            <input className="element" type="number" name="ResourceCode"
            value={inputs.ResourceCode || ""}
            onChange={handleChange}
            required/>
            </div>

             <div>
            <label className="element">Resource Name :</label>
            <br></br>
            <input className="element" type="text" name="ResourceName"
            value={inputs.ResourceName || ""}
            onChange={handleChange}
            required/>
            </div> 
            
            <div>
            <label className="element">Description:</label>
            <br></br>
            <input className="element" type="text" name="Description"
            value={inputs.Description || ""}
            onChange={handleChange}
            required/>
            </div>



            <div>
            <label className="element">Fee:</label>
            <br></br>
            <input className="element" type="text" name="Fees"
            value={inputs.Fees || ""}
            onChange={handleChange}
            required/>
            </div>

           {/* <div>
            <label className="element">Qualification:</label>
            <br></br>
            <input className="element" type="text" name="Qualification"
            value={inputs.Qualification || ""}
            onChange={handleChange}
            required/>
            </div> */}

            <div>
            <label className="element">Image URL:</label>
            <br></br>
            <input className="element" type="text" name="url"
            value={inputs.url || ""}
            onChange={handleChange}
            required/>
            </div>

            

            <div>
                <br></br>
            <input className="submit" type="submit"/>
           
            </div>
        </form>
        </div>
        </>
    )
}





export default AddResource;