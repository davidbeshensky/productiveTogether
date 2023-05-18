import React from 'react';

// Sample test data
const users = [
  {
    id: 1,
    name: 'John Doe',
    goals: [
      { id: 1, name: 'Complete project proposal' },
      { id: 2, name: 'Prepare presentation slides' },
      { id: 3, name: 'Review project budget' }
    ]
  },
  {
    id: 2,
    name: 'Jane Smith',
    goals: [
      { id: 4, name: 'Research market trends' },
      { id: 5, name: 'Conduct competitor analysis' },
      { id: 6, name: 'Update marketing strategy' }
    ]
  },
  {
    id: 3,
    name: 'Michael Johnson',
    goals: [
      { id: 7, name: 'Code refactoring' },
      { id: 8, name: 'Fix bug reported by users' },
      { id: 9, name: 'Implement new feature' }
    ]
  },
  {
    id: 4,
    name: 'Emily Davis',
    goals: [
      { id: 10, name: 'Write blog post' },
      { id: 11, name: 'Edit video content' },
      { id: 12, name: 'Schedule social media posts' }
    ]
  }
];

const GroupGoalCards = () => {
  return (
    <div className="bg-green-500">
      <h3>My Groups Goals Are...</h3>
      <div className="flex flex-wrap">
        {/* User Cards */}
        {users.map(user => (
          <div className="p-4" key={user.id}>
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-black">{user.name}</h3>
              </div>
              <ul className="p-4 text-black">
                {user.goals.map((goal) => (
                  <li className="flex items-center mb-2" key={goal.id}>
                    <input type="checkbox" className="mr-2" />
                    {goal.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupGoalCards;

