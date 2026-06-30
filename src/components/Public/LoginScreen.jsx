import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../store/slices/thunks'
import { useForm } from '../../hooks/useForm'
import googleIcon from '../../assets/google-icon.png'
import toast from 'react-hot-toast'
import '../../scss/components/public/_LoginScreen.scss'


export const LoginScreen = () => {
     const {loading} = useSelector(state => state.auth)
     const dispatch = useDispatch();
     

     const [{ email, password }, handleInputChange] = useForm({
          email: '',
          password: ''
     })

     const handleLogin = (e) => {
          e.preventDefault();
          dispatch( startLoginEmailPassword( {email, password} ) )
     }


     const handleGoogleLogin = () => {
         dispatch( startGoogleLogin() )
     }

     return (
          <div className='LoginScreen'>
               <div className='form__container'>
                    <div className='hola'>
                         <h2 id='form__logo'>
                              <i className='fab fa-pagelines'></i>
                              yoürTree
                         </h2>

                         <form className='form' onSubmit={handleLogin}>

                              <input
                                   className='form__item'
                                   placeholder="Email"
                                   type='text'
                                   name='email'
                                   onChange={handleInputChange}
                                   value={email}
                              />

                              <input
                                   className='form__item'
                                   placeholder="Password"
                                   type='text'
                                   name='password'
                                   onChange={handleInputChange}
                                   value={password}
                              />

                              <button
                                   className='form__item form__button'
                                   type='submit'
                                   disabled={loading}
                                   style={ loading ? {cursor: 'wait', backgroundColor: 'rgba(196, 196, 196, 1)',} : {}}
                              >
                                   Login
                              </button>

                              <div className='form__item form__option'>or</div>

                              <div 
                                   className='form__item google-login' 
                                   onClick={ handleGoogleLogin }
                              >
                                   <div className="google-icon-wrapper">
                                        <img className="google-icon" src={googleIcon} alt="google button" />
                                   </div>
                                   Login with Google
                              </div>

                                   
                              <p className='form__item passwrd-forgot' onClick={ () => toast("We are working on this functionality", { icon: '🔧' }) }>
                                   Forgot your password?
                              </p>

                         </form>

                    </div>

                    <p className='dont-have-acc-btn'>don't have an account? <Link className='signup__form' to='/signup'>Sign Up</Link></p>

               </div>
          </div>
     )
}