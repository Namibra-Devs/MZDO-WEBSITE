import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import deploymental from "../assets/images/deploymental group 1.jpeg";

const Programmes_profile = () => {
  return (
    <div>
      <Navbar />

      <div className="container-fluid ">
        <div className="row justify-content-center align-items-center">
          {/* Image Section */}
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4 m-lg-5">
            <div className="card" style={{  width: "100%", border: '0', borderTopLeftRadius: '90px',  borderTopRightRadius: '90px', borderBottomLeftRadius:'90px' , borderBottomRightRadius:'90px', backgroundColor:'#FFFFFF' , boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
              {/* Check if the image path is correct */}
              <img src={deploymental} className="card-img-top" alt="deploymental" style={{height: "40vh",borderTopRightRadius: '90px' ,  borderTopLeftRadius: '90px',borderBottomLeftRadius:'90px'}} />
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontSize: '18px', fontFamily: 'sans-serif' }}>
                  DEVELOPMENTAL <br /> PROJECT
                </h5>
                <p className="card-text text-center" style={{ fontSize: '20px', fontWeight: '600' }}>
                  WE RENOVATE AND BUILD <br /> A BETTER COMMUNITY
                </p>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="col-lg-6 col-md-8 col-sm-12 mt-5">
            <div>
              <p className='mt-3' style={{ maxWidth: '600px', fontSize: '20px', lineHeight: '1.6', fontWeight: '600' }}>
                Education: Establishing an Educational Fund to support Brilliant But Needy Students. Youth Employment: Support willing youth to acquire employable skills through the Apprenticeship Program. Support for the Vulnerable: Provide financial support to the poor and vulnerable in the society (widows, aged, critically ill)
              </p>

              <p className='mt-3' style={{ maxWidth: '600px', fontSize: '20px', lineHeight: '1.6', fontWeight: '600' }}>
                Security: Reconstituting the volunteer security body with strong collaboration with the police Sanitation: Regular education and communal labor to keep the environment clean.
              </p>

             
            </div>
          </div>
        </div>
      </div>

    

      <Footer />
    </div>
  );
}

export default Programmes_profile;
