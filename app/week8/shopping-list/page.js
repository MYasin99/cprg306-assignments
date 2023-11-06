'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';
import { useUserAuth } from './_utils/auth-context'; // Update this path as necessary

const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    // If the user is not logged in, redirect to the landing page
    if (!user) {
      router.push('/landing'); // Replace '/landing' with the path to your landing page
    }
  }, [user, router]);

  const handleAddItem = (item) => {
    setItems(prevItems => [...prevItems, item]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedItemName);
  };

  // Only render the page content if the user is logged in
  if (!user) {
    return null; // Or a <Loading/> component or any other placeholder
  }

  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping List</h1>
      <div className="flex">
        <div className="w-1/2 pr-2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-1/2 pl-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
};

export default Page;
