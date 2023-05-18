'use client';
import React from 'react';

type Reaction = {
  goalId: number;
  emoji: string;
};

type EmojiReactionsProps = {
  reactions: Reaction[];
  onReact: (goalId: number, emoji: string) => void;
};

const EmojiReactions: React.FC<EmojiReactionsProps> = ({ reactions, onReact }) => {
  const emojis = ['👍', '❤️', '😄']; // Add more emojis as needed

  return (
    <div className="ml-2">
      {emojis.map((emoji, index) => (
        <button key={index} onClick={() => onReact(reactions[0].goalId, emoji)}>
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiReactions;

