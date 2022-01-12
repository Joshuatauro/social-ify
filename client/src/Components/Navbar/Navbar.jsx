import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { BellIcon, HeartIcon, PlusIcon, PlusSmIcon } from '@heroicons/react/outline'
const Navbar = () => {



  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__flex">
          <h1 className="navbar__logo">Astral</h1>
          <input type="text" className="navbar__search" placeholder="Search for different posts using keywords" />
          <ul className="navbar__actions">
          <li className='navbar__align'>
              <BellIcon className="navbar__icon small" />
            </li>
            <li className='navbar__align navbar__middle'>
              <PlusSmIcon className="navbar__icon" />
            </li>
            <li className='navbar__align'>
              <img className='navbar__avatar' src="https://dogesocial.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdogecorp%2Fimage%2Fupload%2Fv1631713031%2Fdogesocial%2Fv1%2Fimages%2F12_k69qix.svg&w=1920&q=75" alt="" />
            </li>
            

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
