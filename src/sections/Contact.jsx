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
        <div className="col-lg-6 mb-4">
            <div className="card" style={{ borderRadius: '0', backgroundColor: '#F3F0F0' }}>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: 'green', textAlign: 'center' }}>We Love To Hear From You</h5>
                    <p style={{ textAlign: 'center', fontWeight: '700' }}>Please call or email us using the contact form below and we will <br /> be happy to assist you </p>
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
                        <button type="submit" className="btn btn-primary" style={{ borderRadius: '30px', paddingLeft: '30px', paddingRight: '30px' }}>SEND</button>
                    </form>
                </div>
            </div>
        </div>

        {/* Second Card */}
        <div className="col-lg-6 mb-4">
            <div className="card" style={{ borderRadius: '0' }}>
                <img src={map} className="card-img-top" alt="Card Image" style={{ width: '100%', height: 'auto', maxHeight: '40vh', backgroundSize: 'cover', background: 'center' }} />
            </div>
            <div className="card-body">
                <h5 className="card-title" style={{ color: 'green', fontWeight: '700' }}>CONTACT INFO</h5>
                <p style={{ fontWeight: '700', fontSize: '12px' }}>
                    <p className="inline-p">MOSHIE ZONGO DEVELOPMENTAL <br /> ORGANIZATION <br /> KUMASI MOSHIE ZONGO</p>

                    <span className="vertical-line m-5"></span>

                    <span className="vertical-line"></span>
                    {/* <p className="inline-p">PHONE: +233(0)303030303 <br />EMAIL: info@mzdo.org </p> */}
                </p>
            </div>
        </div>
    </div>
</div>

       
    <div className='container-fluid'>
    <h6 className='text-center mt-5' style={{fontWeight:'700'}}>HOW YOU CAN HELP</h6>
    <div className='d-flex justify-content-center mt-5'>
        <button type="button" className="btn btn-success btn-sm d-flex mx-2">JOIN  US</button>
        <button type="button" className="btn btn-secondary btn-sm d-flex mx-2">DONATE</button>
</div>
</div>
    <Footer />
    </div>
  )
}

export default Contact