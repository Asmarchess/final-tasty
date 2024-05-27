import React from 'react'
import Add from '../pages/Add'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="menu">
      <div className="container">
        <div className="row ">
          <nav>
            <div className="logo"> Tasty</div>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Specialties</li>
              <li>Reservation</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact</li>
              <li><Link to={'/add'} className='add'>Add</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
