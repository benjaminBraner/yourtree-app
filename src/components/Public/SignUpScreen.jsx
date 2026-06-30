import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../store/slices/uiSlice';
import { startRegisterEmailPasswordName } from '../../store/slices/thunks';
import toast from 'react-hot-toast';
import '../../scss/components/public/_SignUpScreen.scss'


export const SignUpScreen = () => {

     const { loading } = useSelector(state => state.auth);

     const [{name, email, password, password2}, handleInputChange] = useForm({
          name: '',
          email: '',
          password: '',
          password2: ''
     })

     const dispatch = useDispatch();

     const formSubmit = (e) => {
          e.preventDefault();
          if ( isFormValid() ) {
               dispatch( startRegisterEmailPasswordName({email, password, name}) )
          }
     }

     const isFormValid = () => {

          if ( name.trim().length === 0 ) {
               dispatch( setError( 'name is required' ) );
               toast.error('name is required')
               return false;

          } else if (!validator.isEmail(email) ) {
               dispatch( setError( 'Email is not valid' ) );
               toast.error('Email is not valid')
               return false;

          } else if ( password !== password2 || password.length < 5 ) {
               dispatch( setError( 'Password should be at least 6 characters and match' ) );
               toast.error('Password should be at least 6 characters and match')
               return false;

          }

          dispatch( removeError() );
          return true;
     }

     return (
          <div className='SignUpScreen'>
               <div className='form__container'>
                    <div className='form__signup'>

                         {/* <div>{ui.msgError}</div> */}

                         <h2 id='form__logo'>
                              <i className='fab fa-pagelines'></i>
                              yoürTree
                         </h2>

                         <form className='form' onSubmit={formSubmit}>

                              <input 
                                   className='form__item' 
                                   type='text' 
                                   placeholder='Name'
                                   name='name'
                                   onChange={handleInputChange}
                                   value={name}
                              />

                              <input 
                                   className='form__item' 
                                   type='text' 
                                   placeholder='Email'
                                   name='email'
                                   onChange={handleInputChange}
                                   value={email}
                              />

                              <input 
                                   className='form__item' 
                                   type='password' 
                                   placeholder='Password'
                                   name='password'
                                   onChange={handleInputChange}
                                   value={password}
                              />

                              <input 
                                   className='form__item' 
                                   type='password' 
                                   placeholder='Password'
                                   name='password2'
                                   onChange={handleInputChange}
                                   value={password2}
                              />

                              <button 
                                   className='form__item button' 
                                   type='submit'
                                   disabled={ loading }
                                   style={ loading ? {cursor: 'wait', backgroundColor: 'rgba(196, 196, 196, 1)',} : {}}
                              >
                                   Sign Up
                              </button>

                              <p className='form__item'>
                                   By registering, you accept our <b>Conditions</b>
                                   , the <b>Data Policy</b> and the <b>Cookies Policy</b>.
                              </p>
                         </form>

                    </div>

                    <p className='have-acc'>Already have an account?<Link to='/login'>Login</Link></p>

               </div>
          </div>
     )
}