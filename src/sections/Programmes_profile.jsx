import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'; // Import necessary components
import marchp1 from '../assets/images/marchp1.jpg';
import marchp2 from '../assets/images/marchp2.jpg';
import marchp3 from '../assets/images/marchp3.jpg';
import evant2 from '../assets/images/Evant2.jpg';
import evant3 from '../assets/images/Evant3.jpg';
import evant1 from "../assets/images/Evant1.jpg"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  const images1 = [
    {
      src: marchp1,
      caption: 'PICTURES OF 6MARCH CELEBRATION',
    },
    {
      src: marchp2,
      caption: 'PICTURES OF 6MARCH CELEBRATION',
    },
    {
      src: marchp3,
      caption: 'PICTURES OF 6MARCH CELEBRATION',
    },
   
  ];

  const images2 = [
    {
      src: evant2,
      caption: 'EVENT 2 CELEBRATION',
    },
  
    {
      src: evant3,
      caption: 'EVENT 3 CELEBRATION',
    },
    {
      src: evant1,
      caption: 'EVENT 1 CELEBRATION',
    },
  ];

  return (
    <div>
      <Navbar />
      <h1 className="text-center mb-5">WELCOME TO GALLERY SECTION</h1>
      <div className="container" style={{ }}>
        <Row>
          <Col xs={12} md={6}>
            <Carousel>
              {images1.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.caption}
                    style={{ height: '45vh', objectFit: 'cover' }} // Adjust height to fit two columns
                  />
                  <Carousel.Caption>
                    <h3>{image.caption}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={12} md={6}>
            <Carousel>
              {images2.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.caption}
                    style={{ height: '45vh', objectFit: 'cover' }} // Adjust height to fit two columns
                  />
                  <Carousel.Caption>
                    <h3>{image.caption}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
      <div className="container  mt-5" style={{  }}>
        <Row>
          <Col xs={12} md={6}>
            <Carousel>
              {images1.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.caption}
                    style={{ height: '45vh', objectFit: 'cover' }} // Adjust height to fit two columns
                  />
                  <Carousel.Caption>
                    <h3>{image.caption}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={12} md={6}>
            <Carousel>
              {images2.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.caption}
                    style={{ height: '45vh', objectFit: 'cover' }} // Adjust height to fit two columns
                  />
                  <Carousel.Caption>
                    <h3>{image.caption}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
