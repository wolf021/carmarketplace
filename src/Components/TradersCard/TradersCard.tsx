import React from 'react'
import './_tradersCard.scss'
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';



type TradersCard = {
  Trader : String
  TradersImg?: any 
  TradersName?: String
  TradersLocation? : String
  TradersNumber?: String
  TradersInventory? : Number
  TradersReviews? : any
  TradersRating? : any
} 


const TradersCard = (props:TradersCard) => {
  const reviews = 1
  const rating = 3
  return (
    <>
    <Link  className='traders-card-container' to="/traders/:id/" >
    <div className='traders-card' >
      <div className='traders-car-img' >
        <img src={props.TradersImg} width="100%" height="100%" />
      </div>
        <h3>{props.TradersName}</h3>

        <div>

        <Rating name="read-only" value={props.TradersReviews ? props.TradersRating : 0} readOnly />
        {
          props.TradersReviews ? 
          <p>{`(${props.TradersReviews}) Reviews`}</p> :
          <p>No Reviews Yet</p> 
        }
        </div>
        <p>{`${props.Trader}`}</p>
        <p>{`(${props.TradersInventory}) Cars on foreground`}</p>

        <div className='traders-card-contact' >
            <p style={{display:"flex", alignContent:"center",gap:"0.3rem"}} > <span><PlaceIcon/></span> Manchester</p>
            <p style={{display:"flex", alignContent:"center",gap:"0.3rem"}}> <span><CallIcon/></span> 0792850006</p>
        </div>
    </div>
    </Link>
    </>
  )
}

export default TradersCard