import {useState} from 'react';
import axios from 'axios';
import './styles/forms.css';


function Enquiry(){
    return(
    <>
    <div>
        <h1 className="centerfooter">Enquiry Page</h1>
        <h4 className="centerfooter">Welcome to Enquiry Page. Please put any questions in the text box</h4>
        <EnquiryBox/>
    </div>
      </>
  
    )
  }
  
  function EnquiryBox(){

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
            .post('http://localhost:3001/enquiry',inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert('Your query has been submitted')
                window.location='/'
            })
        }
    return(
        <>
        <h1 className="head"></h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            <div >
            <label className="element">Enter Email ID:</label>
            <br></br>
            <input className="element" type="email" name="email_id"
            value={inputs.email_id || ""}
            onChange={handleChange}
            required/>
            </div>

            <div >
            <label className="element">Enter Name:</label>
            <br></br>
            <input className="element" type="text" name="name"
            value={inputs.name || ""}
            onChange={handleChange}
            required/>
            </div>

            <div >
            <label className="element">Status:</label>
            <br></br>
            <input className="element" type="text" name="status"
            value={inputs.status || ""}
            onChange={handleChange}
            required/>
            </div>

            

             <div>
            <label className="element">Please Enter you Query:</label>
            <br></br>
            <input className="element" type="text" name="enquiry"
            value={inputs.enquiry || ""}
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
  
  
  export default Enquiry