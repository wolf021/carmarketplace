import React from 'react'
import HeroImg from '../../Assets/heroimg.jpg';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SellIcon from '@mui/icons-material/Sell';
import Button from '../../Components/Button/Button';
import Card from '../../Components/Card/Card';
import CardImg from '../../Assets/X70.png'
import EastIcon from '@mui/icons-material/East';
import Carousel from '../../Components/Carousel/Carousel';
import IconCard from '../../Components/IconCard/IconCard';
import MakeImg from  '../../Assets/MakeIcon/svg12.png'
import MakeImg2 from  '../../Assets/MakeIcon/svg8.png'
import MakeImg3 from  '../../Assets/MakeIcon/svg10.png'
import MakeImg4 from  '../../Assets/MakeIcon/svg9.png'
import MakeImg5 from  '../../Assets/MakeIcon/svg13.png'
import MakeImg6 from  '../../Assets/MakeIcon/svg16.png'
import BlogCard from '../../Components/BlogCard/BlogCard';
import BlogImg from '../../Assets/home1.jpg'



const Home = () => {
  const reacent = true 
  return (
    <>
    

    <section className='hero-section'>
      <div className='her0-info'>
        <h2 className='hero-heading' >
        Lets Find Yor Dream Car
        </h2>
        <p className='hero-desc' >
        Search thousands of Cars on the UK's local motors marketplace
        </p>
      

      </div>
      
      <div className='hero-form-container' >
        <form action="submit">

          <div className='search-input-container' >
            <div className=''>
            <h4>Make</h4>
            <select >
            <option value="" >Make</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
            </div>
            <div className=''>
              <h4>Model</h4>
            <select >
            <option value="" >Model</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
            </div>
            <div className=''>
            <h4>Price Range</h4>
            <select >
            <option value="" >Min</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
            </div>
            <div className=''>
            <h4>.</h4>
            <select >
            <option value="" >Max</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
            </div>
            
          </div>
          <div className='location-container' >
            <div >
              <h4>Location</h4>
              <div className='location-input-container'>
                <FmdGoodIcon className='search-input-pin' />
              <input type="text" placeholder='PostCode or Location' className='location-input'  />
              </div>
            </div>
            
            <button className='search-container-button'>Search Cars</button>
          </div>
        </form>
      </div>
      
    </section>
   
    <div  className='widespace' ></div>
    { reacent &&

    <section className='reacently-viewed' >
      <div>Welcome Back</div>
      <div>Your Reacently Viewed</div>
       <div className='reacently-viewed-card-container'>
        

     
       <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={2} sponsored={true} hot={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true}/>
        
      
       
        
      </div> 
      

    </section>
    }

    <section className='popular-makes' >
      <h3  >Popular Makes</h3>
      <div className='make-container' >
        <IconCard link='/' MakeIcon={MakeImg} />
        <IconCard link='/' MakeIcon={MakeImg2} />
        <IconCard link='/' MakeIcon={MakeImg3} />
        <IconCard link='/' MakeIcon={MakeImg4} />
        <IconCard link='/' MakeIcon={MakeImg5} />
        
        <IconCard link='/' MakeIcon={MakeImg6} />
      </div>

    </section>
    <section className='car-selling-section' >
      <h3 className='selling-section-heading'>Have a car to sell, why not sell it with Trade District?</h3>
      
      <h4 className='selling-sub-heading' >Sell your car for <span className='selling-sub-span' >FREE</span> </h4>
      <p className='selling-info'>Selling a car is free for Private seller</p>
      <div>

      <Button className='car-selling-button' name="Sell Your Car" icon={<SellIcon/>} />
      </div>
      <p style={{color:"blue"}}>What to Learn More How?</p>
    </section>
   
    <section className='recently-listed-section' >
      <h3 className='reacently-heading' > Recently Listed</h3>
      <div className='card-container' >
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={2} sponsored={true} hot={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true}/>
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true} hot={true}  />
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true}/>
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={3} sponsored={true} hot={true}  />
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1}sponsored={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={2} sponsored={true}/>
        </div>
    </section>
    <section className='why-choose-us'>
      <h3>Why Choose Us?</h3>
    <div className="two-column-section">
      <div className="left-column">
        <h3 className='why-choose-sub-heading' >Find your next car</h3>
        <p  >Whether you're searching for what's available in your local area or performing a quick search by make and model, the Used Cars page provides a clear picture to help you research your car purchase.</p>
        <p className='why-choose-link' >Search Used Cars <span><EastIcon/></span></p>
      </div>
      <div className="right-column">
        <h3 className='why-choose-sub-heading' >Sell your car with ease</h3>
        <p>Whether you're a trader or want to sell your car privately, we can help you sell your car with ease. We offer a variety of services tailored to meet the needs of both traders and private sellers, making it easy to get the best price for your car.</p>

        <p className='why-choose-link' >Advertise your car <span><EastIcon/></span></p>
      </div>
    </div>
    </section>
    <section className='home-blog-section' >
      <h3> From Our Blog Section</h3>
      <div className='home-blog-card-container' >

       <BlogCard blogTitle='How Green Are Electric Cars?
' blogUrl='/' blogImg={BlogImg} blogDescription="Whether you're a trader or want to sell your car privately, we can help you sell your car with ease. We offer a" /> 
       <BlogCard blogTitle='Are electric car batteries recyclable?
' blogUrl='/' blogImg={BlogImg} blogDescription="Whether you're a trader or want to sell your car privately, we can help you sell your car with ease. We offer a" /> 
       <BlogCard blogTitle='What is the average battery life of an electric car?' blogUrl='/' blogImg={BlogImg} blogDescription="Whether you're a trader or want to sell your car privately, we can help you sell your car with ease. We offer a" /> 
      </div>
    </section>

   
    </>
  )
}

export default Home