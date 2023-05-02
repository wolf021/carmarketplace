import React from 'react'
import './_homeSearchForm.scss'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../Button/Button';
import {Link} from 'react-router-dom'


type HomeSearch = {
  
}


const HomeSearchForm = () => {
  return (
    <div className='hero-form-container' >
    <form action="submit" className='home-form-container-wrapper' >
    <h4 className='homesearch-heading'>Find Your Next Car</h4>
     
    <div className='location-input-container'>
            <FmdGoodIcon className='search-input-pin'   />
          <input type="text" placeholder='PostCode or Location' className='location-input'  />
          </div>
        
   <div className='hero-form-selects' >
        <select className='hero-search-select' >
        <option value="" >Make</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
        
       
          
        <select className='hero-search-select' >
        <option value="" >Model</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
       
       
        <select className='hero-search-select' >
        <option value="" >Min</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
       
       
        
        <select className='hero-search-select' >
        <option value="" >Max</option>
<option value="option2">Option 2</option>
<option value="option3">Option 3</option>
</select>
</div>
<Link to="/car-search" >
<Button link="/car-search" name="Search 23000 Cars" icon={<SearchIcon/>} className='search-container-button'/>
</Link>
    
     
      <div style={{display:"flex",justifyContent:"space-between",color:"#0e6290", fontSize:"1rem",fontWeight:"bold"}}>

<p style={{color:"red"}} >Reset All</p>
<p>More Filters</p>
</div>
    </form>
   
  </div>
  )
}

export default HomeSearchForm