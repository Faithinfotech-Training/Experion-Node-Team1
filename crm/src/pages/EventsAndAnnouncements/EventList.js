import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/display.css';

function EventList(props) {
    const navigate = useNavigate();
    console.log(props)
    return (
        <>
            <div class="container">

                <ul class="responsive-table">
                    <li class="table-header">
                        <div class="col col-1"> </div>
                        <div class="col col-2"><h3>Event {props.details.EventCode}:  {props.details.eventDescription}</h3></div>
                        <div class="col col-3">
                            <div className="butto">
                                <button className="edit" onClick={() => navigate(`/editevents/${props.details.EventCode}`)}>Edit
                                </button>
                                <br /><br />
                                <button className="delete" onClick={() => navigate(`/deleteevents/${props.details.EventCode}`)}>Delete
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>


            </div>




        </>
    )
}



export default EventList