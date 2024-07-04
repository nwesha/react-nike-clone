import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import productData from '../data/products.json';

const Favorites = () => {
    const favorites = useSelector(state => state.favorites);
    const favoriteProducts = productData.filter(product => favorites.includes(product.articleNo));

    return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            {favoriteProducts.map(product => (
                <ProductCard key={product.articleNo} product={product} />
            ))}
        </div>
    );
};

export default Favorites;
