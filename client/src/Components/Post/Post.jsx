import React from 'react'
import './Post.css'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import Moment  from 'react-moment'
import { HeartIcon, ReplyIcon } from '@heroicons/react/outline'
import { Link } from 'react-router-dom'
const Post = ({isViewing}) => {
  return (
    <article className={`post ${isViewing ? 'view' : ''}`}>
      <div className="post__container">
        <div className="post__flex">
          <img className='post__avatar' src="https://dogesocial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdogecorp%2Fimage%2Fupload%2Fv1631713031%2Fdogesocial%2Fv1%2Fimages%2F12_k69qix.svg&w=1920&q=75" alt="" />
          <div className="post__flex col">
            <Link to={`/user/joshuatauro45`}>
              <div className="post__flex">
                <h1 className='post__name'>Joshua Tauro </h1>
                <h2 className='post__username'>@joshuatauro45</h2>
              </div>
            </Link>
            <p className='post__date'><Moment  format="MMMM D, hh:mm A">{new Date()}</Moment></p>
          </div>
        </div>
        <Link to="/post/id">
          <h1 className='post__title'>Hello and welcome to Astral!</h1>
          <p className="post__body">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
          </p>
        </Link>
      </div>
      <div className="post__actions">
        <div className="post__container">
          <div className="post__flex">
            <span className="post__button">
              <HeartIcon height={20} />
              <p className='post__counter'>100</p>
            </span>
            <span className="post__button">
              <ReplyIcon height={20} />
              <p className='post__counter'>100</p>
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post
