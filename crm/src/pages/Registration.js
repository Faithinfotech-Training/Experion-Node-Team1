import {useState} from 'react';
import axios from 'axios';
import '../RoutingAndForm/login.css'




function UserRegistration(){

    return(
        <>
        <Registration/>
        </>
    )
}

function Registration(){

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
            .post('http://localhost:3001/staff',inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                window.location='/'
            })
        }
    return(
        <>
        <h1 className="head">User Registration</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            <div >
            <label className="element">Enter your Email:</label>
            <br></br>
            <input className="element" type="email" name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            required/>
            </div>

             <div>
            <label className="element">Enter your Password:</label>
            <br></br>
            <input className="element" type="password" name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            required/>
            </div> 

            {/* <div>
            <label className="element">Confirm Password:</label>
            <br></br>
            <input className="element" type="password" name="pwdconfirm"
            value={inputs.pwdconfirm || ""}
            onChange={handleChange}/>
            </div>  */}
            
            
           

            <div>
                <br></br>
            <input className="submit" type="submit"/>
            </div>
        </form>
        </div>
        </>
    )
}





export default UserRegistration;