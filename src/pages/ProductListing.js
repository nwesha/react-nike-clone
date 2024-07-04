import React, { useState } from 'react';
import products from '../data/products.json';
import { connect } from 'react-redux';
import { addToCart, addToFavorites } from '../redux/actions';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import './ProductListing.css';

const ProductListing = ({ sidebarVisible, toggleSidebar, filters, onFilterChange, products, sortCriteria, handleSortChange, addToCart, addToFavorites }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleAddToFavorites = (product) => {
    addToFavorites(product);
  };

  console.log("ProductListing - Sidebar Visible:", sidebarVisible);

  return (
    <>
      <NavBar
        filters={filters}
        toggleSidebar={toggleSidebar}
        sidebarVisible={sidebarVisible}
        handleSortChange={handleSortChange}
      />

      <div className="product-listing-container">
        {sidebarVisible && <Sidebar onFilterChange={onFilterChange} selectedCategory={filters.category} />}
        <div className={`product-list ${sidebarVisible ? '' : 'expanded'}`}>
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <a href={product.url}>
                <img src={product.imageUrl} alt={product.productName} />
              </a>
              <div className="product-info">
                <h3>{product.productName} 
                  <button onClick={() => handleAddToCart(product)}><i className="fa fa-shopping-bag"></i></button>
                  <button onClick={() => handleAddToFavorites(product)}><i className="fa fa-heart"></i></button>
                </h3>
                <p>{product.division} {product.category}</p>
                <span>{product.currency} {product.listPrice}</span>
              </div>


            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart,
  favorites: state.favorites,
});

const mapDispatchToProps = {
  addToCart,
  addToFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
