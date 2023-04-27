import React from 'react'
import "./_blogsCard.scss"
import BlogImg from '../../Assets/home1.jpg'




type blogsCard = {
    blogImg: any,
    blogTitle: string,
    blogUrl: string,
    blogDescription: string
    }

const BlogsCard = () => {
  return (
    <div className='blogs-card' >
        <div className='blogs-card-img' >
            <img src={BlogImg} alt="" width="100%" height="100%" />
        </div>
        <div className='blogs-card-info' >
            <div className='blogs-card-info-details' >

            <p className='blogs-card-heading' >LIVING WITH A… DS AUTOMOBILES DS 4 E-TENSE HYBRID</p>
            <p className='blogs-card-description' >Lorem ipsum is the name of the game and i ma a megicion Lorem ipsum is the name of the game and i ma a megicion  </p>
            
            </div>

            <div className='blogs-card-info-links' >
                <p>Reviews | 1 day ago</p>
                <p>Author:mark Henry</p>
            </div>

        </div>
    </div>
  )
}

export default BlogsCard