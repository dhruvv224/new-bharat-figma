import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import heroimg from './Assets/Rectangle 8.png';
// import linkedInIcon from './Assets/linkedin.svg'; // Add the path to your SVG icons
// import facebookIcon from './Assets/facebook.svg';
// import twitterIcon from './Assets/twitter.svg';
import company1 from './Assets/Company/cravvings 1.png'
import company2 from './Assets/Company/eoffice 1.png'
import company3 from './Assets/Company/icea 1.png'
import company4 from './Assets/Company/ifci-logo-2 1.png'
import company5 from './Assets/Company/mobnia 1.png'
import company6 from './Assets/Company/negd 1.png'
import laptopimg from './Assets/Mask group (1).png';
import cpu from './Assets/Mask group.png';
import phone from './Assets/Mask group (2).png'
import rectimg from './Assets/Rectangle 17.png'
import product1 from './Assets/products/Rectangle 15 (1).png'
import product2 from './Assets/products/Rectangle 15 (2).png'
import product3 from './Assets/products/Rectangle 15 (3).png'
import product4 from './Assets/products/Rectangle 15.png'
import target from './Assets/New folder/Mask group.png';
import circuit from './Assets/New folder/Mask group (1).png'
import img1 from './Assets/section 3/Rectangle 10.png'
import img2 from './Assets/section 3/Rectangle 11.png'
import img3 from './Assets/section 3/Rectangle 12.png'
export const Home = () => {
  return (
    <div>
      <div className='Navbar'>
        <nav className='navbar navbar-expand-lg navbar-white bg-white p-0'>
          <div className='container-fluid'>
            <Link className='navbar-brand' id='navtext'>
              New Bharat
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link to='' className='nav-link mt-3 mb-3' id='Navlinks'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to='' className='nav-link mt-3 mb-3' id='Navlinks'>Products</Link>
                </li>
                <li className='nav-item'>
                  <Link to='' className='nav-link mt-3 mb-3' id='Navlinks'>Services</Link>
                </li>
                <li className='nav-item'>
                  <Link to='' className='nav-link mt-3 mb-3' id='Navlinks'>About us</Link>
                </li>
                <li className='nav-item'>
                  <Link to='' className='nav-link mt-3 mb-3' id='Navlinks'>Blog</Link>
                </li>
                <li className='nav-item'>
                  <Link to='' className='nav-link mt-3 mb-3' id='Navlinks'>Contact us</Link>
                </li>
                <li className='nav-item'>
                  <button className='btn btn-primary mt-3 mb-3' id='talkbutton' type='button'>Let's Talk</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='hero-section'>
        <img src={heroimg} className='img-fluid' id='hero-img' alt='Hero' />
        <div className='hero-text'>
        <h5>Welcome to New Bharat</h5>
          <h1>We Are Here Let’s Give The World Future</h1>
          <p>Welcome to New Bharat, where we redefine the future through precision engineering and technological innovation.</p>
          <button className='btn btn-primary mt-3' style={{borderRadius:'30px', width:'176px', height:'47px',top:'467',left:'150'}}>Explore Products</button>
        </div>
      </div>
      <div className='section' >
        <div className='container'>
          <div className='row'>
            <div className='col-md-2 mt-3 mb-3'>
              <img src={company1} className='img-fluid' alt='' />
            </div>
            <div className='col-md-2 mt-3 mb-3'>
            <img src={company2} className='img-fluid mt-2' alt='' />

            </div>
            <div className='col-md-2 mt-3 mb-3'>
            <img src={company3} className='img-fluid mt-2' alt='' />

            </div>
            <div className='col-md-2 mt-3 mb-3'>
            <img src={company4} className='img-fluid mt-3' alt='' />

            </div>
            <div className='col-md-2 mt-3 mb-3'>
            <img src={company5} className='img-fluid mt-3' alt=''/>

            </div>
            <div className='col-md-2 mt-3 mb-3'>
            <img src={company6} className='img-fluid mt-2' alt='' />

            </div>
          </div>
        </div>
      </div>
      <div className='section2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='content' style={{marginTop:'100px'}}>
              <span className='text-primary' style={{fontSize:'18px',fontWeight:'400'}} >Our Services</span>
              <h1 className='text-dark' style={{fontSize:'46px'}}>Explore Our Services
<br/>Which You Want</h1>
<span className='text-secondary' id='span' style={{fontWeight:'400', fontSize:'18px'}}>we offer a comprehensive range of services tailored <br/>to meet the diverse needs of our clients. Our <br/> commitment to quality and innovation sets us apart <br/>in the competitive landscape of chip manufacturing.</span>
              </div>
            </div>
            <div className='col-md-6 position-relative' style={{marginTop:'50px',marginBottom:"50px"}}>
              <div className='img-container position-relative'>
              <img src={rectimg} className='img-fluid' id='rectimg'></img>
              </div>
            

              <div className='card-container'>
                <div className='card1'>
                  <div className='card1-body d-flex flex-column h-100'>
                 
                  <div className='row flex-fill d-flex'>
               
                  <div className='circle-container'>

                    <div className='circle'>
                    <img src={laptopimg} style={{width:'40px'}} ></img>
                      
                    </div>
                    <div className='info'>
                    <h4>150</h4>
                    <span>Laptops</span>
                    </div>
                    

                   
                    
                  
               
                </div>
              
            </div>
            <hr  style={{opacity:'0.5',color:'grey'}} />
            <div className='row flex-fill d-flex align-items-center justify-content-center'>
            <div className='circle-container'>

<div className='circle'>
<img src={cpu} style={{width:'40px'}} ></img>
  
</div>
<div className='info'>
<h4>89</h4>
<span>Computer Systems</span>
</div>




</div>

            </div>
            <hr/>
            <div className='row flex-fill d-flex align-items-center justify-content-center'>
            <div className='circle-container'>

<div className='circle'>
<img src={phone} style={{width:'40px'}} ></img>
  
</div>
<div className='info'>
<h4>99</h4>
<span>Smartphones</span>
</div>




</div>
            </div>
                  </div>
                  
                 </div>
              </div>
              
            </div>
            
          </div>
          
          
        </div>
        
      </div>
      <div className='container'>
      <div className='row product-lists'>
        <div className='col-12 heading text-center'>
          <span className='text-primary' style={{fontSize:"25px",fontWeight:'400'}}>Our Services</span>
          <div>
          <span className='' style={{fontSize:"46px",fontWeight:"600",color:'rgba(15, 0, 77, 1)'}}>Our Products</span>
          <p className='text-secondary' style={{fontSize:"18px",fontWeight:'400', color:'rgba(0, 26, 51, 1)'}}>we stand at the forefront of technological evolution. Founded on a vision of shaping the digital<br/> landscape, we bring decades of expertise in chip manufacturing.</p>
          </div>
        </div>
        <div className='col-12'>
          <div className='row justify-content-center'>
          <div className='col-md-3 mt-2'>
            <div className='product-card'>
              <div className='img-container2'>
                <img className='fluid-img' src={product1}/>  
              </div>
              <div className='product-name'>
                <span className='text'>CPU</span>
              </div>
            </div>

          </div>
          <div className='col-md-3 mt-2'>
            
           <div className='product-card'>
           <div className='img-container2'>
                <img className='fluid-img' src={product2}></img>
              </div>
              <div className='product-name'>
                <span className='text'>Arochips</span>
              </div>
              
            </div>
            
          </div>
          <div className='col-md-3 mt-2'>
            
          <div className='product-card'>
          <div className='img-container2'>
                <img className='fluid-img' src={product3}></img>
              </div>
              <div className='product-name'>
                <span className='text'>Microchips</span>
              </div>
              </div>
          </div>
          <div className='col-md-3 mt-2'>
          <div className='product-card'>
          <div className='img-container2'>
                <img className='fluid-img' src={product4}></img>
              </div>
              <div className='product-name'>
                <span className='text'>Smartphones</span>
              </div>
              </div>

          </div>
        </div>
        </div>
      </div>
      </div>
   <div className='container mt-4'>
    <div className='row section3'>
      <div className='col-md-6'>
        <div className='content-img mt-4'>
          <div className='row'>
            <div className='col-md-5'>
            <img src={img1} className='fluid-img mb-3' ></img>
            </div>
            <div className='col-md-5' style={{marginLeft:'0px'}}>
              <img src={img2} className='fluid-img mb-3'></img>
              <img src={img3} className='fluid-img mb-3'></img>
            </div>
      
          </div>
          
       
        
         
        </div>
      </div>
      <div className='col-md-6'>
      
      <div className='content2 mt-4'>
        <div className='text' id='about-us'>About us</div>
        <div className='main-text'>We Like You To Know<br/>
About Us</div>

<p className='text-secondary' style={{fontSize:"18px",fontWeight:'400',textAlign:'left'}}>we stand at the forefront of technological evolution.<br/> Founded on a vision of shaping the digital <br/>landscape, we bring decades of expertise in chip <br/>manufacturing.</p>

      </div>
      <div className='row'>
        <div className='col-md-5'>
          <div className='box1'>
            <div className='box-inside d-flex align-items-center justify-content-start'>
            <img src={target} style={{marginLeft:'10px'}} className='fluid-img mt-4'></img>
            <div className='content3'>
            
              <div className='row'>
              <div className='target mt-4'>5M</div>
              </div>
              <div className='row'>
              <div className='desc text-secondary'>Target Reach</div>
              </div>
           
             
       
            </div>
           
            
            </div>
            
           
          </div>
        </div>
        <div className='col-md-5'>
        <div className='box1'>
        <div className='box-inside d-flex align-items-center justify-content-start'>

            <img src={circuit} style={{marginLeft:'10px'}}className='fluid-img mt-4'></img>
            <div className='content3'>
            
            <div className='row'>
            <div className='target mt-4'>200 
            +</div>
            </div>
            <div className='row'>
            <div className='desc text-secondary'>Circuit Design</div>
            </div>
         
           
     
          </div>
         
          
          
            </div>
            </div>
        </div>
      </div>
      
      
      </div>
      
    </div>
    
   </div>
      <div className='footer text-white py-5 mt-5'>
        <div className='container'>
          
          <div className='row'>
            <div className='col-md-4 mb-3'>
              <h2 id='footer-company'>New Bharat</h2>
              <p>
                We technological evolution. Founded on a vision of shaping the digital landscape,
                we bring decades of expertise in chip manufacturing.
              </p>
            </div>
            <div className='col-md-4 mb-6'>
              <h3 className=''>Quick Links</h3>
              <div className='row'>
                <div className='col-4'>
                  <ul className='list-unstyled' style={{textDecoration:"none"}}>
                    <li className='mb-4' id='footer-text'><Link to='' className='text-white text-decoration-none'>Home</Link></li>
                    <li className='mb-4'><Link to='' className='text-white text-decoration-none'>Products</Link></li>
                   
                  </ul>
                </div>
                <div className='col-4'>
                  <ul className='list-unstyled'>
                  <li className='mb-4'><Link to='' className='text-white text-decoration-none'>Services</Link></li>
                  <li className='mb-4'><Link to='' className='text-white text-decoration-none'>About Us</Link></li>

                  </ul>
                </div>
                <div className='col-4'>
                  <ul className='list-unstyled'>
                    <li className='mb-4'><Link to='' className='text-white text-decoration-none'>Contact us</Link></li>
                    <li className='mb-4'><Link to=''className='text-white text-decoration-none'>Blog</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-3'>
              <h3>Subscribe</h3>
              <div className='input-group'>
                <input type='email' className='form-control' placeholder='Get product updates'  />
                <button className='btn btn-primary' type='button'>→</button>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-6'>
              <div className='d-flex'>
                {/* <img src={linkedInIcon} alt='LinkedIn' className='me-3' width='24' height='24' />
                <img src={facebookIcon} alt='Facebook' className='me-3' width='24' height='24' />
                <img src={twitterIcon} alt='Twitter' className='me-3' width='24' height='24' /> */}
              </div>
            </div>
            <div className='col-md-6 text-end'>
              <p className='mb-0'>© 2024 New Bharat. All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
