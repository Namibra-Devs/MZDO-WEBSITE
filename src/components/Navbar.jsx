
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
            <div className="d-flex align-items-center ">
                    <img src={logo} id="logo" alt="Logo" />
                    <span className="mr-3" style={{fontWeight:'900'}}>MOSHIE ZONGO DEVELOPMENTAL <br /> ORGANIZATION</span>
                </div>

</div>

            </div>
            <div className="navbar-nav ms-auto " style={{marginRight:'200px'}}>
                <a href="http://localhost:5173/" className="nav-link active nav-prop" >HOME</a>
                <a href="http://localhost:5173/About" className="nav-link nav-prop">ABOUT US</a>
                <a href="http://localhost:5173/Programmes" className="nav-link nav-prop">PROGRAMMES</a>
                <a href="http://localhost:5173/Update" className="nav-link nav-prop">UPADATE</a>
                <a href="http://localhost:5173/Contact" className='nav-link nav-prop'>CONTACT US</a>
                <div className="vector"></div>
                <button className="btn btn-primary  navbar-nav-btn" >DONATE</button>
                <i onclick="taggleMenu('block')" class="fa fa-bars menu-ico"></i>
        <i onclick="taggleMenu('none')" id="close-ico" class="fa fa-times-circle close-ico"></i>

            </div>
        </div>
    </div>
</div> 
          
<script>
    
</script>
</div>

);

export default Navbar;





