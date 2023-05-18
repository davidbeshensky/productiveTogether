import React from 'react';

// Sample test data for the logged-in user's goals
const goals = [
  { id: 1, name: 'Become the very best' },
  { id: 2, name: 'Train them' },
  { id: 3, name: 'Travel across the lands' }
];

const gratitudes = [
    { id: 1, name: "the weather is very temperate"},
    { id: 2, name: "people love me"},
    { id: 3, name: "my cats are awesome"}
]

const PersonalGoals = () => {
  return (
    <div className="bg-red-500">
      <div className="p-4">
        <div className="bg-white rounded-lg shadow p-10">
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-black">My goals today are...</h3>
          </div>
          <div className="p-4 text-black">
            {/* Primary Goals */}
            {goals.map((goal, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="checkbox" className="mr-2" />
                <span>{goal.name}</span>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-black">Today I am grateful for...</h3>
          </div>
          <div className="p-4 text-black">
            {/* Primary Gratitudes */}
            {gratitudes.map((gratitude, index) => (
              <div key={index} className="flex items-center mb-2">
                <span>{gratitude.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalGoals;

  



