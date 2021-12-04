import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
function CarouselDisplay() {
    return(
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1444065707204-12decac917e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBheXNhZ2V8ZW58MHx8MHx8&w=1000&q=80"
      alt="First slide"
      height="500px"
      width="400px"
    />
    <Carousel.Caption>
      <h1>Welcome to Course Resource Management</h1>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/04/ef/5e/04ef5e1743f2123165f573616c533885.jpg"
      alt="Second slide"
      height="500px"
    />
    <Carousel.Caption>
    <h1>Welcome to Course Resource Management</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i1.wp.com/zeeoii.com/wp-content/uploads/2020/07/Ultra-HD-4K-Nature-Mountains-Wallpapers-3840X2160-38.jpg?fit=1024%2C576&ssl=1"
      alt="Third slide"
      height="500px"
    />
    <Carousel.Caption>
    <h1>Welcome to Course Resource Management</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>)
}

export default CarouselDisplay;