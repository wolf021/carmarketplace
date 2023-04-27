import React from 'react'
import Card from '../Card/Card'
import './_carousel.scss'
import CardImg from '../../Assets/X70.png'

type Slider = {
    cards?:[] | null,
    dots?: null
}

const Carousel = (props:Slider) => {
    const myDivs = document.getElementsByClassName("myDiv") as HTMLCollectionOf<HTMLDivElement>;
    
    const maxTranslate = 200;
    
   const myButton= ()=>{
    for (let i = 0; i < myDivs.length; i++) {
        const currentTranslate = parseInt(myDivs[i].style.transform?.match(/-?\d+/)?.[0] ?? "0") || 0;
        if (currentTranslate < maxTranslate) {
          myDivs[i].style.transform = `translateX(${currentTranslate + 100}px)`;
        }
      }
     
    };

  return (
    <>
    <div style={{display:"flex",gap:"3rem"}}>
    <div className="myDiv">
    <div className="myCard">Card 1</div>
  </div>
  <div className="myDiv">
    <div className="myCard">Card 2</div>
  </div>
  <div className="myDiv">
    <div className="myCard">Card 2</div>
  </div>
  <div className="myDiv">
    <div className="myCard">Card 2</div>
  </div>
    </div>
  <button id="myButton" onClick={myButton}>Slide</button>
    </>
  )
}

export default Carousel