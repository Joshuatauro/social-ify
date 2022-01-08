import { ExternalLinkIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import './UserFollowPreview.css'
const UserFollowPreview = () => {
  return (
    <article className="user-preview">
      <Link to={`/user/joshuatauro45`}>
        <div className="user-preview__container">
          <div className="user-preview__flex icon">
            <div className="user-preview__flex ">
              <img className='user-preview__avatar' src="https://dogesocial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdogecorp%2Fimage%2Fupload%2Fv1631713031%2Fdogesocial%2Fv1%2Fimages%2F12_k69qix.svg&w=1920&q=75" alt="" />
              <div className="user-preview__flex col">
                <div className="user-preview__col ">
                  <h1 className='user-preview__name'>Joshua Tauro </h1>
                  <h2 className='user-preview__username'>@joshuatauro45</h2>
                </div>
              </div>
            </div>
            <ExternalLinkIcon height={20} color="white" />
          </div>
        </div>
      </Link>
    </article>
  )
}

export default UserFollowPreview
