import React from 'react'
import Post from '../../Components/Post/Post'

const All = () => {
  return (
    <div>
      <div className="landing__flex">
        <h1 className='landing__title'>All</h1>
        <button className="landing__button">Create post</button>
      </div>
      <Post />
      
    </div>
  )
}

export default All