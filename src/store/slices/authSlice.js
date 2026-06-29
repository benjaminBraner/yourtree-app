import { createSlice } from '@reduxjs/toolkit';
import { startGoogleLogin, startLoginEmailPassword, startLogout, startRegisterEmailPasswordName } from './thunks';

const initialState = {
    uid: null,
    name: null,
    loading: false,
    error: null,
}
     
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.uid = action.payload.uid;
            state.name = action.payload.displayName;
        },
        logout: () => ({ ...initialState }),
        startAuthLoading: state => { state.loading = true },
        finishAuthLoading: state => { state.loading = false },
        setAuthError: (state, action) => { state.error = action.payload },
    },
    
    extraReducers: (builder) => {
        builder
            // startLoginEmailPassword --------------
            .addCase(startLoginEmailPassword.pending, (state) => {
                state.loading = true;
            })
            .addCase(startLoginEmailPassword.fulfilled, (state, action) => {
                state.loading = false;
                state.uid = action.payload.uid;
                state.name = action.payload.displayName;
            })
            .addCase(startLoginEmailPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            
            // startRegisterEmailPassword --------------
            .addCase(startRegisterEmailPasswordName.pending, (state) => {
                state.loading = true;
            })
            .addCase(startRegisterEmailPasswordName.fulfilled, (state, action) => {
                state.loading = false;
                state.uid = action.payload.uid;
                state.name = action.payload.displayName;
            })
            .addCase(startRegisterEmailPasswordName.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // startGoogleLogin --------------
            .addCase(startGoogleLogin.pending, (state) => {
                state.loading = true;
            })
            .addCase(startGoogleLogin.fulfilled, (state, action) => {
                state.loading = false;
                state.uid = action.payload.uid;
                state.name = action.payload.displayName;
            })
            .addCase(startGoogleLogin.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // startLogout --------------
            .addCase(startLogout.pending, (state) => {
                state.loading = true;
            })
            .addCase(startLogout.fulfilled, (state, action) => {
                state.uid = null;
                state.name = null;
                state.loading = false;
                state.msgError = null;
            })
            .addCase(startLogout.rejected, (state, action) => {
                state.loading = false;
                state.error = action?.error.message;
            })
    }
});

export const { 
    login, 
    logout, 
    startAuthLoading, 
    finishAuthLoading, 
    setAuthError 
} = authSlice.actions;

export default authSlice.reducer;
