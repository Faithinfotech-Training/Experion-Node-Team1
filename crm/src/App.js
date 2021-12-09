import { BrowserRouter as Router } from "react-router-dom"

import './pages/styles/headers.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Routers from "./Routers";

function App() {
  return (
    <>
      <Routers />
      <Footer />
    </>
  )
}

function Footer() {
  return (
    <>
       {/* <p className="footer">Copyright 2021 - Team 1 - Node</p>  */}
    </>
  )
}







export default App;