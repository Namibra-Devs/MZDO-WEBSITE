import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Programmes.css';
import smallboy from '../assets/images/small boy.jpg';
import scholarships from '../assets/images/scholarship9.jpg';
import deploymental from '../assets/images/deploymental group 1.jpeg';
import benificial from '../assets/images/beneficiaries.jpeg';
import donation from '../assets/images/kapower-donate-to-muslim.jpeg'
import job from '../assets/images/job.jpg'




import muslimleaders from '../assets/images/group of-muslim-leaders.png';

const Programmes = () => {
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
      style={{fontWeight: '700', paddingTop: '300px'}}>OUR PROGRAMMES</h1>
   </div>
 </div>
          
                     <div className="row row-cols-1 card-col container-fluid justify-content-center align-items-center mt-5 gap-5">
                     <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center " style={{
                        width: "18rem",
                         borderTopRightRadius: '70px', 
                        borderTopLeftRadius: '70px',
                         borderBottomRightRadius: '70px',
                         borderBottomLeftRadius: '70px',
                         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                        
                     }}>
                     <img src={scholarships} alt="Logo" className='card-col img-fluid' style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px' }}  />
                     <button className="card-title text-center mt-5 mb-2 p-2   " style={{border:"20px", borderRadius:'5px' ,backgroundColor:"red" ,color:'white',fontSize:'30px'}}>SCHOLARSHIP</button>

                         <p style={{ maxWidth: '100%', lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>
                     
                         We have partnerships with educational institutions in the community to 
                         provide scholarships to brilliant but needy students in the community.
                          Partner schools includes Premier Nurses’ Training College
                          and Naz Earlychildhood Development Centre.
                         </p>
                         
                     </div>
                     <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center " style={{
                        width: "18rem",
                         borderTopRightRadius: '70px', 
                        borderTopLeftRadius: '70px',
                         borderBottomRightRadius: '70px',
                         borderBottomLeftRadius: '70px',
                         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                        
                     }}>
                     <img src={job} alt="Logo" className='card-col img-fluid' style={{ height: "20vh", width:'100%', borderTopRightRadius: '70px', borderTopLeftRadius: '70px' }}  />
                     <button className="card-title text-center mt-5 mb-2 p-2   " style={{border:"20px", borderRadius:'5px' ,backgroundColor:"red" ,color:'white',fontSize:'30px'}}>EMPLOYMENT</button>

                         <p style={{ maxWidth: '100%', lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>
                         We provide employment through our income generating ventures.
                         We also train graduates in the community on how to be marketable in the job market.

                         </p>
                         
                     </div>
                  </div>
            
            <hr style={{ width: '90%' }} />

            <div className="row mt-5 justify-content-center align-items-center">
    {/* First Card */}
    

   
</div>
<hr style={{ width: '90%' }} />

<div className="container-fluid mt-5 d-flex justify-content-center">
    {/* First row */}
    <div className="row row-image justify-content-center">
        <div className="col-sm-3 text-white d-flex justify-content-center">
            <div className="card" style={{ width: "18rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '70px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img src={deploymental} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px' }} />
                <div className="card-body">
                    <h5 className="card-title text-center">DEVELOPMENTAL PROJECTS</h5>
                    <p className="card-text text-center" style={{ fontSize: '12px' }}>WE RENOVATES AND BUILD A BETTER COMMUNITY </p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-white d-flex justify-content-center ">
            <div className="card" style={{  width: "18rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '70px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img src={benificial} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px' }} />
                <div className="card-body">
                    <h5 className="card-title text-center">TRAININGS</h5>
                    <p className="card-text text-center" style={{ fontSize: '12px' }}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS </p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-white d-flex justify-content-center ">
            <div className="card" style={{  width: "18rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '70px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img src={donation} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px' }} />
                <div className="card-body">
                    <h5 className="card-title text-center">TRAININGS</h5>
                    <p className="card-text text-center" style={{ fontSize: '12px' }}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS </p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-white d-flex justify-content-center ">
            <div className="card" style={{  width: "18rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '70px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img src={muslimleaders} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px' }} />
                <div className="card-body">
                    <h5 className="card-title text-center">TRAININGS</h5>
                    <p className="card-text text-center" style={{ fontSize: '12px' }}>WE HELP AND OFFER ASSISTACE TO TRAIN MEMBERS ON HANDY <br /> WORK JOBS </p>
                </div>
            </div>
        </div>
    </div>
</div>


   
    <div className='container-fluid'>
    <h6 className='text-center mt-4' style={{fontWeight:'700'}}>HOW YOU CAN HELP</h6>
    <div className='d-flex justify-content-center mt-4'>
        <button type="button" className="btn btn-success btn-sm d-flex mx-2">JOIN  US</button>
        <a href='/Donation' type="button" className="btn btn-secondary btn-sm d-flex mx-2">DONATE</a>
</div>
</div>

            <Footer />

        </div>

    )
}

export default Programmes;