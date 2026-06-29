import React from 'react'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/slices/thunks';
import "../../scss/components/private/_YourTreeScreen.scss"

export const YourTreeScreen = () => {

     const dispatch = useDispatch();

     const handleLogout = () => {
          console.log('logedout');
          dispatch( startLogout() );
     }
     
     return (
          <>
               <h1 className='yourtreescreen-title'>This page is in process, please logout and come back to the previous page</h1>
               <button className='yourtreescreen-logout-btn' onClick={handleLogout}>Logout</button>
          </>
     )
}
