import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
    items: [], // [{ id, name, price, care_level, cares, quantity }]
    isOpen: false,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const existing = state.items.find(i => i.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(i => i.id !== action.payload);
        },
        incrementQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decrementQty: (state, action) => {
            const item = state.items.find(i => i.id === action.payload);
            if (item) {
                if (item.quantity === 1) {
                    state.items = state.items.filter(i => i.id !== action.payload);
                } else {
                    item.quantity -= 1;
                }
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const {
    addItem,
    removeItem,
    incrementQty,
    decrementQty,
    clearCart,
    toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;

const selectCartState = state => state.cart;

export const selectCartItems = state => state.cart.items;

export const selectCartIsOpen = state => state.cart.isOpen;

export const selectCartCount = createSelector(
    selectCartItems,
    items => items.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector(
    selectCartItems,
    items =>
        items.reduce((acc, item) => {
            const numericPrice = parseFloat(item.price.replace('$', ''));
            return acc + numericPrice * item.quantity;
        }, 0)
);

export const selectCartIsEmpty = createSelector(
    selectCartItems,
    items => items.length === 0
);
