import React from 'react'
import { CiHeart } from "react-icons/ci";

function Footer() {
  return (
    <div className="mt-10">
      <div className='container Fouter mt-5'>
      <div className='row mt-5'>
        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Top Products</h4>
          pFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </div>

        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Opening Hours</h4>
          <ul class="list-unstyled">
<li><a href="#" class="py-2 d-block">Monday: <span>08: - 22:00</span></a></li>
<li><a href="#" class="py-2 d-block">Tuesday: <span>08: - 22:00</span></a></li>
<li><a href="#" class="py-2 d-block">Wednesday: <span>08: - 22:00</span></a></li>
<li><a href="#" class="py-2 d-block">Thursday: <span>08: - 22:00</span></a></li>
<li><a href="#" class="py-2 d-block">Friday: <span>08: - 22:00</span></a></li>
<li><a href="#" class="py-2 d-block">Saturday: <span>08: - 22:00</span></a></li>
<li><a href="#" class="py-2 d-block">Sunday: <span>08: - 22:00</span></a></li>
</ul>
        </div>

        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Contact Information</h4>
          <ul className='mt-3'>
            <li>198 West 21th Street Suite 721</li>
            <li>+1235235598</li>
            <li> Info@yoursite.com</li>
            <li> Info@yoursite.com</li>
          </ul>
        </div>
        <div className='Foter_lists col-lg-2 col-sm-6'>
          <h4>Newsletter</h4>
          <span className='mt-3'>far far away, behind the wird mountains,far from the countries</span>
          <div className='row mt-3 container'>
            <div className='col-lg-6 col-sm-6'>
              <button className='btn btn-danger'>subsrice</button>
            </div>
          </div>
        </div>
      </div>
      <h5 className='mt-5 text-center'>Copyright ©2024 All rights reserved | This template is made with <CiHeart /> by Colorlib</h5>
    </div>
    </div>
    
  )
}

export default Footer