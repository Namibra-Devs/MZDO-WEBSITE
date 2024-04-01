import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import map from '../assets/images/Map.png'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        
            <div className="row mt-5">
                {/* First Card */}
                <div className="col-md-6 ">
                    <div className="card mb-3" style={{  borderRadius: '0' }}>
                        <div className="card-body">
                            <h5 className="card-title" style={{color:'green',textAlign:'center'}}>We Love To Hear From You</h5>
                            <p style={{textAlign:'center',fontWeight:'700'}}>Please call or email us using the contact form below and we will <br /> be happy to assist you  </p>
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="Your mail" />
                                </div>
                                <div className="mb-3">
                                    <input type="tel" className="form-control" id="phone" placeholder="Your Phone" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" id="message" rows="3" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">SEND</button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="col-md-6">
                    <div className="card mb-3" style={{ borderRadius: '0' }}>
                        <img src={map} className="card-img-top" alt="Card Image"
                            style={{
                                width: '100%',
                                height: '40vh',
                                objectFit: 'cover'
                            }} />
                    </div>
                    <h5 className="card-title" style={{color:'green',}}>CONTACT INFO</h5>

                </div>
            </div>
     
    </div>
    <Footer />
    </div>
  )
}

export default Contact