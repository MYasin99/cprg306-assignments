import React from 'react';

const colors = [
  'border-red-500',
  'border-orange-500',
  'border-yellow-500',
  'border-green-500',
  'border-blue-500',
  'border-indigo-500',
  'border-purple-500',
  'border-pink-500',
  'border-gray-500',
  'border-blue-300',
  'border-green-300',
  'border-yellow-305',
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let colorIndex = 0;
const shuffledColors = shuffleArray([...colors]);

const Item = ({ name, quantity, category, onSelect }) => {
  colorIndex = (colorIndex + 1) % shuffledColors.length;
  const borderColorClass = shuffledColors[colorIndex];

  return (
    <li onClick={() => onSelect(name)} className={`p-4 mb-2 bg-white rounded shadow-md ${borderColorClass} border-2`}>
      <div className="flex justify-between">
        <span className="text-black">{name}</span>
        <span className="text-black">{quantity}</span>
        <span className="text-black">{category}</span>
      </div>
    </li>
  );
};

export default Item;
