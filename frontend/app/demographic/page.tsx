"use client";

import React from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import SideMenu from "../../components/SideMenu";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";

const Family: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const maritalStatusOptions = ["Single", "Married", "Divorced", "Widowed", "Domestic Partnership"];
  const ethnicBackgroundOptions = [
    "White", "Black/African American", "Hispanic/Latino", "Asian", "Native American",
    "Pacific Islander", "Middle Eastern", "Mixed", "Other"
  ];
  const religiousAffiliationOptions = ["None", "Christian", "Muslim", "Jewish", "Hindu", "Buddhist", "Spiritual/Other"];
  const parentEducationOptions = [
    "No formal education", "Primary education", "High school diploma", "Associate degree",
    "Bachelor's degree", "Graduate degree"
  ];

  return (
    <div className="quiz-container">
        <SideMenu />
        <div className="question-set">
          <h3>Demographic & Background</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
          <Dropdown
            question="Marital Status"
            items={maritalStatusOptions}
            value={formData.maritalStatus.value}
            placeholder="Please select"
            onSelect={(value) => handleDropdownSelect("maritalStatus", value, setFormData)}
            isValid={formData.maritalStatus.isValid}
            helperText="Please select your marital status."
          />
          <TextInput
            question="Number of Children"
            value={formData.numberOfChildren.value}
            onChange={(value) => handleInputChange("numberOfChildren", value, setFormData)}
            placeholder="Enter the number of children"
            type="number"
            isValid={formData.numberOfChildren.isValid}
            helperText="Please enter a valid number."
          />
          <TextInput
            question="Household Size"
            value={formData.householdSize.value}
            onChange={(value) => handleInputChange("householdSize", value, setFormData)}
            placeholder="Enter your household size"
            type="number"
            isValid={formData.householdSize.isValid}
            helperText="Please enter a valid number."
          />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
          <Dropdown
            question="Ethnic or Racial Background"
            items={ethnicBackgroundOptions}
            value={formData.ethnicBackground.value}
            placeholder="Select your ethnic or racial background"
            onSelect={(value) => handleDropdownSelect("ethnicBackground", value, setFormData)}
            isValid={formData.ethnicBackground.isValid}
            helperText="Please select your ethnic or racial background."
          />
          <Dropdown
            question="Religious Affiliation or Practices"
            items={religiousAffiliationOptions}
            value= {formData.religiousAffiliation.value}
            placeholder="Select your religious affiliation"
            onSelect={(value) => handleDropdownSelect("religiousAffiliation", value, setFormData)}
            isValid={formData.religiousAffiliation.isValid}
            helperText="Please select your religious affiliation."
          />
          </div>
          <TextInput
            question="Primary Language Spoken at Home"
            value={formData.primaryLanguage.value}
            onChange={(value) => handleInputChange("primaryLanguage", value, setFormData)}
            placeholder="Enter your primary language"
            isValid={formData.primaryLanguage.isValid}
            helperText="Please enter your primary language."
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>

          <Dropdown
            question="Parent/Guardian Highest Education Level"
            items={parentEducationOptions}
            value={formData.parentEducationLevel.value}
            placeholder="Select the highest education level"
            onSelect={(value) => handleDropdownSelect("parentEducationLevel", value, setFormData)}
            isValid={formData.parentEducationLevel.isValid}
            helperText="Please select the highest education level."
          />
          <TextInput
            question="Estimated Household Income"
            value={formData.householdIncome.value}
            onChange={(value) => handleInputChange("householdIncome", value, setFormData)}
            placeholder="ex. $100,000"
            type="number"
            isValid={formData.householdIncome.isValid}
            helperText="Please enter a valid income (ex. $100,000)"
          />
          </div>
        </div>
      </div>
  );
};

export default Family;