'use client';
import React, { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

const ItemList = () => {
    const [sortBy, setSortBy] = useState('name');
    const [groupByCategory, setGroupByCategory] = useState(false);

    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'category') return a.category.localeCompare(b.category);
        return 0;
    });

    const groupedItems = sortedItems.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {});

    const renderItems = () => {
        if (groupByCategory) {
            return Object.keys(groupedItems).sort().map(category => (
                <div key={category}>
                    <h2 className="text-pink-400">{category}</h2>
                    <ul>
                        {groupedItems[category].map(item => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                        ))}
                    </ul>
                </div>
            ));
        } else {
            return (
                <ul>
                    {sortedItems.map(item => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                    ))}
                </ul>
            );
        }
    };

    return (
        <div className="flex flex-col items-center bg-pink-100 p-4">
            <div className="mb-4">
                <button
                    onClick={() => {
                        setSortBy('name');
                        setGroupByCategory(false);  // Update groupByCategory state here
                    }}
                    className={`px-4 py-2 rounded ${sortBy === 'name' && !groupByCategory ? 'bg-blue-300' : 'bg-gray-300'} text-white hover:bg-blue-400`}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => {
                        setSortBy('category');
                        setGroupByCategory(false);  // Update groupByCategory state here
                    }}
                    className={`ml-4 px-4 py-2 rounded ${sortBy === 'category' && !groupByCategory ? 'bg-blue-300' : 'bg-gray-300'} text-white hover:bg-blue-400`}
                >
                    Sort by Category
                </button>
                <button
                    onClick={() => setGroupByCategory(prev => !prev)}
                    className={`ml-4 px-4 py-2 rounded ${groupByCategory ? 'bg-blue-300' : 'bg-gray-300'} text-white hover:bg-blue-400`}
                >
                    Group by Category
                </button>
            </div>
            {renderItems()}
        </div>
    );
};

export default ItemList;
