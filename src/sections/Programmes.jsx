import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Programmes.css';
import smallboy from '../assets/images/small boy.jpg';
import scholarships from '../assets/images/scholarship9.jpg';
import muslimLeaders from  "../assets/images/group of-muslim-leaders.png"
import benificial from '../assets/images/beneficiaries.jpeg';
import health from '../assets/images/health.jpg'
import job from '../assets/images/job.jpg'
import group1 from "../assets/images/group 1.jpg"





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
                        width: "25rem",
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
                        width: "25rem",
                         borderTopRightRadius: '70px', 
                        borderTopLeftRadius: '70px',
                         borderBottomRightRadius: '70px',
                         borderBottomLeftRadius: '70px',
                         boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)'
                        
                     }}>
                     <img src={job} alt="Logo" className='card-col img-fluid' style={{ height: "20vh", width:'100%', borderTopRightRadius: '70px', borderTopLeftRadius: '70px' }}  />
                     <button className="card-title text-center mt-5 mb-2 p-2   " style={{border:"20px", borderRadius:'5px' ,backgroundColor:"red" ,color:'white',fontSize:'30px'}}>EMPLOYMENT</button>

                         <p style={{lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>
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

<div className="container-fluid mt-5 d-flex justify-content-center gap-5">
    {/* First row */}
    <div className="row row-image justify-content-center">
        <div className="col-sm-3 text-white d-flex justify-content-center">
            <div className="card" style={{ width: "25rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '70px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img src={job} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px' ,objectFit: "cover"}} />
                <div className="card-body">
                    <h5 className="card-title text-center mb-2 " style={{fontWeight:'bold',fontSize:"25px"}}>APPRENTICESHIPS SUPPORT</h5>
                    <p className="card-text text-center" style={{ lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>Through our partnership with dressmakers 
                    association, hairdressers associations and shoe makers associations, 
                    we are provide support to would be apprentice buy providing them the
                     necessary tools and payment for expenses. We also provide support in
                      terms of allowance to apprentice so they can focus on their training.
                    After graduation from their apprentice, we also support them with seed capital to put up their own shop. 
</p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-white d-flex justify-content-center ">
            <div className="card" style={{  width: "25rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '70px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img src={group1} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px',objectFit: "cover" }} />
                <div className="card-body">
                    <h5 className="card-title text-center" style={{fontWeight:'bold',fontSize:"25px"}}>DEVELOPMENTAL PROJECTS</h5>
                    <p className="card-text text-center" style={{ lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>We acknowledge the government bears
                     the larger responsibility in providing development projects. 
                     To contribute our quota in making life easy for our people,
                      we also provide(directly and indirectly through other agencies) 
                      development in access to clean drinking water to our people, provision 
                      of furniture and 
                    other supports to public schools in the community.
                </p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-white d-flex justify-content-center ">
            <div className="card" style={{  width: "25rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '70px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img src={health} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px' ,objectFit: "cover"}} />
                <div className="card-body">
                    <h5 className="card-title text-center" style={{fontWeight:'bold',fontSize:"25px"}}>HEALTH SUPPORT & SCREENING</h5>
                    <p className="card-text text-center" style={{ lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>
                                        We also provide regular health screening to residents of the community
                                        and provide assistance 
                                        in payment of medical bills for residents 
                              </p>
                </div>
            </div>
        </div>
        <div className="col-sm-3 text-white d-flex justify-content-center ">
            <div className="card" style={{  width: "25rem", borderTopRightRadius: '70px', borderTopLeftRadius: '70px', borderBottomRightRadius: '70px', borderBottomLeftRadius: '70px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
                <img src={muslimLeaders} className="card-img-top" alt="..." style={{ height: "20vh", borderTopRightRadius: '70px', borderTopLeftRadius: '70px' ,objectFit: "cover"}} />
                <div className="card-body">
                    <h5 className="card-title text-center" style={{fontWeight:'bold',fontSize:"25px"}}>COMMUNITY ENGAGEMENT</h5>
                    <p className="card-text text-center" style={{ lineHeight: '1.5', letterSpacing: '1px', fontSize: '1rem', fontWeight: '700', textAlign: 'center' }}>
                    As our civil duty and also to make our people informed about national issues, 
                    regular community engagement are held to sensitize the community about 
                    current issues in the country.
                              </p>
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