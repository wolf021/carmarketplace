import React from 'react'
import "./_tradersContactus.scss";
import Button from '../../../Components/Button/Button';
import { Checkbox, Input, TextField } from '@mui/material';

const TradersContactPage = () => {
  const tradersNum = "079285008"
  return (
    <div className='traders-contactus-page' >
      <h3 className='traders-contact-heading'>Contact Us</h3>
      <div className='contact-us-container' >
        <div className='traders-contact-details' >
          <h4 className='traders-contact-heading' >Need to reach us quickly?</h4>
          
          <p>Call or live chat with us to get a quick response to your query.
</p>
          <br/>
          <Button className='traders-contact--details-button' name={`Call: ${tradersNum}`} />
          <br/>
          
          <Button className='traders-contact--details-button' name={`Message Dealer`} />
          <br/> <br/>
          <h4 className='traders-contact-heading'>Location</h4>
          <br/>
          <p>Address:</p>
          <p>17 Manor Road</p>
          <p>Medford</p>
          <p>E176nz</p>
          <br/>
          <h4 className='traders-contact-heading'>10 Miles Away From You</h4>
          <br/>
          <Button className='traders-contact--details-button' name={`Get Directions`} />
          <br/> <br/>
          <h4 className='traders-contact-heading'>Social</h4>
          <br/>
          <p style={{color:"blue"}} >www.carGurus.co.uk</p>
          </div>
        <div className='traders-contact-form' >
          <h4 className='traders-contact-heading'>Send your message </h4>
          <p>Send Us  your message and we will be in touch with you shortly</p>
          <form  >
            <div className='traders-contact-form-container'>

          <TextField   InputLabelProps={{
    style: { color: '#0e6290',outlineColor:"#0e6290" },
  }}  id="outlined-basic" label="First Name" variant="outlined" />
          <TextField InputLabelProps={{
    style: { color: '#0e6290' },
  }}   id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField InputLabelProps={{
    style: { color: '#0e6290' },
  }}   id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField InputLabelProps={{
    style: { color: '#0e6290' },
  }}   id="outlined-basic" label="Email" variant="outlined" />
          <TextField InputLabelProps={{
    style: { color: '#0e6290' },
  }}   id="outlined-basic" label="Prefered Contact Method " variant="outlined" />
          <TextField InputLabelProps={{
    style: { color: '#0e6290' },
  }}   id="outlined-basic" label="Best Time To Call" variant="outlined" />
            </div>
          <TextField InputLabelProps={{
    style: { color: '#0e6290' },
  }}   style={{width:"100%"}} multiline rows={4} id="outlined-basic" label="Describe Your Query" variant="outlined" />
         <div className='traders-contact--form-consent' >
         <Checkbox style={{width:"2rem"}}  defaultChecked  sx={{ '& .MuiSvgIcon-root': { fontSize: 36 } ,
    '&.Mui-checked': {
      color:"#0e6290" ,
    },  }} />
        <p>Car District will use your details in accordance with our <span style={{color:"blue"}} >privacy policy</span> . In addition, by hitting "Send your enquiry", you're happy for us to pass your details to the seller which will be used by the seller in accordance with their privacy policy. Please check the seller's website or contact them separately for details.</p>
         </div>
         <div style={{display:"flex",
        justifyContent:"flex-end"}}>

          <Button name="Send Your Enquiry" className='traders-contact-form-button' />
         </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TradersContactPage