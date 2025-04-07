"use client";

import React from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import SideMenu from "../../components/SideMenu";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";

const Education: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const educationOptions = [
    "No formal education", "Primary education", "High school diploma", "Associate degree",
    "Bachelor's degree", "Graduate degree"
  ];

  return (
    <div className="quiz-container">
        <SideMenu />
        <div className="question-set">
          <h3>Education</h3>
          <Dropdown
            question="Highest Level of Education Completed"
            items={educationOptions}
            placeholder="Select your highest education level"
            onSelect={(value) => handleDropdownSelect("highestEducation", value, setFormData)}
            isValid={formData.highestEducation.isValid}
            helperText="Please select your highest education level."
          />
          <TextInput
            question="Most Recent School Attended"
            value={formData.recentSchool.value}
            onChange={(value) => handleInputChange("recentSchool", value, setFormData)}
            placeholder="Enter the name of your most recent school"
            isValid={formData.recentSchool.isValid}
            helperText="Please enter the name of your most recent school."
          />
        </div>
      </div>
  );
};

export default Education;