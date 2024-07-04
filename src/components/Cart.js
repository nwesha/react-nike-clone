import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import ProductCard from './ProductCard';
import './CartAndFavorites.css'; // Import CSS

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (articleNo) => {
        dispatch(removeFromCart(articleNo));
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.articleNo} className="cart-item">
                            <ProductCard product={item} />
                            <div className="cnf">
                            <button onClick={() => handleRemoveFromCart(item.articleNo)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
