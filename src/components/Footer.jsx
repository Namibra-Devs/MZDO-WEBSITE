import React from 'react';
import logo from "../assets/images/removebgpreview.jpg"
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import intagram from "../assets/images/intagram.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light mt-5 pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <h6>NEWS LETTER <br /> sign up for regular updates and news</h6>
            <hr className="w-75" />
            <div className="d-flex align-items-center  ">
              <img src={logo} id="logo" alt="Logo" style={{backgroundColor:"black"}}/>
              <span className="ml-3">MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION</span>
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
            <hr className="bg-light" />
            <div className='d-flex text-center'>
              <img src={twitter} className="nav-item nav-link mr-2" id="media" alt="Twitter" />
              <a href="https://web.facebook.com/profile.php?id=61553344065572"  target="_blank" rel="noopener noreferrer">
              <img src={facebook} className="nav-item nav-link mr-2" id="media" alt="Facebook" />
              </a>
              
              <img href="" src={intagram} className="nav-item nav-link" id="media" alt="Instagram" /> 
            </div>
            <p className="mt-2" style={{color:'green'}}>@mzd.org</p>
          </div>
          <div className="col-md-4 col-sm-6 mt-4 text-center">
            <p className='font-weight-bold'>QUICK LINKS</p>
         <a href="/join_us" style={{textDecoration:"none",color:'white'}}>ABOUT US</a> <br />
         <a href="/contact" style={{textDecoration:"none",color:'white'}}>CONTACT US</a> <br />
            <a href="/Donation" style={{textDecoration:"none",color:'white'}}> DONATE</a> <br />
            <a href="/programmes" style={{textDecoration:"none",color:'white'}}> OUR SERVICES</a>
          </div>
          <div className="col-md-4 col-sm-6 mt-4 text-center" >
           
            <p className='font-weight-bold'>Orgination info:</p>
            <p>(+233) 591150007</p>
            <p>kumasi, MoshieZongo </p>
            <p>Content for Section 3 goes here.</p>
            <p>CONTACT US</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
 