import React from 'react';
import './About.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import smallboy from '../assets/images/small boy.jpg'; 
import student from '../assets/images/student.jpg'
import search from  '../assets/images/search icon.png'
const About = () => {
return (
<div>
  <Navbar />
      
  <div className='container-fluid event-bg' 
    style=
    {{  
      backgroundImage: `url(${smallboy})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat', 
      backgroundPosition: 'center',
      height: '80vh',
      position: 'relative',
      isolation: 'isolate',
      objectFit:'cover'
   }}>
   <div className='container'>
      <h1 className='text-center text-light'
      style={{fontWeight: '700', paddingTop: '300px'}}>WHO ARE YOU</h1>
   </div>
 </div>
  <div className='container-fluid mt-5 container-text text-center ' >
      <h6 className=''> <span >MOSHIE ZONGO DEVELOPMENT ORGANISATION (MZDO) </span> <br />
        is a company limited BY guarantee incorporated on the 25th day of May, 2023. <br />
        The purpose for incorporating MDO is to promote development in moshie zongo with special emphasis. <br />
        Education: Establishing an Educational Fund to support Brilliant But Needy Students. <br />
        Youth Employment: Support willing youth to acquire employable skills through the ApprenticeshipProgram. <br />
        Support for the Vulnerable: Provide financial support to the poor and vulnerable in the society (widows, aged, <br />
        critically ill)
      </h6>
      <h6 className='mt-5'>
        Security: Reconstituting the volunteer security body with strong collaboration with the police <br />
        Sanitation: Regular education and communal labor to keep the environment clean. <br />
        The organisation was formed and owned by the chiefs, imams and pastors, assembly members, Mp and opinion leaders in moshie <br />
        Zongo in trust for the people of moshie zongo.
      </h6>
  </div>
 

 
  <div className='container-fluid text-center  mt-5' >
    <h6 className='mt-5' style={{fontWeight:'700',}}>FREQUENTLY ASKED QUESTIONS </h6> 
    <p style={{fontWeight:'700'}}>Have any questions?</p>
   <div className='mb-5' 
     style=
     {{
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
   <a href='/update' type="button" className="btn btn-success btn-sm d-block-inline m-5" >JOIN US</a>
   <a href='/Donation' type="button" className="btn btn-secondary btn-sm ">DONATE</a>
 </div>
  <Footer />
</div>
  );
}


export default About;
