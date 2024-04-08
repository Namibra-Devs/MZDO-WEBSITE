import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import boys from '../assets/images/boys.jpg'
const  News_update = () =>{
return (
<div>
   <Navbar />
  <div className="container-fluid">
   <div className="row justify-content-center align-items-center">
     <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">
       <img 
       src={boys} 
       alt="Logo" 
       className="img-fluid rounded-start" style={{ borderTopRightRadius: '40%',width:'40rem',maxHeight: '60vh'}}/>
     </div>
      <div className="col-md-6 col-sm-12 mt-5">
        <div>
          <p className='mt-3' style={{ maxWidth: '600px',fontSize:'24px',lineHeight:'40px',fontWeight:'600'}}>  
            Education: Establishing an Educational Fund to support 
            Brilliant But Needy Students. Youth Employment: Support
            willing youth to acquire employable skills through the
            Apprenticeship Program. Support for the Vulnerable: 
            Provide financial support to the poor and vulnerable in 
            he society (widows, aged, critically ill)
         </p>
         <p className='mt-3' style={{ maxWidth: '600px',fontSize:'24px',lineHeight:'40px', fontWeight:'600'}}>
            Security: Reconstituting the volunteer security body with
           strong collaboration with the police Sanitation: Regular 
           education and communal labor to keep the environment 
            clean.
         </p >
         <p className='mt-3'  style={{ maxWidth: '600px',fontSize:'24px',lineHeight:'40px', fontWeight:'600'}}>
            Education: Establishing an Educational Fund to support 
           Brilliant But Needy Students. Youth Employment: Support
            willing youth to acquire employable skills through the
         </p>
       </div>
     </div>
   </div>
 </div>
 <div className='container' style={{fontSize:'24px',fontWeight:'600'}}>
    <p>
     Education: Establishing an Educational Fund to support Brilliant But Needy Students.Youth Employment:
     Support willing youth to acquire employable skills through the Apprenticeship Program. Support for the
     Vulnerable: Provide financial support to the poor and vulnerable in the society (widows, aged, critically
     ill) Security: Reconstituting the volunteer security body with  strong collaboration with the police
     Sanitation: Regular education and communal labor to keep the environment clean.
    </p>
    <p className='mt-5'>
      Education: Establishing an Educational Fund to support Brilliant But Needy Students.Youth Employment:
      Support willing youth to acquire employable skills through the Apprenticeship Program. Support for the
      Vulnerable: Provide financial support to the poor and vulnerable in the society (widows, aged, critically
      ill) Security: Reconstituting the volunteer security body with  strong collaboration with the police
     Sanitation: Regular education and communal labor to keep the environment clean.
    </p>

      <p  className='mt-5'>
        Education: Establishing an Educational Fund to support Brilliant But Needy Students.Youth Employment:
        Support willing youth to acquire employable skills through the Apprenticeship Program. Support for the
        Vulnerable: Provide financial support to the poor and vulnerable in the society (widows, aged, critically
       ill) Security: Reconstituting the volunteer security body with  strong collaboration with the police
        Sanitation: Regular education and communal labor to keep the environment clean.
      </p>

      <p  className='mt-5'>
       Education: Establishing an Educational Fund to support Brilliant But Needy Students.Youth Employment:
       Support willing youth to acquire employable skills through the Apprenticeship Program. Support for the
       Vulnerable: Provide financial support to the poor and vulnerable in the society (widows, aged, critically
       ill) Security: Reconstituting the volunteer security body with  strong collaboration with the police
       Sanitation: Regular education and communal labor to keep the environment clean.
      </p>
      <p className=''> 
        <i className='bi bi-calendar m-3'></i> January 11,2024
        <span > <i className='bi bi-clock m-3'></i> 4:30</span>
        <span > <i className='bi bi-chat-left-text-fill m-3'></i>3 COMMENTS</span>
      </p>
 </div>
  <div className='container mt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} >
    <label style={{fontSize: '20px', fontWeight: '600',  }} > Leave a comment <br />comment</label>
    <textarea style={{borderRadius:'30px',backgroundColor:'#F2F2F2',border:'0', width: '50rem',marginBottom:'10px'}} name="" id="" cols="50" rows="8"></textarea>
    <label style={{fontSize: '20px', fontWeight: '600',  }} > Leave a comment</label>
    <input  style={{borderRadius:'30px',backgroundColor:'#F2F2F2',border:'0', width: '50rem',height:'10vh'}} type="text" name="Email" id="" />
    <i class="bi bi-check2-square"></i> <span>Remember me</span>
    <a href="" className='btn btn-success btn-sm d-flex mx-2 mt-2'>POST COMMENTS <i class="bi bi-send"></i></a>   
  </div>
     <div className='d-flex justify-content-center mt-4'>
        <a href='' type="button" className="btn btn-success btn-sm d-flex mx-2">DONATE</a>
        <a href='/join_us' type="button" className="btn btn-secondary btn-sm d-flex mx-2">BECOME A MEMBER</a>
     </div>
      <Footer />  
</div>
  )
 }
 export default News_update
