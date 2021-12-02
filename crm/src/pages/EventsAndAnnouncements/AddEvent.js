import { useState } from 'react';
import axios from 'axios';
import '../styles/forms.css'


function AddEvent() {

    const [inputs, setInputs] = useState({})

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({ ...values, [name]: value }))
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log(inputs);
        //send info to server
        axios
            .post('http://localhost:4500/events', inputs)
            .then(response => {
                console.log('promise fullfilled')
                console.log(response)
                alert('Event Added')
                window.location = '/events'
            })
    }
    return (
        <>
            <h1 className="centerfooter">Add New Events</h1>
            <div className="centers">
                <form className="formContent" onSubmit={handleSubmit}>

                    <div >
                        <label className="element">Event Code:</label>
                        <br></br>
                        <input className="element" type="text" name="EventCode"
                            value={inputs.EventCode || ""}
                            onChange={handleChange}
                            required />
                    </div>

                    <div>
                        <label className="element">Event Description :</label>
                        <br></br>
                        <input className="element" type="text" name="eventDescription"
                            value={inputs.eventDescription || ""}
                            onChange={handleChange}
                            required />
                    </div>



                    <div>
                        <br></br>
                        <input className="submit" type="submit" />

                    </div>
                </form>
            </div>
        </>
    )
}


//commenttt


export default AddEvent;