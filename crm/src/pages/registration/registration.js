import { useState } from "react";
import axios from "axios";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()





function Reg() {
  return (
    <>
      <MyForm />
    </>
  );
}
function MyForm() {

  //variables
  const navigate= useNavigate()
  const [users, setusers] = useState({});
  const [errorMessage, setErrorMessage] = useState('') 
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setusers((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    //to prevent default html form submit behaviour

    event.preventDefault();
    const inputs = {
      "name": users.name,
      "email": users.email,
      "password": users.password,
      "dob": users.dob,
      "mobile_number": users.mobile_number,
      "Address": users.Address,
      "HighestQualification": users.HighestQualification,
      "PercentageOfMarks": users.PercentageOfMarks,
      "YearOfPassout": users.YearOfPassout,
      "role": "User"
    }
    
    if (validate(users)) {

      
      
      axios
        .post("http://localhost:4500/users/register", inputs)//server id 3001 is changed
        .then((response) => {

          localStorage.setItem('mytoken', response.data.accessToken);
          localStorage.setItem('role', response.data.user.role);
          if (response.data.user.role === 'User') {
           // console.log(response);
          }
          toast.success('Registered successfully',{
                         
            position: toast.POSITION.TOP_CENTER, width:100,autoClose:2000})
            setTimeout(() => {
              
                navigate("/Login")
              }, 2000);

        });
    }
    else {
      alert("Registration not submitted")
    }

  }
  function validate(users) {

    
 
    if (users.password.length < 5 || users.password.length > 20) {
      alert("Password is not good")
      return 0
    }
    else if (users.mobile_number.length < 10) 
    {
      alert("Not Valid Mobile Number")
      return 0
    }
    else if (users.password !== users.Password) 
    {
      alert("Password is not matched")
      return 0
    }
    else if (users.PercentageOfMarks < 0 || users.PercentageOfMarks > 100) 
    {
      alert("Marks not valid")
      return 0
    }
    
    
    else{
     return 1
    }
   }
  return (
    <div className="h-100" style={{ backgroundImage: "url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm255-sasi-27.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=caf23f3151f601f02b7d6ef2517aece4)" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/img4.jpg"
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem"
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <form onSubmit={handleSubmit}>

                      <h3 className="mb-5 text-uppercase">
                        Registration form
                      </h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label">
                              Name
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Enter Name"
                              className="form-control form-control-lg" value={users.name || ""}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter email"
                              className="form-control form-control-lg" value={users.email || ""}
                              minlength="10"
                              onChange={handleChange}
                              required
                            />

                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label>
                              Password
                            </label>
                            <input
                              type="password"
                              name="password"
                              placeholder="Aleast 1 uppercase, lowercase,symbol and number"
                              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{6,12}$"
                              className="form-control form-control-lg" value={users.password || ""}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label">
                              Confirm Password
                            </label>
                            <input
                              type="password"
                              name="Password"
                              placeholder="Confirm Password"

                              className="form-control form-control-lg" value={users.Password || ""}
                              onChange={handleChange}
                              required
                            />

                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label">
                              Date Of Birth
                            </label>
                            <input
                              type="text"
                              name="dob"
                              placeholder="Date of Birth"
                              className="form-control form-control-lg" value={users.dob}
                              onFocus={(e) => (e.currentTarget.type = "date")}
                              onBlur={(e) => (e.currentTarget.type = "text")}
                              required
                            />

                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <label className="form-label">
                              Mobile Number
                            </label>
                            <input
                              type="tel"
                              name="mobile_number"
                              placeholder="Mobile number"
                              minlength="10"
                              className="form-control form-control-lg" value={users.mobile_number || ""}
                              onChange={handleChange}
                              required
                            />

                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label">
                          Address
                        </label><br />
                        <input
                          type="text"
                          name="Address"
                          placeholder="Enter Address"
                          className="form-control form-control-lg" value={users.Address || ""}
                          onChange={handleChange}
                          required
                        />
                      </div>




                      <div className="form-outline mb-4">
                        <label className="form-label">
                          Highest Qualification
                        </label>

                        <input
                          type="text"
                          name="HighestQualification"
                          placeholder=" Qualification"
                          className="form-control form-control-lg" value={users.HighestQualification || ""}
                          onChange={handleChange}
                          required
                        />



                        <div className="form-outline mb-4">
                          <label className="form-label">
                            Percentage of marks
                          </label>
                          <input
                            type="number"
                            name="PercentageOfMarks"
                            placeholder=" Marks"
                            className="form-control form-control-lg" value={users.PercentageOfMarks || ""}
                            onChange={handleChange}
                            required
                          />

                        </div>
                      </div>




                      <div className="form-outline mb-4">
                        <label className="form-label">
                          Year Of Passout
                        </label>
                        <input
                          type="text"
                          name="YearOfPassout"
                          placeholder="Year"
                          className="form-control form-control-lg" value={users.YearOfPassout || ""}
                          onChange={handleChange}
                          required
                        />

                      </div>
                      <div className="d-flex justify-content-end pt-3">
                        
                        <input className="btn btn-primary" type="submit" />
                        
                      </div></form>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}

export default Reg;




