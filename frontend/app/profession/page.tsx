"use client";

import React from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import SubmitButton from "../../components/SubmitButton";
import SideMenu from "../../components/SideMenu";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";
import { handleSubmit } from "../../utils/handleSubmit";

const Profession: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const employmentStatusOptions = [
    "Full-time", "Part-time", "Freelancer", "Student", "Unemployed", "Retired"
  ];
  const yesNoOptions = ["Yes", "No"];

  return (
    <div className="quiz-container">
      <div style={{ display: "flex", width: "100%", flexDirection: "row", alignItems: "flex-start", gap: "20px" }}>
        <SideMenu />
        <div className="question-set">
          <h3>Profession</h3>
          <TextInput
            question="Industry"
            value={formData.industry.value}
            onChange={(value) => handleInputChange("industry", value, setFormData)}
            placeholder="Enter your industry"
            isValid={formData.industry.isValid}
            helperText="Please enter your industry."
          />
          <Dropdown
            question="Employment Status"
            items={employmentStatusOptions}
            placeholder="Select your employment status"
            onSelect={(value) => handleDropdownSelect("employmentStatus", value, setFormData)}
            isValid={formData.employmentStatus.isValid}
            helperText="Please select your employment status."
          />
          <TextInput
            question="Current or Most Recent Job Title"
            value={formData.jobTitle.value}
            onChange={(value) => handleInputChange("jobTitle", value, setFormData)}
            placeholder="Enter your job title"
            isValid={formData.jobTitle.isValid}
            helperText="Please enter your job title."
          />
          <TextInput
            question="Years in Current/Most Recent Role"
            value={formData.yearsInRole.value}
            onChange={(value) => handleInputChange("yearsInRole", value, setFormData)}
            placeholder="Enter the number of years"
            type="number"
            isValid={formData.yearsInRole.isValid}
            helperText="Please enter the number of years."
          />
          <Dropdown
            question="Have you received a promotion or title change in this role?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("promotionReceived", value, setFormData)}
            isValid={formData.promotionReceived.isValid}
            helperText="Please select Yes or No."
          />
          <Dropdown
            question="Do you have a recent performance review?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("performanceReview", value, setFormData)}
            isValid={formData.performanceReview.isValid}
            helperText="Please select Yes or No."
          />
          <TextInput
            question="Reference Email (Manager or Colleague)"
            value={formData.referenceEmail.value}
            onChange={(value) => handleInputChange("referenceEmail", value, setFormData)}
            placeholder="Enter a reference email"
            type="email"
            isValid={formData.referenceEmail.isValid}
            helperText="Please enter a valid email address."
          />
          <Dropdown
            question="Have you had any employment gaps exceeding 9 months in the last 5 years?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("employmentGaps", value, setFormData)}
            isValid={formData.employmentGaps.isValid}
            helperText="Please select Yes or No."
          />
        </div>
      </div>
      <SubmitButton onClick={() => handleSubmit(formData)} />
    </div>
  );
};

export default Profession;