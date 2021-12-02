// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import { MDBCard, MDBCardBody,MDBRow,MDBCol, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

// export default function App() {
//   return (
//     <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
//       <MDBCol>
//         <MDBCard className='h-100'>
//         <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
//           <MDBCardImage
//             src='https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg'
//             alt='...'
//             position='top'
//           />
//           </MDBRipple>
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard className='h-100'>
//           <MDBCardImage
//             src='https://mdbcdn.b-cdn.net/img/new/standard/city/042.jpg'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>This is a short card.</MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard className='h-100'>
//           <MDBCardImage
//             src='https://mdbcdn.b-cdn.net/img/new/standard/city/043.jpg'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//       <MDBCol>
//         <MDBCard className='h-100'>
//           <MDBCardImage
//             src='https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg'
//             alt='...'
//             position='top'
//           />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               This is a longer card with supporting text below as a natural lead-in to additional content.
//               This content is a little bit longer.
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>
//     </MDBRow>
//   );
// }

import React, { useState } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const id=0;
  const [count, setCount] = useState(id);
    
  // const incrementTwo = () =>{
  //  for(let i =0;i<2;i++){
  //    setCount(prevcount => prevcount + 1)
  //  }
  // }

  return (
    <div>
      <h1>{count}</h1>
      {/* <input type="number" name="id"/> */}
      <button onClick={() =>  setCount(id+1)}>
        normal count 
      </button>
      <button onClick={() =>  setCount(id)}>
        State 
      </button>
      <button onClick={() =>  setCount(prevcount => prevcount + 1)}>
        inc
      </button>
      <button onClick={() => setCount(prevcount => prevcount - 1)}>dec</button>
    </div>
  );
}

export default Counter;
