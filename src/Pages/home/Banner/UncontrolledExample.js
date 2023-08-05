import img1 from '../../../images/Banner/banner1.jpg';
import img2 from '../../../images/Banner/banner2.jpg';
import img3 from '../../../images/Banner/banner3.jpg';


import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className='w-100' src={img1} alt="" srcset="" />
          <Carousel.Caption className='d-sm-none d-md-block'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='w-100' src={img2} alt="" srcset="" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className='w-100' src={img3} alt="" srcset="" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;