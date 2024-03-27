

import React from 'react';
import Navbar from '../components/Navbar'; 
import muslimLeaders from  "../assets/images/group of-muslim-leaders.png"
import group1 from "../assets/images/group 1.jpg"
import group2 from "../assets/images/group 2.jpg"
import logo from "../assets/images/logo.png"
import { Link } from "react-router-dom"
import './Home.css';

const Home = () => {
    return (
        <div>
         

            

            
               
               
            

            <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button className="btn btn-primary btn1   ">DONATE</button>
    <button className="btn btn-primary btn2 ">DONATE</button>
  </div>
  <div className="carousel-inner carousel-inner-img">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={muslimLeaders} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h2 className='imgtext'>MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION </h2>

        
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={group1} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
      <h2 className='imgtext'>MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION </h2>

      
      </div>
    </div>
    <div className="carousel-item  ">
      <img src={group2} className="d-block w-100 " alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h2 className='imgtext'>MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION </h2>
       
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div class="container text-center">
    <div class="row row-cols-2 mt-5">
        <div class="col">
       
        <img src={logo} alt="Logo" className='logo2' />
        </div>
        <div class="col">

          <h5 className='heard5'>Moshie Zongo Development Organization</h5>
          <h4 className='heard4'>MOTTO :</h4>
          <h6>“Development through education, love and care”</h6>
          <p className='paragraph1'>
              MOSHIE ZONGO DEVELOPMENT ORGANISATION (MZDO)
            is a company limited BY guarantee incorporated on the 
            25th day of May, 2023.
            The purpose for incorporating MDO is to promote 
            development in moshie zongo with specialemphasis.

          </p>
          <p className='paragraph1'>
            
          1. Education: Establishing an Educational Fund to 
                support Brilliant But Needy Students.
            2. Youth Employment: Support willing youth to acquire
                employable skills through the 
                Apprenticeship Program.
          </p>
        </div>

      
    </div>
</div>

            
        </div>
        
    ); 
};

export default Home;

