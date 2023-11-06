"use client";

import { useState } from 'react';

const NewItem = ({ onAddItem }) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const getPlaceholderText = () => {
        switch (category) {
            case 'produce':
                return 'e.g., Apples, Bananas';
            case 'dairy':
                return 'e.g., Milk, Cheese';
            case 'bakery':
                return 'e.g., Bread, Pastries';
            case 'meat':
                return 'e.g., Chicken, Beef';
            case 'frozenFoods':
                return 'e.g., Frozen Pizza, Ice Cream';
            case 'cannedGoods':
                return 'e.g., Canned Beans, Canned Vegetables';
            case 'dryGoods':
                return 'e.g., Pasta, Rice';
            case 'beverages':
                return 'e.g., Soda, Juice';
            case 'snacks':
                return 'e.g., Chips, Cookies';
            case 'household':
                return 'e.g., Detergent, Paper Towels';
            case 'other':
                return 'e.g., Miscellaneous Item';
            default:
                return 'e.g., Item name';
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, quantity, category };
        onAddItem(item);  // Calling the onAddItem prop with the item object
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-pink-100">
            <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-md w-1/3">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-bold text-pink-400 outline-text">Item Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className={`w-full p-2 border rounded shadow-sm placeholder-${category} outline-text`} placeholder={getPlaceholderText()} />
                </div>

                <div className="mb-4">
                    <label htmlFor="quantity" className="block text-sm font-bold text-pink-400 outline-text">Quantity</label>
                    <input type="number" id="quantity" min="1" max="99" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} required className="w-full p-2 border rounded shadow-sm" />
                </div>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-bold text-pink-400 outline-text">Category</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border rounded shadow-sm">
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozenFoods">Frozen Foods</option>
                        <option value="cannedGoods">Canned Goods</option>
                        <option value="dryGoods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button type="submit" className="px-4 py-2 bg-blue-300 text-white rounded hover:bg-blue-400">Add Item</button>
            </form>
        </div>
    );
};

export default NewItem;
