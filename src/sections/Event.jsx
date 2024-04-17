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
     style={{  
        backgroundImage: `url(${muslimLeaders})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        backgroundPosition: 'center',
        height: '80vh',
        position: 'relative',
        isolation: 'isolate'
     }}>
     <div className='container'>
        <h1 className='text-center text-light'
        style={{fontWeight: '700', paddingTop: '300px'}}>EVENTS</h1>
     </div>
 </div>

        
 <div className="container-fluid">
    <div className="row justify-content-center align-items-center">

        <div className="col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center">

            <h5 className="mb-4" style={{fontWeight:'700'}}>UPCOMING EVENT</h5>
            <h6 className="mb-4" style={{fontWeight:'700', fontSize:'18px'}}>GRAND DURBAR-FUND RAISING</h6>
            <p style={{fontWeight:'400', fontSize:'18px'}}>
                <span><i className="bi bi-calendar" style={{color:'green'}}></i></span>
                14/01/2024
            </p>
            <p style={{fontWeight:'400', fontSize:'18px'}}>
                <span><i className="bi bi-clock" style={{color:'green'}}></i></span>
                10:30 am
            </p>
            <p style={{fontWeight:'400', fontSize:'18px'}}>
                <span><i className="bi bi-geo-alt-fill" style={{color:'green'}}></i></span>
                Anyaano school park <br /> kumasi, Moshie Zongo
            </p>

            <div className="container">
                <h6 className="text-center mt-4" style={{fontWeight:'700', fontSize:'18px'}}>HOW YOU CAN HELP</h6>
            </div>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 mt-5 d-flex justify-content-center align-items-center">
             <img src={lineup} alt="Logo" className='card-col img-fluid' style={{ maxWidth: '100%', borderTopRightRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px',   borderBottomLeftRadius: '70px',maxHeight: '35vh' }} />
          </div>

    </div>
    </div>

    <div className="container mt-5">
        <div className="row justify-content-center align-items-center text-center">
            <h2 className="mb-4" style={{fontWeight:'700'}}>RECENT EVENTS</h2>

            <div className="col-12 col-md-4 mb-4">
                <div className="card" style={{borderTopRightRadius:'70px', borderBottomLeftRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}>
                    <img src={boys} className="card-img-top" alt="manspeaking" style={{height:"30vh", borderTopRightRadius:'70px', borderBottomLeftRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}} />
                </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
                <div className="card" style={{borderTopRightRadius:'70px', borderBottomLeftRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}>
                    <img src={benificial} className="card-img-top" alt="womanspeaking" style={{height:"30vh", borderTopRightRadius:'70px', borderBottomLeftRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}} />
                </div>
            </div>

            <div className="col-12 col-md-4 mb-4">
                <div className="card" style={{borderTopRightRadius:'70px', borderBottomLeftRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}}>
                    <img src={donate} className="card-img-top" alt="youth" style={{height:"30vh", borderTopRightRadius:'70px', borderBottomLeftRadius:'70px', borderTopLeftRadius:'70px', borderBottomRightRadius:'70px'}} />
                </div>
            </div>
        </div>
    </div>

    <div className="d-flex justify-content-center mt-4">
        <div className="border m-3 bg-dark border-dark rounded-circle" style={{width: '2rem', height: '2rem'}}></div>
        <div className="border m-3 bg-secondary border-secondary rounded-circle" style={{width: '2rem', height: '2rem'}}></div>
        <div className="border m-3 bg-secondary border-secondary rounded-circle" style={{width: '2rem', height: '2rem'}}></div>
        <div className="border m-3 bg-secondary border-secondary rounded-circle" style={{width: '2rem', height: '2rem'}}></div>
        <div className="border m-3 bg-secondary border-secondary rounded-circle" style={{width: '2rem', height: '2rem'}}></div>
    </div>
         <Footer />
</div>
    )
}
export default Event