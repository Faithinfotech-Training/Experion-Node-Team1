import {useState,useEffect} from 'react';
import axios from 'axios';
import{useParams,useNavigate} from "react-router-dom";




function EditResource(){
    const {ResourceCode} = useParams()

    return(
        <>
        <MyForm ResourceCode={ResourceCode}/>
        </>
    );
}

function MyForm(props){

    const[inputs,setInputs] = useState({}); 
    var myToken = localStorage.getItem("mytoken")
    const navigate = useNavigate()
    useEffect(()=>{
        
        axios
        .get(`http://localhost:4500/resources/${props.ResourceCode}`)
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
            var data = JSON.stringify({
                "ResourceName": inputs.ResourceName,
                "Description": inputs.Description,
                "Duration": inputs.Duration,
                "Fees": inputs.Fees,
                "ResourceModules": inputs.ResourceModules,
                "url": inputs.url
              });
              var config = {
                method: 'put',
                url: `http://localhost:4500/resources/${props.ResourceCode}`,
                headers: { 
                  'Authorization': `Bearer ${myToken} `, 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                navigate("/adminresource")
              })
              .catch(function (error) {
                console.log(error);
                 navigate(`/editresource/${props.ResourceCode}`)
              });
            // if (window.confirm("Do you want to save changes?")) {
            // axios
            // .put(`http://localhost:4500/resources/${props.ResourceCode}`,inputs)
            // .then(response =>{
            //     console.log('promise fullfilled')
            //     console.log(response)
            //     alert("The resource details are updated")
            // })}
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
            </div>  */}

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





export default EditResource;


//comment
