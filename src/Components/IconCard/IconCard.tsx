import React from 'react'
import { Link } from 'react-router-dom';
import './_iconCard.scss';


type IconCard ={
    MakeIcon: string,
    link:string
}


const IconCard = (props:IconCard) => {
  return (
    <>
    <Link to={props.link} >
    <div className='icon-card'>
    <img height="100%" width="100%" src={props.MakeIcon} alt="make" />
    </div>
    </Link>
    </>
  )
}

export default IconCard;