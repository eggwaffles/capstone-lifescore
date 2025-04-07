"use client";

import React from "react";
import TextInput from "../../components/TextInput";
import SubmitButton from "../../components/SubmitButton";
import Dropdown from "../../components/Dropdown";
import DateInput from "../../components/DateInput";
import SideMenu from "../../components/SideMenu";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";
import { handleSubmit } from "../../utils/handleSubmit";

const Personal: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  return (
    <div className="quiz-container">
      <div style={{ display: "flex", width: "100%", flexDirection: "row", alignItems: "flex-start", gap: "20px" }}>
        <SideMenu />
        <div className="question-set">
          <h3>Personal and Contact Information</h3>
            <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
            <TextInput
              question="Full Name"
              value={formData.fullName.value}
              onChange={(value) => handleInputChange("fullName", value, setFormData)}
              placeholder="Enter your full name"
              type="text"
              isValid={formData.fullName.isValid}
              helperText="Please enter your full name."
            />
            <DateInput
              question="Birthday (MM/DD/YYYY)"
              value={formData.birthday.value}
              onChange={(value) => handleInputChange("birthday", value, setFormData)}
              isValid={formData.birthday.isValid}
              helperText="Please enter a valid date."
            />
            </div>
          <TextInput
            question="Permanent Street Address"
            value={formData.streetAddress.value}
            onChange={(value) => handleInputChange("streetAddress", value, setFormData)}
            placeholder="Enter your street address"
            type="text"
            isValid={formData.streetAddress.isValid}
            helperText="Please enter your street address."
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%"}}>
          <TextInput
            question="City"
            value={formData.city.value}
            onChange={(value) => handleInputChange("city", value, setFormData)}
            placeholder="Enter your city"
            type="text"
            isValid={formData.city.isValid}
            helperText="Please enter your city."
          />
          <Dropdown
            question="State"
            items={usStates}
            placeholder="Select your state"
            onSelect={(selected) => handleDropdownSelect(selected, setFormData)}
            isValid={formData.state.isValid}
            helperText="Please select your state."
          />
          <TextInput
            question="ZIP Code"
            value={formData.zipCode.value}
            onChange={(value) => handleInputChange("zipCode", value, setFormData)}
            placeholder="Enter your ZIP code"
            type="number"
            isValid={formData.zipCode.isValid}
            helperText="Please enter a valid ZIP code."
          />
          </div>
          <TextInput
            question="Phone Number"
            value={formData.phoneNumber.value}
            onChange={(value) => handleInputChange("phoneNumber", value, setFormData)}
            placeholder="Enter your phone number (###-###-####)"
            type="text"
            isValid={formData.phoneNumber.isValid}
            helperText="Please enter a valid phone number."
          />
          <TextInput
            question="Email"
            value={formData.email.value}
            onChange={(value) => handleInputChange("email", value, setFormData)}
            placeholder="Enter your email"
            type="email"
            isValid={formData.email.isValid}
            helperText="Please enter a valid email address."
          />
          <TextInput
            question="Social Security Number / National ID"
            value={formData.ssn.value}
            onChange={(value) => handleInputChange("ssn", value, setFormData)}
            placeholder="Enter your SSN or National ID"
            type="number"
            isValid={formData.ssn.isValid}
            helperText="Please enter a valid SSN or National ID."
          />
        </div>
      </div>
      <SubmitButton onClick={() => handleSubmit(formData)} />
    </div>
  );
};

export default Personal;