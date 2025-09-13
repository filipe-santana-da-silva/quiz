"use client";

import { useSearchParams } from "next/navigation";

export default function ResultContent() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">🎉 Resultado 🎉</h1>
      <p className="text-xl text-gray-700 mb-6">Você acertou {score} de 3 perguntas!</p>
      <button
        onClick={() => window.location.href = "/"}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg mb-4"
      >
        Jogar Novamente
      </button>

      <div className="mt-8">
        <p className="text-lg text-gray-600 mb-2">Quer jogar algo mais fofo?</p>
        <button
          onClick={() => window.location.href = "/potinho"}
          className="text-pink-500 hover:text-pink-600 text-3xl animate-bounce"
        >
          ↓
        </button>
      </div>
    </div>
  );
}
