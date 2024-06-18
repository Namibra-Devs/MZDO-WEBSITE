import React ,{ useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import smallboy from '../assets/images/small boy.jpg'

import evant1 from '../assets/images/Evant1.jpg';

import  event2 from '../assets/images/Evant2.jpg'
import muslimleaders from '../assets/images/group of-muslim-leaders.png';
import Aos from 'aos';
 import 'aos/dist/aos.css'
import './Update.css'

const Update = () => {

  useEffect (()=>{
    Aos.init({duration: 2000})

  },[])
  return (
    <div>
      <Navbar />
      <div className='container-fluid update-bg' 
        style={{  backgroundImage: `url(${smallboy})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        height: '80vh',
        position: 'relative',
       isolation: 'isolate'
      
        }}>
       <div className='container  '>
          <h1 className='text-center text-light'style={{fontWeight:'700', }}>NEWS AND  ARTICLES</h1>
       </div>
     </div>
      <div className="container-fluid mt-5 text-center" style={{
        fontSize:'20px',color:'black !important',
          width:'70%'
        }} >
            {/* first row */}
            <div className="row row-image justify-content-center align-items-center">
    <div className="col-sm text-white d-flex justify-content-center">
        <div className="card" style={{ width: "18rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', margin: '20px', border: '0', boxShadow: 'whitesmoke' }}>
            <img src={event2} className="card-img-top mb-3" alt="..." style={{ height: "20vh", borderTopRightRadius: '50px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }} data-aos="fade-left" />
            <a href='/Programmes_profile' style={{  fontWeight: '600', fontSize: '20px', textDecoration: 'none', color: 'White',backgroundColor:'green',borderRadius:"20px", }}>GALLERY</a>
            <hr />
            <p style={{ fontSize: '10px' }}>DECEMBER 20,2022</p>
        </div>
    </div>
    <div className="col-sm text-white d-flex justify-content-center">
        <div className="card" style={{ width: "18rem", borderTopRightRadius: '60%', margin: '20px', border: '0', boxShadow: 'whitesmoke' }}>
            <img src={evant1} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '50px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }} data-aos="fade-right" />
            <div className="card-body">

            </div>
            <a href='/Programmes_profile5' style={{ fontWeight: '600', fontSize: '20px', textDecoration: 'none', color: 'White',backgroundColor:'green',borderRadius:"20px", }}>NEWS UPDATE</a>
            <hr />
            <p style={{ fontSize: '10px' }}>DECEMBER 20,2022</p>
        </div>
    </div>
    <div className="col-sm text-white d-flex justify-content-center">
        <div className="card" style={{ width: "18rem", borderTopRightRadius: '60%', margin: '20px', border: '0', boxShadow: 'whitesmoke' }}>
            <img src={muslimleaders} className="card-img-top mb-3" alt="..." style={{ height: "20vh", borderTopRightRadius: '50px', borderTopLeftRadius: '50px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px' }} data-aos="fade-right" />
            
            <a href='/gallery' style={{ fontWeight: '600', fontSize: '20px', textDecoration: 'none', color: 'White',backgroundColor:'green',borderRadius:"20px",  }}>READ MORE</a>
            <hr />
            <p style={{ fontSize: '10px' }}>DECEMBER 20,2022</p>
        </div>
    </div>
</div>

   

      </div>
            <div className='container-fluid'>
              <p className='text-center mt-4' style={{fontWeight:'700'}}>SUPPORT US</p>
          <h6 className='text-center mt-4' style={{fontWeight:'700'}}>HOW YOU CAN HELP</h6>
    <div className='d-flex justify-content-center mt-4'>
        <a href='' type="button" className="btn btn-success btn-sm d-flex mx-2">JOIN  US</a>
        <a href='' type="button" className="btn btn-secondary btn-sm d-flex mx-2">BECOME A MEMBER</a>
    </div>
</div>
      <Footer />
    
    </div>
  )
}

export default Update