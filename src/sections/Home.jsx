
import React, { useEffect } from 'react';
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
import search from "../assets/images/search icon.png"
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
            <a href="http://localhost:5173/Contact"  className="btn btn-warning m-4 text-success " style={{marginTop:'20px'}}>CONTACT US</a>
            <a href="http://localhost:5173/About"  className="btn btn-success m-4" style={{marginTop:'20px'}}>READ MORE</a>
        </div>
        <div className="carousel-inner carousel-inner-img">
           <div className="carousel-item active" data-bs-interval="10000">
               <img src={muslimLeaders} className="d-block w-100" alt="muslimLeaders" />
             <div className="carousel-caption d-none d-md-block">
                  <h2 className="imgtext">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
             </div>
           </div>
           <div className="carousel-item" data-bs-interval="2000">
               <img src={group1} className="d-block w-100" alt="group1" />
             <div className="carousel-caption d-none d-md-block">
                 <h2 className="imgtext">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
             </div>
           </div>
           <div className="carousel-item">
               <img src={group2} className="d-block w-100" alt="group2" />
             <div className="carousel-caption d-none d-md-block">
                 <h2 className="imgtext">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</h2>
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
    <div className="container text-center">         
      <div className="row row-cols-1 row-cols-md-2 grid-container">
         {/* First Column */}
         <div className="col d-flex flex-column justify-content-between">
             <div 
                 className="bg-green rounded-circle mx-auto mb-3"
                 style={{ width: '4rem', height: '8vh' }}>
              </div>
              <img src={logo} alt="Logo" className='logo2 mx-auto mb-3' style={{ width: '16rem' }} />
             <div 
                 className="bg-black rounded-circle mx-auto mb-3"
                 style={{ width: '4rem', height: '8vh' }}>
             </div>   
         </div>
        
         {/* Second Column */}
         <div className="col text-start" style={{ fontSize: '12px', lineHeight: '27px', maxWidth: '400px' }}>
             <h5 className='font-weight-bold' style={{ color: '#00821C', marginTop: '30px', fontSize: '18px' }}>
                 Moshie Zongo Development Organization
             </h5>
             <p className='mt-3' style={{fontSize:'28px', fontWeight:'800'}}>MOTTO :</p>
             <p className='h6 font-weight-bold' style={{fontSize:'24px', fontWeight:'600'}}>“Development through education, love and care”</p>
             <p className='font-weight-bold'  style={{fontSize:'24px', fontWeight:'400'}}>
                 MOSHIE ZONGO DEVELOPMENT ORGANISATION (MZDO)
                 is a company limited BY guarantee incorporated on the 
                 25th day of May, 2023. <br />
                 The purpose for incorporating MDO is to promote 
                 development in moshie zongo with special emphasis.
             </p>
             <p className='mt-4' style={{fontSize:'24px', fontWeight:'400',fontFamily:'sans-serif'}}>
                 1. Education: Establishing an Educational Fund to 
                 support Brilliant But Needy Students. <br />
                 2. Youth Employment: Support willing youth to acquire
                 employable skills through the 
                 Apprenticeship Program.  
             </p>
             <a href="/About" className="btn btn-success mt-4"> READ MORE <i className="bi bi-arrow-right"></i></a>
         </div>   
     </div>
 </div>

    {/* card section */}
    <div className="container-fluid">
     <div>
         <h6 className='text-center mt-5' style={{ fontSize: '1.5rem', fontWeight: '600', fontFamily: 'sans-serif' }}>
             OUR SERVICES<br />
             <span>Our Service</span>
         </h6>
     </div>

     <div className="container" style={{}}>
         <div className="row mx-auto justify-content-center align-items-center" style={{ margin: '2rem 0' }}> 
             {/* Card 1 */}
             <div className="col-lg-2 col-md-3 col-sm-6 mb-4 m-lg-5">
                 <div className="card" style={{ width: "18rem", borderTopRightRadius:'70px',  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} data-aos="fade-left">
                      <img src={deploymental} className="card-img-top" alt="deploymental" style={{ height: "20vh", borderTopRightRadius:'70px' }} />
                     <div className="card-body">
                         <h5 className="card-title text-center" style={{ fontSize: '1rem', fontWeight: '600', fontFamily: 'sans-serif' }}>
                            DEVELOPMENTAL <br /> PROJECT
                         </h5>
                         <p className="card-text text-center" style={{ fontSize: '0.9rem' }}>
                            WE RENOVATE AND BUILD <br /> A BETTER COMMUNITY
                         </p>
                     </div>
                 </div>
             </div>
            
             {/* Card 2 */}
             <div className="col-lg-2 col-md-3 col-sm-6 mb-4 m-lg-5">
                 <div className="card" style={{ width: "18rem", borderTopRightRadius:'70px',  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'  }} data-aos="fade-left">
                     <img src={benificial} className="card-img-top" alt="benificial" style={{  height: "20vh", borderTopRightRadius:'70px'}} />
                     <div className="card-body">
                         <h5 className="card-title text-center" style={{ fontSize: '1rem', fontWeight: '600', fontFamily: 'sans-serif' }}>
                             TRAININGS
                         </h5>
                         <p className="card-text text-center" style={{ fontSize: '0.9rem' }}>
                             WE HELP AND OFFER ASSISTANCE TO TRAIN MEMBERS ON HANDY WORK JOBS
                         </p>
                     </div>
                  </div>
             </div>

             {/* Card 3 */}
             <div className="col-lg-2 col-md-3 col-sm-6 mb-4 m-lg-5">
                 <div className="card" style={{ width: "18rem", borderTopRightRadius:'70px',  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} data-aos="fade-left">
                     <img src={donation} className="card-img-top" alt="..." style={{  height: "20vh", borderTopRightRadius:'70px'}} />
                     <div className="card-body">
                         <h5 className="card-title text-center" style={{ fontSize: '1rem', fontWeight: '600', fontFamily: 'sans-serif' }}>
                            DONATIONS
                         </h5>
                         <p className="card-text text-center" style={{ fontSize: '0.9rem' }}>
                              AS PART OF OUR BELIEFS IN GIVING, WE FULFILL THAT BY GIVING BACK 
                              TO THE NEEDY IN THE COMMUNITY
                          </p>
                     </div>
                 </div>
             </div>

             {/* Card 4 */}
             <div className="col-lg-2 col-md-3 col-sm-6 mb-4 m-lg-5">
                 <div className="card" style={{ width: "18rem", borderTopRightRadius:'70px',  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} data-aos="fade-right">
                     <img src={boys} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius:'70px' }} />
                     <div className="card-body">
                         <h5 className="card-title text-center" style={{ fontSize: '1rem', fontWeight: '600', fontFamily: 'sans-serif' }}>
                            DONATIONS
                         </h5>
                         <p className="card-text text-center" style={{ fontSize: '0.9rem' }}>
                             AS PART OF OUR BELIEFS IN GIVING, WE FULFILL THAT BY GIVING BACK TO
                              THE NEEDY IN THE COMMUNITY
                          </p>
                      </div>
                  </div>
             </div>

             {/* Card 5 */}
             <div className="col-lg-2 col-md-3 col-sm-6 mb-4 m-lg-5">
                 <div className="card" style={{width: "18rem", borderTopRightRadius:'70px',  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} data-aos="fade-right">
                     <img src={smallboy} className="card-img-top" alt="..." style={{  height: "20vh", borderTopRightRadius:'70px'}} />
                     <div className="card-body">
                         <h5 className="card-title text-center" style={{ fontSize: '1rem', fontWeight: '600', fontFamily: 'sans-serif' }}>
                            DONATIONS
                         </h5>
                         <p className="card-text text-center" style={{ fontSize: '0.9rem' }}>
                             AS PART OF OUR BELIEFS IN GIVING, WE FULFILL THAT BY GIVING BACK TO 
                             THE NEEDY IN THE COMMUNITY
                         </p>
                     </div>
                 </div>
              </div>
          </div>
     </div>
 </div>



    
     {/* first two divs with text strat here*/}
 <div className="container">
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
               <a href="/Event" className="btn btn-success mt-3">READ MORE <i className="bi bi-arrow-right"></i></a>
         </div>
         <div className="col-lg-6 col-md-6 col-sm-12 mt-5" data-aos="flip-right">
             <img src={deploymental} alt="Logo" className='card-col img-fluid' style={{ width: '100%', borderTopRightRadius: '30%', borderBottomLeftRadius: '30%',boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'  }} />
            
             <p style={{ fontWeight: 'bold', fontSize: '1rem', marginTop: '1rem' }}>
                 <span className="inline-p">CURRENTS FUNDS<br />300000GHS</span>
                 <span className="vertical-line mx-3"></span>
                 <span className="inline-p">15%</span>
                 <span className="vertical-line mx-3"></span>
                 <span className="inline-p">TARGETS<br />300000GHS</span><br />
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
            margin: '12px', 
            width: '80%', 
            minHeight: '10vh', 
            maxHeight: '10vh' 
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
              <div className='container-fluid'>
                 <h6 className='text-center mt-4' style={{ fontWeight: '700' }}>HOW YOU CAN HELP</h6>
                  <div className='d-flex justify-content-center mt-4'>
                      <a href="/join_us" className='btn btn-success btn-sm mx-2'>JOIN US</a>
                      <a href="/Event" className='btn btn-secondary btn-sm mx-2'>SEE ALL</a>
                 </div>
              </div>
         </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5 d-flex justify-content-center align-items-center" data-aos="zoom-in">
             <img src={lineup} alt="Logo" className='card-col img-fluid' style={{ maxWidth: '100%', borderTopRightRadius: '30%', borderBottomLeftRadius: '30%', maxHeight: '35vh' }} />
          </div>
      </div>

      {/* programme line grid container end */}
      <div className='text-center container-fluid mt-5  d-flex justify-content-center align-items-center text-light  mx-auto' 
           style={{backgroundColor:'#000000', marginBottom:'10px',margin:'12px', width:'80%',height:'10vh'}}>
           <span>
           <img src={search} alt="" style={{width:'3rem',}} />
           </span>
          <input className="form-control " type="search" placeholder="Search for something" aria-label="Search" style={{width:'20%' ,marginLeft:'120px'}}  />  
      </div>
    {/* three grid images start here */}
 <div className="container-fluid">
       < div>
         <h6 className='text-center mt-5'>
             OUR COMMUNITY<br />
             <span>WE COMPROMISE OF SKILLED <br /> AND PASSIONATE MEMBERS</span>
         </h6>
     </div>
     <div className="container">
        <div className="row justify-content-center align-items-center">

            <div className="col-12 col-md-4 mb-4">
                <div className="card" style={{ width: "100%" }} data-aos="zoom-in">
                    <img src={manspeaking} className="card-img-top" alt="manspeaking" style={{ height: "30vh" }} />
                </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
                <div className="card" style={{ width: "100%" }} data-aos="zoom-in">
                    <img src={womanspeaking} className="card-img-top" alt="womanspeaking" style={{ height: "30vh" }} />
                </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
                <div className="card" style={{ width: "100%" }} data-aos="zoom-in">
                    <img src={youth} className="card-img-top" alt="youth" style={{ height: "30vh" }} />
                </div>
            </div>

        </div>
      </div>
  </div>
    {/* three grid images end here */}
    <div className="row row-cols-1 card-col container-fluid justify-content-center align-items-center" style={{ margin: '0', padding: '0' }}>
     <div className="col col-img col-lg-6 col-md-6 col-sm-12 mt-5 d-flex flex-column justify-content-center align-items-center" style={{ margin: '0', padding: '0' }} data-aos="flip-left">
         <img src={google} alt="Logo" className='card-col img-fluid' style={{ maxWidth: '100%', height: 'auto', maxHeight: '35vh' }} />
     </div>
     <div className="col col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center" style={{ margin: '0', padding: '0' }}>
         <p  style={{ maxWidth: '600px', lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '600', margin: '0', padding: '0', textAlign: 'center' }}>
              Fund raising to support any developmental activities, by so doing we have selected Zonal Representative for all the 10 Zones in the community. with the funds we can help supports brilliants but needy students renovates various damaged and dangerous school and hospital structures in the community as well help support anyone with any challenge financially....
         </p>
     </div>
 </div>

 <div className='container'>
      <p className='text-center mt-5' style={{fontSize:'20px', fontWeight: '600', }}>
          Fund raising  to support any developmental activities, by so doing we have 
          selected Zonal Representative for all the 10 Zones in the <br /> community. with the 
          funds we can help supports brilliants but needy students renovates various damaged 
         and dangerous school and <br /> hospital structures in
          the community as well help support anyone with any challenge financially.... 
     </p>
     <p className='text-center mt-5' style={{fontSize:'20px', fontWeight: '600', }}>
         Fund raising  to support any developmental activities, by so doing we have 
         selected Zonal Representative for all the 10 Zones in the <br /> community. with the 
         funds we can help supports brilliants but needy students renovates various damaged 
          dangerous school and <br /> hospital structures in
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
          <p style={{fontWeight:'600',fontSize:'20px'}}>
             <span style={{fontWeight:'700',fontSize:'30px'}}>How do I donate?</span> <br />
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
          <p style={{fontWeight:'600',fontSize:'20px'}}>
             <span className='mt-5' style={{fontWeight:'700',fontSize:'30px'}}>How do I become a member?</span> <br />
             You can donate through the button on the navigation bar.
             Also, please contact us for more information on this. 
             Our agents will be coming around, and you can donate 
             through them, and we will receive your donation.
         </p>
     </div>
 </div>
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


