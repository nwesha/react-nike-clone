const mockProducts = [
    // Array of product objects
];

export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockProducts);
        }, 1000);
    });
};
