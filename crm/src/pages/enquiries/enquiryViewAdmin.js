
import {useState,useEffect} from 'react';
import axios from 'axios';
import{useParams,useNavigate} from "react-router-dom";

function ViewAdmin(){
    const {EnquiryId} = useParams()
 
    return(
        <>
        <MyForm EnquiryId={EnquiryId}/>
        </>
    );
}
 
function MyForm(props)
{

    const[inputs,setInputs] = useState({});
    var myToken = localStorage.getItem("mytoken")
    const navigate = useNavigate()

    useEffect(()=>{
       
        axios
        .get(`http://localhost:4500/enquiries/${props.EnquiryId}`)
        .then(
            function (response){
                // console.log('promise fullfilled')
                //console.log(response)
                //doaccess(response.data.Status);
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

            var data = JSON.stringify({
                
                "Current_Status": inputs.Current_Status
              });
              var config = {
                method: 'put',
                url: `http://localhost:4500/enquiries/${props.EnquiryId}`,
                headers: { 
                  'Authorization': `Bearer ${myToken} `, 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                navigate("/enquirylist")
              })
              .catch(function (error) {
                console.log(error);
                 navigate(`/queryreview/${props.EnquiryId}`)
              });
        }
    return(
        <>
        <h1 className="centerfooter">Resolution Status</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>
            

             <div>
            <label className="element">Please Enter Status:</label>
            <br></br>
            <select className="element" type="text" name="Current_Status"
            // value={inputs.Current_Status || ""}
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
            <input className="submit" type="submit" 
            />
            </div>
        </form>
        </div>
        </>
    )
}

export default ViewAdmin;
