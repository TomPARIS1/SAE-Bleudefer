import React, { useState } from 'react';

const addToCartFunction = async (product) => {
    console.log('Product added to cart:', product);
};

export const AddToCartButton = ({ product, variant = 'primary', fullWidth = false }) => {
    const [isLoading, setLoading] = useState(false);

    const handleAddToCartClick = async () => {
        try {
            setLoading(true);

            await addToCartFunction(product);

            setLoading(false);
        } catch (error) {
            console.error('An unexpected error occurred:', error);
            setLoading(false);
        }
    };

    return (
        <button
            className={`px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none mt-5 font-sans ${variant}`}
            onClick={handleAddToCartClick}
            disabled={isLoading}
            style={{ width: fullWidth ? '100%' : 'auto' }}
        >
            {isLoading ? 'Adding to Cart...' : 'Add to Cart'}
        </button>
    );
};

