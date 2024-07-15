
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import muslimLeaders from  "../assets/images/group of-muslim-leaders.png"
import group1 from "../assets/images/group 1.jpg"
import group2 from "../assets/images/group 2.jpg"
import logo from "../assets/images/mainlogo.jpg"
import Awards1 from "../assets/images/Awards1.jpg"
import lineup from "../assets/images/lineup.jpg"
import like from "../assets/images/like.png"
import accountant from "../assets/images/accountant.jpg"
import Manager from "../assets/images/Manager.jpg"
import deputyManager from "../assets/images/deputyManager.jpg"
import Pro from "../assets/images/pro.jpg"

import Secretery from "../assets/images/Secretery.jpeg"

import Aos from 'aos';
 import 'aos/dist/aos.css'
import './Home.css';

 const Home = () => {
    useEffect (()=>{
      Aos.init({duration: 2000})

    },[])
    return (

    

<div>
        <Navbar />

        {/* carousel with three images start  */}
         
   <div id="carouselExampleDark" className="carousel slide  carousel-img">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active carousel-btn" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" className="carousel-btn"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" className="carousel-btn"></button>
            <a href="/Contact"  className="btn btn-warning m-4 text-success " style={{marginTop:'20px'}}>CONTACT US</a>
            <a href="/About"  className="btn btn-success m-4" style={{marginTop:'20px'}}>READ MORE</a>
        </div>
        <div className="carousel-inner carousel-inner-img">
           <div className="carousel-item active" data-bs-interval="10000">
               <img src={muslimLeaders} className="d-block w-100" alt="muslimLeaders" style={{ height: "90vh", objectFit: "cover" , backgroundPosition:'center'}}  />
               <div className="carousel-caption d-none  d-md-block text-center">
                   <h2 className="imgtext text-light">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
               </div>   
           </div>
           <div className="carousel-item" data-bs-interval="2000">
               <img src={group1} className="d-block w-100 "alt=" group1" style={{ height: "90vh", objectFit: "cover", backgroundPosition:'center'}}  />
               <div className="carousel-caption d-none d-md-block text-center">
                  <h2 className="imgtext text-light">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
</div>
           </div>
           <div className="carousel-item">
               <img src={group2} className="d-block w-100 " alt="group2 " style={{ height: "90vh", objectFit: "cover", backgroundPosition:'center' }}  />
               <div className="carousel-caption d-none d-md-block text-center">
                   <h2 className="imgtext text-light">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
                </div>
           </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev"  data-aos="fade-right">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next"  data-aos="fade-left">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
           <span className="visually-hidden">Next</span>
        </button>
 </div>

    {/* carousel with three images end  */}
    {/* first colume dive with img and text start */}
    <div className="container text-center mt-5">         
      <div className="row row-cols-1 row-cols-md-2 grid-container">
         {/* First Column */}
         <div className="col d-flex flex-column justify-content-between">
            
              <img src={logo} alt="Logo" className='logo2 mx-auto ' style={{ width: '16rem' }} />
            
         </div>
        
         {/* Second Column */}
         <div className="col" style={{ fontSize: '12px',}}>
             <h5 className='font-weight-bold' style={{ color: '#00821C', marginTop: '30px', fontSize: '18px' }}>
                 Moshie Zongo Development Organization
             </h5>
             <p className='mt-3' style={{fontSize:'28px', fontWeight:'800'}}>MOTTO :</p>
             <p  className='h6 font-weight-bold' style={{letterSpacing: '1px', fontSize: '1rem', fontWeight: '600', margin: '0',}}>
                 “Development through education, love and care”
             </p>
            
             <p className='font-weight-bold'  style={{ letterSpacing: '1px', fontSize: '1rem', fontWeight: '600', margin: '0',}}>
                 MOSHIE ZONGO DEVELOPMENT ORGANISATION (MZDO)
                 is a company limited by guarantee incorporated on the 
                 25th day of May, 2023.
                 The purpose for incorporating MDO is to promote 
                 development in moshie zongo with special emphasis.
             </p>
             <p className='font-weight-bold'  style={{lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '600', margin: '0',}}>
             Moshie Zongo Development Organization is own by 
             the Chiefs, Immam, Pastors and Opinion leaders
              of moshie zongo on behalf of the people of Moshie Zongo.  
             </p>
           
             <p className='mt-4' style={{ lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '600', margin: '0',}}>
                 1. Education: Establishing an Educational Fund to 
                 support Brilliant But Needy Students.
                 2. Youth Employment: Support willing youth to acquire
                 employable skills through the align-items-center 
                 Apprenticeship Program.  
             </p>
             <a href="/About" className="btn btn-success mt-4"> READ MORE <i className="bi bi-arrow-right"></i></a>
         </div>   
     </div>
 </div>

    {/* card section */}
  
    <div className="container-fluid">
       < div>
         <h6 className='text-center mb-5 mt-5'
         style={{
            fontSize: '1.5rem', 
            fontWeight: '600', 
            fontFamily: 'sans-serif' 
         }}
         >
         ORGNIZATIONAL LEADERSHIP
          
         </h6>
     </div>
     <div className="container">
    <div className="row justify-content-center align-items-center">
    <div className="col-lg-4 col-md-6 col-sm-8 mb-5" data-aos="zoom-in">
  <div className="card" 
       style={{
         width: "100%",  
         borderTopRightRadius: '70px', 
         borderTopLeftRadius: '70px', 
         borderBottomRightRadius: '70px',  
         borderBottomLeftRadius: '70px', 
         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
         padding: '20px'
       }} 
       data-aos="fade-right">
    <img src={Manager} 
         className="card-img-top" 
         alt="manspeaking" 
         style={{  
           height: "40vh", 
           borderTopRightRadius: '70px',
           borderTopLeftRadius: '70px',
         }} />
    <div className="card-body">
      <h5 className="card-title text-center" 
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            fontFamily: 'sans-serif' 
          }}>
        MANAGER
      </h5>
      <p className="card-text text-center" 
         style={{ 
           fontSize: '1.2rem' 
         }}>
    Yusif Abubakari is the CEO of Park Teletech Africa, LOLC Ghana Limited, 
    and BD Advisors Consult Limited, and also a Director at Jins Savings and Loans.
     He holds an MBA in Strategic Management and Consulting, and is a Chartered Banker 
     and Chartered Financial and Investment Analyst.
    
      </p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-6 col-sm-8 mb-5" data-aos="zoom-in">
  <div className="card" 
       style={{
         width: "100%",  
         borderTopRightRadius: '70px', 
         borderTopLeftRadius: '70px', 
         borderBottomRightRadius: '70px',  
         borderBottomLeftRadius: '70px', 
         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
         padding: '20px'
       }} 
       data-aos="fade-right">
    <img src={deputyManager} 
         className="card-img-top" 
         alt="manspeaking" 
         style={{  
           height: "40vh", 
           borderTopRightRadius: '70px',
           borderTopLeftRadius: '70px',
         }} />
    <div className="card-body">
      <h5 className="card-title text-center" 
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            fontFamily: 'sans-serif' 
          }}>
        DEPUTY MANAGER
      </h5>
      <p className="card-text text-center" 
         style={{ 
           fontSize: '1.2rem' 
         }}>
       Muniru Mohammed Salifu Esq. is a Credit Collections and Recovery
        Officer at Standard Chartered Bank and a Barrister at Moomin & Botta Solicitors 
        in Kumasi. He holds a BL from the Ghana School of Law,
        an LLB from KNUST, and a BSc in Administration from KNUST.
      </p>
    </div>
  </div>
</div>
<div className="col-lg-4 col-md-6 col-sm-8 mb-5" data-aos="zoom-in">
  <div className="card" 
       style={{
         width: "100%",  
         borderTopRightRadius: '70px', 
         borderTopLeftRadius: '70px', 
         borderBottomRightRadius: '70px',  
         borderBottomLeftRadius: '70px', 
         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
         padding: '20px'
       }} 
       data-aos="fade-right">
    <img src={accountant} 
         className="card-img-top" 
         alt="manspeaking" 
         style={{  
           height: "40vh", 
           borderTopRightRadius: '70px',
           borderTopLeftRadius: '70px',
         }} />
    <div className="card-body">
      <h5 className="card-title text-center" 
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            fontFamily: 'sans-serif' 
          }}>
        ACCOUNTANT
      </h5>
      <p className="card-text text-center" 
         style={{ 
           fontSize: '1.2rem' 
         }}>
      
Awal Mohammed is an educationist and an Economics tutor at Ibadul Rahment SHS.
 He holds a BSc in Development Studies from UDS and a Diploma in Education from UEW.
      </p>
    </div>
  </div>
</div>
    </div>
</div>

  </div>
    {/* three grid images end here */}
     <div className="container-fluid">
   
     <div className="container">
    <div className="row justify-content-center align-items-center">
    <div className="col-lg-4 col-md-6 col-sm-8 mb-5" data-aos="zoom-in">
  <div className="card" 
       style={{
         width: "100%",  
         borderTopRightRadius: '70px', 
         borderTopLeftRadius: '70px', 
         borderBottomRightRadius: '70px',  
         borderBottomLeftRadius: '70px', 
         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
         padding: '20px'
       }} 
       data-aos="fade-right">
    <img src={Secretery} 
         className="card-img-top" 
         alt="manspeaking" 
         style={{  
           height: "40vh", 
           borderTopRightRadius: '70px',
           borderTopLeftRadius: '70px',
         }} />
    <div className="card-body">
      <h5 className="card-title text-center" 
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            fontFamily: 'sans-serif' 
          }}>
        SECRETERY
      </h5>
      <p className="card-text text-center" 
         style={{ 
           fontSize: '1.2rem' 
         }}>
 Nuhu Ibrahim Zeba, formerly the Headteacher of Ashanti Pride Educational Complex (APEC),
  currently serves as an Educational Consultant. He holds the grade of Principal Superintendent
  within the Ghana Education Service (GES) and has a B.Ed in Basic Education.
    
      </p>
    </div>
  </div>
</div>


<div className="col-lg-4 col-md-6 col-sm-8 mb-5" data-aos="zoom-in">
  <div className="card" 
       style={{
         width: "100%",  
         borderTopRightRadius: '70px', 
         borderTopLeftRadius: '70px', 
         borderBottomRightRadius: '70px',  
         borderBottomLeftRadius: '70px', 
         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
         padding: '20px'
       }} 
       data-aos="fade-right">
    <img src={Pro} 
         className="card-img-top" 
         alt="manspeaking" 
         style={{  
           height: "40vh", 
           borderTopRightRadius: '70px',
           borderTopLeftRadius: '70px',
         }} />
    <div className="card-body">
      <h5 className="card-title text-center" 
          style={{ 
            fontSize: '1.5rem', 
            fontWeight: '600', 
            fontFamily: 'sans-serif' 
          }}>
         PUBLIC RELATIONS OFFICER
      </h5>
      <p className="card-text text-center" 
         style={{ 
           fontSize: '1.2rem' 
         }}>
     Kwame Nsiah PRO holds a BSc in Theology from Charisma Bible College and an HND 
     in Business Administration from Kumasi Technical University. He has worked as a Secretary at
      the Accounts Office of the Office of the Administrator of Stool Lands and as a
       Lecturer at Charisma Bible College.
      
      </p>
    </div>
  </div>
</div>

    </div>
</div>

  </div>
 


 <div className='container-fluid  mt-5' style={{ marginTop:'20px'}}>
       <h6 className='mt-5' style={{fontWeight:'700', textAlign:'center'}}>FREQUENTLY ASKED QUESTIONS </h6>
       <p style={{fontWeight:'700',textAlign:'center'}}>Have any questions?</p>
     <div 
         style={{
              marginBottom:'20px',
              lineHeight:'1.5',
             backgroundColor:'whitesmoke',
             padding:'20px',
             textAlign:'center',
            
           }}> 
          <p style={{fontWeight:'400',fontSize:'18px'}}>
             <span style={{fontWeight:'600',fontSize:'20px'}}>How do I donate?</span> <br />
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
         textAlign:'center',
       
         }}> 
          <p style={{fontWeight:'400',fontSize:'18px'}}>
             <span className='mt-5' style={{fontWeight:'600',fontSize:'20px'}}>How do I become a member?</span> <br />
             You can donate through the button on the navigation bar.
             Also, please contact us for more information on this. 
             Our agents will be coming around, and you can donate 
             through them, and we will receive your donation.
         </p>
     </div>
 </div> 


    
     {/* first two divs with text strat here*/}
 <div className="container text-center">
       <div className="row row-cols-1 card-col justify-content-center align-items-center">
         <div className="col-lg-6 col-md-6 col-sm-12">
             <h5 className='col5' style={{ fontWeight: '700', fontSize: '1.5rem' }}>OUR CAMPAIGNS</h5>
             <p style={{ fontWeight: '700', fontSize: '1.2rem' }}>OUR FEATURED CAMPAIGNS</p>
             <p style={{ maxWidth: '100%', lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '400' }}>
                 Fund raising to support any developmental activities, by so doing we have selected Zonal 
                 Representative for all the 10 Zones in the community. with the funds we can help supports brilliants 
                 but needy students renovates various damaged and dangerous school and hospital structures in the 
                 community as well help support anyone with any challenge financially....
             </p>
               <a href="/Event" className="btn btn-success mt-3">EVENT<i className="bi bi-arrow-right"></i></a>
         </div>
         <div className="col-lg-6 col-md-6 col-sm-12 mt-5" data-aos="flip-right">
             <img src={Awards1} alt="Logo" className='card-col img-fluid' style={{ width: '100%', borderTopRightRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px',   borderBottomLeftRadius: '70px',boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'  }} />
            
             <p style={{ fontWeight: '400', fontSize: '1rem', marginTop: '1rem' }}>
                 <span className="inline-p" style={{ fontWeight: '400', fontSize: '1rem', }}>CURRENTS FUNDS<br />300000GHS</span>
                 <span className="vertical-line mx-3" style={{ fontWeight: '400', fontSize: '1rem', }}></span>
                 <span className="inline-p" style={{ fontWeight: '400', fontSize: '1rem',}}>15%</span>
                 <span className="vertical-line mx-3" style={{ fontWeight: '400', fontSize: '1rem',}}></span>
                 <span className="inline-p" style={{ fontWeight: '400', fontSize: '1rem',}}>TARGETS<br />300000GHS</span><br />
                 We need your help and support to achieve this goal, to be able to support
                 the needy ones in the community, come together as one big family to shaping the future.
             </p>
         </div>  
      </div>
  </div>  

     {/* first two divs with text end here*/}
       {/* div with icon start */}
       <div className='text-center container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center text-light mx-auto' 
            style={{ 
            backgroundColor: '#00821C', 
            marginBottom: '10px',
          
            }}>
    
          <div className="inline-p m-3 col-md-4 col-sm-12">
             <img src={like} alt="like" style={{ width: '2rem' }} /><br />
             <span>10</span><br />
             <span>projects</span>
          </div>
         <div className="inline-p m-3 col-md-4 col-sm-12">
             <i className="bi bi-heart"></i><br />
             <span>2000</span><br />
              <span>Lives touched</span>
          </div>
         <div className="inline-p m-3 col-md-4 col-sm-12">
              <i className="bi bi-people-fill"></i><br />
              <span>2000</span><br />
             <span>Lives touched</span>
         </div>
     </div>

      {/* div with icon end */}
      {/* programme lineup grid container start */}
      <div className="row row-cols-1 card-col container-fluid justify-content-center align-items-center">
         <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
             <p style={{ maxWidth: '100%', lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>
             <span>OUR EVENTS</span><br />
             <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>UPCOMING EVENT</span><br />
             <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>GRAND DURBAR-FUND RAISING</span><br />
             <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>14/01/2024</span><br />
             <span style={{ fontWeight: '700', fontSize: '0.9rem' }}>10:30 am</span><br />
             <span>Anyaano school park </span><br />
             <span>kumasi, Moshie Zongo </span>
             </p>
             
         </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 d-flex justify-content-center align-items-center" data-aos="zoom-in">
             <img src={lineup} alt="Logo" className='card-col img-fluid' style={{ maxWidth: '100%', borderTopRightRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px',   borderBottomLeftRadius: '70px',maxHeight: '35vh' }} />
          </div>
      </div>

      {/* programme line grid container end */}
     
    {/* three grid images start here */}


  
 <div className='container text-center' style={{fontWeight:'700'}}> 
     <p>HOW YOU CAN HELP</p>
     <a href="/join_us" type="button" className="btn btn-secondary btn-sm ">JOIN US </a>
     <a href="/Faqs" type="button" className="btn btn-success btn-sm d-block-inline m-5" >ASK US</a>
 </div>
 {/* import footer */}
 <Footer />     
 
</div>

    ); 
  
};


export default Home;


