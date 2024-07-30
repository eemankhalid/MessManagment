import React from 'react';

const menuData = {
  Monday: { Breakfast: 'Pancakes', Lunch: 'Grilled Chicken', Dinner: 'Pasta' },
  Tuesday: { Breakfast: 'Omelette', Lunch: 'Salad', Dinner: 'Burger' },
  Wednesday: { Breakfast: 'Smoothie', Lunch: 'Wrap', Dinner: 'Sushi' },
  Thursday: { Breakfast: 'French Toast', Lunch: 'Soup', Dinner: 'Tacos' },
  Friday: { Breakfast: 'Bagel', Lunch: 'Pizza', Dinner: 'Steak' },
  Saturday: { Breakfast: 'Waffles', Lunch: 'Pasta', Dinner: 'Seafood' },
  Sunday: { Breakfast: 'Crepes', Lunch: 'BBQ', Dinner: 'Roast Chicken' },
};

const MenuTable = () => {
  return (
    <table border="1" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Meal</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody>
        {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
          <tr key={meal}>
            <td>{meal}</td>
            {Object.keys(menuData).map((day) => (
              <td key={day}>{menuData[day][meal]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MenuTable;
