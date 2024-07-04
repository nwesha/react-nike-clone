import React from 'react';
import './CartAndFavorites.css';


const ProductCard = ({ product }) => {
    return (
        <div className="product-card-cnf">
            <a href={product.url}>
                <img src={product.imageUrl} alt={product.productName} />
                <div className="product-info-cnf">
                    <h3>{product.productName}</h3>
                    <p>{product.division} {product.category}</p>
                    <span>{product.currency} {product.listPrice}</span>
                </div>
            </a>
        </div>
    );
};

export default ProductCard;
