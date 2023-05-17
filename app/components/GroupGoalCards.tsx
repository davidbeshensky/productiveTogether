// import React from "react";

// interface GoalCards {
//   title: string;
//   content: string;
// }

// const Card: React.FC<GoalCards> = ({ title, content }) => (
//   <div
//     className="border-2 p-2 m-2 rounded-lg bg-blue-500 hover:bg-green-500 shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 hover:opacity-75"
//   >
//     <div className="flex flex-col items-center justify-center">
//       <h3 className="text-center">{title}</h3>
//       <p>{content}</p>
//     </div>
//   </div>
// );

// const GoalCards: React.FC = () => (
//   <div className="flex justify-center items-center h-screen w-screen bg-green-500">
//     <Card title="Card 1" content="This is the content of Card 1." />
//     <Card title="Card 2" content="This is the content of Card 2." />
//     <Card title="Card 3" content="This is the content of Card 3." />
//   </div>
// );

// export default GoalCards;

import React from 'react';

// Sample test data
const users = [
        {
          id: 1,
          name: 'John Doe',
          tasks: ['Complete project proposal', 'Prepare presentation slides', 'Review project budget']
        },
        {
          id: 2,
          name: 'Jane Smith',
          tasks: ['Research market trends', 'Conduct competitor analysis', 'Update marketing strategy']
        },
        {
          id: 3,
          name: 'Michael Johnson',
          tasks: ['Code refactoring', 'Fix bug reported by users', 'Implement new feature']
        },
        {
          id: 4,
          name: 'Emily Davis',
          tasks: ['Write blog post', 'Edit video content', 'Schedule social media posts']
        }
      ];

const GroupGoalCards = () => {
  return (
    <div className="bg-green-500">
      <div className="flex flex-wrap">
        {/* User Cards */}
        {users.map(user => (
          <div className="p-4" key={user.id}>
            <div className="bg-white rounded-lg shadow">
              <div className="px-4 py-3 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-black">{user.name}</h3>
              </div>
              <ul className="p-4 text-black">
                {user.tasks.map((task, index) => (
                  <li className="flex items-center mb-2" key={index}>
                    <input type="checkbox" className="mr-2" />
                    {task}
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


