
import React from 'react';
import './Navbar.css'
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import intagram from "../assets/images/intagram.png"
import logo from "../assets/images/logo.png"



const Navbar = () => (
<div>
    <div className="navbar navbar-expand-lg navbar-light topNav ">
    <div className="container-fluid">
    

        <div className="navbar-collapse" id="navbarNav">
            <div className="navbar-nav navitem topNavlist">
                <a className="nav-item nav-link">Call us: +233(0)030303030  <span>|</span> </a>
                <a className="nav-item nav-link ">Email us: info@mzdo.org</a>
            </div>
            <div className="navbar-nav ms-auto icons">
                <img src={twitter} className="nav-item nav-link" id="media" alt="Twitter" />
                <img src={facebook} className="nav-item nav-link" id="media" alt="facebook" />
                <img src={intagram} className="nav-item nav-link" id="media" alt="instagram" />


            </div>
        </div>
    </div>
</div>

 <div className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
        <div className="navbar-collapse" id="navbarNav2">
            <div className="navbar-nav">
                <div className="navbar-brand logo-div"> 
                <img src={logo} id="logo" alt="Logo" />
                <span className='logo-text'>MOSHIE ZONGO DEVELOPMENTAL ORGANIZATION </span>
          </div>
            </div>
            <div className="navbar-nav ms-auto ">
                <a href="#" className="nav-link active nav-prop">HOME</a>
                <a href="#" className="nav-link nav-prop">ABOUT US</a>
                <a href="#" className="nav-link nav-prop">PROGRAMMES</a>
                <a href="#" className="nav-link nav-prop">UPADATE</a>
                <a href="#" className='nav-link nav-prop'>CONTACT US</a>
                <div className="vector"></div>
                <button className="btn btn-primary  navbar-nav-btn" >DONATE</button>
            </div>
        </div>
    </div>
</div> 
          

</div>

);

export default Navbar;





