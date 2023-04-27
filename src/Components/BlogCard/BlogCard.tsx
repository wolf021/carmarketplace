import React from 'react'
import { Link } from 'react-router-dom';
import './_blogCard.scss';

type blogCard = {
blogImg: any,
blogTitle: string,
blogUrl: string,
blogDescription: string
}

const BlogCard = (props:blogCard) => {
  return (
    <div className={`blog-card `}>
        <div className='blog-img' >

    <img src={props.blogImg} alt={props.blogTitle} width="100%" height="100%" />
        </div>
    <div className="blog-info">
      <h2 className="blog-title">{props.blogTitle}</h2>
      <p className="blog-description">{props.blogDescription}</p>
      <Link  to={props.blogUrl} className="btn-read-more">Read More...</Link>
    </div>
  </div>
  )
}

export default BlogCard