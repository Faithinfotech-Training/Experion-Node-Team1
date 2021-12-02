import {useState,useEffect} from 'react';
import axios from 'axios';
import{useParams} from "react-router-dom";




function EditCourse(){
    const {CourseCode} = useParams()

    return(
        <>
        <MyForm CourseCode={CourseCode}/>
        </>
    );
}

function MyForm(props){

    const[inputs,setInputs] = useState({}); 

    useEffect(()=>{
        
        axios
        .get(`http://localhost:4500/courses/${props.CourseCode}`)
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
          

           

             
           


            if (window.confirm("Do you want to save changes?")) {

            axios
            .put(`http://localhost:4500/courses/${props.CourseCode}`,inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                alert("The course details are updated")
            })}
            // else{
            //     window.location=`/editcourses/${props.CourseCode}`
            // }
        }
    return(
        <>
        <h1 className="centerfooter">Update Course</h1>
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





export default EditCourse;