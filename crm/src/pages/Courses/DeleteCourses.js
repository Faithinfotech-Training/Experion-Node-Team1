import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/display.css';
// Importing toastify module
import { toast } from 'react-toastify';

// Import toastify css file
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function CourseDelete() {

  //initialize use case to empty
  const navigate = useNavigate();

  var myToken = localStorage.getItem("mytoken")
  const [staff, setStaff] = useState([])


  const { CourseCode } = useParams()

  useEffect(() => {

    var config = {
      method: 'delete',
      url: `http://localhost:4500/courses/${CourseCode}`,
      headers: {
        'Authorization': `Bearer ${myToken} `,
        'Content-Type': 'application/json'
      }


    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        toast.success('Course deleted successfully', {

          position: toast.POSITION.TOP_CENTER, width: 100, autoClose: 2000
        })
        setTimeout(() => {
          // navigate("/admincourse")
        }, 2000);


      })
      .catch(function (error) {
        console.log(error);
        alert('Try Again!')
        navigate('/addcourse')
      });

  }, [])

  return (
    <>
      <div>
        <br />
        <h1 className="centerfooter">
          Course Successfully Deleted</h1>

        <div >
          <button className="back" onClick={() => navigate("/admincourse")}>Back to Course List
          </button></div>



      </div>
    </>

  )
}



export default CourseDelete;