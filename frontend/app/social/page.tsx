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
            onSelect={(value) => handleDropdownSelect("engagementFrequency", value, setFormData)}
            isValid={formData.engagementFrequency.isValid}
            helperText="Please select your engagement frequency."
          />
          </div>
          <Dropdown
            question="How many professional connections do you have on LinkedIn?"
            items={linkedinConnectionsOptions}
            placeholder="Select your LinkedIn connections"
            onSelect={(value) => handleDropdownSelect("linkedinConnections", value, setFormData)}
            isValid={formData.linkedinConnections.isValid}
            helperText="Please select your LinkedIn connections."
          />
          <MultiSelect
            question="Are you currently part of any communities or organizations?"
            items={communityOptions}
            selectedValues={formData.communities.value.split(",")}
            onChange={(values) => handleInputChange("communities", values.join(","), setFormData)}
            isValid={formData.communities.isValid}
            helperText="Please select all that apply."
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-end", width: "100%" }}>
          <Dropdown
            question="Have you mentored someone in a formal or informal capacity in the past year?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("mentoredSomeone", value, setFormData)}
            isValid={formData.mentoredSomeone.isValid}
            helperText="Please select Yes or No."
          />
          <Dropdown
            question="Have you been mentored by someone in the past year?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("beenMentored", value, setFormData)}
            isValid={formData.beenMentored.isValid}
            helperText="Please select Yes or No."
          />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-end", width: "100%" }}>
          <Dropdown
            question="Do you regularly participate in volunteering or community service?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
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
            onSelect={(value) => handleDropdownSelect("eventAttendance", value, setFormData)}
            isValid={formData.eventAttendance.isValid}
            helperText="Attendance frequency."
          />
          </div>
          <Dropdown
            question="Do you feel supported by your community or social network?"
            items={communitySupportOptions}
            placeholder="Select your level of agreement"
            onSelect={(value) => handleDropdownSelect("communitySupport", value, setFormData)}
            isValid={formData.communitySupport.isValid}
            helperText="Please select your level of agreement."
          />
        </div>
      </div>
  );
};

export default Social;