import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
// import ChartCounter from "../counter/chartCounter";
// import CourseCounter from "../counter/courseCounter";
// import HomeCounter from "../counter/homeCounter";
// import Counter from "./count";
import './chart.css'

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar
} from "recharts";


   



  
   
  
    // window.location='/enquirylist';

function Barchartss(props) {
const[input,setInputs]=useState([])


    useEffect(()=>{
        axios.get(`http://localhost:4500/pagevisits/1`)
    .then(response =>{
    console.log('promise fullfilled')
    //console.log(response)
    setInputs(response.data)
   
        }
    )
    },[])

  // var count = <Counter/>
    console.log(input.HomeCounter)
  const data = [
    { name: "Home", visits:input.HomeCounter},
    { name: "Course", visits: input.CourseCounter},
    { name: "Resource", visits: input.ResourceCounter}
  ];

  return (<>
        {/* <p>{staff}</p>
        <button onClick={updateCounter}>up</button> */}
      {/* <div class="count"></div> */}
      <p>{data.users}</p>
    <div style={{ textAlign: "center" }}>
      <h1>Site View Details</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="visits"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          caption={"Bar Chart"}
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="visits" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
    {/* <script src="visit-chart.js"></script> */}
  </>
  );
};


export default Barchartss;