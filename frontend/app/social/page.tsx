"use client";

import React from "react";
import MultiSelect from "../../components/MultiSelect";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import SideMenu from "../../components/SideMenu";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";

const Social: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const socialPlatformsOptions = [
    "Instagram", "TikTok", "LinkedIn", "Facebook", "X (Twitter)", "Reddit", "Other"
  ];
  const engagementFrequencyOptions = ["Daily", "Weekly", "Occasionally", "Rarely", "Never"];
  const linkedinConnectionsOptions = ["0–49", "50–199", "200–499", "500+"];
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

  return (
    <div className="quiz-container">
        <SideMenu />
        <div className="question-set">
          <h3>Social Score</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-end", width: "100%" }}>
          <Dropdown
            question="Do you actively use social media?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            value={formData.activeSocialMedia.value}
            onSelect={(value) => handleDropdownSelect("activeSocialMedia", value, setFormData)}
            isValid={formData.activeSocialMedia.isValid}
            helperText="Please select Yes or No."
          />
          <TextInput
            question="Estimated follower count across all platforms"
            value={formData.totalFollowers.value}
            onChange={(value) => handleInputChange("totalFollowers", value, setFormData)}
            placeholder="Enter your total followers"
            type="number"
            isValid={formData.totalFollowers.isValid}
            helperText="Please enter your total followers."
          />
          <Dropdown
            question="How often do you engage with your social media community (posts, replies, messages)?"
            items={engagementFrequencyOptions}
            placeholder="Engagement frequency"
            value={formData.engagementFrequency.value}
            onSelect={(value) => handleDropdownSelect("engagementFrequency", value, setFormData)}
            isValid={formData.engagementFrequency.isValid}
            helperText="Please select your engagement frequency."
          />
          </div>
          <Dropdown
            question="How many professional connections do you have on LinkedIn?"
            items={linkedinConnectionsOptions}
            placeholder="Select your LinkedIn connections"
            value={formData.linkedinConnections.value}
            onSelect={(value) => handleDropdownSelect("linkedinConnections", value, setFormData)}
            isValid={formData.linkedinConnections.isValid}
            helperText="Please select your LinkedIn connections."
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-end", width: "100%" }}>
          <Dropdown
            question="Have you mentored someone in a formal or informal capacity in the past year?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            value={formData.mentoredSomeone.value}
            onSelect={(value) => handleDropdownSelect("mentoredSomeone", value, setFormData)}
            isValid={formData.mentoredSomeone.isValid}
            helperText="Please select Yes or No."
          />
          <Dropdown
            question="Have you been mentored by someone in the past year?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            value={formData.beenMentored.value}
            onSelect={(value) => handleDropdownSelect("beenMentored", value, setFormData)}
            isValid={formData.beenMentored.isValid}
            helperText="Please select Yes or No."
          />
          </div>
        </div>
      </div>
  );
};

export default Social;