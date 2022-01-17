import React from 'react'
import Moment from 'react-moment'

import './Comment.css'
const Comment = () => {
  return (
    <article className="comment"> 
      <div className="comment__container">
        <div className="comment__flex">
          <img className="comment__avatar" src="https://dogesocial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdogecorp%2Fimage%2Fupload%2Fv1631713031%2Fdogesocial%2Fv1%2Fimages%2F12_k69qix.svg&w=1920&q=75" alt="" />
          <div className="comment__details">
            <div className="comment__flex">
              <h1 className="comment__name">Joshua Tauro</h1>
            <h2 className="comment__username">@joshuatauro45</h2>
            </div>
            <p className='post__date'><Moment  format="MMMM D, hh:mm A">{new Date()}</Moment></p>
          </div>
        </div>
        <p className="comment__body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit deleniti voluptates a, delectus excepturi iure, neque necessitatibus perspiciatis nulla quaerat nobis, accusamus dolor unde obcaecati nostrum distinctio quae maiores itaque.</p>
      </div>
    </article>
  )
}

export default Comment
