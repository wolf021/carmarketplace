import React from 'react'
import './_traderGarageLayout.scss'
import { Link, Outlet,NavLink,useLocation } from 'react-router-dom'
import tradersLogo from '../../Assets/logos/traders-logo.png'
import varifiedLogo from '../../Assets/logos/varified.png'
import tradershro from '../../Assets/tradershero.png'



const TraderGarageLayout = () => {
  const trade= "bristol-stree-motors"
  const location = useLocation()
  return (
    <div style={{padding:"0rem 0rem" }} >
    <div style={{height:"40vh",width:"100%",backgroundColor:"teal", marginBottom:"auto"}} >
      <img src={tradershro} alt="" height="100%" width="100%" />
    </div>
    <nav className='traders-nav' >
    <div className='traders-logo' >
        {
          tradersLogo? 
          <img src={tradersLogo} alt="" width="100%" height="100%" />
          : "FOrd"
        }
      </div>
     
    <ul className='traders-nav-links' >

   
    <NavLink className={location.pathname === `/traders/${trade}/` ? 'trader-nav-active' : 'trader-nav'} to={`/traders/${trade}/`} >
    
    <li>Home</li>
    </NavLink>
    <NavLink className={location.pathname === `/traders/${trade}/inventory` ? 'trader-nav-active' : 'trader-nav'} to={`/traders/${trade}/inventory`} >
    
    <li>Inventory</li>
    </NavLink>
    <NavLink className={location.pathname === `/traders/${trade}/review` ? 'trader-nav-active' : 'trader-nav'} to={`/traders/${trade}/review`} >
    
    <li>Reviews</li>
    </NavLink>
    <NavLink className={location.pathname === `/traders/${trade}/contact` ? 'trader-nav-active' : 'trader-nav'} to={`/traders/${trade}/contact`} >
    
    <li>Contact</li>
    </NavLink>
    <li></li>
    
    </ul>
    <div className='traders-logo' >
        {
          varifiedLogo? 
          <img src={varifiedLogo} alt="" width="100%" height="100%" />
          : "FOrd"
        }
      </div>
    </nav>
    <main>
      <Outlet/>
    </main>
    </div>
    
  )
}

export default TraderGarageLayout