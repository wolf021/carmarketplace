import React, { useCallback, useEffect, useMemo, useState } from 'react'
import "./_reviewProgressBarCard.scss"
import { Rating } from '@mui/material'


interface ReviewsData {
    Posts: { stars: number; post: String }[];
  }

const ReviewProgressBarCard: React.FC<ReviewsData> = ({Posts}) => {
    
   
    
    const ratingsData = [
        { stars: 5, count: 0 },
        { stars: 4, count: 0 },
        { stars: 3, count: 0 },
        { stars: 2, count: 0 },
        { stars: 1, count: 0 },
      ];
      
    const [ratings, setRatings] = useState(ratingsData);


    useEffect(() => {
     addReviews()
     
     console.log(overallRating)
    }, [ratings])
    



    const totalRatings = useMemo(() => {
        return ratings.reduce((acc, curr) => acc + curr.count, 0);
      }, [ratings]);
  
    function ratingPercentage(starRating: number) {
        const total = totalRatings;
        const rating = ratings.find((item) => item.stars === starRating);
        return total === 0 ? 0 : Math.round(((rating?.count || 0 )/ total) * 100);
      }

      const overallRating = useMemo(() => {
        const totalStars = ratings.reduce((acc, curr) => acc + (curr.stars * curr.count), 0);
        const average = totalStars / totalRatings;
        return Math.round(average * 10) / 10; // Round to one decimal place
      }, [ratings, totalRatings]);
    
      const addReviews =  useCallback( () =>{
        const updatedRatingsData = [...ratingsData];
        Posts?.forEach((post) => {
          const ratingIndex = updatedRatingsData.findIndex((rating) => rating.stars === post.stars);
          if (ratingIndex !== -1) {
            updatedRatingsData[ratingIndex].count++;
          }
        });
        setRatings(updatedRatingsData);
        },[ratingsData])
    
  return (
    <div className='review-progress'>
         <h3 className='traders-review-card-heading'>{totalRatings} reviews</h3> 
         <div  >
{
    overallRating?
<p className='traders-review-card-heading'>{overallRating} 0ut 0f 5</p>
:
<p className='traders-review-card-heading'>Not Yet Rated</p>
}
<Rating name="half-rating-read" defaultValue={2} value={overallRating} precision={0.5} readOnly size='large' />


</div>
<div>

{ratings.map((rating) => (
    <div style={{display:"flex",alignContent:"center",alignItems:"center", gap:"1rem"}} key={rating.stars}>
                        <span className='traders-review-card-heading'>{rating.stars} Star</span>
            <div style={{ width: "200px", height: "10px", backgroundColor:"lightgray", borderRadius:"5rem",overflow:"hidden",margin:"0.4rem" }}>
              <div style={{ backgroundColor: "orange", height: "100%",borderRadius:"5rem", width: `${ratingPercentage(rating.stars)}%` }}></div>
            </div>
            <span className='traders-review-card-heading'>{ratingPercentage(rating.stars)}%</span>
          </div>
        ))}
        </div>
        

    </div>
  )
}

export default ReviewProgressBarCard