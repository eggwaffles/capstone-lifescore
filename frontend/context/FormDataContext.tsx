"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Import axios for HTTP requests

interface FormField {
  value: string;
  isValid: boolean;
  componentType: "TextInput" | "Dropdown" | "DateInput" | "NumberInput" | "MultiSelect" | "TextArea" | "MultipleChoice";
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
  company: FormField;
  yearsInRole: FormField;
  promotionReceived: FormField;
  referenceEmail: FormField;
  employmentGaps: FormField;

  // Financial Data
  monthlyIncome: FormField;
  monthlyExpenses: FormField;
  liquidAssets: FormField;
  longTermInvestments: FormField;
  outstandingDebt: FormField;
  onTimePayments: FormField;
  creditUtilization: FormField;
  creditLimit: FormField;
  emergencyFund: FormField;
  bankruptcy: FormField;
  financialAssistance: FormField;

  // Health Data
  currentDiagnoses: FormField;
  pastDiagnoses: FormField;
  generalHealth: FormField;
  smokeOrVape: FormField;
  alcoholConsumption: FormField;
  exerciseFrequency: FormField;
  sleepHours: FormField;
  completedCheckups: FormField;
  medications: FormField;
  mentalHealthSupport: FormField;
  wearableDevice: FormField;
  dailySteps: FormField;

  // Social Data
  activeSocialMedia: FormField;
  totalFollowers: FormField;
  engagementFrequency: FormField;
  linkedinConnections: FormField;
  mentoredSomeone: FormField;
  beenMentored: FormField;

  // Community Data
  communities: FormField;
  volunteering: FormField;
  monthlyVolunteerHours: FormField;
  eventAttendance: FormField;
  communitySupport: FormField;

  // Legal Data
  misdemeanorConviction: FormField;
  felonyConviction: FormField;
  pendingCharges: FormField;
  incarceration: FormField;
  rehabilitationProgram: FormField;
  lawsuitDefendant: FormField;
  eviction: FormField;
  validDriversLicense: FormField;
  movingViolations: FormField;
  duiConviction: FormField;
  atFaultAccident: FormField;
  paroleViolation: FormField;
  legalDisputes: FormField;
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
    company: { value: "", isValid: true, componentType: "TextInput", inputType: "text" },
    yearsInRole: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    promotionReceived: { value: "", isValid: true, componentType: "Dropdown" },    
    referenceEmail: { value: "", isValid: true, componentType: "TextInput", inputType: "email" },
    employmentGaps: { value: "", isValid: true, componentType: "Dropdown" },
  
    // Financial Data
    monthlyIncome: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    monthlyExpenses: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    liquidAssets: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    longTermInvestments: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    outstandingDebt: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    onTimePayments: { value: "", isValid: true, componentType: "Dropdown" },
    creditUtilization: { value: "", isValid: true, componentType: "Dropdown" },
    creditLimit: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    emergencyFund: { value: "", isValid: true, componentType: "Dropdown" },
    bankruptcy: { value: "", isValid: true, componentType: "Dropdown" },
    financialAssistance: { value: "", isValid: true, componentType: "MultiSelect" },

    // Health Data
    currentDiagnoses: { value: "", isValid: true, componentType: "TextArea" },
    pastDiagnoses: { value: "", isValid: true, componentType: "TextArea" },
    generalHealth: { value: "", isValid: true, componentType: "Dropdown" },
    smokeOrVape: { value: "", isValid: true, componentType: "Dropdown" },
    alcoholConsumption: { value: "", isValid: true, componentType: "Dropdown" },
    exerciseFrequency: { value: "", isValid: true, componentType: "Dropdown" },
    sleepHours: { value: "", isValid: true, componentType: "Dropdown" },
    completedCheckups: { value: "", isValid: true, componentType: "MultiSelect" },
    medications: { value: "", isValid: true, componentType: "Dropdown" },
    mentalHealthSupport: { value: "", isValid: true, componentType: "Dropdown" },
    wearableDevice: { value: "", isValid: true, componentType: "Dropdown" },
    dailySteps: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    
    // Social Data
    activeSocialMedia: { value: "", isValid: true, componentType: "Dropdown" },
    totalFollowers: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    engagementFrequency: { value: "", isValid: true, componentType: "Dropdown" },
    linkedinConnections: { value: "", isValid: true, componentType: "Dropdown" },
    mentoredSomeone: { value: "", isValid: true, componentType: "Dropdown" },
    beenMentored: { value: "", isValid: true, componentType: "Dropdown" },

    // Community Data
    communities: { value: "", isValid: true, componentType: "MultiSelect" },
    volunteering: { value: "", isValid: true, componentType: "Dropdown" },
    monthlyVolunteerHours: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    eventAttendance: { value: "", isValid: true, componentType: "Dropdown" },
    communitySupport: { value: "", isValid: true, componentType: "Dropdown" },

    // Legal Data
    misdemeanorConviction: { value: "", isValid: true, componentType: "MultipleChoice" },
    felonyConviction: { value: "", isValid: true, componentType: "MultipleChoice" },
    pendingCharges: { value: "", isValid: true, componentType: "MultipleChoice" },
    incarceration: { value: "", isValid: true, componentType: "MultipleChoice" },
    rehabilitationProgram: { value: "", isValid: true, componentType: "MultipleChoice" },
    lawsuitDefendant: { value: "", isValid: true, componentType: "MultipleChoice" },
    eviction: { value: "", isValid: true, componentType: "MultipleChoice" },
    validDriversLicense: { value: "", isValid: true, componentType: "Dropdown" },
    movingViolations: { value: "", isValid: true, componentType: "Dropdown" },
    duiConviction: { value: "", isValid: true, componentType: "MultipleChoice" },
    atFaultAccident: { value: "", isValid: true, componentType: "MultipleChoice" },
    paroleViolation: { value: "", isValid: true, componentType: "MultipleChoice" },
    legalDisputes: { value: "", isValid: true, componentType: "MultipleChoice" },
  });

  // Use useEffect to send updated formData to the server
  useEffect(() => {
    const sendFormDataToServer = async () => {
      try {
        await axios.post("http://localhost:5000/log-form-data", formData);
        console.log("FormData sent to server:", formData);
      } catch (error) {
        console.error("Error sending formData to server:", error);
      }
    };

    sendFormDataToServer();
  }, [formData]); // Trigger whenever formData changes

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