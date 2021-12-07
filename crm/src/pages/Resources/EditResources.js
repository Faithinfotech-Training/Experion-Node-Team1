import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/forms.css'
import '../styles/add.css'

import { useNavigate, useParams } from 'react-router-dom';
// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function EditResource() {
    const { ResourceCode } = useParams()

    return (
        <>
            <MyForm ResourceCode={ResourceCode} />
        </>
    );
}
function MyForm(props) {
    var myToken = localStorage.getItem("mytoken")
    const [inputs, setInputs] = useState({})
    const navigate = useNavigate()
    useEffect(() => {

        axios
            .get(`http://localhost:4500/resources/${props.ResourceCode}`)
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
        var data = JSON.stringify({
            "ResourceName": inputs.ResourceName,
            "Description": inputs.Description,
            "Fees": inputs.Fees,
            "url": inputs.url
        });
        var config = {
            method: 'put',
            url: `http://localhost:4500/resources/${props.ResourceCode}`,
            headers: {
                'Authorization': `Bearer ${myToken} `,
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                toast.success('Resource edited successfully',{
                 
                    position: toast.POSITION.TOP_CENTER, width:100,autoClose:2000})
                    setTimeout(() => {
                        
                        navigate("/adminresource")
                      }, 2000);
                
            })
            .catch(function (error) {
                console.log(error);
                navigate(`/editresources/${props.ResourceCode}`)
            });
    }
    return (
        <>
            <section className="h-70 h-custom" style={{ backgroundImage: "url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm255-sasi-27.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=caf23f3151f601f02b7d6ef2517aece4)" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-10 col-md-6">
                            <div className="card rounded-3">
                                <img
                                    src="https://www.onlinecoursereport.com/wp-content/uploads/2020/04/EDU-CourseReport-30BestOnlineCoursesforTeachers-3-LeadingEducationalInnovationandImprovement-1280x707.jpg" height="400px" width="80%"
                                    className="w-100"
                                    style={{
                                        borderTopLeftRadius: ".2rem",
                                        borderTopRightRadius: ".2rem",

                                    }}
                                    alt="Sample photo"
                                />
                                <div className="card-body p-4 p-md-4">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-5">
                                        Edit Resource
                                    </h3>
                                    <form className="px-md-2" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <label className="element">Resource Code</label>
                                                <br />
                                                <input className="element" type="text" name="ResourceCode"
                                                    className="form-control"

                                                    value={inputs.ResourceCode || ""}
                                                    onChange={handleChange}
                                                    required />
                                            </div>

                                            <div className="col-md-6 mb-4">
                                                <label className="element">Resource Name </label>
                                                <br></br>
                                                <input className="element" type="text" name="ResourceName" className="form-control"

                                                    value={inputs.ResourceName || ""}
                                                    onChange={handleChange}
                                                    required />
                                            </div>
                                        </div>

                                        <div className="row">

                                            <div className="col-md-6 mb-4">
                                                <label className="element">Description</label>
                                                <br></br>
                                                <input className="element" type="text" name="Description"
                                                    className="form-control"
                                                    value={inputs.Description || ""}
                                                    onChange={handleChange}
                                                    required />
                                            </div>




                                            <div className="col-md-6 mb-4">
                                                <label className="element">Fees</label>
                                                <br></br>
                                                <input className="element" type="text" name="Fees"
                                                    className="form-control"
                                                    value={inputs.Fees || ""}
                                                    onChange={handleChange}
                                                    required />
                                            </div>
                                        </div>

                                        <div className="row">



                                            <div className=" mb-4">

                                                <label className="element">Image url</label>
                                                <br></br>
                                                <input className="element" type="text" name="url"
                                                    className="form-control"
                                                    value={inputs.url || ""}
                                                    onChange={handleChange}
                                                    required />
                                            </div>
                                        </div>

                                        <div>
                                            <br></br>
                                            <input className="submit" type="submit" />

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


export default EditResource;
