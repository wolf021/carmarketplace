import React from 'react'
import './_footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/Logo.png'

const Footer = () => {
  return (
    <div  style={{marginTop:"2rem"}} >
    <div className='footer-banner' >
      <div>
    <p className='footer-banner-heading' >Buy and Sell your car in a snap </p>
    <p>you can Buy or Sell your Car easily.</p>
      </div>
      <div className='footer-nav-logo' >
      <img src={Logo} alt="logo" height="100%" width="100%" />
      </div>
    </div>
    <footer>
      <nav className='footer-nav' >

      <ul className='footer-lists' >
        <p className='footer-nav-heading' >

      Help & Contact
        </p>
    
        <li>
          FAQS
        </li>
        <li>
          Policies
        </li>
        <li>
          Contact Us
        </li>
      </ul>
      <ul className='footer-lists' >
        <p className='footer-nav-heading'>

      About Us
        </p>
     
        <li>About Trade District</li>
        <li>Adevertise With US</li>
      </ul>
      <ul className='footer-lists'>
        <p className='footer-nav-heading'>

      More From Us
        </p>
      
        <li>Car Guides</li>
        <li>Sell My Car</li>
      </ul>
      </nav>
      <section className='footer-social-media' >
        
        <p className='footer-social-heading' >

Join Trade District Community
</p>
<ul className='social-links'>
  <Link className='link' to="/">
  <li><FacebookIcon fontSize='large'  /></li>
  </Link>
 
 <Link className='link' to='/'>
 <li><InstagramIcon fontSize='large'/></li>
 </Link>
  <Link className='link' to="/">
  <li><YouTubeIcon fontSize='large'/></li>
  </Link>
  
</ul>

       
       
      </section>
      <div className='reserved'>
        <p>© Copyright 2000-2023 tradedistrict.com Limited. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer