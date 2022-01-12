import React from 'react'
import UserFollowPreview from '../UserFollowPreview/UserFollowPreview'
import '../../Pages/Landing/Landing.css'
const PeopleCheckout = () => {
  return (
    <div className="landing__col col-3">
      <h1 className='landing__title landing__title-3'>People to checkout</h1>
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
)
}

export default PeopleCheckout
