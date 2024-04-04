
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Programmes.css';
import smallboy from '../assets/images/small boy.jpg';
import groupofstudent from '../assets/images/group of student.jpeg';
import googlegruop from '../assets/images/google developer group.jpeg';
import deploymental from '../assets/images/deploymental group 1.jpeg';
import benificial from '../assets/images/beneficiaries.jpeg';
import donation from '../assets/images/kapower-donate-to-muslim.jpeg'
import boys    from '../assets/images/boys.jpg'
// Rename this variable
import muslimleaders from '../assets/images/group of-muslim-leaders.png';

const Programmes = () => {
    return (
        <div>
            <Navbar />

    

            <div className='container-fluid programmes-bg'
    style={{
        backgroundImage: `url(${smallboy})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '80vh',
        maxWidth: '100%', // Make sure it doesn't overflow on smaller screens
        position: 'relative',
        isolation: 'isolate'
    }}>

<div className='container'>
        <h1 className='text-center '
            style={{ fontWeight: '700', color: 'yellow', paddingTop: '15vh', paddingBottom: '3vh' }}>
            OUR PROGRAMMES
        </h1>
        <div className='bg-light text-light'>.</div>
        <div className="row mt-5">
            {/* First Card */}
            <div className="col-md-6 mb-4">
                <div className="card" style={{ border: '4px solid yellow', borderRadius: '0' }}>
                    <img src={groupofstudent} className="card-img-top" alt="Card Image"
                        style={{
                            width: '100%',
                            height: '40vh',
                            objectFit: 'cover'
                        }} />
                </div>
            </div>

            {/* Second Card */}
            <div className="col-md-6 mb-4">
                <div className="card" style={{ border: '4px solid yellow', borderRadius: '0' }}>
                    <img src={googlegruop} className="card-img-top" alt="Card Image"
                        style={{
                            width: '100%',
                            height: '40vh',
                            objectFit: 'cover'
                        }} />
                </div>
            </div>
        </div>
    </div>

    {/* Overlay */}
    <div className="programmes-overlay"></div>
</div>

            <hr style={{ width: '90%' }} />

            <div className="container-fluid" style={{
              width:'70%'
            }} >
              {/* first row */}
                <div className="row row-image">
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={deploymental} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL PROJECTS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>WE RENOVATES AND BUILD A BETTER COMMUNITY  </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">TRAININGS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS   </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={donation} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">DONATIONS</h5>
                <p className="card-text" style={{fontSize:'12px',}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORKS JOBS  </p>

               
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={muslimleaders} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%', borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">TRAININGS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS   </p>
              </div>
            </div>
                    </div>
                </div>
                {/* second row */}
                <div className="row row-image">
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={boys} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' , borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">DEVELOPMENTAL PROJECTS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>WE RENOVATES AND BUILD A BETTER COMMUNITY  </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">TRAININGS</h5>
              <p className="card-text" style={{fontSize:'12px'}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS   </p>
                
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={donation} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' , borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">DONATIONS</h5>
                <p className="card-text" style={{fontSize:'12px',}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY   </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
                    <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">TRAININGS</h5>
              <p className="card-text" style={{fontSize:'12px'}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS   </p>
                
              </div>
            </div>
                    </div>
                </div>
                {/* third row */}
                <div className="row row-image">
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
                    <img src={deploymental} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL PROJECTS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>WE RENOVATES AND BUILD A BETTER COMMUNITY  </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
                    <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">TRAININGS</h5>
              <p className="card-text" style={{fontSize:'12px'}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS   </p>
                
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={donation} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' , borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">DONATIONS</h5>
                <p className="card-text" style={{fontSize:'12px',}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY   </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
                    <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">TRAININGS</h5>
              <p className="card-text" style={{fontSize:'12px'}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS   </p>
                
              </div>
            </div>
                    </div>
                </div>
                <div className="row row-image">
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
                    <img src={deploymental} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL PROJECTS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>WE RENOVATES AND BUILD A BETTER COMMUNITY  </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
                    <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">TRAININGS</h5>
              <p className="card-text" style={{fontSize:'12px'}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS   </p>
                
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={donation} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' , borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">DONATIONS</h5>
                <p className="card-text" style={{fontSize:'12px',}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY   </p>
              </div>
            </div>
                    </div>
                    <div className="col-sm  text-white">
                    <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
                    <img src={benificial} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,borderBottomLeftRadius:'30%' }}/>
              <div className="card-body">
              <h5 className="card-title text-center">TRAININGS</h5>
              <p className="card-text" style={{fontSize:'12px'}}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS   </p>
                
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

export default Programmes;