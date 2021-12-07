
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Table, Button } from "react-bootstrap"
import AdminResourceDisplay from "./adminResourceList";
import AddIcon from "@material-ui/icons/Add";


function AdminResources() {
    const navigate = useNavigate();

    var bullet = {
        listStyle: "none"
    }
    const [resources, setStaffs] = useState([])

    let [admin, setAdmin] = useState(false);

    const Users = () => {
        if (localStorage.getItem("role") === "admin" || "Admin") {
            setAdmin(true);
        }
    };

    useEffect(() => {
        Users();
        axios
            .get('http://localhost:4500/resources')
            .then(
                response => {
                    console.log('promise fullfilled')
                    console.log(response)
                    setStaffs(response.data)
                }
            )

    }, [])

    return (
        <>
            <div>
                <br />
                <h1 className="centerfooter">
                    Resource Details</h1>
                <br />
                <p>
                    <div>
                        {admin &&
                            <Button style={{ marginLeft: 1230, marginBottom: 20 }} type='button' onClick={() => navigate(`/addresource`)}>{<AddIcon />}Add Resource</Button>}
                        <Table striped bordered hover variant='black'>

                            <ul style={bullet}>
                                {resources.map(resource =>
                                    <li key={resource.ResourceCode}>
                                        <AdminResourceDisplay details={resource} />
                                    </li>
                                )}
                            </ul>
                        </Table>
                    </div>
                </p>

            </div>
        </>

    )
}



export default AdminResources;
