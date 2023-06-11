import React, { useCallback, useState } from "react";
import "./_imageSlider.scss";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

interface ImageSliderProps {
  images: string[];
  onClick?: () => void;
}


const ImageSlider: React.FC<ImageSliderProps> = ({ images,onClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  

  const handlePrevClick = () => {
    setIsLoading(true);
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setIsLoading(true);
    setCurrentImageIndex((prevIndex) =>
    
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleLoad = useCallback( () => {
    setIsLoading(false);
  },[currentImageIndex]);

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="image-slider">
      <div className="image-slider-main" >
        <div className="images"  >

        <img loading="lazy" className={`images ${isLoading? "loading" : ""}`}  onLoad={handleLoad}  src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        </div>
        <div className="image-slider-controls" >
            <div className="numbers" >
            <CameraAltIcon  />
            <span className="image-slider-current-index">{currentImageIndex + 1}</span>
          <span className="image-slider-total">{` / ${images.length}`}</span>
            </div>
            <div className="image-slider-arrow">

          <button className="arrow-buttons left" onClick={handlePrevClick}><ChevronLeftIcon fontSize="large" /></button>
          
          <button className="arrow-buttons right" onClick={handleNextClick}><ChevronRightIcon fontSize="large" /></button>
            </div>
        </div>
      </div>
      <div className="image-slider-thumbnails">
        {images.map((image, index) => (
          <img loading="lazy"
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`image-slider-thumbnail ${
              index === currentImageIndex ? "active" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
