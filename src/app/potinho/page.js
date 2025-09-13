"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ Correto para diretório /app
import Image from "next/image";

export default function PotinhoPage() {
  const [hearts, setHearts] = useState(0);
  const router = useRouter(); // ✅ Agora está definido corretamente

  const addHeart = () => {
    setHearts((prev) => Math.min(prev + 1, 10));
  };

  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">💖 Encha o potinho de amor 💖</h1>

      <div className="w-64 h-64 relative mb-6">
        <Image
          src="/ela.jpeg"
          alt="Foto da namorada"
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={addHeart}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition duration-200"
        >
          ❤️ Te amo
        </button>
        <button
          onClick={addHeart}
          className="bg-red-400 hover:bg-red-500 text-white px-6 py-2 rounded-lg transition duration-200"
        >
          Você é o amor da minha vida!
        </button>
      </div>

      <div className="relative w-40 h-40 rounded-full border-4 border-pink-300 overflow-hidden shadow-inner bg-white flex items-center justify-center">
        <div
          className="absolute bottom-0 left-0 w-full bg-pink-400 transition-all duration-500 ease-in-out"
          style={{
            height: `${hearts * 10}%`,
            borderRadius: "0 0 9999px 9999px",
          }}
        />
        <span className="z-10 text-pink-700 font-bold text-lg">{hearts} ❤️</span>
      </div>

      {hearts >= 10 && (
        <p className="mt-6 text-pink-700 font-semibold text-xl animate-pulse">
          ainda é pouco para a quantidade de amor que eu sinto por você
        </p>
      )}

      {/* ✅ Setinha para o próximo jogo */}
      <div className="mt-8">
        <p className="text-lg text-gray-600 mb-2">Tem mais uma surpresa…</p>
        <button
          onClick={() => router.push("/raspadinha")}
          className="text-pink-500 hover:text-pink-600 text-3xl animate-bounce"
        >
          ↓
        </button>
      </div>
    </div>
  );
}
