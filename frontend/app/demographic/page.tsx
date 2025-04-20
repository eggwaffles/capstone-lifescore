"use client";

import React from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import SideMenu from "../../components/SideMenu";
import NavigationButtons from "../../components/NavigationButtons";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";

const Demographic: React.FC = () => {
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
  const genderIdentityOptions = [
    "Man", "Woman", "Transgender Man", "Transgender Woman", "Non-binary", "Other", "Prefer not to say"
  ];
  const sexualOrientationOptions = [
    "Heterosexual", "Gay or Lesbian", "Bisexual", "Pansexual", "Asexual", "Queer", "Other", "Prefer not to say"
  ];
  const disabilityStatusOptions = [
    "Yes", "No", "Prefer not to say"
  ];
  const veteranStatusOptions = [
    "Yes – Active Duty", "Yes – Veteran", "No", "Prefer not to say"
  ];

  const isNextEnabled =
    formData.maritalStatus.value &&
    formData.numberOfChildren.value &&
    formData.householdSize.value &&
    formData.ethnicBackground.value &&
    formData.religiousAffiliation.value &&
    formData.primaryLanguage.value &&
    formData.parentEducationLevel.value &&
    formData.householdIncome.value &&
    formData.genderIdentity.value &&
    formData.sexualOrientation.value &&
    formData.disabilityStatus.value &&
    formData.veteranStatus.value;

  return (
    <div className="quiz-container">
      <SideMenu />
      <div className="question-set">
        <h3>Demographic & Background</h3>
        <div className="question-row">
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
        <div className="question-row">
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
            value={formData.religiousAffiliation.value}
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
        <div className="question-row">
          <Dropdown
            question="Parent/Guardian Highest Education Level"
            items={parentEducationOptions}
            value={formData.parentEducationLevel.value}
            placeholder="Select"
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
        <div className="question-row">
          <Dropdown
            question="Gender Identity"
            items={genderIdentityOptions}
            value={formData.genderIdentity?.value || ""}
            placeholder="Select your gender identity"
            onSelect={(value) => handleDropdownSelect("genderIdentity", value, setFormData)}
            isValid={formData.genderIdentity?.isValid}
            helperText="Please select your gender identity."
          />
          <Dropdown
            question="Sexual Orientation"
            items={sexualOrientationOptions}
            value={formData.sexualOrientation?.value || ""}
            placeholder="Select your sexual orientation"
            onSelect={(value) => handleDropdownSelect("sexualOrientation", value, setFormData)}
            isValid={formData.sexualOrientation?.isValid}
            helperText="Please select your sexual orientation."
          />
        </div>
        <div className="question-row">
          <Dropdown
            question="Do you identify as having a disability?"
            items={disabilityStatusOptions}
            value={formData.disabilityStatus?.value || ""}
            placeholder="Select an option"
            onSelect={(value) => handleDropdownSelect("disabilityStatus", value, setFormData)}
            isValid={formData.disabilityStatus?.isValid}
            helperText="Please indicate your disability status."
          />
          <Dropdown
            question="Veteran Status"
            items={veteranStatusOptions}
            value={formData.veteranStatus?.value || ""}
            placeholder="Select your veteran status"
            onSelect={(value) => handleDropdownSelect("veteranStatus", value, setFormData)}
            isValid={formData.veteranStatus?.isValid}
            helperText="Please indicate your veteran status."
          />
        </div>
        <NavigationButtons currentPath={"/demographic"} isNextEnabled={!!isNextEnabled} />
      </div>
    </div>
  );
};

export default Demographic;
