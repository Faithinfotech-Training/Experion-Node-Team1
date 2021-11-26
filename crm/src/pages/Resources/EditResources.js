import {useState,useEffect} from 'react';
import axios from 'axios';
import{useParams} from "react-router-dom";




function EditResource(){
    const {id} = useParams()

    return(
        <>
        <MyForm id={id}/>
        </>
    );
}

function MyForm(props){

    const[inputs,setInputs] = useState({}); 

    useEffect(()=>{
        
        axios
        .get(`http://localhost:3002/resource/${props.id}`)
        .then(
            response =>{
                console.log('promise fullfilled')
                console.log(response)
                setInputs(response.data)
            }
        )
        
    },[])

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
            .put(`http://localhost:3002/resource/${props.id}`,inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert("The resource details are updated")
            })
        }
    return(
        <>
        <h1 className="centerfooter">Update Resource</h1>
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





export default EditResource;