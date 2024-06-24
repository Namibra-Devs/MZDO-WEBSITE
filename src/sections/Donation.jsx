import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import benificial from '../assets/images/beneficiaries.jpeg';
import './Donation.css';

const Donation = () => {
  return (
    <div>
      <Navbar />
      <div
        className='container-fluid event-bg'
        style={{
          backgroundImage: `url(${benificial})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          isolation: 'isolate'
        }}
      >
        <div className='container'>
          <h1
            className='text-center text-light'
            style={{ fontWeight: '700', paddingTop: '300px' }}
          >
            DONATION
          </h1>
        </div>
      </div>
      <div className='container-fluid text-center mt-5'>
        <p className='m-5' style={{ fontWeight: '700' }}>
          DONATE NOW
        </p>
        <p style={{ fontWeight: '700', lineHeight: '30px' }}>
          We welcome you to our donation page, we accept donations from all parts <br />
          of the world, in any kind of currency. If your local currency is not listed <br />
          you can still donate, we will process it in the currency you selected. <br />
          Moshie Zongo Developmental Organization is a Non-profitable <br />
          Organization located in Ghana. We support everyone who is in need of <br />
          help. Help us channel this cause in good faith and Allah shall bless you.
        </p>
        <p style={{ fontWeight: '700' }}>
          Help Educate And Support The Needy In The Community
        </p>

        <div className='row justify-content-center mt-5'>
          <div className='col-lg-6 col-md-8 col-sm-10'>
            <form
              style={{
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                maxWidth: '50rem',
                borderRight: '2px #000000 solid',
                borderBottom: '2px #000000 solid'
              }}
            >
              <p style={{ fontWeight: '900', marginLeft: '20px' }}>YOUR DONATION</p>
              <hr style={{ width: '50%', marginLeft: '150px' }} />
              <div className='mb-3'>
                <input
                  type='text'
                  className='form-control'
                  id='amount'
                  placeholder='Amount'
                  style={{
                    padding: '20px',
                    maxWidth: '300px',
                    marginLeft: '20px',
                    backgroundColor: '#F2F2F2',
                    borderRadius: '30px',
                    border: '#F2F2F2'
                  }}
                />
                <select
                  className='form-select mt-3'
                  id='currency'
                  placeholder='select currency'
                  style={{
                    padding: '20px',
                    maxWidth: '300px',
                    marginLeft: '20px',
                    backgroundColor: '#F2F2F2',
                    borderRadius: '30px',
                    border: '#F2F2F2'
                  }}
                >
                  <option value='USD'>SELECT YOUR CURRENCY</option>
                  <option value='NGN'>Nigerian Naira (NGN)</option>
                  <option value='GHS'>Ghanaian Cedi (GHS)</option>
                </select>
                <p className='mt-3' style={{ fontWeight: '900' }}>
                  Your Personal Info
                </p>
                <hr style={{ width: '50%', marginLeft: '150px' }} />
              </div>
              <div className='mb-3 mt-3'>
                <div className='row'>
                  <div className='col-md-6'>
                    <label className='form-label' style={{ fontWeight: '700' }}>
                      First Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstName'
                      placeholder='Enter your first name'
                      style={{
                        padding: '20px',
                        maxWidth: '300px',
                        margin: 'auto',
                        backgroundColor: '#F2F2F2',
                        borderRadius: '30px',
                        border: '1px solid #F2F2F2'
                      }}
                    />
                  </div>
                  <div className='col-md-6'>
                    <label className='form-label' style={{ fontWeight: '700' }}>
                      Last Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastName'
                      placeholder='Enter your last name'
                      style={{
                        padding: '20px',
                        maxWidth: '300px',
                        margin: 'auto',
                        backgroundColor: '#F2F2F2',
                        borderRadius: '30px',
                        border: '1px solid #F2F2F2'
                      }}
                    />
                  </div>
                  <div className='col-md-12 mt-3'>
                    <label className='form-label' style={{ fontWeight: '700' }}>
                      Email Address
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Enter your email address'
                      style={{
                        padding: '15px',
                        backgroundColor: '#F2F2F2',
                        borderRadius: '30px',
                        border: '1px solid #F2F2F2'
                      }}
                    />
                  </div>
                </div>
                <p className='text-danger mt-3' style={{ fontWeight: '700' }}>
                  Thank you for putting a smile on our face
                </p>
              </div>
              <a href='/Thanks' type='submit' className='btn btn-danger m-3'>
                DONATE
              </a>
            </form>
            <div className='container-fluid'>
              <h6 className='text-center mt-5' style={{ fontWeight: '700' }}>
                HOW YOU CAN HELP
              </h6>
              <div className='d-flex justify-content-center mt-4'>
                <a href='/join_us' className='btn btn-success btn-sm mx-2'>
                  JOIN US
                </a>
                <a href='/Event' className='btn btn-secondary btn-sm mx-2'>
                  SEE ALL
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Donation;

