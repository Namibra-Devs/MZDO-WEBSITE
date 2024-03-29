import React from 'react'
import logo from "../assets/images/logo.png"
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import intagram from "../assets/images/intagram.png"

const Footer = () => {
  return (
   


<footer className="footer bg-dark text-light m-5 " style={{padding:'80px', height:'70vh'}}>
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <h5>NEWS LETTER <br /> sign up for regular updates and news</h5>
            <hr style={{width:'70rem'}} />


                <div className="d-flex align-items-center">
                    <img src={logo} id="logo" alt="Logo" />
                    <span className="mr-3">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</span>
                </div>
                <p>
                    MOSHIE ZONGO DEVELOPMENT ORGANISATION (MZDO)
                    is a company limited BY guarantee incorporated on 
                    the 25th day of May, 2023.
                    The purpose for incorporating MDO is to promote 
                    development in moshie zongo with special emphasis.
                </p>
                <p>
                    “Development through education, love and care”
                </p>
                <hr style={{fontSize:'3px',color:'white'}} />
                <div className='d-flex mr-5'>
                    <img src={twitter} className="nav-item nav-link" id="media" alt="Twitter" />
                    <img src={facebook} className="nav-item nav-link" id="media" alt="Facebook" />
                    <img src={intagram} className="nav-item nav-link" id="media" alt="Instagram" /> 
                </div>
                <p style={{color:'green'}}>@mzd.org</p>
            </div>
            <div className="col-md-4 mt-5">
                <p className='mt-5'>QUICK LINKS</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
                <p>DONATE</p>
                <p>OUR SERVICES</p>

            </div>
            <div className="col-md-4">
                <input className="form-control" type="search" placeholder="Search for something" aria-label="Search" style={{ marginLeft:'200px'}} />
               
                <p className='mt-5'>Orgination info:</p>
                <p>(+233) 591150007</p>
                <p>kumasi, MoshieZongo </p>
                <p>Content for Section 3 goes here.</p>
                <p>CONTACT US</p>
            </div>
        </div>
    </div>
</footer>





  )
}

export default Footer