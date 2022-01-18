import React from 'react'
import './PostView.css'
import Post from '../../Components/Post/Post'
import Comment from '../../Components/Comment/Comment'
import UserPreview from '../../Components/UserPreview/UserPreview'
import { useNavigate } from 'react-router-dom'
const PostView = () => {
  const navigate = useNavigate()
  return (
    <div className="main">
      <div className="container">
        <div className="app__grid">
          <div className="post-view__col">
            <button onClick={() => navigate(-1)} className="post-view__button">
              Go Back
            </button>
          </div>
          <div className="post-view">
            <Post isViewing={true} />
            <div className="post-view__comment">
              <div className="post-view__container">
                <h1 className="post-view__comment-title">Comment</h1>
                <textarea name="" id="" className="post-view__textarea" placeholder="Comment something nice....."/>
                <button className="post-view__comment-submit">Submit</button>
              </div>
            </div>
            <div className="post-view__comment">
              <div className="post-view__container">
                <h1 className="post-view__comments-title">Comments(4)</h1>
                <Comment />
                <Comment />
                <Comment />
                <Comment />

              </div>
            </div>
          </div>
          <div className="post-view__col">
            <UserPreview />
          </div>
        </div>
    </div>
    </div>
  )
}

export default PostView
