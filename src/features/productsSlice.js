import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        favorites: [],
        cart: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
    },
});

export const { setProducts, addToFavorites, addToCart } = productsSlice.actions;
export default productsSlice.reducer;
