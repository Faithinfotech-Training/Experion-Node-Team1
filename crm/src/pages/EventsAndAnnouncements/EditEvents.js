import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";




function EditEvent() {
    const { EventCode } = useParams()

    return (
        <>
            <MyForm EventCode={EventCode} />
        </>
    );
}

function MyForm(props) {

    const [inputs, setInputs] = useState({});

    useEffect(() => {

        axios
            .get(`http://localhost:4500/events/${props.EventCode}`)
            .then(
                response => {
                    console.log('promise fullfilled')
                    console.log(response)
                    setInputs(response.data)
                }
            )

    }, [])

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
            .put(`http://localhost:4500/events/${props.EventCode}`, inputs)
            .then(response => {
                console.log('promise fullfilled')
                console.log(response)
                alert("The course details are updated")
            })
    }
    return (
        <>
            <h1 className="centerfooter">Update Course</h1>
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





export default EditEvent;