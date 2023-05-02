import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './_header.scss'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Logo from '../../Assets/Logo.png'

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
const isLogedIn = true
  const Menu = [
  
    {
    name: "Post An Ad",
    link: "/"
  },
    {
    name: "Manage My Ad",
    link: "/"
  },
    {
    name: "Messages",
    link: "/"
  },
    {
    name: "My Details",
    link: "/"
  },
    {
    name: "Logout",
    link: "/"
  },
  
]



  return (
   <>
   <header className='site-header' >
    <div className='container' >
      <div className='nav-logo' >
        <Link to="/" >

         <img src={Logo} alt="logo" height="100%" width="100%" /> 
        </Link>
        
      </div>
      <form  className='search-bar' action="submit">
        <input type="text" placeholder='eg. BMW Series 3, Mercedes G-wagon.....' />
        <button style={{color:"white"}}>
          <SearchIcon fontSize='medium' color='inherit'  />
        </button>
      </form>
      <nav className='navigation' >
    <ul className='header-nav-links' >
      <li className='search-toggle'  onClick={()=>{
        setIsSearchActive(!isSearchActive);
      }} >
        <SearchIcon fontSize='medium' />
        Search
        </li>
        <Link className='link' to='/' >
      <li>
        <AddCircleOutlinedIcon fontSize='medium' />
        Sell
        </li>
        </Link>
        {
          !isLogedIn ? 
        <Link className='link' to='/' >
      <li>
        <PersonIcon fontSize='medium' />
        Login/Register
        </li>
        </Link>
        :
        <>
       
     
        <li className='mobile-hamburger' onClick={()=>{
          setIsMenuActive(!isMenuActive)
          console.log(isMenuActive)
        }} >
        <MenuIcon fontSize='medium'/>
          Menu
        
          </li>
          </>
        }
    </ul>
   

    
   

  </nav>
  

    </div>
    {
      isSearchActive && 
    
    <form  className='search-bar-2' action="submit">
        <input type="text" placeholder='eg BMW Series 3, Mercedes G-wagon.....' />
        <button style={{color:"white"}}>
          <SearchIcon fontSize='medium' color='inherit'  />
        </button>
      </form>
      }
    
    <div className={isMenuActive ? "drawer-open": "drawer-close"} >
      <ul className='header-nav-links'>
        {
          Menu.map(list=>(
            <Link to={list.link} className='link' >
            <li className='drawer-menu' key={list.name} >{list.name}
            <KeyboardArrowRightIcon />
            </li>
            </Link>
          ))
        }

        
      </ul>
    </div>
   
   </header>
 
   </>
  )
}

export default Header