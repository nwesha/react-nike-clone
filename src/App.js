import React, { useState } from 'react';
import products from './data/products.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductListing from './pages/ProductListing';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Cart from './components/Cart';
import Favorites from './components/Favorites';

function App() {
    const [filters, setFilters] = useState({ category: '', division: [], company: [], subCategory: [] });
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [sortCriteria, setSortCriteria] = useState('featured');

    const handleFilterChange = (name, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const toggleSidebar = () => {
        console.log("Toggle Sidebar Clicked");
        setSidebarVisible(prevState => !prevState);
        console.log("Sidebar Visible:", !sidebarVisible);
    };

    const handleSortChange = (criteria) => {
        setSortCriteria(criteria);
    };


    const filteredProducts = products.filter(product => {
        const { category, division, company, subCategory } = filters;
        const categoryMatch = category ? product.category === category : true;
        const divisionMatch = division.length ? division.includes(product.division) : true;
        const companyMatch = company.length ? company.includes(product.company) : true;
        const subCategoryMatch = subCategory.length ? subCategory.includes(product.subCategory) : true;
        return categoryMatch && divisionMatch && companyMatch && subCategoryMatch;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortCriteria) {
            case 'newest':
                return new Date(b.releaseDate) - new Date(a.releaseDate);
            case 'price-high-low':
                return b.listPrice - a.listPrice;
            case 'price-low-high':
                return a.listPrice - b.listPrice;
            default:
                return 0; // 'featured' and default
        }
    });

    return (
        <Router>
            {/* <NavBar 
                filters={filters} 
                productCount={sortedProducts.length} 
                toggleSidebar={toggleSidebar} 
                sidebarVisible={sidebarVisible}  
                handleSortChange={handleSortChange}
            /> */}
            <div className="main-content">
                <Routes>
                <Route 
                        path="/" 
                        element={
                            <ProductListing 
                                filters={filters} 
                                onFilterChange={handleFilterChange} 
                                sidebarVisible={sidebarVisible} 
                                toggleSidebar={toggleSidebar} 
                                products={sortedProducts}
                                sortCriteria={sortCriteria}
                                handleSortChange={handleSortChange}
                            />
                        } 
                    />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/signup" element={<SignUpForm />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
