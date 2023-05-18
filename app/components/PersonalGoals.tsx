'use client'
import React, { useState } from 'react';
import EmojiReactions from './childComponents/EmojiReactions';

// Sample test data for the logged-in user's goals
const goals = [
  { id: 1, name: 'Become the very best' },
  { id: 2, name: 'Train them' },
  { id: 3, name: 'Travel across the lands' }
];

type Reaction = {
    goalId: number;
    emoji: string;
  };

const PersonalGoals = () => {
  const [reactions, setReactions] = useState<Reaction[]>([]);

  const handleReact = (goalId: number, emoji: string) => {
    const updatedReactions = [...reactions];
    const goalReaction = updatedReactions.find(reaction => reaction.goalId === goalId);

    if (goalReaction) {
      goalReaction.emoji = emoji;
    } else {
      updatedReactions.push({ goalId, emoji });
    }

    setReactions(updatedReactions);
  };

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
          <EmojiReactions reactions={reactions} onReact={handleReact} />
        </div>
      </div>
    </div>
  );
};

export default PersonalGoals;

  



