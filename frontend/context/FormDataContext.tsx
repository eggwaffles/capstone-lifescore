"use client";

import React, { createContext, useContext, useState } from "react";

interface FormField {
  value: string;
  isValid: boolean;
  componentType: "TextInput" | "Dropdown" | "DateInput" | "NumberInput" | "MultiSelect" | "TextArea";
  inputType?: "text" | "number" | "email" | "date";
}

export type FormData = {
  // Personal Information
  fullName: FormField;
  birthday: FormField;
  streetAddress: FormField;
  city: FormField;
  state: FormField;
  zipCode: FormField;
  phoneNumber: FormField;
  email: FormField;
  ssn: FormField;

  // Family Background
  maritalStatus: FormField;
  numberOfChildren: FormField;
  householdSize: FormField;
  ethnicBackground: FormField;
  religiousAffiliation: FormField;
  primaryLanguage: FormField;
  parentEducationLevel: FormField;
  householdIncome: FormField;

// Education Data
highestEducation: FormField;
recentSchool: FormField;

// Profession Data
industry: FormField;
employmentStatus: FormField;
jobTitle: FormField;
yearsInRole: FormField;
promotionReceived: FormField;
performanceReview: FormField;
referenceEmail: FormField;
employmentGaps: FormField;
};

interface FormDataContextType {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    // Personal Information
    fullName: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },
    birthday: { value: "", isValid: true, componentType: "DateInput", inputType: "date" },
    streetAddress: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },
    city: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },
    state: { value: "", isValid: true, componentType: "Dropdown" },
    zipCode: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    phoneNumber: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },
    email: { value: "", isValid: true, componentType: "TextInput", inputType: "email" },
    ssn: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },

    // Family Background
    maritalStatus: { value: "", isValid: true, componentType: "Dropdown" },
    numberOfChildren: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    householdSize: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    ethnicBackground: { value: "", isValid: true, componentType: "Dropdown" },
    religiousAffiliation: { value: "", isValid: true, componentType: "Dropdown" },
    primaryLanguage: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },
    parentEducationLevel: { value: "", isValid: true, componentType: "Dropdown" },
    householdIncome: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },

    // Education Data
    highestEducation: { value: "", isValid: true, componentType: "Dropdown" },
    recentSchool: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },

    // Profession Data
    industry: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },
    employmentStatus: { value: "", isValid: true, componentType: "Dropdown" },
    jobTitle: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },
    yearsInRole: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    promotionReceived: { value: "", isValid: true, componentType: "Dropdown" },
    performanceReview: { value: "", isValid: true, componentType: "Dropdown" },
    referenceEmail: { value: "", isValid: true, componentType: "TextInput", inputType: "email" },
    employmentGaps: { value: "", isValid: true, componentType: "Dropdown" },
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = (): FormDataContextType => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};