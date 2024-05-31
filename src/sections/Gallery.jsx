import React from 'react';
import Carousel from 'react-bootstrap/dist/react-bootstrap';// Import the Carousel component
import muslimLeaders from '../assets/images/group of-muslim-leaders.png';
import group1 from '../assets/images/group 1.jpg';
import group2 from '../assets/images/group 2.jpg';

const Gallery = () => {
  const images = [
    {
      src: muslimLeaders,
      alt: 'Group of Muslim Leaders',
    },
    {
      src: group1,
      alt: 'Group 1',
    },
    {
      src: group2,
      alt: 'Group 2',
    },
  ];

  return (
    <div className="container mt-5">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              style={{ height: '90vh', objectFit: 'cover' }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
