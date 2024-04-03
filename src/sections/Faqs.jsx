import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import student from '../assets/images/group of student.jpeg'
import './Faqs.css'

const Faqs = ()  => {
  return (
    <div>
        <Navbar />
        <div className='container-fluid faqs-bg' 
        style={{  backgroundImage: `url(${student})`,
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
        style={{fontWeight:'700', paddingTop:'300px' }}>FAQS</h1>
        </div>
        
        </div>
        <div className='container-fluid w-50 mt-5'>
    <h6 className='mt-5' style={{ fontWeight: '700' }}>FREQUENTLY ASKED QUESTIONS </h6>
    <p style={{ fontWeight: '700' }}>Have any questions?</p>

    <div className='mb-5'
        style={{
            marginBottom: '20px',
            lineHeight: '1.5',
            backgroundColor: 'whitesmoke',
            padding: '10px',
            position: 'relative' // Added relative positioning
        }}>
        <div 
            className="border bg-primary border-primary  rounded-circle" 
            style={{ 
                width: '1rem', 
                height: '1rem',
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
            }} 
        ></div>
        <p>
            <span style={{ fontWeight: '700' }}>How do I donate?</span> <br />
            You can donate through the button on the navigation bar. Also,
            please contact us for more information on this.
            Our agents will be coming around,
            and you can donate through them,
            and we will receive your donation.
        </p>
    </div>

    <div className='mb-5'
        style={{
            backgroundColor: 'whitesmoke',
            marginBottom: '20px',
            lineHeight: '1.5',
            marginTop: '20px',
            padding: '10px',
            position: 'relative' // Added relative positioning
        }}>
        <div 
            className="border bg-primary border-primary  rounded-circle" 
            style={{ 
                width: '1rem', 
                height: '1rem',
                position: 'absolute', 
                top: '10px', 
                right: '20px', 
            }} 
        ></div>
        <p>
            <span className='mt-5' style={{ fontWeight: '700' }}>How do I become a member?</span> <br />
            You can donate through the button on the navigation bar.
            Also, please contact us for more information on this.
            Our agents will be coming around, and you can donate
            through them, and we will receive your donation.
        </p>
    </div>
    <div className='mb-5'
        style={{
            backgroundColor: 'whitesmoke',
            marginBottom: '20px',
            lineHeight: '1.5',
            marginTop: '20px',
            padding: '10px',
            position: 'relative' 
        }}>
        <div 
            className="border bg-primary border-primary  rounded-circle" 
            style={{ 
                width: '1rem', 
                height: '1rem',
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
            }} 
        ></div>
        <p      className='mt-5' style={{ fontWeight: '700' }}>
        How do i donate?
            </p>
    </div>

    <div className='mb-5'
        style={{
            backgroundColor: 'whitesmoke',
            marginBottom: '20px',
            lineHeight: '1.5',
            marginTop: '20px',
            padding: '10px',
            position: 'relative' // Added relative positioning
        }}>
        <div 
            className="border bg-primary border-primary  rounded-circle" 
            style={{ 
                width: '1rem', 
                height: '1rem',
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
            }} 
        ></div>
        <p      className='mt-5' style={{ fontWeight: '700' }}>
        How do i become a member
            </p>
    </div>

    <div className='mb-5'
        style={{
            backgroundColor: 'whitesmoke',
            marginBottom: '20px',
            lineHeight: '1.5',
            marginTop: '20px',
            padding: '10px',
            position: 'relative' 
        }}>
        <div 
            className="border bg-primary border-primary rounded-circle" 
            style={{ 
                width: '1rem', 
                height: '1rem',
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
            }} 
        ></div>
        <p      className='mt-5' style={{ fontWeight: '700' }}>
        How do i donate?
            </p>
    </div>
    <div className='mb-5'
        style={{
            backgroundColor: 'whitesmoke',
            marginBottom: '20px',
            lineHeight: '1.5',
            marginTop: '20px',
            padding: '10px',
            position: 'relative' // Added relative positioning
        }}>
        <div 
            className="border bg-primary border-primary rounded-circle" 
            style={{ 
                width: '1rem', 
                height: '1rem',
                position: 'absolute', 
                top: '20px', 
                right: '20px', 
            }} 
        ></div>
        <p      className='mt-5' style={{ fontWeight: '700' }}>
        How do i become a member
            </p>
    </div>

    {/* ... Other divs ... */}

    <p style={{ fontWeight: '700' }}>Still need help? send us message here </p>
</div>





        <Footer />

    </div>

  )
}

export default Faqs