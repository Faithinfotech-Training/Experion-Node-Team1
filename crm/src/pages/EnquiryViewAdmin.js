import {useState,useEffect} from 'react';
import axios from 'axios';
import{useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";




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
    const navigate = useNavigate();

    useEffect(()=>{
        
        axios
        .get(`http://localhost:3001/book/${props.id}`)
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
            })
        }
    return(
        <>
        <h1 className="centerfooter">Admin View</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            

            <div>
                <br></br>
            <button className="edit" onClick={()=>navigate(``)}>Resolve
          </button>
           
            </div>
        </form>
        </div>
        </>
    )
}





export default ViewAdmin;