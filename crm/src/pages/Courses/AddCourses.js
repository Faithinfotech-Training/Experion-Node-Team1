import {useState} from 'react';
import axios from 'axios';
import '../styles/forms.css'
import { useNavigate } from 'react-router-dom';







function AddCourses(){
    var myToken = localStorage.getItem("mytoken")
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
            //send info to server
            var data = JSON.stringify({
                "CourseName": inputs.CourseName,
                "Description": inputs.Description,
                "Duration": inputs.Duration,
                "Fees": inputs.Fees,
                "Qualification": inputs.Qualification,
                "CourseModules": inputs.CourseModules,
                "url": inputs.url
              });

              var config = {
                method: 'post',
                url: `http://localhost:4500/courses`,
                headers: { 
                  'Authorization': `Bearer ${myToken} `, 
                  'Content-Type': 'application/json'
                },
                data : data
              };
              
              axios(config)
              .then(function (response) {
                console.log(JSON.stringify(response.data));
                navigate("/admincourse")
              })
              .catch(function (error) {
                console.log(error);
                 navigate(`/addcourse`)
              });

            // axios
            // .post('http://localhost:4500/courses',inputs)
            // .then(response =>{
            //     console.log('promise fullfilled')
            //     console.log(response)
            //     alert('Course Added')
            //     window.location='/courses'
            // })
        }
    return(
        <>
        <h1 className="centerfooter">Add New Courses</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            <div >
            <label className="element">Course Code:</label>
            <br></br>
            <input className="element" type="text" name="CourseCode"
            value={inputs.CourseCode || ""}
            onChange={handleChange}
            required/>
            </div>

             <div>
            <label className="element">Course Name :</label>
            <br></br>
            <input className="element" type="text" name="CourseName"
            value={inputs.CourseName || ""}
            onChange={handleChange}
            required/>
            </div> 

            
            
            <div>
            <label className="element">Course Module:</label>
            <br></br>
            <input className="element" type="text" name="CourseModules"
            value={inputs.CourseModules || ""}
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
            <label className="element">Duration:</label>
            <br></br>
            <input className="element" type="text" name="Duration"
            value={inputs.Duration || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Fee:</label>
            <br></br>
            <input className="element" type="number" name="Fees"
            value={inputs.Fees || ""}
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


//commenttt


export default AddCourses;