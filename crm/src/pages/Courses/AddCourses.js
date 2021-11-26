import {useState} from 'react';
import axios from 'axios';
import '../styles/forms.css'






function AddCourses(){

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
            .post('http://localhost:3003/course',inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert('Course Added')
                window.location='/courses'
            })
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
            <input className="element" type="text" name="CourseModule"
            value={inputs.CourseModule || ""}
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
            <input className="element" type="number" name="Fee"
            value={inputs.Fee || ""}
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
                <br></br>
            <input className="submit" type="submit"/>
           
            </div>
        </form>
        </div>
        </>
    )
}





export default AddCourses;