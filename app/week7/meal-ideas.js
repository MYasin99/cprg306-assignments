import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || []; 
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        if (ingredient) {
            fetchMealIdeas(ingredient).then(data => setMeals(data));
        }
    }, [ingredient]);

    return (
        <div>
            <h2>Meal Ideas for {ingredient}</h2>
            <ul>
                {meals && meals.map(meal => ( 
                    <li key={meal.idMeal}>
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MealIdeas;
