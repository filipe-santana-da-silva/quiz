import { useRouter } from "next/router";

export default function Result() {
  const router = useRouter();
  const { score } = router.query;

  return (
    <div>
      <h1>Resultado Final</h1>
      <p>Você acertou {score} de 3 perguntas!</p>
      <button onClick={() => router.push("/")}>Jogar Novamente</button>
    </div>
  );
}
