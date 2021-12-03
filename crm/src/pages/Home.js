//try
import axios from "axios"
function handleHomeChange(props){
  axios
  .put(`http://localhost:4500/pagevisits/${props}`)
  .then(response =>{
      console.log('promise fullfilled')
      console.log(response)
    
      // window.location='/enquirylist';
  })
}
function Home(){
    return(
    <>
    {handleHomeChange(1)}
    <div className="centerfooter">
        <h1 className="centerfooter">Home Page</h1>
        <h4 className="centerfooter">Welcome to The Customer Resource Management Homepage. We Aim to pariatur earum et reiciendis enim aut iusto possimus. Eos dolor modi cum harum.</h4>
        <img className="centerfooter" src="https://www.engagebay.com/blog/wp-content/uploads/2020/05/personal-crm.png" alt="Girl in a jacket" width="900" height="650"></img>
    </div>
      </>
  
    )
  }
  
  
  
  export default Home;