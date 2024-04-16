import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Thank from '../assets/images/Thanks.png';
import boys from '../assets/images/boys.jpg';
import Aos from 'aos';
 import 'aos/dist/aos.css'

const Thanks =()=> {

  useEffect (()=>{
    Aos.init({duration: 2000})

  },[])
  return (
<div>
        <Navbar />
        <div className='container d-flex flex-wrap justify-content centern align-items-center ' style={{backgroundColor:'green',}} >
        <img 
    src={boys} 
    alt="Logo" 
    className="img-fluid rounded-start" 
    style={{
      height: "40vh", 
      borderTopRightRadius:'70px' ,
      borderTopLeftRadius:'70px' ,
       width:'40rem',

    }} 
 />
        <img 
    src={Thank} 
    alt="Logo" 
    className="img-fluid rounded-start " 
    style={{
       width:'40rem',
        Height: '100vh',
       
    }} 
    data-aos="zoom-in"/>
  </div>
  <Footer />
</div>
  )
}
export default Thanks
