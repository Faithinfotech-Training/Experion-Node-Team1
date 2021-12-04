//try
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
        {/* <h1 className="centerfooter">Welcome to The Customer Resource Management</h1> */}
        {/* <h4 className="centerfooter"> We Aim to pariatur earum et reiciendis enim aut iusto possimus. Eos dolor modi cum harum.
        perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
        </h4> */}
        {/* <img className="centerfooter" src="https://www.engagebay.com/blog/wp-content/uploads/2020/05/personal-crm.png" alt="Girl in a jacket" width="900" height="650"></img> */}
        <ShowAbout/>
    </div>
      </>
  
    )
  }
  function ShowAbout(){
    return (
      <div style={{ display: 'block', width: 1400, padding: 75 }}>
        <Row>
          <Col >
            <h5><b>About Us</b></h5>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. </p>
        </Col>
          <Col >
          <h5><b>Our Resources</b></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Col>
          <Col>
          <h5><b>Work with Us</b></h5>
          <p>Nunc faucibus a pellentesque sit amet porttitor. Ultricies mi eget mauris pharetra et ultrices neque. Nunc pulvinar sapien et ligula ullamcorper malesuada proin. Eget arcu dictum varius duis at consectetur lorem. Amet volutpat consequat mauris nunc congue nisi. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Urna porttitor rhoncus dolor purus. Cras adipiscing enim eu turpis. Interdum velit laoreet id donec. Nunc sed velit dignissim sodales ut. Proin libero nunc consequat interdum. Egestas sed tempus urna et pharetra pharetra massa massa.</p>
        </Col>
        </Row>
      </div>
    );
  }
  
  
  export default Home;