import React, { useMemo, useState } from 'react'
import './_tradersReviewPage.scss'
import { Checkbox, Pagination, Rating, Stack, TextField } from '@mui/material'
import Button from '../../../Components/Button/Button'
import TradersReviewCard from '../../../Components/TradersreviewCard/TradersReviewCard'
import ReviewProgressBarCard from '../../../Components/ReviewProgressBarCard/ReviewProgressBarCard'

const TradersReviewpage = () => {
  const [writeReview, setwriteReview] = useState(false)
  const Posts = [
    {
      stars: 5,
      post: "Great product!",
      name: "John Doe",
      dayAgo: 2,
    },
    {
      stars: 4,
      post: "Good quality, but could be better.",
      name: "Jane Smith",
      dayAgo: 5,
    },
    {
      stars: 3,
      post: "Average product.",
      name: "Sam Johnson",
      dayAgo: 10,
    },
    {
      stars: 2,
      post: "Not satisfied with the purchase.",
      name: "Emily Brown",
      dayAgo: 15,
    },
    {
      stars: 1,
      post: "Terrible experience, avoid!",
      name: "Mark Wilson",
      dayAgo: 20,
    },
    {
      stars: 5,
      post: "Excellent service and fast delivery!",
      name: "Sarah Thompson",
      dayAgo: 3,
    },
    {
      stars: 4,
      post: "Good value for the price.",
      name: "Michael Johnson",
      dayAgo: 8,
    },
    {
      stars: 5,
      post: "Decent quality but could use some improvements.",
      name: "Jennifer Davis",
      dayAgo: 12,
    },
    {
      stars: 2,
      post: "Disappointed with the product's durability.",
      name: "Christopher Wilson",
      dayAgo: 16,
    },
    {
      stars: 1,
      post: "Worst experience ever! Avoid at all costs!",
      name: "Emma Roberts",
      dayAgo: 22,
    },
    {
      stars: 5,
      post: "Absolutely love it! Highly recommended.",
      name: "Daniel Anderson",
      dayAgo: 4,
    },
    {
      stars: 5,
      post: "Great customer support and quick response time.",
      name: "Olivia Smith",
      dayAgo: 7,
    },
    {
      stars: 3,
      post: "Average product, nothing special.",
      name: "James Johnson",
      dayAgo: 11,
    },
    {
      stars: 2,
      post: "Not worth the price, very disappointed.",
      name: "Sophia Wilson",
      dayAgo: 17,
    },
    {
      stars: 1,
      post: "Total scam! Stay away!",
      name: "Ava Thompson",
      dayAgo: 25,
    },
  
    
    
]
  
const totalRatings = useMemo(() => {
  return Posts.length;
}, [Posts]);

  
  return (
    <div className='traders-review-page' >
     <section className='review-form-section' >
     
      <div className='review-progress-bars' >
        <ReviewProgressBarCard Posts={Posts} />
      </div>
      <div style={{display:"flex",
        justifyContent:"center", width:"100%"}}>

          <Button name="Write a Review" className='traders-review-section-button' onClick={()=> {setwriteReview(!writeReview) 
          console.log(writeReview)
          }} />
         </div>
      <div className={ writeReview ?'review-form-container' : 'review-form-container-hidden' } >
        <h4>How Much You Rate Bristol Street </h4>
        <Rating name="size-large" defaultValue={2} size="large" />
        <form action="submit">
        <TextField InputLabelProps={{
    style: { color: '#0e6290' },
  }}   style={{width:"100%"}} multiline rows={4} id="outlined-basic" label="Describe Your Query" variant="outlined" />

<TextField InputLabelProps={{
    style: { color: '#0e6290',width:"auto" },
  }}   id="outlined-basic" label="Title of Review" variant="outlined" />
<TextField InputLabelProps={{
    style: { color: '#0e6290',width:"auto" },
  }}   id="outlined-basic" label="Name" variant="outlined" />
<TextField InputLabelProps={{
    style: { color: '#0e6290',width:"auto" },
  }}   id="outlined-basic" label="Email " variant="outlined" />
<TextField InputLabelProps={{
    style: { color: '#0e6290',width:"auto" },
  }}   id="outlined-basic" label="Location" variant="outlined" />

<div className='traders-review--form-consent' >
         <Checkbox style={{width:"2rem"}}    sx={{ '& .MuiSvgIcon-root': { fontSize: 36 } ,
    '&.Mui-checked': {
      color:"#0e6290" ,
    },  }} />
        <p>I have read and accepted the moderation rules and agree to CarDistrict <span style={{color:"blue"}} >Terms & Conditions</span>  and <span style={{color:"blue"}} >privacy policy</span>. </p>
         </div>
         <div style={{display:"flex",
        justifyContent:"center"}}>

          <Button name="Submit Review" className='traders-review-form-button' />
         </div>
        </form>
      </div>
     </section>
     <section className='reviews-section' >
     <div className="searc-results-header">
            <h3 style={{ fontSize: "1rem" }}>{totalRatings} Reviews</h3>
            <select className="search-radius-input-select" name="sort" id="">
              <option value="sort by distance">Sort by Newest</option>
              <option value="sort by distance">Sort by Oldest</option>
            </select>
          </div>
          {
            Posts.map(post=>(

              <TradersReviewCard Reviewername={post.name} stars={post.stars} days={post.dayAgo} post={post.post}  />
            ))
          }
    
      
    <div className="pagination">
            <Stack spacing={2}>
              <Pagination
                count={10}
                className="page-number"
                color={"standard"}
                size="large"
              />
            </Stack>
          </div>
     </section>
    </div>
  )
}

export default TradersReviewpage