"use client";

import React from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import MultiSelect from "../../components/MultiSelect";
import SideMenu from "../../components/SideMenu";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";

const Health: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const generalHealthOptions = ["Excellent", "Good", "Fair", "Poor"];
  const yesNoOptions = ["Yes", "No"];
  const alcoholConsumptionOptions = ["Never", "Occasionally", "Weekly", "Daily"];
  const exerciseFrequencyOptions = ["0", "1–2", "3–4", "5+"];
  const checkupOptions = ["Annual physical", "Eye exam", "Dental checkup", "None"];

  return (
    <div className="quiz-container">
        <SideMenu />
        <div className="question-set">
          <h3>Health Information</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
          <TextInput
            question="Active Diagnoses (if any)"
            value={formData.currentDiagnoses.value}
            onChange={(value) => handleInputChange("currentDiagnoses", value, setFormData)}
            isValid={formData.currentDiagnoses.isValid}
            helperText="Please enter your current medical diagnoses."
          />
          <TextInput
            question="Past Diagnoses (if any)"
            value={formData.pastDiagnoses.value}
            onChange={(value) => handleInputChange("pastDiagnoses", value, setFormData)}
            isValid={formData.pastDiagnoses.isValid}
            helperText="Please enter past diagnoses that still affect you."
          />
          </div>
          <Dropdown
            question="How would you rate your general health?"
            items={generalHealthOptions}
            value={formData.generalHealth.value}
            placeholder="Select your general health"
            onSelect={(value) => handleDropdownSelect("generalHealth", value, setFormData)}
            isValid={formData.generalHealth.isValid}
            helperText="Please select your general health."
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>         
          <Dropdown
            question="Do you smoke or vape?"
            items={yesNoOptions}
            value={formData.smokeOrVape.value}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("smokeOrVape", value, setFormData)}
            isValid={formData.smokeOrVape.isValid}
            helperText="Please select Yes or No."
          />
          <Dropdown
            question="Do you consume alcohol?"
            items={alcoholConsumptionOptions}
            value={formData.alcoholConsumption.value}
            placeholder="Select your alcohol consumption frequency"
            onSelect={(value) => handleDropdownSelect("alcoholConsumption", value, setFormData)}
            isValid={formData.alcoholConsumption.isValid}
            helperText="Please select your alcohol consumption frequency."
          />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
          <Dropdown
            question="How often do you exercise per week?"
            items={exerciseFrequencyOptions}
            value={formData.exerciseFrequency.value}
            placeholder="Select your exercise frequency"
            onSelect={(value) => handleDropdownSelect("exerciseFrequency", value, setFormData)}
            isValid={formData.exerciseFrequency.isValid}
            helperText="Please select your exercise frequency."
          />
          <Dropdown
            question="Do you sleep at least 7 hours per night on average?"
            items={yesNoOptions}
            value={formData.sleepHours.value}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("sleepHours", value, setFormData)}
            isValid={formData.sleepHours.isValid}
            helperText="Please select Yes or No."
          />
          </div>
          <MultiSelect
            question="Which of the following checkups have you completed in the past year?"
            items={checkupOptions}
            selectedValues={formData.completedCheckups.value.split(",")}
            onChange={(values) => handleInputChange("completedCheckups", values.join(","), setFormData)}
            isValid={formData.completedCheckups.isValid}
            helperText="Please select all that apply."
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
          <Dropdown
            question="Do you currently take any medications for physical or mental health?"
            items={yesNoOptions}
            value={formData.medications.value}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("medications", value, setFormData)}
            isValid={formData.medications.isValid}
            helperText="Please select Yes or No."
          />
          <Dropdown
            question="Have you been in therapy or sought mental health support in the past year?"
            items={yesNoOptions}
            value={formData.mentalHealthSupport.value}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("mentalHealthSupport", value, setFormData)}
            isValid={formData.mentalHealthSupport.isValid}
            helperText="Please select Yes or No."
          />
          </div>
          <Dropdown
            question="Do you use a wearable device (Fitbit, Apple Watch, etc.)?"
            items={yesNoOptions}
            value={formData.wearableDevice.value}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("wearableDevice", value, setFormData)}
            isValid={formData.wearableDevice.isValid}
            helperText="Please select Yes or No."
          />
          <TextInput
            question="If yes: Average daily steps"
            value={formData.dailySteps.value}
            onChange={(value) => handleInputChange("dailySteps", value, setFormData)}
            placeholder="Enter your average daily steps"
            type="number"
            isValid={formData.dailySteps.isValid}
            helperText="Please enter your average daily steps."
          />
        </div>
      </div>
  );
};

export default Health;