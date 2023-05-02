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
import HomeSearchForm from '../../Components/HomeSearchForm/HomeSearchForm';
import { Cars } from "../../Data/data"



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
      <div className='home-search-form-container'>

      <HomeSearchForm />
      </div>
     
      
    </section>
    <div className='home-search-form-container-mobile'>

<HomeSearchForm />
</div>
    <div  className='widespace' ></div>
    { reacent &&

    <section className='reacently-viewed' >
      <div>Welcome Back</div>
      <br/>
      <div>Your Reacently Viewed</div>
       <div className='reacently-viewed-card-container'>
        
       {Cars.map((car) => (
              <Card
                make={car.make}
                model={car.model}
                price={car.price}
                miles={car.miles}
                year={car.year}
                link="/"
                cardImg={car.images}
                days={car.days}
                sponsored={true}
              />
            ))}
{/*      
       <Card  year={2022} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true} />
       <Card  year={2019} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={2} sponsored={true} hot={true} />
        <Card  year={2010} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true}/>
         */}
      
       
        
      </div> 
      

    </section>
    }

    <section className='popular-makes' >
      <h3  >Popular Makes</h3>
      <div className=' year={2017} make-container' >
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
      {Cars.map((car) => (
              <Card
                make={car.make}
                model={car.model}
                price={car.price}
                miles={car.miles}
                year={car.year}
                link="/car-details"
                cardImg={car.images}
                days={car.days}
                sponsored={true}
              />
            ))}
        {/* <Card  year={2022} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true} />
        <Card  year={2019} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={2} sponsored={true} hot={true} />
        <Card  year={2020} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true}/>
        <Card  year={2011} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true} hot={true}  />
        <Card  year={2020} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1} sponsored={true}/>
        <Card  year={2004} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={3} sponsored={true} hot={true}  />
        <Card  year={2004} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={1}sponsored={true} />
        <Card  year={2012} make='Proton X70' price={5000} miles={17000} link="/car-details" cardImg={CardImg} days={2} sponsored={true}/> */}
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