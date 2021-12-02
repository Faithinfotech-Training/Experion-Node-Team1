import {useState,useEffect} from 'react';
import axios from 'axios';
import{useParams} from "react-router-dom";
import { useNavigate } from 'react-router';

function ResViewAdmin(){
    const {rEnquiryId} = useParams()
 
    return(
        <>
        <MyForm rEnquiryId={rEnquiryId}/>
        </>
    );
}
 
function MyForm(props)
{

    const[inputs,setInputs] = useState({});
    const navigate = useNavigate()

    useEffect(()=>{
       
        axios
        .get(`http://localhost:4500/resenquiries/${props.rEnquiryId}`)
        .then(
            function (response){
                // console.log('promise fullfilled')
                //console.log(response)
                // doaccess(response.data.Status);
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
            .put(`http://localhost:4500/resenquiries/${props.rEnquiryId}`,inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert("The resolution status is updated")
                // window.location='/enquirylist';
                navigate('/resenquirylist')
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
            <select className="element" type="text" name="rStatus"
            value={inputs.rStatus || ""}
            onChange={handleChange}
            required>
                <option className="element" type="text" value="Available">Available</option>
                <option className="element" type="text" value="Not Available">Not Available</option>
                
            </select>
            <br></br>
            </div>  
            <div>
                <br></br>
            <input className="submit" type="submit" 
            />
            </div>
        </form>
        </div>
        </>
    )
}

export default ResViewAdmin;
