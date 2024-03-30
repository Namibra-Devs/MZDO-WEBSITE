

import React from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import muslimLeaders from  "../assets/images/group of-muslim-leaders.png"
import group1 from "../assets/images/group 1.jpg"
import group2 from "../assets/images/group 2.jpg"
import logo from "../assets/images/logo.png"
import deploymental from "../assets/images/deploymental group 1.jpeg"
import benificial from  "../assets/images/beneficiaries.jpeg"
import donation from "../assets/images/kapower-donate-to-muslim.jpeg"
import boys from "../assets/images/boys.jpg"
import smallboy from "../assets/images/small boy.jpg"
import lineup from "../assets/images/lineup.jpg"
import like from "../assets/images/like.png"
import manspeaking from "../assets/images/man-speaking.jpg"
import womanspeaking from "../assets/images/woman-speaking.jpg"
import youth from "../assets/images/youth.jpg"
import google from "../assets/images/google developer group.jpeg"
import './Home.css';

const Home = () => {
    return (

<div>
        <Navbar />

        {/* carousel with three images start  */}
         
        <div id="carouselExampleDark" className="carousel slide" >
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active carousel-btn" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className="carousel-btn"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className="carousel-btn"></button>
        <button className="btn btn-primary btn1">CONTACT US</button>
        <button className="btn btn-primary btn2">READ MORE</button>
    </div>
    <div className="carousel-inner carousel-inner-img">
        <div className="carousel-item active" data-bs-interval="10000">
            <img src={muslimLeaders} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h2 className="imgtext">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
            </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
            <img src={group1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h2 className="imgtext">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
            </div>
        </div>
        <div className="carousel-item">
            <img src={group2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h2 className="imgtext">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
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
{/* carousel with three images end  */}
     {/* first colume dive with img and text start */}
     <div className="container text-center">         
    <div className="row row-cols-1 grid-container">
        
        <div className="col col-md-6 col-sm-12 col-lg-6 d-flex flex-column justify-content-between">
            
            {/* First Div with Green Background */}
            <div style={{ backgroundColor: 'green', width: '4rem', height: '8vh', borderRadius: '50%', marginTop:'50px' }}>
               
            </div>
            
            
           
            
                <img src={logo} alt="Logo" className='logo2' style={{ width: '16rem', marginTop: '50px' }} />
                {/* Second Div with Black Background */}
                 <div style={{ backgroundColor: 'black', width: '4rem', height: '8vh', borderRadius: '50%' }}>  </div>
           
            
        </div>
        
        <div className="col text-start col-md-6 col-sm-12 col-lg-6" style={{ fontSize: '12px', lineHeight: '27px', maxWidth: '350px' }}>
            <h5 className='font-weight-bold' style={{ color: '#00821C', marginTop: '30px', fontSize: '18px' }}>
                Moshie Zongo Development Organization
            </h5>
            <p className='h5 mt-3'>MOTTO :</p>
            <p className='h6 font-weight-bold'>“Development through education, love and care”</p>
            <p className='font-weight-bold'>
                MOSHIE ZONGO DEVELOPMENT ORGANISATION (MZDO)
                is a company limited BY guarantee incorporated on the 
                25th day of May, 2023. <br />
                The purpose for incorporating MDO is to promote 
                development in moshie zongo with special emphasis.
            </p>
            <p>
                1. Education: Establishing an Educational Fund to 
                support Brilliant But Needy Students. <br />
                2. Youth Employment: Support willing youth to acquire
                employable skills through the 
                Apprenticeship Program.
            </p>
            <button className="btn btn-primary" style={{ marginTop: '20px' }}>READ MORE</button>
        </div>
        
    </div>
</div>


    {/* card section */}
    <div className="container-fluid ">
      <div>
        <h6 className='text-center mt-5'>
        OUR SERVICES<br />
          <span>Our Service</span>
        </h6>
      </div>

      <div className="container-fluid" style={{}} >
        <div className="row mx-auto justify-content-center align-items-center">
          <div className="col col-md-3 col-sm-6 col-lg-2" >
            <div className="card " style={{width: "18rem", borderTopRightRadius:'60%' , margin:'20px', backgroundColor:'whitesmoke', boxShadow:'whitesmoke' }} >
              <img src={deploymental} className="card-img-top" alt="..." style={{height:"20vh", borderTopRightRadius:'60%' ,}}/>
              <div className="card-body">
                <h5 className="card-title text-center">DEVELOPMENTAL</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY </p>
              </div>
            </div>
          </div>

          <div className="col col-md-3 col-sm-6 col-lg-2">
          <div className="card" style={{width: "18rem", margin: '20px', borderTopRightRadius:'60%', backgroundColor:'whitesmoke', }}>
              <img src={benificial} className="card-img-top" alt="..."  style={{height:"20vh",  borderTopRightRadius:'60%' , }} />
              <div className="card-body">
                <h5 className="card-title text-center">TRAININGS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY  </p>
              </div>
            </div>
          </div>

          <div className="col col-md-3 col-sm-6 col-lg-2">
          <div className="card " style={{width: "18rem" ,margin: '20px', borderTopRightRadius:'60%',backgroundColor:'whitesmoke', }}>
              <img src={donation} className="card-img-top" alt="..."  style={{height:"20vh",borderTopRightRadius:'60%' ,}} />
              <div className="card-body">
                <h5 className="card-title text-center">DONATIONS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY  </p>
              </div>
            </div>
          </div>

          <div className="col col-md-3 col-sm-6 col-lg-2">
            <div className="card" style={{width: "18rem",borderTopRightRadius:'60%' , backgroundColor:'whitesmoke', }} >
              <img src={boys} className="card-img-top" alt="..."  style={{height:"20vh", borderTopRightRadius:'60%' ,}} />
              <div className="card-body">
                <h5 className="card-title text-center">DONATIONS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY  </p>
              </div>
            </div>
          </div>

          <div className="col col-md-3 col-sm-6 col-lg-2">
            <div className="card" style={{width: "18rem", borderTopRightRadius:'60%' ,backgroundColor:'whitesmoke', }}>
              <img src={smallboy} className="card-img-top" alt="..." style={{height:"20vh",borderTopRightRadius:'60%' ,}}/>
              <div className="card-body">
                <h5 className="card-title text-center">DONATIONS</h5>
                <p className="card-text" style={{fontSize:'12px'}}>AS PART  OF OUR BELIEVES GIVING ARMS, WE FULFIL THAT BY  GIVING BACK TO THE NEEDY IN THE COMMUNITY  </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
     {/* first two divs with text strat here*/}
      <div className="container">
          
          <div className="row row-cols-1  card-col  justify-content-center align-items-center  ">
              
            <div className="col col-md-6 col-sm-12 col-lg-6 ">
                    <h5 className='col5' style={{fontWeight:'700'}} >OUR CAMPAIGNS</h5>
                    <p>OUR  FEATUREED CAMPAIGNS</p>

            <p style={{maxWidth:'400px', lineHeight:'25px', letterSpacing:'1px',fontSize:'12px', fontWeight: '600'}}>
                        Fund raising  to support any developmental activities,
                      by so doing we have selected Zonal Representative 
                      for all the 10 Zones in the community. with the funds 
                      we can help supports brilliants but needy students 
                      renovates various damaged and dangerous school 
                      and hospital structures in the community as well help
                      support anyone with any challenge financially.... 
              </p>
              <button className="btn btn-primary" style={{marginTop:'20px'}}>READ MORE</button>
                  
            </div>
                  <div className="col col-img col-md-6 col-sm-12 col-lg-6 mt-5 ">
                  <img src={deploymental} alt="Logo" className='card-col' style={{width:'40rem', borderTopRightRadius:'30%', borderBottomLeftRadius:'30%'}} />
                  
                  <p className='' style={{fontWeight:'bold', fontSize:'12px'}}>
                      <p className="inline-p mt-5">CURRENTS FUNDS <br /> 300000GHS </p>
                      
                      <span className="vertical-line m-5"></span>
                      <p class="inline-p" >15%</p>
                      <span className="vertical-line"></span>
                      <p className="inline-p m-5">TARGETS <br />  300000GHS</p>
                        <hr />
                        We need your help and support to 
                        achieve this goal, to be able to support the needy ones in the community, 
                        come together as one big family to shaping the future.
                    </p>
                  <div>
                  
                  
                  </div>
                  
                  
                    
                  </div>
                
          </div>
          
          
      </div> 
     {/* first two divs with text end here*/}
       {/* div with icon start */}
        <div className='text-center container-fluid mt-5  d-flex justify-content-center align-items-center text-light  mx-auto' 
              style={{backgroundColor:'#00821C', marginBottom:'10px',margin:'12px', width:'80%',height:'10vh'}}>
              <p className="inline-p m-5 " ><img src={like} alt="like" 
              style={{width:'2rem'}}/>
                    <br /> 10 <br /> project
              </p>
                                
                                
                    <p className="inline-p" >
                      <i className="bi bi-heart"></i> <br /> 2000 <br /> Live touched
                    </p>
                  
                    <p className="inline-p m-5">
                        <i className="bi bi-people-fill"></i> <br /> 0 <br /> partner  
                      </p>
        </div>
      {/* div with icon end */}

      {/* programme lineup grid container start */}

           <div className="row row-cols-1  card-col container-fluid justify-content-center align-items-center  ">
            
        <div className="col col-md-6 col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
         
          
          <p style={{maxWidth:'200px', lineHeight:'30px', letterSpacing:'1px',fontSize:'12px', fontWeight: '600'}}>
          <span>OUR EVENTS</span><br />
          <span style={{fontWeight:'700'}}>UPCOMING EVENT</span> <br />
          <span style={{fontWeight:'700'}}>GRAND DURBAR-FUND RAISING</span> <br />
         <span style={{fontWeight:'700'}}> 14/01/2024</span> <br />
           <span style={{fontWeight:'700'}}>10:30 am</span>
          <span>Anyaano school park </span>
          <br /> <span>kumasi, Moshie Zongo </span>
          </p>
          <button type="button" className="btn btn-primary btn-sm d-flex ">Small button</button>
            <button type="button" className="btn btn-secondary btn-sm d-flex mt-5">Small button</button>
      </div>

                  <div className="col col-img col-md-6 col-sm-12 col-lg-6 mt-5 ">
                   <img src={lineup} alt="Logo" className='card-col' style={{width:'40rem', borderTopRightRadius:'30%', borderBottomLeftRadius:'30%', height:'35vh'}} />
                   
                  
                   <div>
                   
                   
                   </div>
                  
                  
                    
                  </div>
                
          </div>
      {/* programme line grid container end */}


      <div className='text-center container-fluid mt-5  d-flex justify-content-center align-items-center text-light  mx-auto' 
              style={{backgroundColor:'#000000', marginBottom:'10px',margin:'12px', width:'80%',height:'10vh'}}>
          
          <input className="form-control " type="search" placeholder="Search for something" aria-label="Search" style={{width:'20%' ,marginLeft:'120px'}}  />  
      </div>
    {/* three grid images start here */}
          <div className="container-fluid">
          <div>
              <h6 className='text-center mt-5'>
              OUR COMMUNITY<br />
                  <span>WE COMPROMISE OF SKILLED <br /> AND PASSIONATE MEMBERS</span>
              </h6>
          </div>

          <div className="container ">
              <div className="row mx-auto justify-content-center align-items-center ">
                  <div className="col col-12 col-md-4">
                      <div className="card" style={{width: "20rem"}}>
                          <img src={manspeaking} className="card-img-top" alt="manspeaking" style={{height:"30vh",}}/>
                      </div>
                  </div>

                  <div className="col col-12 col-md-4">
                      <div className="card" style={{width: "20rem"}}>
                          <img src={womanspeaking} className="card-img-top" alt="womanspeaking" style={{height:"30vh",}}/>
                      </div>
                  </div>

                  <div className="col col-12 col-md-4">
                      <div className="card" style={{width: "20rem"}}>
                          <img src={youth} className="card-img-top" alt="youth" style={{height:"30vh" ,}}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    {/* three grid images end here */}


<div className="row row-cols-1 card-col container-fluid justify-content-center align-items-center" style={{margin: '0', padding: '0'}}>
    <div className="col col-img col-md-6 col-sm-12 col-lg-6 mt-5 d-flex flex-column justify-content-center align-items-center" 
    style={{margin: '0', padding: '0'}}>
        <img src={google} alt="Logo" className='card-col' style={{width:'40rem', height:'35vh',}} />
    </div>
    
    <div className="col col-md-6 col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center" style={{margin: '0', padding: '0'}}>
        <p style={{maxWidth:'300px', lineHeight:'40px', letterSpacing:'1px', fontSize:'12px', fontWeight: '600', margin: '0', padding: '0'}}>
            Fund raising to support any developmental activities, by so doing we have selected Zonal Representative for all the 10 Zones in the community. with the funds we can help supports brilliants but needy students renovates various damaged and dangerous school and hospital structures in the community as well help support anyone with any challenge financially....
        </p>
    </div>
</div>

<div>
    <p className='text-center mt-5' style={{maxWidth:''}}>
      Fund raising  to support any developmental activities, by so doing we have 
      selected Zonal Representative for all the 10 Zones in the <br /> community. with the 
      funds we can help supports brilliants but needy students renovates various damaged 
      and dangerous school and <br /> hospital structures in
      the community as well help support anyone with any challenge financially.... 
    </p>
  <p className='text-center mt-5' style={{maxWidth:''}}>
      Fund raising  to support any developmental activities, by so doing we have 
      selected Zonal Representative for all the 10 Zones in the <br /> community. with the 
      funds we can help supports brilliants but needy students renovates various damaged 
      and dangerous school and <br /> hospital structures in
      the community as well help support anyone with any challenge financially.... 
  </p>

</div>
<div className='container-fluid w-50 mt-5' style={{ marginTop:'20px'}}>
    <h6 className='mt-5' style={{fontWeight:'700',}}>FREQUENTLY ASKED QUESTIONS </h6>
    <p style={{fontWeight:'700'}}>Have any questions?</p>
  <div 
  style={{
            marginBottom:'20px',
             lineHeight:'1.5',
            backgroundColor:'whitesmoke',
            padding:'20px',
            
        }}> 
    <p>
      <span style={{fontWeight:'700'}}>How do I donate?</span> <br />
        You can donate through the button on the navigation bar. Also, 
        please contact us for more information on this.
        Our agents will be coming around, 
        and you can donate through them, 
        and we will receive your donation.
    </p>
  </div>
  
  <div className='mb-5' 
    style={{
      backgroundColor:'whitesmoke',
      marginBottom:'20px', 
      lineHeight:'1.5',
      marginTop:'20px', 
      padding:'20px',
     }}> 
    <p>
      <span className='mt-5' style={{fontWeight:'700'}}>How do I become a member?</span> <br />
      You can donate through the button on the navigation bar.
       Also, please contact us for more information on this. 
      Our agents will be coming around, and you can donate 
      through them, and we will receive your donation.
    </p>
  </div>
</div>

<div className='container text-center' style={{fontWeight:'700'}}>
  <p>HOW YOU CAN HELP</p>
  <button type="button" className="btn btn-primary btn-sm d-block-inline m-5" >Small button</button>
   <button type="button" className="btn btn-secondary btn-sm ">Small button</button>

</div>
{/* import footer */}
<Footer />

          
</div>

        
    ); 
  
};


export default Home;


