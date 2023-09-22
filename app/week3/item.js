import React from "react";

const Item = ({ name, quantity, category }) => {
    return (
      <li className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-medium">{name}</h2>
        <p className="text-gray-500">{category}</p>
        <p className="text-gray-700">{quantity} in stock</p>
      </li>
    );
  };
  
  export default Item;