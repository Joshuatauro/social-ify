import React from 'react'
import Post from '../../Components/Post/Post'

const Feed = () => {
  return (
    <div>
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
  )
}

export default Feed
