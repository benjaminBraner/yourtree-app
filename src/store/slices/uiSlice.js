import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        loading: false,
        msgError: null,
    },
    reducers: {
        setError: (state, action) => {
            state.msgError = action.payload;
        },
        removeError: (state) => {
            state.msgError = null;
        },
        startLoading: (state) => {
            state.loading = true;
        },
        finishLoading: (state) => {
            state.loading = false;
        },
    },
});

export const { setError, removeError, startLoading, finishLoading } = uiSlice.actions;
export default uiSlice.reducer;
