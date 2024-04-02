import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import muslimLeaders from "../assets/images/group of-muslim-leaders.png"
import lineup from "../assets/images/lineup.jpg"
import boys from "../assets/images/boys.jpg"
import benificial from "../assets/images/beneficiaries.jpeg"
import donate from "../assets/images/kapower-donate-to-muslim.jpeg"
import "./Event.css"
const Event = ()=> {
    return (
       <div>
         <Navbar />
         <div className='container-fluid event-bg' 
        style={{  backgroundImage: `url(${muslimLeaders})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        height:'80vh',
        width:'120rem',
        position:'relative',
        isolation:'isolate'
        
          }}>
        <div className='container '>
        <h1 className='text-center text-light'
        style={{fontWeight:'700', paddingTop:'300px' }}>EVENTS</h1>
        </div>
        </div>
        
        <div className="row row-cols-1  card-col container-fluid justify-content-center align-items-center  ">
            
            <div className="col col-md-6 col-sm-12 col-lg-6 d-flex flex-column justify-content-center align-items-center">
             
              
              
              <h1 className="mb-5"  style={{fontWeight:'700'}}>UPCOMING EVENT</h1> 
              <h6 className="mb-5" style={{fontWeight:'700'}}>GRAND DURBAR-FUND RAISING</h6> 
            
             <p  style={{fontWeight:'700'}}>  
               <span><i  className="bi bi-calendar" style={{color:'green'}}></i> </span> 
             14/01/2024</p> 
               <p  className="mb-5"  style={{fontWeight:'700'}}>
                <span><i  className="bi bi-clock" style={{color:'green'}}></i></span>
                10:30 am


               </p>
              <p className="mb-5"  style={{fontWeight:'700'}}>
              <span><i  className="bi bi-geo-alt-fill" style={{color:'green'}}></i></span>
                Anyaano school park <br /> kumasi, Moshie Zongo 
                </p>
              
              
              <div className='container-fluid'>
        <h6 className='text-center mt-4' style={{fontWeight:'700'}}>HOW YOU CAN HELP</h6>
      
    </div>
          </div>
    
                      <div className="col col-img col-md-6 col-sm-12 col-lg-6 mt-5 " >
                       <img src={lineup} alt="Logo" className='card-col' style={{width:'35rem', borderTopRightRadius:'15%', borderBottomLeftRadius:'15%', height:'60vh'}} />
                       
                      
                       <div>
                       
                       
                       </div>
                      
                      
                        
                      </div>
                      <div className="container-fluid">
          <div>
              <h6 className='text-center mt-5'>
              OUR COMMUNITY<br />

              </h6>
          </div>

          <div className="container ">
              <div className="row mx-auto justify-content-center align-items-center ">
                  <div className="col col-12 col-md-4">
                      <div className="card" style={{width: "20rem"}} >
                          <img src={boys} className="card-img-top" alt="manspeaking" style={{height:"30vh",}}/>
                      </div>
                  </div>

                  <div className="col col-12 col-md-4">
                      <div className="card" style={{width: "20rem"}}>
                          <img src={benificial} className="card-img-top" alt="womanspeaking" style={{height:"30vh",}}/>
                      </div>
                  </div>

                  <div className="col col-12 col-md-4">
                      <div className="card" style={{width: "20rem"}} >
                          <img src={donate} className="card-img-top" alt="youth" style={{height:"30vh" ,}}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
                    
              </div>
         <Footer />

       </div>



    )
}
export default Event