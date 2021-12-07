import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/forms.css'
import '../styles/add.css'
// Importing toastify module
import { toast } from 'react-toastify';
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
toast.configure()


function AddCourses() {

  var myToken = localStorage.getItem("mytoken")
  const [inputs, setInputs] = useState({})
  const navigate = useNavigate()

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
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success('Course added successfully', {

          position: toast.POSITION.TOP_CENTER, autoClose: 2000
        })
        setTimeout(() => {
          navigate("/admincourse")
        }, 2000);

        // navigate("/admincourse")
      })
      .catch(function (error) {
        console.log(error);
        navigate(`/addcourse`)
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
                  src="https://voone-actu.com/wp-content/uploads/2021/08/Brainstorming-en-entreprise-scaled.jpg" height="500px" width="100%"
                  className="w-100"
                  style={{
                    borderTopLeftRadius: ".2rem",
                    borderTopRightRadius: ".2rem",

                  }}
                  alt="Sample photo"
                />
                <div className="card-body p-4 p-md-4">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-5">
                    Add Courses
                  </h3>
                  <form className="px-md-2" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <label className="element">Course Code</label>
                        <br />
                        <input className="element" type="text" name="CourseCode"
                          className="form-control"

                          value={inputs.CourseCode || ""}
                          onChange={handleChange}
                          required />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="element">Course Name </label>
                        <br></br>
                        <input className="element" type="text" name="CourseName" className="form-control"

                          value={inputs.CourseName || ""}
                          onChange={handleChange}
                          required />
                      </div>
                    </div>

                    <div className="row">

                      <div className="col-md-6 mb-4">
                        <label className="element">Course Module</label>
                        <br></br>
                        <input className="element" type="text" name="CourseModules"
                          className="form-control"
                          value={inputs.CourseModules || ""}
                          onChange={handleChange}
                          required />
                      </div>




                      <div className="col-md-6 mb-4">
                        <label className="element">Description</label>
                        <br></br>
                        <input className="element" type="text" name="Description"
                          className="form-control"
                          value={inputs.Description || ""}
                          onChange={handleChange}
                          required />
                      </div>
                    </div>

                    <div className="row">

                      <div className="col-md-6 mb-4">
                        <label className="element">Duration</label>
                        <br></br>
                        <input className="element" type="text" name="Duration"
                          className="form-control"
                          value={inputs.Duration || ""}
                          onChange={handleChange}
                          required />
                      </div>

                      <div className="col-md-6 mb-4">

                        <label className="element">Fee</label>
                        <br></br>
                        <input className="element" type="number" name="Fees"
                          className="form-control"
                          value={inputs.Fees || ""}
                          onChange={handleChange}
                          required />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">

                        <label className="element">Qualification:</label>
                        <br></br>
                        <input className="element" type="text" name="Qualification"
                          className="form-control"
                          value={inputs.Qualification || ""}
                          onChange={handleChange}
                          required />
                      </div>

                      <div className="col-md-6 mb-4">

                        <label className="element">Image URL</label>
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


export default AddCourses;