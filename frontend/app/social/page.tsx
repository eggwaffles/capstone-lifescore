"use client";

import React from "react";
import MultiSelect from "../../components/MultiSelect";
import TextInput from "../../components/TextInput";
import MultipleChoice from "../../components/MultipleChoice";
import SideMenu from "../../components/SideMenu";
import NavigationButtons from "../../components/NavigationButtons";

import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleMultipleChoiceSelect } from "../../utils/handleMultipleChoiceSelect";

const Social: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const socialPlatformsOptions = [
    "Instagram", "TikTok", "LinkedIn", "Facebook", "X (Twitter)", "Reddit", "Other"
  ];
  const engagementFrequencyOptions = ["Daily", "Weekly", "Occasionally", "Rarely", "Never"];
  const linkedinConnectionsOptions = ["0–49", "50–199", "200–499", "500+"];
  const yesNoOptions = ["Yes", "No"];

  const isNextEnabled =
    formData.activeSocialMedia.value &&
    formData.totalFollowers.value &&
    formData.engagementFrequency.value &&
    formData.linkedinConnections.value &&
    formData.mentoredSomeone.value &&
    formData.beenMentored.value;

  return (
    <div className="quiz-container">
        <SideMenu />
        <div className="question-set">
          <h3>Social Score</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-end", width: "100%" }}>
          <MultipleChoice
            question="Do you actively use social media?"
            items={yesNoOptions}
            value={formData.activeSocialMedia.value}
            onSelect={(value) => handleMultipleChoiceSelect("activeSocialMedia", value, setFormData)}
            isValid={formData.activeSocialMedia.isValid}
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
          </div>
          <MultipleChoice
            question="How often do you engage with your social media community (posts, replies, messages)?"
            items={engagementFrequencyOptions}
            value={formData.engagementFrequency.value}
            onSelect={(value) => handleMultipleChoiceSelect("engagementFrequency", value, setFormData)}
            isValid={formData.engagementFrequency.isValid}
          />
          <MultipleChoice
            question="How many professional connections do you have on LinkedIn?"
            items={linkedinConnectionsOptions}
            value={formData.linkedinConnections.value}
            onSelect={(value) => handleMultipleChoiceSelect("linkedinConnections", value, setFormData)}
            isValid={formData.linkedinConnections.isValid}
          />
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "flex-end", width: "100%" }}>
          <MultipleChoice
            question="Have you mentored someone in a formal or informal capacity in the past year?"
            items={yesNoOptions}
            value={formData.mentoredSomeone.value}
            onSelect={(value) => handleMultipleChoiceSelect("mentoredSomeone", value, setFormData)}
            isValid={formData.mentoredSomeone.isValid}
          />
          <MultipleChoice
            question="Have you been mentored by someone in the past year?"
            items={yesNoOptions}
            value={formData.beenMentored.value}
            onSelect={(value) => handleMultipleChoiceSelect("beenMentored", value, setFormData)}
            isValid={formData.beenMentored.isValid}
          />
          </div>
          <NavigationButtons currentPath={"/social"} isNextEnabled={!!isNextEnabled} />
        </div>
      </div>
  );
};

export default Social;