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
        <h1 className="centerfooter">Welcome to The Customer Resource Management</h1>
        <h4 className="centerfooter"> We Aim to pariatur earum et reiciendis enim aut iusto possimus. Eos dolor modi cum harum.
        perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
        </h4>
        <img className="centerfooter" src="https://www.engagebay.com/blog/wp-content/uploads/2020/05/personal-crm.png" alt="Girl in a jacket" width="900" height="650"></img>
    </div>
      </>
  
    )
  }
  
  
  
  export default Home;