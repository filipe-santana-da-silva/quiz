"use client";

import { Suspense } from "react";
import ResultContent from "./ResultContent";

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Carregando resultado...</div>}>
      <ResultContent />
    </Suspense>
  );
}
