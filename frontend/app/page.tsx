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
      <h2>Welcome to the Citizen Success Score Quiz</h2>
      <p>This assessment provides a comprehensive, holistic evaluation of your current life circumstances. Your Citizen Success Score may be used to support applications for jobs, insurance rates, educational programs, and other opportunities where a broader understanding of your background and potential is valuable.</p>
      <p>The quiz takes approximately <b>10–15 minutes</b> to complete and is divided into sections covering areas like finances, education, work history, social support, and health.</p>
      <SubmitButton label="Start Quiz" onClick={handleStartQuiz} />
      <div style={{ paddingTop: "20px", color: "var(--Black-4, #5E6366)", fontFamily: "Inter", fontSize: "14px", fontStyle: "normal", fontWeight: 400, lineHeight: "normal" }}>
  <span style={{ color: "red", fontWeight: 700 }}>Disclaimer:</span> This tool uses AI to help evaluate your responses. Personally identifiable information — such as your name, address, or phone number — <b>will not be collected or shared.</b> However, any other responses you provide will be processed using AI for the purpose of scoring and analysis. all appropriate safeguards have been taken to ensure your data remains secure and private, however all questions are completely <b>optional</b>. Please only answer what you're comfortable sharing.
</div>
</div>
  );
};

export default App;
