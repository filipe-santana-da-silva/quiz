"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // substitui next/router no app directory

export default function Home() {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const messages = [
    "Oi, meu amor 💕",
    "Antes de começarmos o quiz, quero te dizer algo especial...",
    "Você é a luz dos meus dias, o sorriso que me inspira e o abraço que me acolhe.",
    "Cada momento ao seu lado é uma lembrança que guardo com carinho.",
    "E para ter mais uma memoria ao seu lado eu preparei uma dinamica para voce, é simples mas é feito com o coracao 💘",
  ];

  const handleNext = () => {
    if (step < messages.length - 1) {
      setStep(step + 1);
    } else {
      setStep("done");
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>🌹 Para minha namorada 🌹</h1>
      {step !== "done" ? (
        <>
          <p style={{ fontSize: "1.5rem", margin: "2rem 0" }}>{messages[step]}</p>
          <button
            onClick={handleNext}
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              backgroundColor: "#ff69b4",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            {step < messages.length - 1 ? "Próximo 💌" : "Finalizar 💫"}
          </button>
        </>
      ) : (
        <>
          <p style={{ fontSize: "1.3rem", marginBottom: "2rem" }}>
            Pronta pra perder? KKKKKK
          </p>
          <button
            onClick={() => router.push("/quiz")}
            style={{
              padding: "1rem 2rem",
              fontSize: "1rem",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Começar Quiz 💡
          </button>
        </>
      )}
    </div>
  );
}
