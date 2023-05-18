import React from "react";

const gratitudes = [
  { id: 1, name: 'the weather is very temperate' },
  { id: 2, name: 'people love me' },
  { id: 3, name: 'my cats are awesome' }
];

const GratitudeJournal = () => {
  return (
    <div>
      <div>GratitudeJournal</div>
      <div className="px-4 py-3 border-b border-gray-200">
        <h3 className="text-xl font-semibold text-black">
          Today I am grateful for...
        </h3>
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
  );
};

export default GratitudeJournal;
