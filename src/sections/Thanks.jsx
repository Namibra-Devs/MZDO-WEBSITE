import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Thank from '../assets/images/Thanks.png'
import boys from '../assets/images/boys.jpg'

const Thanks =()=> {
  return (
    <div>
        <Navbar />
        <div className='container justify-content center' style={{backgroundColor:'green',width:'40rem',}}>
        <img 
    src={boys} 
    alt="Logo" 
    className="img-fluid rounded-start" 
    style={{
      
       width:'10rem',
      
        Height: '10vh'
    }} 
/>
        <img 
    src={Thank} 
    alt="Logo" 
    className="img-fluid rounded-start" 
    style={{
      
       width:'40rem',
      
        Height: '100vh'
    }} 
/>


        </div>

        <Footer />
      
    </div>
  )
}
export default Thanks
