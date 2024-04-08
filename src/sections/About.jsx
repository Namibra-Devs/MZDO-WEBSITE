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
      isolation: 'isolate'
   }}>
   <div className='container'>
      <h1 className='text-center text-light'
      style={{fontWeight: '700', paddingTop: '300px'}}>WHO ARE YOU</h1>
   </div>
 </div>
  <div className='container-fluid mt-5 container-text ' >
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
 <div className="container-fluid  " style={{margin: '0', padding: '0', backgroundColor:'whitesmoke'}}>
  <div className="row justify-content-center align-items-center" style={{margin: '0', padding: '0'}}> 
    {/* Text Content */}
    <div className="col-md-6 col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center mt-5" style={{margin: '0', padding: '0'}}>
     <p style={{fontWeight:'900'}}>OUR VISION</p>
      <p style={{maxWidth:'300px', lineHeight:'20px', letterSpacing:'1px', fontSize:'14px', fontWeight: '900px', margin: '0', padding: '0'}}>
        1. Education: Establishing an Educational Fund to support Brilliant But Needy Students. <br />
        2. Youth Employment: Support willing youth to acquire employable skills through the Apprenticeship Program. <br />
        3. Support for the Vulnerable: Provide financial support to the poor and vulnerable in the society (widows, aged, critically ill) <br />
        4. Security: Reconstituting the volunteer security body with strong collaboration with the police <br />
        5. Sanitation: Regular education and communal labor to keep the environment clean. <br />
       <br />
        The organisation was formed and owned by the chiefs, imams and pastors, assembly members, Mp and opinion leaders in moshie Zongo in trust for the people of moshie zongo.
      </p>
    </div>
   {/* Image */}
    <div className="col-md-6 col-sm-12 col-lg-6 mt-5 d-flex flex-column  justify-content-center align-items-center content " 
      style={{margin: '0', padding: '0',
      backgroundImage: `url(${student})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width:'50rem',
      position:'relative',
      isolation:'isolate'
      }}>
      <p style={{maxWidth:'300px', lineHeight:'20px', letterSpacing:'1px', fontSize:'14px', fontWeight: '900px', margin: '0', padding: '0', color:'white'}}>
        1. Education: Establishing an Educational Fund to support Brilliant But Needy Students. <br />
        2. Youth Employment: Support willing youth to acquire employable skills through the Apprenticeship Program. <br />
        3. Support for the Vulnerable: Provide financial support to the poor and vulnerable in the society (widows, aged, critically ill) <br />
        4. Security: Reconstituting the volunteer security body with strong collaboration with the police <br />
        5. Sanitation: Regular education and communal labor to keep the environment clean. <br />
        <br />
        The organisation was formed and owned by the chiefs, imams and pastors, assembly members, Mp and opinion leaders in moshie Zongo in trust for the people of moshie zongo.
      </p> 
     </div>
   </div>
 </div>

  <div className='text-center container-fluid mt-5  d-flex justify-content-center align-items-center text-light  mx-auto' 
    style={{backgroundColor:'#000000', marginBottom:'10px',margin:'12px', width:'80%',height:'10vh'}}>
    <span>
    <img src={search} alt="" style={{width:'3rem',}} />
    </span>
    <input className="form-control " type="search" placeholder="Search for something" aria-label="Search" style={{width:'20%' ,marginLeft:'120px'}}  />    
  </div>
  <div className='container-fluid w-50 mt-5' >
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
