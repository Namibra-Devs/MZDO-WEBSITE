import React from "react";
import benifial from '../assets/images/beneficiaries.jpeg'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Join_us.css'

const Join_us = () => {
    return (
        
        <div>
            <Navbar />
        <div className='container-fluid join-bg' 
        style={{  backgroundImage: `url(${benifial})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        height: '80vh',
        position: 'relative',
        isolation: 'isolate'
        
          }}>
        <div className='container '>
        <h1 className='text-center text-light'
        style={{fontWeight:'700', paddingTop:'300px' }}>JOIN US</h1>
        </div>
        </div>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    {/* First Div with Text */}
                    <div className="d-flex align-items-center">
                        <div className="me-3">
                            <h5 style={{fontWeight:'700'}}>We Need Your <br /> Help!</h5>
                            <p style={{lineHeight:'40px',maxWidth:'500px' ,fontWeight:'700'}}>
                            MOSHIE ZONGO DEVELOPMENT ORGANISATION (MZDO)
is a company limited BY guarantee incorporated on the 25th 
day of May, 2023.
The purpose for incorporating MDO is to promote development
in moshie zongo with special emphasis.
</p>
<p  className="mt-5" style={{lineHeight:'40px',maxWidth:'500px',fontWeight:'700'}}>
1. Education: Establishing an Educational Fund to support
    Brilliant But Needy Students.
2. Youth Employment: Support willing youth to acquire 
    employable skills through the Apprenticeship Program.
3. Support for the Vulnerable: Provide financial support to the
    poor and vulnerable in the society (widows, aged, critically ill)
4. Security: Reconstituting the volunteer security body with 
    strong collaboration with the police
5. Sanitation: Regular education and communal labor to keep
    the environment clean.
    </p>
 <p className="mt-5" style={{lineHeight:'40px',maxWidth:'500px',fontWeight:'700'}}>
    The organization was formed and owned by the chiefs, 
    imams and pastors, assembly members, Mp and opinion
    leaders in moshie Zongo in trust for the people of moshie
    zongo.
    </p>
    <h1 >Requirement</h1>
    <p style={{lineHeight:'40px',maxWidth:'500px',fontWeight:'700'}}> The organization was formed and owned by the chiefs, 
    imams and pastors, assembly members, Mp and opinion
    leaders in moshie Zongo in trust for the people of moshie
    </p>
                           
                        </div>
                        <div className="vertical-line line"></div>
                    </div>
                </div>
                <div className="col-md-6">
                    {/* Second Div with Input */}
                    <div className="container" style={{fontWeight:'700'}}>
                        <h4 style={{fontWeight:'700'}}>Sign up form</h4>
                        <p style={{fontWeight:'700'}}>The following info is required</p>
                        <label className='mt-5'  >Full Name</label>
                        <input type="text" className="form-control mt-5" placeholder="Enter your name here" style={{borderRadius:'30px'}} />
                        <label className='mt-5'   >Phone Number</label>
                        <input type="text" className="form-control mt-5" placeholder="Enter your number here" style={{borderRadius:'30px'}}  />
                        <label className='mt-5'   >Email Address</label>
                        <input type="text" className="form-control mt-5" placeholder="Enter your email" style={{borderRadius:'30px'}}  />
                        <label className='mt-5'  >Address</label>
                        <input type="text" className="form-control mt-5" placeholder="Enter your address" style={{borderRadius:'30px'}}  />
                        <label className='mt-5'  >Occupation</label>
                        <input type="text" className="form-control mt-5" placeholder="Enter your occupation" style={{borderRadius:'30px'}}  />

                    </div>
                    <button className="btn btn-primary btn3 mt-5 ">SUMMIT</button>
                    
                </div>
            </div>
         
        </div>
        <div className='container-fluid'>
    <h6 className='text-center mt-4' style={{fontWeight:'700'}}>HOW YOU CAN HELP</h6>
    <div className='d-flex justify-content-center mt-4'>
   

    <a href="/join_us" className='btn btn-success btn-sm d-flex mx-2'> ASK US </a>
    <a href="/Donation" className='btn btn-secondary btn-sm d-flex mx-2'> DONATION </a>


   
</div>
</div>
      <Footer />


        </div>
    );
} 

export default Join_us;
