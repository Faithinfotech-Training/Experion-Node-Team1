//comment
import { useEffect, useState } from "react";
import axios from "axios";
import CourseList from "./courseList";
import SearchIcon from "@material-ui/icons/Search";
import '../styles/searchBar.css';
import CourseDisplay from "./courseDetails";


function handleHomeChange(props) {
  axios
    .put(`http://localhost:4500/pagevisits/${props}`)
    .then(response => {
      console.log('promise fullfilled')
      console.log(response)

      // window.location='/enquirylist';
    })
}
function Courses() {


  const [courses, setStaffs] = useState([])
  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
    { handleHomeChange(2) }
    axios
      .get('http://localhost:4500/courses')
      .then(
        response => {
          console.log('promise fullfilled')
          console.log(response)
          setStaffs(response.data)
        }
      )

  }, [])

  return (
    <>

      <div className="search">
        <br />
        <h1 className="centerfooter">
          Courses</h1>
        <div style={{ paddingLeft: 800 }} className="searchInputs">
          <input
            type="text"
            style={{ paddingTop: 39 }}
            placeholder="search" onChange={(event) => { setSearchTerm(event.target.value); }} />
          {/* //   value={wordEntered}
        //   onChange={handleFilter} */}

          <div className="searchIcon">
            {searchTerm.length === 0 && (
              <SearchIcon />)}

          </div>
        </div>
        <p>
          <div>



            {courses.filter((course) => {
              if (searchTerm == "") {
                return course
              }
              else if (course.CourseName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return (
                  <li style={{ listStyleType: "none" }} key={course.CourseCode}>
                    <CourseList details={course} />
                  </li>)

              }

            }).map((course, key) => {

              return (
                <li style={{ listStyleType: "none" }} key={course.CourseCode}>
                  <CourseList details={course} />
                </li>
              )
            }
            )
            }
            
          </div>
        </p>

      </div>

    </>

  )
}



export default Courses;
