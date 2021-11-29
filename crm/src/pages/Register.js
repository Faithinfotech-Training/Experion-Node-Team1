import { useState } from "react";
import axios from "axios";



function Register() {
  return (
    <>
      <MyForm />
    </>
  );
}
function MyForm() {

  var bg = {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    height: "500px",
    width: "100%",
    backgroundImageOpacity:.1,
    backgroundImage: `url("https://cdn.imgbin.com/6/11/17/imgbin-blue-shading-SwvmghRFViYETLy8zgzS8ZtSh.jpg")`,
    opacity:"0.9",
    color: "white",
    fontFamily: "helinsky",
  };
  var f_style = {
    //border: " 4px solid #d1d8e0",
    //padding: "20px 30px 30px",
    fontWeight:"900",
    backgroundcolor:"black",
    borderRadius:10,
    color:"black",
  
  }
  var d_style = {
    paddingTop: 20,
    height: 30,
    fontSize:17,
    
  };
  var i_style = {
    float: "right",
    height: 20,
    fontSize: 15,
    width:"55%"
  };
  var b_style = {
    color: "white",
    background: "green",
    fontSize: 15,
    padding: 5,
    //+float:'block'
    border: "2px solid   #3867d6",
    borderRadius: 5,
    float: "right",
    marginLeft: "4px",
    width: "90px",
    textTransform:"capitalize",
    cursor:"grab",
    
  };
  var c_style = {
    color: "white",
    float: "right",
    background: "#b33939",
    fontSize: 15,
    padding: "5px 3px",
    border: "2px solid    #3867d6",
    borderRadius: 5,
    float: "right",
    marginLeft: "4px",
    width: "90px",
    textTransform:"capitalize",
    cursor:"grab",
  };
  //variables
  const [users, setusers] = useState({});
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setusers((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    //to prevent default html form submit behaviour

    event.preventDefault();
    //alert the current state
    console.log(users);
    if(passwordcheck(users)){
        axios
    .post("/register",users)//server id 3001 is changed
    .then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      window.location='/Home'
      

      setusers(response.data);
      
    });
    }
    else{
        alert("password not same")
    }
    
  }
 function passwordcheck(users){
     if(users.password.length<6){
         alert("pass is not strong")
     }
     if(users.password===users.Password)return 1
     else return 0
 }
  return (
    <div style={bg}>
      <form onSubmit={handleSubmit } style={f_style}>
        <h1>  Registration Form</h1>
        <div style={d_style}>
          <label>
             Name:
            <input
              type="text"
              name="Name"
              value={users.Name || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>
        
         

        <div style={d_style}>
          <label>
            Enter Email:
            <input
              type="email"
              name="email"
              value={users.email || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>
        <div style={d_style}>
          <label>
            Enter password :
            <input
              type="password"
              name="password"
              value={users.password || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>
        
        <div style={d_style}>
          <label>
            Confirm password :
            <input
              type="password"
              name="Password"
              value={users.Password || ""}
              onChange={handleChange}
               style={i_style}
            ></input>
          </label>
        </div>
        
        
        <div style={d_style}>
          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobile_no"
              value={users.mobile_no || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
           Address:
            <input
              type="text"
              name="address"
              value={users.address || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
            Date of birth:
            <input
              style={i_style}
              type="text"
              name="dob"
               onChange={handleChange}
               value={users.dob}
              onFocus={(e)=>(e.currentTarget.type="date")}
              onBlur={(e)=>(e.currentTarget.type="text")}
              style={{float: 'right',
            height: 25,
            fontSize:15,
            width:"55%"
            }}
            required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
           Highest Qualification:
            <input
              type="text"
              name="highest"
              value={users.highest || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>

        <div style={d_style}>
          <label>
           Percentage of marks:
            <input
              type="number"
              name="marks"
              value={users.marks || ""}
              onChange={handleChange}
              style={i_style}
              required
            ></input>
          </label>
        </div>
     <div>
        <label>
            Year of PassOut:
            <input
              style={i_style}
              type="text"
              name="year"
               onChange={handleChange}
               value={users.year}
              onFocus={(e)=>(e.currentTarget.type="year")}
              onBlur={(e)=>(e.currentTarget.type="text")}
              style={{float: 'right',
            height: 25,
            fontSize:15,
            width:"55%"
            }}
            required
            ></input>
          </label>
        </div>
           
        <div style={d_style}>
        <input type="submit" value="submit" style={b_style} onClick={()=>{window.location="/login"}}/>

          <input type="reset" value="exit" style={c_style} onClick={()=>{
              window.location="/Home"
          }}  />
        </div>
      </form>
    </div>
  );
}

export default Register;




