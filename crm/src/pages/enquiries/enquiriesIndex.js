import {useState} from 'react';
import axios from 'axios';
import '../styles/forms.css'
import '../styles/add.css'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()







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
    // var myToken = localStorage.getItem("mytoken")
    const[inputs,setInputs] = useState({})
    const navigate = useNavigate()

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}))
    }
        function handleSubmit(event){
            event.preventDefault();
            console.log(inputs);
            //send info to 
            let endpoints = [
                'http://localhost:4500/enquiries'
              ];
              
              axios.all(endpoints.map((endpoint) => axios.post(endpoint,inputs))).then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                toast.success('Enquiry submitted successfully',{
                 
                  position: toast.POSITION.TOP_CENTER, width:100,autoClose:2000})
                  setTimeout(() => {
                      navigate("/")
                    }, 2000);
            })
        }   
    return(
        <>
        <section className="h-70 h-custom" style={{ backgroundImage:"url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm255-sasi-27.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=caf23f3151f601f02b7d6ef2517aece4)" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-10 col-md-6">
        <div className="card rounded-3">
          <img
            src="https://tatabluescopesteel.com/wp-content/uploads/2018/02/enquiry-banner.jpg"height="500px" width="100%"
            className="w-100"
            style={{
              borderTopLeftRadius: ".2rem",
              borderTopRightRadius: ".2rem",
          
            }}
            alt="Sample photo"
          />
        <div className="card-body p-4 p-md-4">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-5">
              Add Enquiry
            </h3>
        <form className="px-md-2" onSubmit={handleSubmit}>
          <div className="row">
        <div className="col-md-6 mb-4">

            <label className="element">Email ID</label>
            <br/>
            <input className="element" type="email" name="Email_id"
            className="form-control"

            value={inputs.Email_id || ""}
            onChange={handleChange}
            required/>
            </div>

             <div  className="col-md-6 mb-4">
            <label className="element"> Name </label>
            <br></br>
            <input className="element" type="text" name="Name"  className="form-control"

            value={inputs.Name || ""}
            onChange={handleChange}
            required/>
            </div> 
            </div>
            
            <div className="row">

            <div className="col-md-6 mb-4">
            <label className="element">Date of Birth</label>
            <br></br>
            <input className="element" type="date" name="dob"
            className="form-control"
            value={inputs.dob || ""}
            onChange={handleChange}
            required/>
            </div>

            
            

            <div className="col-md-6 mb-4">
            <label className="element">Mobile Number</label>
            <br></br>
            <input className="element" type="number" name="mobile_number"
            className="form-control"
            value={inputs.mobile_number || ""}
            onChange={handleChange}
            required/>
            </div>
             </div>
             
             <div className="row">

            <div className="col-md-6 mb-4">
            <label className="element">Address</label>
            <br></br>
            <input className="element" type="text" name="Address"
            className="form-control"
            value={inputs.Address || ""}
            onChange={handleChange}
            required/>
            </div>

            <div className="col-md-6 mb-4">

            <label className="element">Qualification</label>
            <br></br>
            <input className="element" type="text" name="HighestQualification"
            className="form-control"
            value={inputs.HighestQualification|| ""}
            onChange={handleChange}
            required/>
            </div>
            </div>
            
            <div className="row">
            <div className="col-md-6 mb-4">

            <label className="element">Percentage of Marks</label>
            <br></br>
            <input className="element" type="number" name="PercentageOfMarks"
            className="form-control"
            value={inputs.PercentageOfMarks || ""}
            onChange={handleChange}
            required/>
            </div>

            <div className="col-md-6 mb-4">

            <label className="element">Year of Passout</label>
            <br></br>
            <input className="element" type="number" name="YearOfPassout"
            className="form-control"
            value={inputs.YearOfPassout || ""}
            onChange={handleChange}
            required/>
            </div>
            </div>
            
            <div className="row">
            <div className="col-md-6 mb-4">

            <label className="element">Course</label>
            <br></br>
            <input className="element" type="text" name="Course_Name"
            className="form-control"
            value={inputs.Course_Name || ""}
            onChange={handleChange}
            required/>
            {/* <select className="element" type="text" name="Course_Name"
            className="form-control"
            value={inputs.Course_Name || ""}
            onChange={handleChange}
            required>
                 <option className="element" type="text" value="Python">Python</option>
                <option className="element" type="text" value="Signals And Systems">Signals And Systems</option>
                <option className="element" type="text" value="Web Development">Web Development</option>
            </select> */}
            </div>

            <div className="col-md-6 mb-4">

            <label className="element">Date</label>
            <br></br>
            <input className="element" type="date" name="EnquiryDate"
            className="form-control"
            value={inputs.EnquiryDate || ""}
            onChange={handleChange}
            required/>
            </div>
            </div>

            <div className="row">

            <div className="col-md-6 mb-4">
            <label className="element">Enter the Enquiry</label>
            <br></br>
            <input className="element" type="text" name="Enquiry"
            className="form-control"
            value={inputs.Enquiry || ""}
            onChange={handleChange}
            required/>
            </div>

            </div>
            
            

            <div>
                <br></br>
            <input className="submit" type="submit"/>
           
            </div>
                  

        </form>
        </div>
        </div>
        </div>
        </div>

        </div>
        </section>
        </>
    )
}


//commenttt


export default Enquiry;