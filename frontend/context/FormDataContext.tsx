"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"; // Import axios for HTTP requests

interface FormField {
  value: string;
  isValid: boolean;
  componentType:
    | "TextInput"
    | "Dropdown"
    | "DateInput"
    | "NumberInput"
    | "MultiSelect"
    | "TextArea"
    | "MultipleChoice";
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
  genderIdentity: FormField;
  sexualOrientation: FormField;
  disabilityStatus: FormField;
  veteranStatus: FormField;

  // Education Data
  highestEducation: FormField;
  recentSchool: FormField;
  currentEnrollment: FormField;
  programType: FormField;
  fieldOfStudy: FormField;
  highSchoolGpa: FormField;
  collegeGpa: FormField;
  graduatedOnTime: FormField;
  honorsReceived: FormField;
  extraCertifications: FormField;
  languagesSpoken: FormField;
  educationGap: FormField;
  firstGen: FormField;
  academicProbation: FormField;
  learningAttitude: FormField;
  satScore: FormField;
  actScore: FormField;
  lsatScore: FormField;
  greScore: FormField;
  gmatScore: FormField;
  mcatScore: FormField;

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
  abnormalBleeding: FormField;
  convulsionsEpilepsy: FormField;
  heartSurgery: FormField;
  pacemaker: FormField;
  addAdhd: FormField;
  crohnsDisease: FormField;
  hemophilia: FormField;
  psychiatricCare: FormField;
  aids: FormField;
  depression: FormField;
  hepatitis: FormField;
  diabetes: FormField;
  radiationTreatments: FormField;
  anemia: FormField;
  herpes: FormField;
  respiratoryDisease: FormField;
  anxiety: FormField;
  difficultyBreathing: FormField;
  highBloodPressure: FormField;
  rheumaticScarletFever: FormField;
  arthritis: FormField;
  emphysema: FormField;
  hiv: FormField;
  seizures: FormField;
  artificialHeartValve: FormField;
  epilepsyOrSeizures: FormField;
  hivesSkinRash: FormField;
  shingles: FormField;
  artificialJoint: FormField;
  faintingSpellsDizziness: FormField;
  kidneyDisease: FormField;
  asthma: FormField;
  kidneyProblems: FormField;
  shortnessOfBreath: FormField;
  feverBlisters: FormField;
  sickleCell: FormField;
  lesionsDefect: FormField;
  glaucoma: FormField;
  liverProblems: FormField;
  sinusProblems: FormField;
  bleedingExtractions: FormField;
  bloodDisease: FormField;
  drugAlcoholAbuse: FormField;
  stroke: FormField;
  lowBloodPressure: FormField;
  handicapsDisabilities: FormField;
  tobaccoUse: FormField;
  birthControl: FormField;
  otherMedicalConditions: FormField;
  generalHealth: FormField;
  smokeOrVape: FormField;
  alcoholConsumption: FormField;
  exerciseFrequency: FormField;
  sleepHours: FormField;
  completedCheckups: FormField;
  medications: FormField;
  mentalHealthSupport: FormField;
  wearableDevice: FormField;

  // Social Data
  relationshipStatus: FormField;
  numberOfRelationships: FormField;
  attachmentStyle: FormField;
  longestRelationship: FormField;
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

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData>({
    // Personal Information
    fullName: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    birthday: {
      value: "",
      isValid: true,
      componentType: "DateInput",
      inputType: "date",
    },
    streetAddress: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    city: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    state: { value: "", isValid: true, componentType: "Dropdown" },
    zipCode: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    phoneNumber: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    email: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "email",
    },
    ssn: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },

    // Demographic Data
    maritalStatus: { value: "", isValid: true, componentType: "Dropdown" },
    numberOfChildren: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    householdSize: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    ethnicBackground: { value: "", isValid: true, componentType: "Dropdown" },
    religiousAffiliation: {
      value: "",
      isValid: true,
      componentType: "Dropdown",
    },
    primaryLanguage: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    parentEducationLevel: {
      value: "",
      isValid: true,
      componentType: "Dropdown",
    },
    householdIncome: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    genderIdentity: { value: "", isValid: true, componentType: "Dropdown" },
    sexualOrientation: { value: "", isValid: true, componentType: "Dropdown" },
    disabilityStatus: { value: "", isValid: true, componentType: "Dropdown" },
    veteranStatus: { value: "", isValid: true, componentType: "Dropdown" },

    // Education Data
    highestEducation: { value: "", isValid: true, componentType: "Dropdown" },
    recentSchool: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    currentEnrollment: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    programType: { value: "", isValid: true, componentType: "Dropdown" },
    fieldOfStudy: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    highSchoolGpa: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
  collegeGpa: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    graduatedOnTime: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    honorsReceived: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    extraCertifications: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    languagesSpoken: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    educationGap: { value: "", isValid: true, componentType: "MultipleChoice" },
    firstGen: { value: "", isValid: true, componentType: "MultipleChoice" },
    academicProbation: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    learningAttitude: { value: "", isValid: true, componentType: "Dropdown" },
    satScore: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    actScore: { value: "", isValid: true, componentType: "NumberInput", inputType: "number"  },
    lsatScore: { value: "", isValid: true, componentType: "NumberInput", inputType: "number"  },
    greScore: { value: "", isValid: true, componentType: "NumberInput", inputType: "number"  },
    gmatScore: { value: "", isValid: true, componentType: "NumberInput", inputType: "number"  },
    mcatScore: { value: "", isValid: true, componentType: "NumberInput", inputType: "number"  },

    // Profession Data
    industry: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    employmentStatus: { value: "", isValid: true, componentType: "Dropdown" },
    jobTitle: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    company: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "text",
    },
    yearsInRole: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    promotionReceived: { value: "", isValid: true, componentType: "Dropdown" },
    referenceEmail: {
      value: "",
      isValid: true,
      componentType: "TextInput",
      inputType: "email",
    },
    employmentGaps: { value: "", isValid: true, componentType: "Dropdown" },

    // Financial Data
    monthlyIncome: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    monthlyExpenses: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    liquidAssets: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    longTermInvestments: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    outstandingDebt: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    onTimePayments: { value: "", isValid: true, componentType: "Dropdown" },
    creditUtilization: { value: "", isValid: true, componentType: "Dropdown" },
    creditLimit: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    emergencyFund: { value: "", isValid: true, componentType: "Dropdown" },
    bankruptcy: { value: "", isValid: true, componentType: "Dropdown" },
    financialAssistance: {
      value: "",
      isValid: true,
      componentType: "MultiSelect",
    },

    // Health Data
    abnormalBleeding: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    convulsionsEpilepsy: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    heartSurgery: { value: "", isValid: true, componentType: "MultipleChoice" },
    pacemaker: { value: "", isValid: true, componentType: "MultipleChoice" },
    addAdhd: { value: "", isValid: true, componentType: "MultipleChoice" },
    crohnsDisease: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    hemophilia: { value: "", isValid: true, componentType: "MultipleChoice" },
    psychiatricCare: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    aids: { value: "", isValid: true, componentType: "MultipleChoice" },
    depression: { value: "", isValid: true, componentType: "MultipleChoice" },
    hepatitis: { value: "", isValid: true, componentType: "MultipleChoice" },
    diabetes: { value: "", isValid: true, componentType: "MultipleChoice" },
    radiationTreatments: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    anemia: { value: "", isValid: true, componentType: "MultipleChoice" },
    herpes: { value: "", isValid: true, componentType: "MultipleChoice" },
    respiratoryDisease: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    anxiety: { value: "", isValid: true, componentType: "MultipleChoice" },
    difficultyBreathing: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    highBloodPressure: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    rheumaticScarletFever: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    arthritis: { value: "", isValid: true, componentType: "MultipleChoice" },
    emphysema: { value: "", isValid: true, componentType: "MultipleChoice" },
    hiv: { value: "", isValid: true, componentType: "MultipleChoice" },
    seizures: { value: "", isValid: true, componentType: "MultipleChoice" },
    artificialHeartValve: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    epilepsyOrSeizures: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    hivesSkinRash: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    shingles: { value: "", isValid: true, componentType: "MultipleChoice" },
    artificialJoint: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    faintingSpellsDizziness: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    kidneyDisease: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    asthma: { value: "", isValid: true, componentType: "MultipleChoice" },
    kidneyProblems: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    shortnessOfBreath: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    feverBlisters: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    sickleCell: { value: "", isValid: true, componentType: "MultipleChoice" },
    lesionsDefect: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    glaucoma: { value: "", isValid: true, componentType: "MultipleChoice" },
    liverProblems: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    sinusProblems: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    bleedingExtractions: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    bloodDisease: { value: "", isValid: true, componentType: "MultipleChoice" },
    drugAlcoholAbuse: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    stroke: { value: "", isValid: true, componentType: "MultipleChoice" },
    lowBloodPressure: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    handicapsDisabilities: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    tobaccoUse: { value: "", isValid: true, componentType: "MultipleChoice" },
    birthControl: { value: "", isValid: true, componentType: "MultipleChoice" },
    otherMedicalConditions: {
      value: "",
      isValid: true,
      componentType: "TextArea",
    },
    generalHealth: { value: "", isValid: true, componentType: "Dropdown" },
    smokeOrVape: { value: "", isValid: true, componentType: "Dropdown" },
    alcoholConsumption: { value: "", isValid: true, componentType: "Dropdown" },
    exerciseFrequency: { value: "", isValid: true, componentType: "Dropdown" },
    sleepHours: { value: "", isValid: true, componentType: "Dropdown" },
    completedCheckups: {
      value: "",
      isValid: true,
      componentType: "MultiSelect",
    },
    medications: { value: "", isValid: true, componentType: "TextArea" },
    mentalHealthSupport: {
      value: "",
      isValid: true,
      componentType: "Dropdown",
    },
    wearableDevice: { value: "", isValid: true, componentType: "Dropdown" },

    // Social Data
    relationshipStatus: { value: "", isValid: true, componentType: "Dropdown" },
  numberOfRelationships: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
  attachmentStyle: { value: "", isValid: true, componentType: "Dropdown" },
  longestRelationship: { value: "", isValid: true, componentType: "NumberInput", inputType: "number" },
    activeSocialMedia: { value: "", isValid: true, componentType: "Dropdown" },
    totalFollowers: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    engagementFrequency: {
      value: "",
      isValid: true,
      componentType: "Dropdown",
    },
    linkedinConnections: {
      value: "",
      isValid: true,
      componentType: "Dropdown",
    },
    mentoredSomeone: { value: "", isValid: true, componentType: "Dropdown" },
    beenMentored: { value: "", isValid: true, componentType: "Dropdown" },

    // Community Data
    communities: { value: "", isValid: true, componentType: "MultiSelect" },
    volunteering: { value: "", isValid: true, componentType: "Dropdown" },
    monthlyVolunteerHours: {
      value: "",
      isValid: true,
      componentType: "NumberInput",
      inputType: "number",
    },
    eventAttendance: { value: "", isValid: true, componentType: "Dropdown" },
    communitySupport: { value: "", isValid: true, componentType: "Dropdown" },

    // Legal Data
    misdemeanorConviction: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    felonyConviction: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    pendingCharges: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    incarceration: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    rehabilitationProgram: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    lawsuitDefendant: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    eviction: { value: "", isValid: true, componentType: "MultipleChoice" },
    validDriversLicense: {
      value: "",
      isValid: true,
      componentType: "Dropdown",
    },
    movingViolations: { value: "", isValid: true, componentType: "Dropdown" },
    duiConviction: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    atFaultAccident: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    paroleViolation: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
    legalDisputes: {
      value: "",
      isValid: true,
      componentType: "MultipleChoice",
    },
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
