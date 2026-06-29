import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PlantCard } from '../plant/PlantCard'
import '../../scss/components/public/_HomeScreen.scss'
import homeScreenImg from '../../plants/undraw_environment_iaus.png'

export const HomeScreen = () => {

     

     const navigate = useNavigate();

     return (
          <div className='HomeScreen'>

               <div className='main'>

                    <div className='main__container'>

                         <div className='main__content'>

                              <h1>FUTURE</h1>
                              <h2>OF PLANTS SALES</h2>
                              <p>See what makes us different</p>
                              <button className='main__btn' onClick={ () => navigate( '/signup' ) }>
                                   <p>Get Started</p>
                              </button>

                         </div>

                         <div className='main__img-container'>
                              <img src={homeScreenImg} id='main__img' alt='plant'/>
                         </div>

                    </div>
               </div>

               <div className='services'>

                    <h1>See what the hype is about</h1>
                    
                    <div className='services__container'>
                         <PlantCard id="kalanchoe" name="Kalanchoe" price='$19' />
                         <PlantCard id="aloe-plant" name="Aloe Plant" price='$21' />
                    </div>
               </div>

               <div className='footer__container'>
                    <div className='footer__links'>
                         <div className='footer__link--wrapper'>
                              <div className='footer__link--item'>
                                   <h2>About Us</h2>
                                   <a href='/'>How it works</a>
                                   <a href='/'>Testimonials</a>
                                   <a href='/'>Careers</a>
                                   <a href='/'>Investments</a>
                                   <a href='/'>Terms of Services</a>
                              </div>
                              <div className='footer__link--item'>
                                   <h2>Contact Us</h2>
                                   <a href='/'>Contact</a>
                                   <a href='/'>Support</a>
                                   <a href='/'>Destinations</a>
                                   <a href='/'>Sponsorships</a>
                              </div>
                         </div>
                         <div className='footer__link--wrapper'>
                              <div className='footer__link--item'>
                                   <h2>Videos</h2>
                                   <a href="/">Submit Videos</a>
                                   <a href="/">Ambassadors</a>
                                   <a href="/">Agency</a>
                                   <a href="/">Influencer</a>
                              </div>
                              <div className='footer__link--item'>
                                   <h2>Social Media</h2>
                                   <a href='/'>Instagram</a>
                                   <a href='/'>Facebook</a>
                                   <a href='/'>Youtube</a>
                                   <a href='/'>Twitter</a>
                              </div>
                         </div>
                    </div>

                    <div className='social__media'>
                         <div className='social__media--wrap'>
                              <div className='footer__logo'>
                                   <a href='/' id='footer__logo'>
                                        <i className='fab fa-pagelines'></i>
                                        yoürTree
                                   </a>
                              </div>
                              <p className='website__rights'>
                                   yoürTree 2022. All rights reserved
                              </p>
                              <div className='social__icons'>
                                   <a href='/' className='social__icon--link' target="_blank">
                                        <i className='fab fa-facebook'></i>
                                   </a>
                                   <a href='/' className='social__icon--link' target="_blank">
                                        <i className='fab fa-instagram'></i>
                                   </a>
                                   <a href='/' className='social__icon--link' target="_blank">
                                        <i className='fab fa-twitter'></i>
                                   </a>
                                   <a href='/' className='social__icon--link' target="_blank">
                                        <i className='fab fa-linkedin'></i>
                                   </a>
                                   <a href='/' className='social__icon--link' target="_blank">
                                        <i className='fab fa-youtube'></i>
                                   </a>
                              </div>
                         </div>
                    </div>
               </div>


          </div>
     )
}
