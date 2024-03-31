import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import smallboy from '../assets/images/small boy.jpg'

import groupofstudent from '../assets/images/group of student.jpeg';
import googlegruop from '../assets/images/google developer group.jpeg';
import deploymental from '../assets/images/deploymental group 1.jpeg';
import benificial from '../assets/images/beneficiaries.jpeg';
import donation from '../assets/images/kapower-donate-to-muslim.jpeg'
// Rename this variable
import muslimleaders from '../assets/images/group of-muslim-leaders.png';
import './Update.css'

const Update = () => {
  return (
    <div>
      <Navbar />
      <div className='container-fluid update-bg' 
      style={{  backgroundImage: `url(${smallboy})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      height:'80vh',
      width:'120rem',
      position:'relative',
      isolation:'isolate'
      
        }}>
      <div className='container '>
      <h1 className='text-center text-light'
      style={{fontWeight:'700', }}>NEWS AND  ARTICLES</h1>
      </div>
      </div>
      <div className="container-fluid" style={{
              width:'70%'
            }} >
              {/* first row */}
                <div className="row row-image">
                    
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={donation} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={muslimleaders} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%', borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                </div>
                {/* second row */}
                <div className="row row-image">
              
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={donation} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' , borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={muslimleaders} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                </div>
                {/* third row */}
                <div className="row row-image">
                   
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={donation} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke'  }} >
              <img src={muslimleaders} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
    <h6 className='text-center mt-4' style={{fontWeight:'700'}}>HOW YOU CAN HELP</h6>
    <div className='d-flex justify-content-center mt-4'>
        <button type="button" className="btn btn-success btn-sm d-flex mx-2">JOIN  US</button>
        <button type="button" className="btn btn-secondary btn-sm d-flex mx-2">DONATE</button>
    </div>
</div>



      <Footer />
    
    </div>
  )
}

export default Update