import React,{useRef, useState} from 'react'
import './_slider.scss'
import silderTest from '../../Assets/slider-test.jpg'

interface ImageSliderProps {
    images: string[];
  }

const Slider: React.FC<ImageSliderProps>  = ({images}) => {
    const scrollRef = useRef<HTMLDivElement>(null)

    const [imgWidth, setImgWidth] = useState(0);
 

    const HandleImageLoad =(event: { target: any }) => {
      const img = event.target;
      const width = img.width;
      setImgWidth(width);
    }

   
    
     
    const HandleNext = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft += imgWidth + 16 ;
          console.log(imgWidth)
        }
      
      };
    const HandlePrev = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft -= imgWidth +16 ;
          console.log(imgWidth)
        }
      
      };
  return (
    <div className='slider' >
        <div className='slider-image-container' ref={scrollRef} >
            {
                images.map((image, index)=>(

                    <img key={index} onLoad={HandleImageLoad} src={image} alt="" height="100%" width="100%" />
                ))
            }
           
        </div>
        <button onClick={HandleNext} >Next</button>
        <button onClick={HandlePrev} >Prev</button>
        <div className='slider-thumbnails' ></div>
    </div>
  )
}

export default Slider