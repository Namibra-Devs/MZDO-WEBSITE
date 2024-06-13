
import { useState } from 'react';
import './Navbar.css'
import twitter from "../assets/images/twitter.png";
import facebook from "../assets/images/facebook.png";
import intagram from "../assets/images/intagram.png"
import logo from "../assets/images/mainlogo.jpg"

 const NavItems = [
    {
     title: "HOME",
     url: "/",
     cName: 'nav-li',
    },
 
    {
     title: "ABOUT",
     url: "/about",
     cName: 'nav-li',
    },
    {
     title: "PROGRAMMES",
     url: "/programmes",
     cName: 'nav-li',
    },
    {
        title: "UPDATE",
        url: "/update",
        cName: 'nav-li',
       },
    {
     title: "CONTACT",
     url: "/contact",
     cName: 'nav-li',
    },
 ]
 const Navbar = () => {
    const [clicked, setClicked] = useState(false)
    const clickHandler = (e) => {
        setClicked(!clicked);
    }
    return(
        <div>
            <div className="navbar navbar-expand-lg  topNav">
                <div className="container-fluid">
                    <div className="navbar-collapse" id="navbarNav">
                        <div className="navbar-nav navitem topNavlist">
                            <a className="nav-item nav-link">Call us: +233(0)030303030  <span>|</span> </a>
                            <a className="nav-item nav-link  " href='http://localhost:5173/Salifu.muniru@yahoo.com'>Email us: Salifu.muniru@yahoo.com</a>
                        </div>
                        <div className="navbar-nav ms-auto icons">
                            
                            <img   src={twitter} className="nav-item nav-link" id="media" alt="Twitter"  />
                            <img src={facebook} className="nav-item nav-link" id="media" alt="facebook" />
                            <img src={intagram} className="nav-item nav-link" id="media" alt="instagram" />
                        </div>
                    </div>
                </div>
            </div> 

         <header>
             <nav className="navbar">
               <div className="d-flex align-items-center"  >
                    <img src={logo} id="logo" alt="Logo" />
                    <span className="navtext mr-3" style={{fontSize:'30px',fontWeight:'800'}}>MOSHIE ZONGO DEVELOPMENTAL <br /> ORGANIZATION</span>
                </div>            
              <ul className={ clicked ? "nav-ul active" : "nav-ul"}>
                {NavItems.map((item, index) => (
                  
                    <li key={index} className={item.cName}>
                        <a href={item.url} className="nav-icon">
                          {item.title}
                        </a>
                        
                    </li>
                ))}
                <a href="/Donation" className='btn btn-success  navbar-nav-btn  donatebtn'>DONATE</a>
                 
              </ul>
              <div className="menu-icons" onClick={clickHandler}>
                <i className={clicked ? "bi bi-x-lg" : 
                    "bi bi-list "}>
                        
                </i>
              </div>
             </nav>
         </header>
        </div>

)}
export default Navbar;





