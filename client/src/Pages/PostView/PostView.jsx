import React from 'react'
import './PostView.css'
import Post from '../../Components/Post/Post'
const PostView = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="app__grid">
          <div>
            <button className="post-view__button">
              Go Back
            </button>
          </div>
          <div className="post-view">
            <Post isViewing={true} />
              <textarea name="" id="" className="post-view__textarea" placeholder="Comment something nice....."/>
              <button className="post-view__comment-submit">Submit!</button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default PostView
