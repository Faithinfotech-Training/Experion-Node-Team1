import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel'
function CarouselDisplay() {
  return (
    <Carousel variant="dark" fade>
      <Carousel.Item>
        <img style={{ opacity: 0.7 }}
          className="d-block w-100"
          src="https://bryantdigital.com/wp-content/uploads/2017/08/targeted-social-media-ads.png"

          alt="First slide"
          height="500px"
          width="400px"
        />
        <Carousel.Caption>
          <br />
          <h1 style={{ fontSize: 40 }}><b>Welcome to Course Resource Management</b></h1>
          <p><b>Nulla vitae elit libero, a pharetra augue mollis interdum.</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ opacity: 0.5 }}
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/09/22/10/58/business-3694993__480.jpg"
          alt="Second slide"
          height="500px"
        />
        <Carousel.Caption>
          <h1><b>Welcome to Course Resource Management</b></h1>
          <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ opacity: 0.6 }}
          className="d-block w-100"
          src="https://www.portsmouth-college.ac.uk/wp-content/uploads/2020/04/macbook-air-on-desk_4460x4460_1600x600_acf_cropped.jpg"
          alt="Third slide"
          height="500px"
        />
        <Carousel.Caption>
          <h1 ><b>Welcome to Course Resource Management</b></h1>
          <p><b>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</b></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>)
}

export default CarouselDisplay;