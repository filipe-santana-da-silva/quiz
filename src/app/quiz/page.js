"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import questions from "@/app/data/questions";
import QuestionCard from "@/app/components/QuestionCard";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      router.push(`/result?score=${score + (selected === questions[current].answer ? 1 : 0)}`);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">💘 Quiz do Amor 💘</h1>
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-6">
        <QuestionCard
          question={questions[current].question}
          options={questions[current].options}
          onAnswer={handleAnswer}
        />
        <p className="mt-4 text-gray-600 text-center">
          Pergunta {current + 1} de {questions.length}
        </p>
      </div>
    </div>
  );
}
