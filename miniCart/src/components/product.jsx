// Product.js

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPhoneById } from '../features/products/productSlice';
import { MdAdd } from 'react-icons/md';

const Product = ({ phone, price }) => {
  const dispatch = useDispatch();
  const [localPhone, setLocalPhone] = useState({ id: phone.id, name: phone.name, price });

  useEffect(() => {
    setLocalPhone({ id: phone.id, name: phone.name, price });
  }, [phone.id, phone.name, price]);

  const handleAdd = () => {
    dispatch(fetchPhoneById(localPhone.id)); // Pass localPhone.id as the phoneId
  };

  return (
    <div className="pb-2">
      <div className="flex h-40 justify-start items-center bg-zinc-200 p-4">
        <img className="w-32 h-32 object-contain" src={`../public/${localPhone.name}.avif`} alt={localPhone.name} />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{localPhone.name}</h2>
          <span className="text-gray-700">Price: ${localPhone.price}</span>
          <p className="text-gray-500">Features: Blah blah blah...</p>
          <button onClick={handleAdd} className="mt-2 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition duration-300">
            <MdAdd className="inline-block mr-1" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

