import {useState} from 'react';
import axios from 'axios';
import '../styles/forms.css'
import '../styles/add.css'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function ResEnquiry(){
    return(
    <>
    <div>
        <h1 className="centerfooter">Enquiry Page</h1>
        <h4 className="centerfooter">Welcome to Enquiry Page. Please put any questions in the text box</h4>
        <EnquiryBox/>
    </div>
      </>
 
    )
  }
  function EnquiryBox(){
     var myToken = localStorage.getItem("mytoken")
    const[inputs,setInputs] = useState({})
    const navigate = useNavigate()

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values,[name]: value}))
    }
        function handleSubmit(event){
            event.preventDefault();
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            today = yyyy + '-' + mm + '-' + dd;
            // console.log(today);
            // console.log(inputs);
            //send info to 

            var data = JSON.stringify({
              "email": inputs.email,
              "name": inputs.name,
              "resourceName": inputs.resourceName,
              "rEnquiryDate": today,
              "rStatus": "Pending"
            });

            var config = {
              method: 'post',
              url: `http://localhost:4500/resenquiries`,
              headers: {
                'Authorization': `Bearer ${myToken} `,
                'Content-Type': 'application/json'
              },
              data: data
            };
        
            axios(config)
              .then(function (response) {
               // console.log(JSON.stringify(response.data));
                toast.success('Resource Enquiry added successfully',{
                         
                  position: toast.POSITION.TOP_CENTER, width:100,autoClose:2000})
                  setTimeout(() => {
                    
                      navigate("/")
                    }, 2000);
               
              })
              .catch(function (error) {
                console.log(error);
                navigate(`/resources`)
              });

            // let endpoints = [
            //     'http://localhost:4500/resenquiries'
            //   ];
              
            //   axios.all(endpoints.map((endpoint) => axios.post(endpoint,inputs))).then(response =>{
            //     console.log('promise fullfilled')
            //     console.log(response)
            //     toast.success('Enquiry submitted successfully',{
                 
            //         position: toast.POSITION.TOP_CENTER, width:100,autoClose:2000})
            //         setTimeout(() => {
            //             navigate("/")
            //           }, 2000);
            // })
        }   
    return(
        <>
        <section className="h-70 h-custom" style={{ backgroundImage:"url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm255-sasi-27.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=caf23f3151f601f02b7d6ef2517aece4)" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-10 col-md-6">
        <div className="card rounded-3">
          <img
            src="https://mocah.org/thumbs/5403078-interior-building-workspace-library-classroom-glass-chair-unsplash-workingspace-indoor-room-table-door-window-coffeeshop-cafe-desk-office-coworking-library-interior-public-domain-images.jpg"height="400px" width="100%"
            className="w-100"
            style={{
              borderTopLeftRadius: ".2rem",
              borderTopRightRadius: ".2rem",
          
            }}
            alt="Sample photo"
          />
        <div className="card-body p-4 p-md-4">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-5">
              Add Enquiry
            </h3>
        <form className="px-md-2" onSubmit={handleSubmit}>
          <div className="row">
        <div className="col-md-6 mb-4">

            <label className="element">Email ID</label>
            <br/>
            <input className="element" type="email" name="email"
            className="form-control"

            value={inputs.email || ""}
            onChange={handleChange}
            required/>
            </div>

             <div  className="col-md-6 mb-4">
            <label className="element"> Name </label>
            <br></br>
            <input className="element" type="text" name="name"  className="form-control"

            value={inputs.name || ""}
            onChange={handleChange}
            required/>
            </div> 
            </div> 
            
            <div className="row">
            <div className="mb-4">

            <label className="element">Resource Name</label>
            <br></br>
            <input className="element" type="text" name="resourceName"
            className="form-control"
            value={inputs.resourceName || ""}
            onChange={handleChange}
            required/>
            
            </div>

            {/* <div className="col-md-6 mb-4">

            <label className="element">Date</label>
            <br></br>
            <input className="element" type="date" name="rEnquiryDate"
            className="form-control"
            value={inputs.rEnquiryDate || ""}
            onChange={handleChange}
            required/>
            </div> */}
            </div>

            <div className="row">

            

            </div>
            
            

            <div>
                <br></br>
            <input className="submit" type="submit"/>
           
            </div>
                  

        </form>
        </div>
        </div>
        </div>
        </div>

        </div>
        </section>
        </>
    )
}


//commenttt


export default ResEnquiry;
