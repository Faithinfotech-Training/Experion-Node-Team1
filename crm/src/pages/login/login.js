
import { useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";
// Importing toastify module
import {toast} from 'react-toastify';
 
// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
toast.configure()




function Login(){
 localStorage.clear();  
    return(<>
    <br/>
    <MyForm/>
    </>);
    }
    function MyForm(props){
      const navigate=useNavigate()
    
  const [inputs, setInputs] = useState({});

    


  function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values =>({...values, [name]: value}))
  }

  function handleSubmit(event){
    
    event.preventDefault();
    console.log(inputs);

    axios
        .post('http://localhost:4500/users/login',inputs)
        .then(response=>{
     
      let role = response.data.user.role;
      let id = response.data.user.id;
      localStorage.setItem('mytoken', response.data.accessToken);
      console.log(response.data.user.role)
      localStorage.setItem('role', response.data.user.role);
      localStorage.setItem('username', response.data.user.name)

      if (role === "Admin" ||"admin") {

          navigate('/');
      } else if (role === "Manager" ) {
          navigate('/');
          
}else{
          navigate(`/courses`);
      }
  }).catch((error)=>{
    toast.error('Wrong Credentials',{
                 
      position: toast.POSITION.TOP_CENTER, width:100,autoClose:1500})
      
      
  })
  }
      return (
        <div id="main-wrapper" className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="p-3">
                      <div className="mb-4">
                        <h3 className="h4 font-weight-bold text-theme" style={{marginTop:"-5px"}}>Login</h3>
                      </div>
                      <h5 className="h5 mb-0">Welcome back!</h5>
                      <p className="text-muted mt-2 mb-5">
                        Enter your email address and password to access your account.
                      </p>
                      <form onSubmit = {handleSubmit}>
                        <div className="form-group">
                          <label>Email address</label>
                          <input
                            type="email"
                            name="email"
                            placeholder="enter your email" onChange={handleChange} value={inputs.email || ""}
                            className="form-control"
                            
                          />
                        </div>
                        <div className="form-group mb-5">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            placeholder="enter the password" onChange={handleChange} value={inputs.password || ""}
                            className="form-control"
                            id="exampleInputPassword1"
                          />
                        </div>
                        <button type="submit" className="btn btn-primary" value="login">
                          Login
                        </button>
                          
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-inline-block">
                    <div className="account-block rounded-right">
                      <div className="overlay rounded-right" />
                      <div className="account-testimonial">
                        <h4 className="text-white mb-1">
                       
                        </h4>
                        <p className="lead text-white"><b>
                         
                        </b></p>
                        {/* <p>- We are here for you</p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end card-body */}
            </div>
            {/* end card */}
            <p className="text-muted text-center  mt-0 mb-0">
              Don't have an account?{" "}
              <a href="/Register" className=" text-primary ml-1">
                register
              </a>
            </p>
            {/* end row */}
          </div>
          {/* end col */}
        </div>
        {/* Row */}
      </div>
      



        );
    };
    
 


export default Login;





