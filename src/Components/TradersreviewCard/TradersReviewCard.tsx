import React from 'react'
import './_tradersReviewCard.scss'
import { Rating } from '@mui/material'

type ReviewCard = {
    Reviewername: string,
    post: string,
    days: number,
    stars: number
}

const TradersReviewCard = (props:ReviewCard) => {
  return (
    <div className='traders-review-card' >
        <div className='trades-review-card-flex' >
        <div>

        <h4 className='traders-review-card-heading' >{props.Reviewername}</h4>
        <p className='traders-review-card-days'>{props.days} Days Ago</p>
        </div>
        <div style={{textAlign:"center"}} >

        <p className='traders-review-card-heading'>{props.stars} 0ut 0f 5</p>
        <Rating name="read-only" value={props.stars} readOnly />
        </div>
        </div>
        <p>{props.post} </p>
    </div>
  )
}

export default TradersReviewCard