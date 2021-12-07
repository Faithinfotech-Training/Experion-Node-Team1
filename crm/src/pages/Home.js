//try
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CarouselDisplay from '../pages/components/carousel';
import Card from 'react-bootstrap/Card';
import axios from "axios"
import Button from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";
function handleHomeChange(props) {
  axios
    .put(`http://localhost:4500/pagevisits/${props}`)
    .then(response => {
      console.log('promise fullfilled')
      console.log(response)

      // window.location='/enquirylist';
    })
}
function Home() {
  
  return (
    <>
      {handleHomeChange(1)}
      <div className="centerfooter">
        <CarouselDisplay />
        <ShowAbout />
      </div>
    </>

  )
}
function ShowAbout() {
  const navigate = useNavigate();
  return (<>
  
    
    <div style={{ display: 'block', width: 1400, padding: 75 }}>
      <Row>
        <Col >
          <Card style={{ width: '18rem',  width: 400 }}>

            <Card.Body style={{ textAlign: "center", width: 400 }}>
              <Card.Title style={{ textAlign: "center" }}><b>About Us</b></Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.id quod maxime placeat facere possimus, omnis volupta.
              </Card.Text>
              {/* <Button variant="secondary">Go somewhere</Button> */}
            </Card.Body>

          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem',  width: 400 }}>

            <Card.Body style={{ textAlign: "center", width: 400 }}>
              <Card.Title style={{ textAlign: "center" }}><b>Our Courses</b></Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </Card.Text>
              <Button variant="secondary" onClick={() => navigate(`/courses`)}>Courses</Button>
            </Card.Body>

          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem',  width: 400 }}>

            <Card.Body style={{ textAlign: "center", width: 400 }}>
              <Card.Title style={{ textAlign: "center" }}><b>Our Resources</b></Card.Title>
              <Card.Text style={{ textAlign: "left" }}>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fugat harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </Card.Text>
              <Button variant="secondary" onClick={() => navigate(`/resources`)}>Resources</Button>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </div>
  </>
  );
}


export default Home;