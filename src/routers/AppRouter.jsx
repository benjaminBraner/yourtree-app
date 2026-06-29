import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRouter } from "./PublicRouter";
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { YourTreeScreen } from "../components/Private/YourTreeScreen";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {


   const dispatch = useDispatch();

   const [checking, setChecking] = useState(true);
   const [isLoggedIn, setIsLoggedIn] = useState(false)

   useEffect(() => {

      firebase.auth().onAuthStateChanged((user) => {
         // console.log( user );
         if (user?.uid) {
            dispatch(login({ uid: user.uid, displayName: user.displayName }));
            setIsLoggedIn(true);

         } else {
            setIsLoggedIn(false);
         }

         setChecking(false)

      })
   }, [dispatch, setChecking, isLoggedIn]);


   if (checking) {
      return (
         <h1>Loading...</h1>
      )
   }

   return (
      <BrowserRouter>
         <Routes>
            {/*Public */}


            <Route path="/*" element={
               <PublicRoute>
                  <PublicRouter />
               </PublicRoute>
            } />


            {/*Private */}
            <Route path="/acc/*" element={
               <PrivateRoute>
                  <YourTreeScreen />
               </PrivateRoute>
            } />
         </Routes>
      </BrowserRouter>

   )
}
