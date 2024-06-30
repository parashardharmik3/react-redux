// Cart.js

import React from 'react';
import { MdAdd } from 'react-icons/md';
import { useSelector } from 'react-redux';

const Cart = () => {
  const phones = useSelector(state => state.product.phones); // Assuming 'product' slice contains 'phones'

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Shopping Cart</h1>
      <ul>
        {phones.map(phone => (
          <li key={phone.id} className="flex items-center mb-2">
            <span className="mr-2">{phone.name}</span>
            <button className="border border-blue-500 text-blue-500 px-1 rounded hover:bg-blue-500 hover:text-white transition duration-300">
              <MdAdd />
            </button>
          </li>
        ))}
      </ul>
      <button className="mt-4 border border-blue-500 text-blue-500 px-3 py-1 rounded hover:bg-blue-500 hover:text-white transition duration-300">
        Buy Now
      </button>
    </div>
  );
};

export default Cart;
