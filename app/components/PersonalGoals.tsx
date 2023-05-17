import React from 'react';

// Sample test data
const primaryUser = [
  {
    id: 5,
    name: 'DaveB',
    goals: [
      {
        id: 1,
        name: 'Become the very best',
        subGoals: ['Train hard', 'Catch them all', 'go fast', 'be smart', 'work hard']
      },
      {
        id: 2,
        name: 'Train them',
        subGoals: ['Improve skills', 'Increase stamina']
      },
      {
        id: 2,
        name: 'Travel across the lands',
        subGoals: ['Search far and wide', 'Improve velocity']
      }
    ]
  }
];

const PersonalGoals = () => {
  return (
    <div className="bg-red-500">
      <div className="flex flex-wrap">
        {/* User Cards */}
        {primaryUser.map(user => (
          <div className="p-4" key={user.id}>
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-black">{user.name}</h3>
              </div>
              <div className="p-4 text-black">
                {/* Primary Goals */}
                {user.goals.map(goal => (
                  <div key={goal.id}>
                    <h4 className="font-semibold">{goal.name}</h4>
                    <ul>
                      {/* Sub-Goals */}
                      {goal.subGoals.map((subGoal, index) => (
                        <li key={index}>
                          <input type="checkbox" className="mr-2" />
                          {subGoal}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalGoals;



