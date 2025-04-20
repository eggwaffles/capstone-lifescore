"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "../../components/SubmitButton";
import SideMenu from "../../components/SideMenu";
import { handleSubmit } from "../../utils/handleSubmit";
import { useFormData } from "../../context/FormDataContext";

const Submit: React.FC = () => {
  const router = useRouter();
  const { formData } = useFormData();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
  
    try {
      const response = await fetch("http://localhost:5000/process-success-score", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch success score");
      }
  
      const data = await response.json();
      sessionStorage.setItem("scoreData", JSON.stringify(data));
  
      router.push("/score");
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="quiz-container">
      <SideMenu />
      <div className="question-set">
        <h3>Submit Your Responses</h3>
        <p>
          Please take a moment to go back and review your responses to ensure
          all sections are complete. Once submitted, your information will be
          used to calculate your Citizen Success Score. When you're ready, click
          Submit to finalize your assessment.
        </p>
        <SubmitButton
          label={isSubmitting ? "Submitting..." : "Submit"}
          onClick={handleFormSubmit}
          disabled={isSubmitting}
        />
      </div>
    </div>
  );
};

export default Submit;
