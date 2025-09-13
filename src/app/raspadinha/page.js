"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Importação correta
import Image from "next/image";

export default function RaspadinhaPage() {
  const canvasRef = useRef(null);
  const router = useRouter(); // ✅ Inicialização correta

  const imageSrc = "/nos (2).jpeg"; // substitua por sua imagem

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 300;
    canvas.height = 300;

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const erase = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || e.touches[0].clientX) - rect.left;
      const y = (e.clientY || e.touches[0].clientY) - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
    };

    canvas.addEventListener("mousemove", erase);
    canvas.addEventListener("touchmove", erase);

    return () => {
      canvas.removeEventListener("mousemove", erase);
      canvas.removeEventListener("touchmove", erase);
    };
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl font-bold text-pink-600 mb-6">🎁 Raspe para revelar 🎁</h1>

      <div className="relative w-[300px] h-[300px] mb-4">
        <Image
          src={imageSrc}
          alt="Surpresa"
          fill
          className="object-cover rounded-lg"
        />
        <canvas
          ref={canvasRef}
          className="absolute top-0 left-0 rounded-lg"
        />
      </div>

      <p className="text-pink-700 font-medium mb-6">
        Raspadinha do amor 💖
      </p>

      {/* ✅ Setinha para a mensagem final */}
      <div className="mt-4">
        <p className="text-lg text-gray-600 mb-2">E agora… uma última surpresa 💌</p>
        <button
          onClick={() => router.push("/final")}
          className="text-pink-500 hover:text-pink-600 text-3xl animate-bounce"
        >
          ↓
        </button>
      </div>
    </div>
  );
}
