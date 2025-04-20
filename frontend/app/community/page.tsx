"use client";

import React from "react";
import MultiSelect from "../../components/MultiSelect";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import SideMenu from "../../components/SideMenu";
import NavigationButtons from "../../components/NavigationButtons";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";

const Community: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const communityOptions = [
    "Professional organizations (e.g., IEEE, AMA, AIGA)",
    "Religious or spiritual groups",
    "Local clubs (book club, running group, etc.)",
    "Alumni networks",
    "Online communities",
    "Other",
    "None"
  ];
  const eventAttendanceOptions = ["Frequently", "Occasionally", "Rarely", "Never"];
  const communitySupportOptions = ["Strongly disagree", "Disagree", "Neutral", "Agree", "Strongly agree"];
  const yesNoOptions = ["Yes", "No"];

  const isNextEnabled =
    formData.volunteering.value &&
    formData.monthlyVolunteerHours.value &&
    formData.eventAttendance.value &&
    formData.communities.value &&
    formData.communitySupport.value;

  return (
    <div className="quiz-container">
        <SideMenu />
        <div className="question-set">
          <h3>Community Involvement</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-end", width: "100%" }}>
          <Dropdown
            question="Do you regularly participate in volunteering or community service?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            value={formData.volunteering.value}
            onSelect={(value) => handleDropdownSelect("volunteering", value, setFormData)}
            isValid={formData.volunteering.isValid}
            helperText="Please select Yes or No."
          />
          <TextInput
            question="Average hours per month spent volunteering"
            value={formData.monthlyVolunteerHours.value}
            onChange={(value) => handleInputChange("monthlyVolunteerHours", value, setFormData)}
            placeholder="Enter your average monthly volunteer hours"
            type="number"
            isValid={formData.monthlyVolunteerHours.isValid}
            helperText="Please enter your average monthly volunteer hours."
          />
          <Dropdown
            question="Do you attend local or public events (town halls, cultural events, meetups, etc.)?"
            items={eventAttendanceOptions}
            placeholder="Select your event attendance frequency"
            value={formData.eventAttendance.value}
            onSelect={(value) => handleDropdownSelect("eventAttendance", value, setFormData)}
            isValid={formData.eventAttendance.isValid}
            helperText="Attendance frequency."
          />
          </div>
          <MultiSelect
            question="Are you currently part of any communities or organizations?"
            items={communityOptions}
            selectedValues={formData.communities.value.split(",")}
            onChange={(values) => handleInputChange("communities", values.join(","), setFormData)}
            isValid={formData.communities.isValid}
            helperText="Please select all that apply."
          />
          <Dropdown
            question="Do you feel supported by your community or social network?"
            items={communitySupportOptions}
            placeholder="Select your level of agreement"
            value={formData.communitySupport.value}
            onSelect={(value) => handleDropdownSelect("communitySupport", value, setFormData)}
            isValid={formData.communitySupport.isValid}
            helperText="Please select your level of agreement."
          />
          <NavigationButtons currentPath={"/community"} isNextEnabled={!!isNextEnabled} />
        </div>
      </div>
  );
};

export default Community;