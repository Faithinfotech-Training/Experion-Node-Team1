import { useState } from "react";
import axios from "axios";
import './styles/forms.css'



function Registerartion() {
  return (
    <>
      <MyForm />
    </>
  );
}
function MyForm() {

  // var bg = {
  //   display: "grid",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   height: "500px",
  //   width: "100%",
  //   backgroundImageOpacity:.1,
  //   backgroundImage: `url("https://cdn.imgbin.com/6/11/17/imgbin-blue-shading-SwvmghRFViYETLy8zgzS8ZtSh.jpg")`,
  //   opacity:"0.9",
  //   color: "white",
  //   fontFamily: "helinsky",
  // };
  // var f_style = {
  //   //border: " 4px solid #d1d8e0",
  //   //padding: "20px 30px 30px",
  //   fontWeight:"900",
  //   backgroundcolor:"black",
  //   borderRadius:10,
  //   color:"black",
  
  // }
  // var d_style = {
  //   paddingTop: 20,
  //   height: 30,
  //   fontSize:17,
    
  // };
  // var i_style = {
  //   float: "right",
  //   height: 20,
  //   fontSize: 15,
  //   width:"55%"
  // };
  // var b_style = {
  //   color: "white",
  //   background: "green",
  //   fontSize: 15,
  //   padding: 5,
  //   //+float:'block'
  //   border: "2px solid   #3867d6",
  //   borderRadius: 5,
  //   float: "right",
  //   marginLeft: "4px",
  //   width: "90px",
  //   textTransform:"capitalize",
  //   cursor:"grab",
    
  // };
  // var c_style = {
  //   color: "white",
  //   float: "right",
  //   background: "#b33939",
  //   fontSize: 15,
  //   padding: "5px 3px",
  //   border: "2px solid    #3867d6",
  //   borderRadius: 5,
  //   float: "right",
  //   marginLeft: "4px",
  //   width: "90px",
  //   textTransform:"capitalize",
  //   cursor:"grab",
  // };
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
    <div className="centers" >
      <form className="formContent" onSubmit={handleSubmit}>
        <h1>  Registration Form</h1>
        <div >
          <label className="element">
             Name:
            <input className="element"
              type="text"
              name="Name"
              value={users.Name || ""}
              onChange={handleChange}
              required
            ></input>
          </label>
        </div>
        
         

        <div >
          <label className="element">
            Enter Email:
            <input className="element"
              type="email"
              name="email"
              value={users.email || ""}
              onChange={handleChange}
              required
            ></input>
          </label>
        </div>
        <div >
          <label className="element">
            Enter password :
            <input className="element"
              type="password"
              name="password"
              value={users.password || ""}
              onChange={handleChange}
              required
            ></input>
          </label>
        </div>
        
        <div >
          <label className="element">
            Confirm password :
            <input className="element"
              type="password"
              name="Password"
              value={users.Password || ""}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        
        
        <div >
          <label className="element">
            Mobile Number:
            <input className="element"
              type="tel"
              name="mobile_no"
              value={users.mobile_no || ""}
              onChange={handleChange}
              
              required
            ></input>
          </label>
        </div>

        <div>
          <label className="element">
           Address:
            <input className="element"
              type="text"
              name="address"
              value={users.address || ""}
              onChange={handleChange}
              
              required
            ></input>
          </label>
        </div>

        <div >
          <label className="element">
            Date of birth:
            <input
              className="element"
              type="text"
              name="dob"
               onChange={handleChange}
               value={users.dob}
              onFocus={(e)=>(e.currentTarget.type="date")}
              onBlur={(e)=>(e.currentTarget.type="text")}
            required
            ></input>
          </label>
        </div>

        <div >
          <label className="element">
           Highest Qualification:
            <input
                className="element"
              type="text"
              name="highest"
              value={users.highest || ""}
              onChange={handleChange}
              
              required
            ></input>
          </label>
        </div>

        <div >
          <label className="element">
           Percentage of marks:
            <input className="element"
              type="number"
              name="marks"
              value={users.marks || ""}
              onChange={handleChange}
              required
            ></input>
          </label>
        </div>
     <div>
        <label className="element">
            Year of PassOut:
            <input
              className="element"
              type="text"
              name="year"
               onChange={handleChange}
               value={users.year}
              onFocus={(e)=>(e.currentTarget.type="year")}
              onBlur={(e)=>(e.currentTarget.type="text")}
              
            required
            ></input>
          </label>
        </div>
           
        <div >
        <input className="submit" type="submit" value="submit"  onClick={()=>{window.location="/login"}}/>

          <input className="submit" type="reset" value="exit"  onClick={()=>{
              window.location="/Home"
          }}  />
        </div>
      </form>
    </div>
  );
}

export default Registerartion;