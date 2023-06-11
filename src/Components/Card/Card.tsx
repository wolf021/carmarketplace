import React, { useCallback, useState } from "react"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import "./_card.scss"
import { Link } from "react-router-dom"
import WhatshotIcon from '@mui/icons-material/Whatshot';
import Buttons from "../Button/Button";

type CardProps = {
  make?: string
  model?: string
  price: Number
  miles: Number
  link: string
  cardImg: any
  days: Number
  sponsored?: boolean
  hot?: boolean
  year?:Number
  
}





const Card = (props: CardProps) => {
const [favouriteClicked, setFavouriteClicked] = useState(false)


const handleFavouriteClick = useCallback( (event: any) =>{
  event.preventDefault()
    setFavouriteClicked(!favouriteClicked)
                console.log(favouriteClicked)
               if(!favouriteClicked){
                alert("cars has been added to your favourite")
               }
},[favouriteClicked])





  return (
    <Link className="link" to={props.link}>
      <div className="card">
        
        <div className="card-img">
          <div style={{display:"flex",gap:"0.2rem 0.2rem" }} >

          
          <img loading="lazy" src={props.cardImg} alt="" width="70%" height="100%" />
          <div style={{display:"flex",flexDirection:"column",gap:"0.2rem"}}>

          <img loading="lazy"  src={props.cardImg} alt="" width="100%" height="100%" />
          <img loading="lazy" src={props.cardImg} alt="" width="100%" height="100%" />
          </div>
          </div>
          
            <div onClick={handleFavouriteClick} className={`card-favourite ${favouriteClicked? "favourite-clicked": ""} `}  >
              <FavoriteBorderIcon />
            </div>
            { props.hot &&

            <div style={{width:"10%"}} >
              <Buttons className="card-urgent" name="Hot" icon={<WhatshotIcon/>} />
            </div>
            }
          
        </div>
           
        <div className="card-info">
            { props.sponsored &&

          <p className="card-sponsored">Sponsored</p>
            }
          <div className="card-info-flex">
            <div style={{ textAlign: "start" }}>
              <h4>{props.make} {props.model}</h4>

            
              <p
                style={{ margin: "0.3rem 0rem" }}
              >{`£:${props.price}.00 | ${props.miles} miles | ${props.year}`}</p>
            </div>
          </div>
          <p style={{ textAlign: "right", fontSize: "14px" }}>
            {" "}
            {` ${props.days} day ago`}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default React.memo( Card )
