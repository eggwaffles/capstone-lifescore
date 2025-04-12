"use client";

import React from "react";
import { useRouter } from "next/navigation"; 
import SubmitButton from "../components/SubmitButton";

const App: React.FC = () => {
  const router = useRouter();

  const handleStartQuiz = () => {
    router.push("/personal");
  };

  return (
    <div className="start-quiz-container">
      <SubmitButton label="Start Quiz" onClick={handleStartQuiz} />
    </div>
  );
};

export default App;
