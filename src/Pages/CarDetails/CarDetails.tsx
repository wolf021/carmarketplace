import React, { useState } from 'react'
import './_carDetails.scss'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import {images} from '../../Data/data'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Accordion, AccordionDetails, AccordionSummary, Modal, TextareaAutosize, TextField, Typography,Stack,Chip } from '@mui/material';
import Buttons from '../../Components/Button/Button';
import MessageIcon from '@mui/icons-material/Message';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import Gauge from '../../Assets/MakeIcon/gauge.png'
import BodyStyle from '../../Assets/MakeIcon/bodystyle.png'
import Doors from '../../Assets/MakeIcon/doors.png'
import Drivetrain from '../../Assets/MakeIcon/drivetrain.png'
import Fueltype from '../../Assets/MakeIcon/fueltype.png'
import Transmission from '../../Assets/MakeIcon/transmission.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import Card from '../../Components/Card/Card';
import CardImg from '../../Assets/X70.png'
import DoneIcon from '@mui/icons-material/Done';

const CarDetails = () => {
  const [isActiveFav, setIsActiveFav] = useState(false)
  const [isActiveModel, setisActiveModel] = useState(false)
  
const HandleFav = () =>{
  setIsActiveFav(!isActiveFav)
}
const url = "gumtree.com"

  return (
    <div className='car-details-page' >
      
      <Modal 
  open={isActiveModel}
  
  
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box style={{color:"white"}} >
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
    <Buttons name="close" onClick={()=> setisActiveModel(false)} />
  </Box>
</Modal>
      <div className='product-details-contact-options' >
      <Buttons name="call*"  icon={<PhoneIphoneIcon/>}  className='product-details-contact-options-button call'  />
      <Buttons name="Message" icon={<MessageIcon/>}  className='product-details-contact-options-button' />
      <Buttons name="Whatsapp" icon={<WhatsAppIcon/>}  className='product-details-contact-options-button' />
      <Buttons name="Share" icon={<ShareIcon/>}  className='product-details-contact-options-button' />
     
      </div>
    <section className='ads' >
    
    </section>
    <section className='product-details' >
    
      <div className='product-slider-container' >
       

       
        <ImageSlider images={images} onClick={()=>{
          setisActiveModel(true)
        }} />

<div className='info-cluster-container-mobile' >
       <div className='info-heading' >
        <FavoriteIcon onClick={HandleFav} fontSize='large' className={`product-details-heading-wishlist ${isActiveFav ? "active" : ""  } `} />
        <div style={{display:"flex",flexDirection:"column"}} >

        <h3>Bmw | X5 </h3>
       <div className='product-detail-info' >
        <p className='product-detail-atrib' >1.6 TDRI DPF Zetec Climate 5dr </p>
        <p className='product-detail-atrib' >2007 (07reg) </p>
        <p className='product-detail-price' >£: 5000.00</p>
       </div>
        </div>
       </div>
        </div>
      
         
        <div className='vehicle-summary' >
          <p className='vehicle-summary-heading'>Vehicle Summary</p>
          <div className='vehilcle-summary-grid' >

          <div className='vehilcle-smmary-detail-container'>
            <div style={{height:"3rem", width:"4rem"}} >
            <img alt="icon" src={Gauge} height="100%" width="100%" />
            </div>
            <p>13000 Miles</p>
          </div>
          <div className='vehilcle-smmary-detail-container'  >
          <div style={{height:"3rem", width:"4rem"}} >
            <img alt="icon" src={Drivetrain} height="100%" width="100%" />
            </div>
            <div>
            
            <p>Fornt Wheel Drive 1.2 Liter</p>
            </div>
          </div>
          
          <div className='vehilcle-smmary-detail-container' >
          <div style={{height:"3rem", width:"4rem"}} >
            <img alt="icon" src={Fueltype} height="100%" width="100%" />
            </div>
            <p>Petrol</p>
          </div>
          <div className='vehilcle-smmary-detail-container' >
          <div style={{height:"3rem", width:"4rem"}} >
            <img alt="icon" src={Transmission} height="100%" width="100%" />
            </div>
            <p>Automatic</p>
          </div>
          <div className='vehilcle-smmary-detail-container' >
          <div style={{height:"3rem", width:"4rem"}} >
            <img alt="icon" src={BodyStyle} height="100%" width="100%" />
            </div>
            <p>HatcBack</p>
          </div>
          <div className='vehilcle-smmary-detail-container' >
          <div style={{height:"3rem", width:"4rem"}} >
            <img alt="icon" src={Doors} height="100%" width="100%" />
            </div>
            <p>5 Doors</p>
          </div>
          </div>
        </div>
        <div className='product-description' >
          <h4 className='product-description-heading' >Description</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Facilisis tortor quis lorem imperdiet massa in diam. Sed semper et ullamcorper mauris. Nec sed enim turpis sed vitae pretium odio. Ultricies proin varius imperdiet scelerisque gravida ac volutpat arcu. Ultrices erat eu urna ante. Feugiat imperdiet ornare eu leo rhoncus porta nulla netus porttitor. Turpis lectus elementum morbi ut. Consectetur id at pellentesque urna. Aliquam quam massa massa vel. Tortor tincidunt elementum rhoncus scelerisque. Nec congue tempor aliquam aliquet cursus.</p>
        </div>
        <div className='extra-features-dropdown'>

       
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
         
        >
          <Typography  style={{color:"#05053b",fontSize:"1.1rem"}}>Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{display:"flex",justifyContent:"flex-start", flexWrap:"wrap",gap:"1rem 0.7rem"}} >

    <Buttons name="Ac 4 vents " icon={<DoneIcon color='success'/>} className="options-button" />
    <Buttons name="CD Player" icon={<DoneIcon color='success'/>} className="options-button" />
    <Buttons name="20 Inch Rims " icon={<DoneIcon color='success'/>} className="options-button" />
    <Buttons name="traction controls " icon={<DoneIcon color='success'/>} className="options-button" />
    <Buttons name="Media Controls " icon={<DoneIcon color='success'/>} className="options-button" />
    <Buttons name="key-less Entry " icon={<DoneIcon color='success'/>} className="options-button" />
    <Buttons name="Apple Play" icon={<DoneIcon color='success'/>} className="options-button" />
    </div>

        </AccordionDetails>
      </Accordion>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:"#05053b",fontSize:"1.1rem"}}>Extra Features</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Stack direction="row" spacing={1} style={{display:"flex",justifyContent:"flex-start", flexWrap:"wrap",gap:"1rem 0.4rem"}} >
      <Chip label="Cd Player" style={{backgroundColor:"#05053b",color:"white",fontSize:"1rem"}} />
      <Chip label="Ac Vents" style={{border:"1px solid #05053b",color:"#05053b",fontSize:"1rem"}}  variant="outlined" />
      <Chip label="5 Doors" style={{backgroundColor:"#05053b",color:"white",fontSize:"1rem"}} />
      <Chip label="Sun Roof" style={{border:"1px solid #05053b",color:"#05053b",fontSize:"1rem"}}  variant="outlined" />
      <Chip label="20 inch Alloy Rims" style={{backgroundColor:"#05053b",color:"white",fontSize:"1rem"}} />
      <Chip label="Convertiable" style={{border:"1px solid #05053b",color:"#05053b",fontSize:"1rem"}}  variant="outlined" />
      <Chip label="Ules Free" style={{backgroundColor:"#05053b",color:"white",fontSize:"1rem"}} />
      <Chip label="Sun Roof" style={{border:"1px solid #05053b",color:"#05053b",fontSize:"1rem"}}  variant="outlined" />
      <Chip label="20 inch Alloy Rims" style={{backgroundColor:"#05053b",color:"white",fontSize:"1rem"}} />
      <Chip label="Convertiable" style={{border:"1px solid #05053b",color:"#05053b",fontSize:"1rem"}}  variant="outlined" />
      <Chip label="Ules Free" style={{backgroundColor:"#05053b",color:"white",fontSize:"1rem"}} />
      <Chip label="Sun Roof" style={{border:"1px solid #05053b",color:"#05053b",fontSize:"1rem"}}  variant="outlined" />
      <Chip label="20 inch Alloy Rims" style={{backgroundColor:"#05053b",color:"white",fontSize:"1rem"}} />
      <Chip label="Convertiable" style={{border:"1px solid #05053b",color:"#05053b",fontSize:"1rem"}}  variant="outlined" />
      <Chip label="Ules Free" style={{backgroundColor:"#05053b",color:"white",fontSize:"1rem"}} />
      
    </Stack>
        </AccordionDetails>
      </Accordion>
      </div>
      </div>
      <div className='product-details-info'>
        <div>

        <div className='info-cluster-container' >
       <div className='info-heading' >
        <FavoriteIcon onClick={HandleFav} fontSize='large' className={`product-details-heading-wishlist ${isActiveFav ? "active" : ""  } `} />
        <h3>Bmw | X5 </h3>
        
       </div>
       <div className='product-detail-info' >
        <p className='product-detail-atrib' >1.6 TDRI DPF Zetec Climate 5dr </p>
        <p className='product-detail-atrib' >2007 (07reg) </p>
        <p className='product-detail-price' >£: 5000.00</p>
       </div>
        </div>
      
        </div>
       <div className='dealer-contact-form' >
        <p>Contact the dealer for a priority response as they open for business in the morning.</p>
        <div>
          <form className='dealer-contact-form-container' action="submit">
          <TextField className='form-input' id="outlined-basic" label="My Name" variant="outlined"  />
          <TextField className='form-input' id="outlined-basic" label="Call Me on" variant="outlined" />
          <TextField className='form-input' id="outlined-basic" label="Email Me" variant="outlined" />
          
          <TextareaAutosize style={{resize:"none"}} placeholder="Hi, I'm interested in this Nissan Leaf. Please could you contact me back." />
         
          <Buttons className='send-message-button' name="Send Message" icon={<MessageIcon/>}  />
          <div className='call-button-container' >
            Or
            <div className='call-button-flex' >
              <Buttons className='call-button-call'  name="Call" icon={<PhoneIphoneIcon/>}  />
              <Buttons className='call-button-whatsapp' name="Whatsapp" icon={<WhatsAppIcon/>}  />
            </div>
          </div>
          
          </form>
        </div>
       </div>
        <div className='seller-card' >
          <p className='seller-card-heading' >Ami Autos </p>
          <p className='seller-card-number' >020 4579 2644 *</p>
          <p className='seller-card-reviews'>Reviews(45)</p>
          <a href={`https://${url}`} >

          <p className='seller-card-website' >www.ukcars.co.uk</p>
          </a>
          <p className='seller-card-location' >142 - 144 Palmerston Road, London, London, E17 6PY (See map)</p>
          <Link to="/" >
          <p className='seller-card-stock' >18 cars (View all stock)</p>
          </Link>

        </div>
        <div className='details-ads' >

        </div>
      </div>

    </section>
    <section className='details-recomanded-to-you' >
        <h4 className='recomanded-to-you-heading' >Recomanded To You</h4>
        <div className='recomanded-to-you-card-container' >

        <Card make='Proton X70' price={5000} miles={17000} link="/" cardImg={CardImg} days={1} sponsored={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/" cardImg={CardImg} days={2} sponsored={true} hot={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/" cardImg={CardImg} days={2} sponsored={true} hot={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/" cardImg={CardImg} days={2} sponsored={true} hot={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/" cardImg={CardImg} days={2} sponsored={true} hot={true} />
        <Card make='Proton X70' price={5000} miles={17000} link="/" cardImg={CardImg} days={1} sponsored={true}/>
        <Card make='Proton X70' price={5000} miles={17000} link="/" cardImg={CardImg} days={1} sponsored={true} />
        </div>
    </section>
    
    </div>
  )
}

export default CarDetails