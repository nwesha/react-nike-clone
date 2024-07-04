# E-commerce Product Listing and Management

This project is a simple e-commerce product listing and management application built using React and Redux. It includes functionalities for adding products to the cart, marking products as favorites, filtering products based on categories, gender, and subcategories, and sorting products. The project demonstrates state management with Redux, and styled components for a consistent and responsive user interface.

## Features

- **Product Listing**: Display a list of products with filtering and sorting options.
- **Add to Cart**: Functionality to add and remove products from the cart.
- **Add to Favorites**: Functionality to mark and unmark products as favorites.
- **Filtering**: Filter products based on categories, gender, and subcategories.
- **Sorting**: Sort products based on different criteria (e.g., price, name).
- **Responsive Design**: Responsive layout for better user experience on different devices.


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/nwesha/react-nike-clone.git
   cd ecommerce-product-listing

2. **Install dependencies:**

    ```bash
    npm install

3. **Run the application:**

    ```bash
    npm start
    
## Usage
### Product Listing

The `ProductListing` component displays the list of products. It uses the `Sidebar` component for filtering and `NavBar` for navigation. Products can be added to the cart or marked as favorites from this view. Sorting can be applied using the dropdown in the `NavBar`.

### Cart

The `Cart` component displays the items added to the cart. Users can remove items from the cart. The cart state is managed using Redux.

### Favorites

The `Favorites` component displays the products marked as favorites. The favorite products are filtered from the product data using Redux state.

### Filtering

The `Sidebar` component provides filtering options by category, gender, and subcategory. The filters update the displayed product list in real-time.

### Sorting

The `NavBar` component provides sorting options. Users can sort the products based on criteria such as price and name.

### Styles

The styles for the `Cart` and `Favorites` components are defined in the `CartAndFavorites.css` file. The `ProductCard` component has its styles defined in `ProductCard.css` to ensure a consistent look and feel across the application.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Acknowledgements

This project was developed as a demonstration of React and Redux capabilities for e-commerce applications. The product data used in this project is for demonstration purposes only.






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
