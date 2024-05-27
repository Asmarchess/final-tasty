import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import { LuBeef } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import { FaChampagneGlasses } from "react-icons/fa6";
import axios from 'axios';
import { LiaStarSolid } from "react-icons/lia";


const Home = () => {
  return (
    <>
      <div className='menu'>
        <div className="center">
          <h1>Tasty & Delicious Food</h1>
          <button className='btn'>Book a table</button>
        </div>
      </div>
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 about-pict ">
              <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" alt="" />
            </div>
            <div className="col-lg-6 col-12 about-txt">
              <span>ABOUT TASTY</span>
              <h3 className='mb-5 mt-5'>Our chef cooks the most delicious food for you</h3>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="discoveresas">
        <div className="container">
          <div className="discover">
            <span>OUR MENU</span>
            <h2>Discover Our Exclusive Menu</h2>
            <div className="buton mb-5 mt-5">
              <button className='m-btn main-btn'><LuBeef />Main</button>
              <button className='m-btn'><ImSpoonKnife />Desert</button>
              <button className='m-btn'><FaChampagneGlasses />Drinks</button>
            </div>
            <div className="row card-container">

              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost</p>

            </div>
            <button className='button'>Make a Reservation</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className='cardd'>
          <span>GUESTS SAYS</span>
          <h2>Our Satisfied Guests says</h2>
        </div>
      </div>
      <div className="container">
        <div className='cards'>
          <div>
            <img className='image' src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
            <p className='icons'>
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </p>
            <p className='parag'>Far for away, behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts</p>
            <h4>Dennis Green</h4>
            <p className='paragg'>Guests from italy</p>
          </div>
          <div>
            <img className='image' src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
            <p className='icons'>
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </p>
            <p className='parag'>Far for away, behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts</p>
            <h4>Dennis Green</h4>
            <p className='paragg' >Guests from italy</p>
          </div>
          <div>
            <img className='image' src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg.webp" alt="" />
            <p className='icons'>
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
              <LiaStarSolid />
            </p>
            <p className='parag'>Far for away, behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts</p>
            <h4>Dennis Green</h4>
            <p className='paragg'>Guests from italy</p>
          </div>
        </div>
      </div>
     
      <div className="tam">
        <div className="container">
        <div className='cardd'>
          <span>Blog</span>
          <h2>Recent Blog</h2>
        </div>
          <div className="cardss">
            <div className='cards2'>
              <div>
                <img className='image2' src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
                <div className='textp'>
                  <div className='meta'>
                    <div className='meta2'>
                      <div >
                        <p>July 7, 2018</p>
                      </div>
                      <div>
                        <p>Admin</p>
                      </div>
                    </div>
                    <h3 className='heading'>
                      <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
                    </h3>
                    <p>
                      <a href="#" class="float-left read">Read more</a>
                      <a href="#" class="float-right meta-chat"></a>
                    </p>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className='cards2'>
              <div>
                <img className='image2' src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
                <div className='textp'>
                  <div className='meta'>
                    <div>
                      <div className='meta2'>
                        <div >
                          <p>July 7, 2018</p>
                        </div>
                        <div>
                          <p>Admin</p>
                        </div>
                      </div>
                    </div>
                    <h3 className='heading'>
                      <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
                    </h3>
                    <p>
                      <a href="#" class="float-left read">Read more</a>
                      <a href="#" class="float-right meta-chat"></a>
                    </p>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
            <div className='cards2'>
              <div>
                <img className='image2' src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg.webp" alt="" />
                <div className='textp'>
                  <div className='meta'>
                    <div>
                      <div className='meta2'>
                        <div >
                          <p>July 7, 2018</p>
                        </div>
                        <div>
                          <p>Admin</p>
                        </div>
                      </div>
                    </div>
                    <h3 className='heading'>
                      <h2>Even the all-powerful Pointing has no control about the blind texts</h2>
                    </h3>
                    <p>
                      <a href="#" class="float-left read">Read more</a>
                      <a href="#" class="float-right meta-chat"><span class="icon-chat"></span> 3</a>
                    </p>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </div>
          </div>

        </div>

      </div>






    </>
  )
}
export default Home