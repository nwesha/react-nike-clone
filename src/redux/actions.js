export const addToFavorites = (articleNo) => ({
    type: 'ADD_TO_FAVORITES',
    payload: articleNo
});

export const addToCart = (articleNo) => ({
    type: 'ADD_TO_CART',
    payload: articleNo
});

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const removeFromCart = (articleNo) => ({
    type: REMOVE_FROM_CART,
    payload: articleNo,
});

