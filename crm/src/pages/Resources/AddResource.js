import {useState} from 'react';
import axios from 'axios';
import '../styles/forms.css'






function AddResource(){

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
            .post('http://localhost:3002/resource',inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert('Resource Added')
                window.location='/resources'
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
            <input className="element" type="text" name="Fee"
            value={inputs.Fee || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Qualification:</label>
            <br></br>
            <input className="element" type="text" name="Qualification"
            value={inputs.Qualification || ""}
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