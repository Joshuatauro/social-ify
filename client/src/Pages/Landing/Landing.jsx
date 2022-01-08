import { GlobeIcon, HomeIcon, UsersIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import Post from '../../Components/Post/Post'
import UserFollowPreview from '../../Components/UserFollowPreview/UserFollowPreview'
import './Landing.css'
const Landing = () => {
  return (
    <section className="landing">
      <div className="landing__container">
        <div className="landing__grid">
        <div className="landing__col col-3">
            <h1 className='landing__title landing__title-3'>Navigation</h1>
            <div className="user-preview-col">
              <div className="user-preview-col__container">
                <article className="nav-link active">
                  <Link to="/">
                    <div className="nav-link__container">
                      <div className="nav-link__flex">
                        <HomeIcon width={20} />
                        <h1 className="nav-link__title">
                          Your feed
                        </h1>
                      </div>
                    </div>
                  </Link>
                </article>
                <article className="nav-link">
                  <Link to="/">
                  <div className="nav-link__container">
                      <div className="nav-link__flex">
                        <GlobeIcon width={20} />
                        <h1 className="nav-link__title">
                          All
                        </h1>
                      </div>
                    </div>
                  </Link>
                </article>
                <article className="nav-link">
                  <Link to="/">
                  <div className="nav-link__container">
                      <div className="nav-link__flex">
                        <UsersIcon width={20} />
                        <h1 className="nav-link__title">
                          Users
                        </h1>
                      </div>
                    </div>
                  </Link>
                </article>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </section>
  )
}

export default Landing
