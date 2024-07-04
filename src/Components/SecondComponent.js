import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Actions';

const SecondComponent = () => {
    const dispatch = useDispatch();

    const item = {
        item: 'phone',
        model: 'iPhone 15 Pro Max'
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <div className='h-1/2 w-1/2 border-2 border-black relative'>
            <h1 className='mb-4'>SecondComponent</h1>

            <button
                onClick={() => handleAddToCart(item)}
                className='h-[50px] bg-green-500 text-white font-semibold active:bg-green-600 w-[400px] border-2 border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                Add item to cart
            </button>
        </div>
    );
};

export default SecondComponent;


