import React, { useState, useEffect } from 'react';
import products from '../data/products.json';
import './Sidebar.css';

const Sidebar = ({ onFilterChange, selectedCategory, sidebarVisible }) => {
  const [categories, setCategories] = useState([]);
  const [genders, setGenders] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [isGenderDropdownOpen, setIsGenderDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isSubCategoryDropdownOpen, setIsSubCategoryDropdownOpen] = useState(false);

  useEffect(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    const uniqueGenders = [...new Set(products.map(product => product.division))];
    const uniqueCompanies = [...new Set(products.map(product => product.company))];
    const uniqueSubCategories = [...new Set(products.map(product => product.subCategory))];
    setCategories(uniqueCategories);
    setGenders(uniqueGenders);
    setCompanies(uniqueCompanies);
    setSubCategories(uniqueSubCategories);
  }, []);

  const handleCategoryClick = (category) => {
    onFilterChange('category', category);
  };

  const handleGenderChange = (e) => {
    const value = e.target.value;
    const newSelectedGenders = selectedGenders.includes(value)
      ? selectedGenders.filter(gender => gender !== value)
      : [...selectedGenders, value];
    setSelectedGenders(newSelectedGenders);
    onFilterChange('division', newSelectedGenders);
  };

  const handleCompanyChange = (e) => {
    const value = e.target.value;
    const newSelectedCompanies = selectedCompanies.includes(value)
      ? selectedCompanies.filter(company => company !== value)
      : [...selectedCompanies, value];
    setSelectedCompanies(newSelectedCompanies);
    onFilterChange('company', newSelectedCompanies);
  };

  const handleSubCategoryChange = (e) => {
    const value = e.target.value;
    const newSelectedSubCategories = selectedSubCategories.includes(value)
      ? selectedSubCategories.filter(subCategory => subCategory !== value)
      : [...selectedSubCategories, value];
    setSelectedSubCategories(newSelectedSubCategories);
    onFilterChange('subCategory', newSelectedSubCategories);
  };

  const toggleGenderDropdown = () => {
    setIsGenderDropdownOpen(!isGenderDropdownOpen);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
  };

  const toggleSubCategoryDropdown = () => {
    setIsSubCategoryDropdownOpen(!isSubCategoryDropdownOpen);
  };

  return (
    <div className={`sidebar-container ${sidebarVisible ? '' : 'hidden'}`}>
      <div className="categories">
        {categories.map((category, index) => (
          <div key={index} onClick={() => handleCategoryClick(category)} className={selectedCategory === category ? 'selected' : ''}>
            {category}
          </div>
        ))}
      </div>

      <hr />

      <div className="filter-section">
        <h3 onClick={toggleGenderDropdown}>Gender
          <span>{isGenderDropdownOpen ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}</span></h3>
        {isGenderDropdownOpen && (
          <div className="filter-options">
            {genders.map((gender, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  value={gender}
                  onChange={handleGenderChange}
                  checked={selectedGenders.includes(gender)}
                />
                <label>{gender}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <hr />

      <div className="filter-section">
        <h3 onClick={toggleCompanyDropdown}>Company 
        <span>{isCompanyDropdownOpen ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}</span>
          </h3>
        {isCompanyDropdownOpen && (
          <div className="filter-options">
            {companies.map((company, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  value={company}
                  onChange={handleCompanyChange}
                  checked={selectedCompanies.includes(company)}
                />
                <label>{company}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <hr />

      <div className="filter-section">
        <h3 onClick={toggleSubCategoryDropdown}>Sports & Activities
        <span>{isSubCategoryDropdownOpen ? <i className="fa fa-chevron-up"></i> : <i className="fa fa-chevron-down"></i>}</span>
          </h3>
        {isSubCategoryDropdownOpen && (
          <div className="filter-options">
            {subCategories.map((subCategory, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  value={subCategory}
                  onChange={handleSubCategoryChange}
                  checked={selectedSubCategories.includes(subCategory)}
                />
                <label>{subCategory}</label>
              </div>
            ))}
          </div>
        )}
      </div>

      <hr/>

    </div>
  );
};

export default Sidebar;