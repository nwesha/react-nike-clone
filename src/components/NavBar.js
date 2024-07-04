import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import nikeLogo from './nike-logo.png';


const NavBar = ({ filters = { division: [], subCategory: [] }, productCount, toggleSidebar, sidebarVisible, handleSortChange }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const texts = [
        "Members: Free Shipping on orders above $50",
        "Look for Store Pickup during Checkout"
    ];

    const { division, subCategory } = filters;


    let heading = `All Products`;
    if (division.length===1 && subCategory.length === 1) {
        heading = `${division}'s ${subCategory}`;
    }
    else if(division.length === 1 || subCategory.length===1){
        heading = `${division} ${subCategory}`;
    } 
    else if (division.length > 1 || subCategory.length > 1) {
        heading = `Products`;
    }

    const handleDropdownToggle = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSortSelection = (criteria) => {
        handleSortChange(criteria);
        setDropdownVisible(false);
    };

    const handlePreviousText = () => {
        setCurrentTextIndex(prevIndex => (prevIndex === 0 ? texts.length - 1 : prevIndex - 1));
      };
    
      const handleNextText = () => {
        setCurrentTextIndex(prevIndex => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
      };

    return (
        <div>
             <nav className="navbar">
                <div className="navbar__top">
                    <div className="navbar__actions">
                        <Link to="/store">Find a Store</Link>
                        <span>|</span>
                        <Link to="/help">Help</Link>
                        <span>|</span>
                        <Link to="/join">Join Us</Link>
                        <span>|</span>
                        <Link to="/signin">Sign In</Link>
                    </div>
                </div>
                <div className="navbar__main">
                    <div className="navbar__logo">
                        <Link to="/"><img src={nikeLogo} alt="Nike Logo" /></Link>
                    </div>
                    <ul className="navbar__links">
                        <li><Link to="/new-featured">New & Featured</Link></li>
                        <li><Link to="/men">Men</Link></li>
                        <li><Link to="/women">Women</Link></li>
                        <li><Link to="/kids">Kids</Link></li>
                        <li><Link to="/jordan">Jordan</Link></li>
                    </ul>
                    <div className="navbar__icons">
                        <div className="navbar__search">
                            <i className="fa fa-search"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <Link to="/favorites" className='icon'><i className="fa fa-heart"></i></Link>
                        <Link to="/cart" className='icon'><i className="fa fa-shopping-bag"></i></Link>
                    </div>
                </div>
                <div className="navbar__text-navigator">
          <button onClick={handlePreviousText}><i className="fa fa-chevron-left"></i></button>
          <span>{texts[currentTextIndex]}</span>
          <button onClick={handleNextText}><i className="fa fa-chevron-right"></i></button>
        </div>
            </nav>
            <div className="navbar__heading">
                <h3>{heading}</h3>
                <div className="navbar__heading-actions">
                <button onClick={toggleSidebar}>
                        {sidebarVisible ? 'Hide Filters' : 'Show Filters'}
                        <i className="fa fa-sliders-h"></i>
                    </button>
                    <div className="navbar__sort-dropdown">
                        <button onClick={handleDropdownToggle}>
                            Sort By <i className="fa fa-chevron-down"></i>
                        </button>
                        {dropdownVisible && (
                            <ul className="dropdown-menu">
                                <li onClick={() => handleSortSelection('featured')}>Featured</li>
                                <li onClick={() => handleSortSelection('newest')}>Newest</li>
                                <li onClick={() => handleSortSelection('price-high-low')}>Price: High-Low</li>
                                <li onClick={() => handleSortSelection('price-low-high')}>Price: Low-High</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
