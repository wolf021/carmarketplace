import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BlogCard from '../../Components/BlogCard/BlogCard';
import BlogImg from '../../Assets/home1.jpg'
import Button from '../../Components/Button/Button';
import BlogsCard from '../../Components/blogsCard/BlogsCard';
import { Pagination, Stack } from '@mui/material';






const Blogs = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  return (
    <div className='blogs-page'>
      <div className='blogs-ads' >

      </div>
      <div className='blogs-search-bar' >
        <div className='blogs-search-form' >
          <select className='blogs-search-form-select' name="Make" id="Make">
            <option value="Bmw"> Make Any</option>
          </select>
          <select  className='blogs-search-form-select' name="Make" id="Make">
            <option value="Bmw"> Model Any</option>
          </select >
          <Button className='blogs-search-form-button' name="Search 4000 Articles" />
        </div>
        <Tabs 
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="inherit"
        centered
        >
        <Tab  label="News" />
        <Tab label="Reviews" />
        <Tab label="Articles" />
      </Tabs>
      </div>
    <div className='blogs-flex-container'>

    

    <div className='blogs-tabs-sections' >
  
      {value === 0 && <News />}
      {value === 1 && <Reviews />}
      {value === 2 && <Articles />}
    </div>

    <div className='blogs-recomandations-section' >
      <div>

      <h3 className='blogs-recomandation-section-headings' >Popular & Recommanded</h3>
      <br/>
      
        <p className='blogs-recomandation-section-links' >Reporting potholes and the damage they cause to your car</p>
      
        <p className='blogs-recomandation-section-links' >Reporting potholes and the damage they cause to your car</p>
      
        <p className='blogs-recomandation-section-links' >Reporting potholes and the damage they cause to your car</p>
      
        <p className='blogs-recomandation-section-links' >Reporting potholes and the damage they cause to your car</p>
      
        <p className='blogs-recomandation-section-links' >Reporting potholes and the damage they cause to your car</p>
      
      </div>
      <div style={{backgroundColor:"grey", height:"50vh", width:"100%"}} ></div>
    </div>
    </div>
        </div>
  );
}

function News() {
  return (
    <div>
     
      <BlogsCard />
      <div style={{display:"flex", justifyContent:"center",margin:"1.5rem 0rem"}} >

     <Stack spacing={2}>
              <Pagination
                count={10}
                className="page-number"
                color={"standard"}
                size="large"
                />
            </Stack>
                </div>

    </div>
  );
}

function Reviews() {
  return (
    <div>
      <div style={{display:"flex" ,flexDirection:"column",gap:"2rem"}}>
        
     
     <BlogsCard />
     <BlogsCard />
     <BlogsCard />
     <BlogsCard />
     <BlogsCard />
     <BlogsCard />
     <BlogsCard />
     </div>
     <div style={{display:"flex", justifyContent:"center",margin:"1.5rem 0rem"}} >

     <Stack spacing={2}>
              <Pagination
                count={10}
                className="page-number"
                color={"standard"}
                size="large"
                />
            </Stack>
                </div>
    </div>
  );
}

function Articles() {
  return (
    <div>
      
      <div style={{display:"flex" ,flexDirection:"column",gap:"2rem"}}>
        
     
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        <BlogsCard />
        </div>
        <div style={{display:"flex", justifyContent:"center",margin:"1.5rem 0rem"}} >
   
        <Stack spacing={2}>
                 <Pagination
                   count={10}
                   className="page-number"
                   color={"standard"}
                   size="large"
                   />
               </Stack>
                   </div>
    </div>
  );
}

export default Blogs;
