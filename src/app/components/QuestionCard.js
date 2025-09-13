"use client";

export default function QuestionCard({ question, options, onAnswer }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{question}</h2>
      <ul className="space-y-3">
        {options.map((opt, index) => (
          <li key={index}>
            <button
              onClick={() => onAnswer(opt)}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition duration-200"
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
