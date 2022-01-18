import React from 'react'
import './UserPreview.css'
const UserPreview = () => {
  return (
    <article className="preview">
      <div className="preview__container">
        <div className="preview__images">
          <img src="https://res.cloudinary.com/dvjlrqrlx/image/upload/v1642506462/astral/background_zweowj.png" className="preview__banner" alt="" />
          <img src="https://dogesocial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdogecorp%2Fimage%2Fupload%2Fv1631713031%2Fdogesocial%2Fv1%2Fimages%2F12_k69qix.svg&w=1920&q=75" alt="" className="preview__avatar" />
          
        </div>
        <div className="preview__body">
          <h1 className="preview__name">Joshua Tauro</h1>
          <h1 className="preview__username">@joshuatauro45</h1>

        </div>
      </div>
    </article>
  )
}

export default UserPreview
