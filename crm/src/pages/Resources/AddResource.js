import {useState} from 'react';
import axios from 'axios';
import './styles/forms.css'






function AddResource(){

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
            .post('http://localhost:3001/book',inputs)
            .then(response =>{
                console.log('promise fullfilled')
                console.log(response)
                window.location='/visit'
            })
        }
    return(
        <>
        <h1 className="centerfooter">Add New Book</h1>
        <div className="centers">
        <form className="formContent" onSubmit={handleSubmit}>

            <div >
            <label className="element">Book Name:</label>
            <br></br>
            <input className="element" type="text" name="title"
            value={inputs.title || ""}
            onChange={handleChange}
            required/>
            </div>

             <div>
            <label className="element">ISBN :</label>
            <br></br>
            <input className="element" type="number" name="isbn"
            value={inputs.isbn || ""}
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
            <label className="element">Author:</label>
            <br></br>
            <input className="element" type="text" name="author"
            value={inputs.author || ""}
            onChange={handleChange}
            required/>
            </div>



            <div>
            <label className="element">Publisher:</label>
            <br></br>
            <input className="element" type="text" name="publisher"
            value={inputs.publisher || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Rating:</label>
            <br></br>
            <input className="element" type="number" name="rating"
            value={inputs.rating || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">URL of book image:</label>
            <br></br>
            <input className="element" type="text" name="url"
            value={inputs.url || ""}
            onChange={handleChange}
            required/>
            </div>

            <div>
            <label className="element">Date of Publish:</label>
            <br></br>
            <input className="element" type="text"
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}
             name="publish_date"
            value={inputs.publish_date || ""}
            onChange={handleChange}/>
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





export default AddResource;