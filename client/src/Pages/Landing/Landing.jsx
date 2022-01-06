import React from 'react'
import Post from '../../Components/Post/Post'
import UserFollowPreview from '../../Components/UserFollowPreview/UserFollowPreview'
import './Landing.css'
const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__container">
        <div className="landing__grid">
          <div className="landing__col">1</div>

          <div className="landing__col">
            <div className="landing__flex">
              <h1 className='landing__title'>Your feed</h1>
              <button className="landing__button">Create post</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>

          <div className="landing__col col-3">
            <h1 className='landing__title landing__title-3'>People to follow</h1>
            <div className="user-preview-col">
              <div className="user-preview-col__container">
                <UserFollowPreview />
                <UserFollowPreview />
                <UserFollowPreview />
                <UserFollowPreview />
                <UserFollowPreview />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing