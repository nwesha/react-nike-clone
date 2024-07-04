import React from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites, addToCart } from '../features/productsSlice';
import './product.css';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    return (
        <div className="product-card">
            <img src={product.imageUrl} alt={product.productName} />
            <div className='product-info'>
            <h3>{product.productName}</h3>
            <p>{product.currency} {product.listPrice}</p>
            <button onClick={() => dispatch(addToFavorites(product.articleNo))}>Add to Favorites</button>
            <button onClick={() => dispatch(addToCart(product.articleNo))}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;


