import React from 'react'
import "./_tradersHome.scss"
import TradersCta from '../../../Assets/traderscta.png'
import TradersCta2 from '../../../Assets/traderscta2.png'

import { Cars } from "../../../Data/data"
import Card from '../../../Components/Card/Card'
import CardImg from "../../../Assets/X70.png"
import { Accordion, AccordionDetails, AccordionSummary, Chip, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import tradersLogo from '../../../Assets/logos/traders-logo.png'
import DoneIcon from '@mui/icons-material/Done';

const TradersHomePage = () => {
  return (
    <div className='traders-garage-home-page'>
      <section className='traders-garage-section-1' >
        <div className='info-1-cta' >
          <img loading='lazy' src={TradersCta} alt=""  height="100%" width="100%" />
          <div className='info-1-cta-content'   >

          <h3>Top Cars</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Volutpat ultrices feugiat.</p>
          </div>
        </div>
        <div className='info-1-cta' >
          <img loading='lazy' src={TradersCta2} alt=""  height="100%" width="100%" />
          <div className='info-1-cta-content'   >

          <h3>Top Cars</h3>
          <p>Lorem ipsum dolor sit amet consectetur. Volutpat ultrices feugiat.</p>
          </div>
        </div>
       

      </section>
      <section className='traders-featured-stock' >
        <div className='traders-featured-stock-heading' >
          <h3>Featured Stock</h3>
          <h4>See More Stock =+</h4>
        </div>
        <div className='traders-featured-stock-flex' >
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
        </div>

      </section>
      <section className='traders-about-us' >
      <div className='traders-about-us-heading' >
          <h3>About Us</h3>
        </div>
        <div style={{height:"4rem",width:"15rem", marginBottom:"auto",margin:"1rem 0rem"}} >
      <img loading='lazy' src={tradersLogo} alt="" height="100%" width="100%" />
    </div>
        <p>Lorem ipsum dolor sit amet consectetur. Mattis arcu sit lacus at pellentesque sit mi. Sed massa turpis non nisi. Amet lectus aliquet facilisis integer suspendisse laoreet. Eget aliquet in ac amet aliquam porttitor faucibus a. Congue aliquam diam tempus elit eu curabitur euismod pulvinar turpis. In orci interdum dignissim dui morbi. Dignissim iaculis enim adipiscing habitant euismod tristique amet sem. Diam sapien nulla dignissim suspendisse porttitor. Aliquet mi sed ac maecenas.
Est elementum nulla tellus nulla feugiat eget senectus. Lectus amet facilisi imperdiet nunc condimentum dictum. In ut risus mus neque tortor gravida. Sed nunc hendrerit volutpat suspendisse enim et nisl sed netu</p>
      </section>
      <section className='traders-newly-listed-stock' >
      <div className='traders-newly-listed-stock-heading' >
          <h3>Newly Listed</h3>
          <h4>See More Stock =+</h4>
        </div>
        <div className='traders-newly-listed-stock-flex' >
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
        </div>
      </section>
      <section className='traders-services' >
      <div className='traders-services-heading' >
          <h3>Our Services</h3>
          
        <div className='traders-service' >
          <h4 className='traders-service-heading' >Business</h4>
          <div className='our-service-chip-container' >

<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />

          </div>
        </div>
        <div className='traders-service' >
          <h4 className='traders-service-heading' >Onsite Facilities</h4>
          <div className='our-service-chip-container' >

<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />

          </div>
        </div>
        <div className='traders-service' >
          <h4 className='traders-service-heading' >Discounts and Offers</h4>
          <div className='our-service-chip-container' >

<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />
<Chip label="Car Oil Change" style={{backgroundColor:"transparent",color:"grey",fontSize:"1rem"}} icon={<DoneIcon color='inherit' style={{color:"grey"}} />} />

          </div>
        </div>
        </div>
        
      </section>
      <section className='traders-faq' >
      <div className='traders-featured-stock-heading' >
          <h3>Frequently Asked Questions</h3>
          
        </div>
        <div className='trades-faq-container' >

        
      <Accordion >
        <AccordionSummary  expandIcon={<ExpandMoreIcon color='inherit' fontSize='large' className='traders-faq-icon' />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='traders-accordian-heading' >Where we Are Located</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon color='inherit' fontSize='large' className='traders-faq-icon' />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='traders-accordian-heading'>How We Sell Cars</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon color='inherit' fontSize='large' className='traders-faq-icon' />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography className='traders-accordian-heading'>Our Responding Time</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      </section>
     
    </div>
  )
}

export default TradersHomePage