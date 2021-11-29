
import { useState} from "react";
import axios from "axios";


function Login(){
 localStorage.clear();  
    return(<>
    <h1>Please Login</h1>
    <MyForm/>
    </>);
    }
    function MyForm(props){
    var header={
        width:"20%",
        borderRadius:"8px",
        borderStyle:"none",
        backgroundColor:"FLORALWHITE",
    
        
    }

    var submit={
        backgroundColor:"dodgerblue",
        width:"10%",
    }
    var cancel={
        backgroundColor:"red",
        width:"10%",
        float:"left",
        marginRight:"5px",
    }
    

    var div={
        width:"100%",
        border:"4px solid #FAEBD7",
        padding:"20px",
        boxShadow: "5px 10px 8px #888888",
        fontWeight:"bold",
        color:"black",
      
      }
  const [inputs, setInputs] = useState({});

    


  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values =>({...values, [name]: value}))
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(inputs);

    axios
        .post('/login',inputs)
        .then(response=>{
         alert(response.data.accessToken)
            localStorage.setItem('mytoken',response.data.accessToken);
              window.location='/EnquiryList'
              
        })
        .catch(error=>{
          localStorage.clear();
          if(error.response){
            alert(error.response.data);
            window.location='/register'
          }
        })
      }


   
  return(<div style={div}>

     
    <form onSubmit = {handleSubmit}>
      
      
       <div>
      <label>Email: </label><br/>
      <input style={header}type="email" name="email"placeholder="enter your email" onChange={handleChange} value={inputs.email || ""}/>
      </div><br/>

      <div>
      <label>Password: </label><br/>
      <input style={header}type="password" name="password" placeholder="enter the password" onChange={handleChange} value={inputs.password || ""}/>
      </div><br/>

      <div>
      <label>User Type: </label><br/>
      <input style={header}type="text" name="usertype" placeholder="enter the user type" onChange={handleChange} value={inputs.usertype || ""}/>
      </div><br/>

      <div>
      <label>Pin: </label><br/>
      <input style={header}type="number" name="pin" placeholder="enter the pin" onChange={handleChange} value={inputs.pin || ""}/>
      </div><br/>

      
      <div>
      <input style={submit} type="submit" value="login"/>
      

      
      <input style={cancel}type="reset" value="Cancel"/>
      </div>

    </form> 
    </div>
  )
}
      
    
  
export default Login;






