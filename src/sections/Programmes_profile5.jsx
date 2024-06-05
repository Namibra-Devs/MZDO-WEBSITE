import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap'; // Import necessary components
import marchp1 from '../assets/images/marchp1.jpg';
import marchp2 from '../assets/images/marchp2.jpg';
import marchp3 from '../assets/images/marchp3.jpg';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Programmes_profile5 = () => {
  const images = [
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

  return (
    <div>
      <Navbar />
      <h1 className="text-center mb-5 " style={{fontWeight:"bold" , fontStyle:"italic", color:'green'}}>WELCOME TO GALLERY SECTION</h1>
      <div className="container" style={{ backgroundColor: 'green' }}>
        <Row>
          <Col xs={12} md={6}>
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                    style={{ height: '45vh', objectFit: 'cover' }} // Adjust height to fit two columns
                  />
                  <Carousel.Caption>
                    <h3>{image.alt}</h3>
                    <h1>{image.caption}</h1>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={12} md={6}>
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                    style={{ height: '45vh', objectFit: 'cover' }} // Adjust height to fit two columns
                  />
                  <Carousel.Caption>
                    <h3>{image.alt}</h3>
                    <h1>{image.caption}</h1>
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

export default Programmes_profile5;
