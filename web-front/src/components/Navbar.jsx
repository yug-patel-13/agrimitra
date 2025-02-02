import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";
import "./Home.css";


const Navbar = ({ogin}) => {
  const [activeLink, setActiveLink] = useState('home');
  const [showContainer, setShowContainer] = useState(true);

  

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (link === 'home') {
      setShowContainer(true);
    } else {
      setShowContainer(false);
    }
  };
const handleLoginClick2=()=>{
  const a=document.getElementById("login")
    
  if(a.textContent==="welcome"){
    alert("already signed in")
    return a;
  }

}
  const handleLoginClick = () => {
   
    
  
    setShowContainer(false);
  
    setActiveLink('login');
      
    
  };
const scrolling=()=>{

  const a=document.querySelectorAll(".Nav")

  a.style.display="block"

}
  

  return (
    <>
   
      <div className='Nav' onScroll={scrolling}>
        <div id="links" >
          <div id="lgo"><img src="farlogo.png" alt="logo" style={{ height: "70px" }} id='logo' /></div>
         <div><Link to="/content" style={{textDecoration:"none"}}>
            <h3
              id='l1'
              style={{ color: activeLink === 'home' ? 'yellow' : 'white' }}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </h3>
          </Link></div> 
       
          <div><Link to="/aboutus" style={{textDecoration:"none"}}>
            <h3
              id='l3'
              style={{ color: activeLink === 'aboutus' ? 'yellow' : 'white' }}
              onClick={() => handleLinkClick('aboutus')}
            >
              About-us
            </h3>
          </Link></div>
        
         <div><Link to="/login" style={{textDecoration:"none"}}>
            <button id='login' onClick={handleLoginClick} onMouseEnter={handleLoginClick2}>{ogin ? "welcome" : "login"}</button>
          </Link></div> 
        </div>
      </div>

      {showContainer && (
        <div id='container' style={{ flexDirection: "column" }}>
          <div id='content'>
            <div id='box'>
              <h1 style={{ color: "orange" }}>Welcome to</h1>
              <h1 style={{ marginLeft: "40px" }}>AgriTech Titans' Assured Contract Farming Platform</h1>
              <ul>
           
                <h3 style={{color:"white"}}><li>Connects farmers with buyers</li></h3>
                <h3 style={{color:"white"}}><li>Secures transparent contracts</li></h3>
                <h3 style={{color:"white"}}><li>Supports price negotiation</li></h3>
                <h3 style={{color:"white"}}><li>Ensures reliable payments.</li></h3>
                <h3 style={{color:"white"}}><li>Offers market insights.</li></h3>
                <h3 style={{color:"white"}}><li>Price Discovery and Negotiation</li></h3>
                <h3 style={{color:"white"}}><li>Educational Resources</li></h3>
                <h3 style={{color:"white"}}><li>Feedback and Ratings</li></h3>
              </ul>
            </div>
            <div id="box2">
            
          

                <Link to="/farmer" style={{ textDecoration: "none", color: "yellow" }} onClick={handleLinkClick}>
                  <div id='copy2'>
                    <img src="copy2.png" alt="1photo" id='v1p' />
                    <h1 style={{color:"#1c6a4c"}}>Start Contract</h1>
                  </div>
                </Link>
                <Link to="/demo" style={{ textDecoration: "none", color: "yellow" }} onClick={handleLinkClick}>
                  <div id='copy3'>
                    <img src="copy3.png" alt="1photo" id='b1p' />
                    <h1 style={{color:"#1c6a4c"}}>Benefits</h1>
                  </div>
                </Link>
              </div>
            </div>
      


          <div id='our'>
            <div><h1 id='plate'>What Our Platform Offers</h1></div>
            <div id='contain'>
              <div id="div1">
                <div id="bx1">
                  <h1 id='mer'>Farmer</h1>
                  <h3 style={{color:"white"}} id='diss'>Discover crop availability and farmer profiles</h3>
                </div>
                <div id="bx2">
                  <h1 id='mer'>Buyers</h1>
                  <h3 style={{color:"white"}}id='dis'>Browse buyer profiles and contract needs</h3>
                </div>
                <div id="bx3">
                  <h1 id='mer'>Payments</h1>
                  <h3 style={{color:"white"}}id='dis'>Fast, safe, and transparent transactions</h3>
                </div>
              </div>
              <div id="div2">
                <div id="bx4">
                  <h1 id='mer' className='ano'>Contract Farming</h1>
                  <h3 style={{color:"white"}}id='dis'>Initiate and manage secure contracts</h3>
                </div>
                <div id="bx5">
                  <h1 id='mer'>Track Contracts</h1>
                  <h3 style={{color:"white"}}id='dis'>Monitor progress and ensure timely delivery</h3>
                </div>
                <div id="bx6">
                  <h1 id='mer'>Support</h1>
                  <h3 style={{color:"white"}}id='dis'>Access FAQs, guides, and support</h3>
                </div>
              </div>
            </div>
          </div>
          <div id="wedo">
            <img src="cro.png" alt="Crop" id="cro" />
          </div>
         
            <div><h1 id='hiw'>How It Works</h1></div>
            <div id="create">
            <div id="hand">
              <div id="crv1">
                <h1>Create a Contract</h1>
                <div><img src="crv1.png" alt="Create a Contract" id='cv' /></div>
                <h4 id='h6' style={{ height: "50px", width: "200px" }}>Farmers post their crop details, and buyers browse offers.</h4>
              </div>
              <div id="crv2">
                <h1>Negotiate and Sign</h1>
                <img src="crv2.png" alt="Negotiate and Sign" id='cv1' />
                <h4 id='h6' style={{ height: "50px", width: "200px" }}>Both parties agree on terms and sign the contract digitally.</h4>
              </div>
              <div id="crv3">
                <h1>Track and Pay</h1>
                <img src="crv3.png" alt="Track and Pay" id='cv2' />
                <h5 id='h6' style={{ height: "30px", width: "250px" }}>Track the contract's progress, confirm delivery, and release payment securely.</h5>
              </div>
            </div>
          </div>
          <div><h1 id='hiw2'>Start a Contract</h1></div>
          <div id='join'>Join AgriTech Titans and secure your future with stable contracts and guaranteed market access.</div>
         

         
        </div>
      )}
    </>
  );
};

export default Navbar;
