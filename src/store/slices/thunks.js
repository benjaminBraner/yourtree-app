import { createAsyncThunk } from '@reduxjs/toolkit';
import { firebase, googleAuthProvider } from '../../firebase/firebase-config';


export const startLoginEmailPassword = createAsyncThunk(
    'auth/login-email-password',
    async ({email, password}) => {
            const { user } = await firebase.auth().signInWithEmailAndPassword(email, password);
            return { uid: user.uid, displayName: user.displayName }
    }
)


export const startRegisterEmailPasswordName = createAsyncThunk(
    'auth/register-email-password-name',
    async ({email, password, name}) => {
            const { user } = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await user.updateProfile({ displayName: name });
            return { uid: user.uid, displayName: user.displayName }
    }
)


export const startGoogleLogin = createAsyncThunk(
    'auth/google-login',
    async () => {
            const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
            return { uid: user.uid, displayName: user.displayName }
    }
)


export const startLogout = createAsyncThunk(
    'auth/logout',
    async () => {
        await firebase.auth().signOut();
    }
)



