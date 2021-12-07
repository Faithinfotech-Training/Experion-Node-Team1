// import { useState } from "react";
// import axios from "axios";
// import './styles/forms.css'



// function Registerartion() {
//   return (
//     <>
//       <MyForm />
//     </>
//   );
// }
// function MyForm() {

 
//   //variables
//   const [users, setusers] = useState({});
//   function handleChange(event) {
//     const name = event.target.name;
//     const value = event.target.value;

//     setusers((values) => ({ ...values, [name]: value }));
//   }
//   function handleSubmit(event) {
//     //to prevent default html form submit behaviour

//     event.preventDefault();
//     const inputs = {
//       "name": users.name,
//       "email": users.email,
//       "password": users.password,
//       "role": "User"
//   }
//     //alert the current state
//     console.log(users);
//     if(passwordcheck(users)){
//         axios
//     .post("http://localhost:4500/users/register",inputs)//server id 3001 is changed
//     .then((response) => {

//       localStorage.setItem('mytoken', response.data.accessToken);
//       localStorage.setItem('role', response.data.user.role);
//       if(response.data.user.role === 'User'){ 
//             console.log(response);
//       }
      
//     });
//     }
//     else{
//         alert("password not same")
//     }
    
//   }
//  function passwordcheck(users){
//      if(users.password.length<3){
//          alert("Pass is not strong")
//      }
//      if(users.password===users.Password)return 1
//      else return 0
//  }
//   return (
//     <div className="centers" >
//       <form className="formContent" onSubmit={handleSubmit}>
//         <h1>  Registration Form</h1>
//         <div >
//           <label className="element">
//              Name:
//             <input className="element"
//               type="text"
//               name="name"
//               value={users.name || ""}
//               onChange={handleChange}
//               required
//             ></input>
//           </label>
//         </div>
        
         

//         <div >
//           <label className="element">
//             Enter Email:
//             <input className="element"
//               type="email"
//               name="email"
//               value={users.email || ""}
//               onChange={handleChange}
//               required
//             ></input>
//           </label>
//         </div>
//         <div >
//           <label className="element">
//             Enter password :
//             <input className="element"
//               type="password"
//               name="password"
//               value={users.password || ""}
//               onChange={handleChange}
//               required
//             ></input>
//           </label>
//         </div>
        
//         <div >
//           <label className="element">
//             Confirm password :
//             <input className="element"
//               type="password"
//               name="Password"
//               value={users.Password || ""}
//               onChange={handleChange}
//             ></input>
//           </label>
//         </div>
        
        
//         <div >
//           <label className="element">
//             Mobile Number:
//             <input className="element"
//               type="tel"
//               name="mobile_number"
//               value={users.mobile_number || ""}
//               onChange={handleChange}
              
//               required
//             ></input>
//           </label>
//         </div>

//         <div>
//           <label className="element">
//            Address:
//             <input className="element"
//               type="text"
//               name="Address"
//               value={users.Address || ""}
//               onChange={handleChange}
              
//               required
//             ></input>
//           </label>
//         </div>

//         <div >
//           <label className="element">
//             Date of birth:
//             <input
//               className="element"
//               type="text"
//               name="dob"
//                onChange={handleChange}
//                value={users.dob}
//               onFocus={(e)=>(e.currentTarget.type="date")}
//               onBlur={(e)=>(e.currentTarget.type="text")}
//             required
//             ></input>
//           </label>
//         </div>

//         <div >
//           <label className="element">
//            Highest Qualification:
//             <input
//                 className="element"
//               type="text"
//               name="HighestQualification"
//               value={users.HighestQualification || ""}
//               onChange={handleChange}
              
//               required
//             ></input>
//           </label>
//         </div>

//         <div >
//           <label className="element">
//            Percentage of marks:
//             <input className="element"
//               type="number"
//               name="PercentageOfMarks"
//               value={users.PercentageOfMarks || ""}
//               onChange={handleChange}
//               required
//             ></input>
//           </label>
//         </div>
//      <div>
//         <label className="element">
//             Year of PassOut:
//             <input
//               className="element"
//               type="text"
//               name="YearOfPassout"
//                onChange={handleChange}
//                value={users.YearOfPassout}
              
              
//             required
//             ></input>
//           </label>
//         </div>
           
//         <div >
//         <input className="submit" type="submit" value="submit"  onClick={()=>{window.location="/login"}}/>

//           <input className="submit" type="reset" value="exit"  onClick={()=>{
//               window.location="/"
//           }}  />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Registerartion;