import { combineReducers } from 'redux';
const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const favoritesReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_FAVORITES:
            return [...state, action.payload];
        default:
            return state;
    }
};

const cartReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter(item => item.articleNo !== action.payload);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    favorites: favoritesReducer,
    cart: cartReducer
});

export default rootReducer;
