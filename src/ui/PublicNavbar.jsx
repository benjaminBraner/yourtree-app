import { NavLink } from 'react-router-dom'
import '../scss/ui/_PublicNavbar.scss'
import menuIcon from '../images/menu-icon.svg'

export const PublicNavbar = () => {

     const clickMenu = () => {
          const navbarMenu = document.querySelector(".navbar__menu");
          const menuIcon = document.querySelector(".menu-icon");
          const closeMenuIcon = document.querySelector(".close-menu-icon");

          navbarMenu.classList.toggle("active");
          menuIcon.classList.toggle("active");
          closeMenuIcon.classList.toggle("active");
     }

     return (
          <div className='PublicNavbar'>
               <nav className='navbar'>
                    <div className='navbar__container'>
                         <a href='/' className='navbar__logo'><i className='fab fa-pagelines'></i>yoürTree</a>

                         <div className='menu-icon' onClick={ clickMenu }>
                              <img src={menuIcon} alt='menu-icon'/>
                         </div>

                         <div className='close-menu-icon active' onClick={ clickMenu }>
                              <i className='fas fa-times'></i>
                         </div>

                        
                         <ul className='navbar__menu'>

                              <li className='navbar__item'>
                                   <NavLink
                                        className='navbar__link'
                                        to='home'
                                        exact='true'
                                        onClick={ clickMenu }
                                   >
                                        Home
                                   </NavLink>
                              </li>

                              <li className='navbar__item'>
                                   <NavLink
                                        className='navbar__link'
                                        to='products'
                                        exact='true'
                                        onClick={ clickMenu }
                                   >
                                        Products
                                   </NavLink>
                              </li>

                              <li className='navbar__item'>
                                   <NavLink
                                        className='navbar__link'
                                        to='login'
                                        exact='true'
                                        onClick={ clickMenu }
                                   >
                                        Login
                                   </NavLink>
                              </li>

                              <li className='navbar__item'>
                                   <NavLink
                                        className='navbar__link navbar__signup'
                                        to='signup'
                                        exact='true'
                                        onClick={ clickMenu }
                                   >
                                        Sign Up
                                   </NavLink>
                              </li>

                         </ul>
                    </div>
               </nav>

          </div>
     )
}
