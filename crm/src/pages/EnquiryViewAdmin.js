import {useState,useEffect} from 'react';
import axios from 'axios';
import{useParams} from "react-router-dom";





function ViewAdmin(){
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
        .get(`http://localhost:3001/enquiry/${props.id}`)
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
            .put(`http://localhost:3001/enquiry/${props.id}`,inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert("The resolution status is updated")
                window.location='/enquirylist';
            })
        }
    return(
        <>
        <h1 className="centerfooter">Resolution Status</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            

            

             <div>
            <label className="element">Please Enter Status:</label>
            <br></br>
            <select className="element" type="text" name="resolution"
            value={inputs.resolution || ""}
            onChange={handleChange}
            required>
                <option className="element" type="text" value="Accepted">Accepted</option>
                <option className="element" type="text" value="Interested">Interested</option>
                <option className="element" type="text" value="Selected">Selected</option>
                <option className="element" type="text" value="Admitted">Admitted</option>
                <option className="element" type="text" value="Pending">Pending</option>
            </select>
            <br></br>

            
             
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





export default ViewAdmin;