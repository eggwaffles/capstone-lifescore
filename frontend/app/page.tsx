"use client";

import React, { useState } from 'react';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
import "../components/styles.css";
import Dropdown from '../components/Dropdown';
import MultipleChoice from '../components/MultipleChoice';

interface FormField {
  value: string;
  isValid: boolean;
}

type FormData = Record<string, FormField>;

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    income: { value: "", isValid: true },
    debt: { value: "", isValid: true },
    followers: { value: "", isValid: true },
    category: { value: "", isValid: true },
    favoriteColor: { value: "", isValid: true },
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { ...prev[field], value },
    }));
  };

  const handleDropdownSelect = (selected: string) => {
    setFormData((prev) => ({
      ...prev,
      category: { value: selected, isValid: true },
    }));
  };

  const handleMultipleChoiceSelect = (selected: string) => {
    setFormData((prev) => ({
      ...prev,
      favoriteColor: { value: selected, isValid: true },
    }));
  };

  const handleSubmit = async () => {
    const updatedFormData = { ...formData };

    (Object.keys(updatedFormData) as Array<keyof typeof updatedFormData>).forEach((field) => {
      const value = updatedFormData[field].value;

      if (field === "category" || field === "favoriteColor") {
        updatedFormData[field].isValid = value.trim() !== "";
      } else {
        updatedFormData[field].isValid = !isNaN(Number(value)) && Number(value) >= 0;
      }
    });

    setFormData(updatedFormData);

    const allValid = Object.values(updatedFormData).every((field) => field.isValid);

    if (allValid) {
      const payload = Object.keys(updatedFormData).reduce((acc, field) => {
        acc[field] = updatedFormData[field].value;
        return acc;
      }, {} as Record<string, string>);

      console.log("Payload being sent:", payload);

      try {
        const response = await fetch("http://localhost:5000/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Response from server:", data.message);
        } else {
          console.error("Failed to send data to the backend");
        }
      } catch (error) {
        console.error("Error during fetch:", error);
      }
    } else {
      console.log("Form is invalid. Please correct the errors.");
    }
  };

  return (
    <div className="main">
      <TextInput
        question="Income"
        value={formData.income.value}
        onChange={(value) => handleInputChange("income", value)}
        placeholder="Enter your income"
        type="number"
        isValid={formData.income.isValid}
        helperText="Please enter a valid number."
      />
      <TextInput
        question="Debt"
        value={formData.debt.value}
        onChange={(value) => handleInputChange("debt", value)}
        placeholder="Enter your debt"
        type="number"
        isValid={formData.debt.isValid}
        helperText="Please enter a valid number."
      />
      <TextInput
        question="Followers"
        value={formData.followers.value}
        onChange={(value) => handleInputChange("followers", value)}
        placeholder="Enter your followers"
        type="number"
        isValid={formData.followers.isValid}
        helperText="Please enter a valid number."
      />
      <Dropdown
        question="Category"
        items={["Business", "Personal", "Other"]}
        placeholder="Select a category"
        onSelect={handleDropdownSelect}
        isValid={formData.category.isValid}
        helperText="Please select a category."
      />
      <MultipleChoice
        question="What is your favorite color?"
        items={["Red", "Blue", "Green", "Yellow"]}
        onSelect={handleMultipleChoiceSelect}
        isValid={formData.favoriteColor.isValid} // Pass isValid state
        helperText="Please select your favorite color." // Pass helper text
      />
      <SubmitButton onClick={handleSubmit} />
    </div>
  );
};

export default App;
