import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobeIcon, HomeIcon, TerminalIcon, UsersIcon } from '@heroicons/react/outline'
import '../../Pages/Landing/Landing.css'
import { useLocation } from 'react-router-dom'
const SideNavigation = () => {
  const [feed, setFeed] = useState(false)
  const [all, setAll] = useState(false)
  const [devPosts, setDevPosts] = useState(false)

  let location = useLocation();

  React.useEffect(() => {
    setFeed(false)
    setAll(false)
    setDevPosts(false)
    const path = location.pathname.split('/')[2]
    if(path === undefined) {
      setFeed(true)
    }if(path === 'all') {
      setAll(true)
    }else if(path === 'devposts') {
      setDevPosts(true)
    }
  }, [location]);
  return (
    <div className="landing__col col-3">
      <h1 className='landing__title landing__title-3'>Navigation</h1>
      <div className="user-preview-col">
        <div className="user-preview-col__container">
          <article className={`nav-link ${feed ? 'active' : ''}`}>
            <Link to="/feed">
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
          <article className={`nav-link ${all ? 'active' : ''}`}>
            <Link to="/feed/all">
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
          <article className={`nav-link ${devPosts ? 'active' : ''}`}>
            <Link to="/devposts">
            <div className="nav-link__container">
                <div className="nav-link__flex">
                  <TerminalIcon width={20} />
                  <h1 className="nav-link__title">
                    Dev Updates
                  </h1>
                </div>
              </div>
            </Link>
          </article>
        </div>
      </div>
    </div>
  )
}

export default SideNavigation
