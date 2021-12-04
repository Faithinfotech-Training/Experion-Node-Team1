// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
//import { MDBCard, MDBCardBody,MDBRow,MDBCol, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

// export default function App() {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form>
//             <p className="h4 text-center mb-4">Sign up</p>
//             <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
//               Your name
//             </label>
//             <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
//             <br />
//             <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
//               Your email
//             </label>
//             <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
//             <br />
//             <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
//               Confirm your email
//             </label>
//             <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
//             <br />
//             <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
//               Your password
//             </label>
//             <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
//             <div className="text-center mt-4">
//               <MDBBtn color="unique" type="submit">
//                 Register
//               </MDBBtn>
//             </div>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//     );
// }

// import 'bootstrap/dist/css/bootstrap.css';
// import 'mdbreact/dist/css/mdb.css';
// import React from "react";
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBModalFooter,
//   MDBIcon,
//   MDBCardHeader,
//   MDBBtn,
//   MDBInput
// } from "mdbreact";

// export default function App() {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard>
//             <MDBCardBody>
//               <MDBCardHeader className="form-header deep-blue-gradient rounded">
//                 <h3 className="my-3">
//                   <MDBIcon icon="lock" /> Login:
//                 </h3>
//               </MDBCardHeader>
//               <form>
//                 <div className="grey-text">
//                   <MDBInput
//                     label="Type your email"
//                     icon="envelope"
//                     group
//                     type="email"
//                     validate
//                     error="wrong"
//                     success="right"
//                   />
//                   <MDBInput
//                     label="Type your password"
//                     icon="lock"
//                     group
//                     type="password"
//                     validate
//                   />
//                 </div>

//               <div className="text-center mt-4">
//                 <MDBBtn
//                   color="light-blue"
//                   className="mb-3"
//                   type="submit"
//                 >
//                   Login
//                 </MDBBtn>
//               </div>
//               </form>
//               <MDBModalFooter>
//                 <div className="font-weight-light">
//                   <p>Not a member? Sign Up</p>
//                   <p>Forgot Password?</p>
//                 </div>
//               </MDBModalFooter>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// import React, { Component } from "react";

// export default class SignUp extends Component {
//     render() {
//         return (
//             <form>
//                 <h3>Register</h3>

//                 <div className="form-group">
//                     <label>First name</label>
//                     <input type="text" className="form-control" placeholder="First name" />
//                 </div>

//                 <div className="form-group">
//                     <label>Last name</label>
//                     <input type="text" className="form-control" placeholder="Last name" />
//                 </div>

//                 <div className="form-group">
//                     <label>Email</label>
//                     <input type="email" className="form-control" placeholder="Enter email" />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" className="form-control" placeholder="Enter password" />
//                 </div>

//                 <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
//                 <p className="forgot-password text-right">
//                     Already registered <a href="#">log in?</a>
//                 </p>
//             </form>
//         );
//     }
// }

import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
export default function CarouselDisplay() {
    return(
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1444065707204-12decac917e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBheXNhZ2V8ZW58MHx8MHx8&w=1000&q=80"
      alt="First slide"
      height="500px"
      width="400px"
    />
    <Carousel.Caption>
      <h2>Welcome to Course Resource Management</h2>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/04/ef/5e/04ef5e1743f2123165f573616c533885.jpg"
      alt="Second slide"
      height="500px"
    />
    <Carousel.Caption>
    <h2>Welcome to Course Resource Management</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i1.wp.com/zeeoii.com/wp-content/uploads/2020/07/Ultra-HD-4K-Nature-Mountains-Wallpapers-3840X2160-38.jpg?fit=1024%2C576&ssl=1"
      alt="Third slide"
      height="500px"
    />
    <Carousel.Caption>
    <h2>Welcome to Course Resource Management</h2>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>)
}