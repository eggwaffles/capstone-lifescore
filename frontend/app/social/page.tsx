"use client";

import React, { useEffect } from "react";
import MultiSelect from "../../components/MultiSelect";
import TextInput from "../../components/TextInput";
import MultipleChoice from "../../components/MultipleChoice";
import SideMenu from "../../components/SideMenu";
import NavigationButtons from "../../components/NavigationButtons";

import { useFormData } from "../../context/FormDataContext";
import { usePageCompletion } from "../../context/PageCompletionContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleMultipleChoiceSelect } from "../../utils/handleMultipleChoiceSelect";
import Dropdown from "@/components/Dropdown";

const Social: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const { setPageCompletion } = usePageCompletion(); // Access setPageCompletion from context

  const socialPlatformsOptions = [
    "Instagram", "TikTok", "LinkedIn", "Facebook", "X (Twitter)", "Reddit", "Other",
  ];
  const engagementFrequencyOptions = ["Daily", "Weekly", "Occasionally", "Rarely", "Never"];
  const linkedinConnectionsOptions = ["0–49", "50–199", "200–499", "500+"];
  const yesNoOptions = ["Yes", "No"];

  const isNextEnabled = Boolean(
    formData.relationshipStatus.value &&
    formData.numberOfRelationships.value &&
    formData.attachmentStyle.value &&
    formData.activeSocialMedia.value &&
    formData.totalFollowers.value &&
    formData.engagementFrequency.value &&
    formData.linkedinConnections.value &&
    formData.mentoredSomeone.value &&
    formData.beenMentored.value
  );

  useEffect(() => {
    setPageCompletion("/social", isNextEnabled);
  }, [isNextEnabled]);

  return (
    <div className="quiz-container">
      <SideMenu />
      <div className="question-set">
        <h3>Social Score</h3>
          <div className="question-row">
          <Dropdown
            question="What is your current relationship status?"
            items={["Single", "In a relationship", "Married", "Divorced", "Widowed", "It's complicated"]}
            placeholder="Select your relationship status"
            value={formData.relationshipStatus?.value || ""}
            onSelect={(value) => handleInputChange("relationshipStatus", value, setFormData)}
            isValid={formData.relationshipStatus?.isValid}
            helperText="Please select your current relationship status."
          />
          <TextInput
            question="How many relationships have you been in?"
            value={formData.numberOfRelationships?.value || ""}
            onChange={(value) => handleInputChange("numberOfRelationships", value, setFormData)}
            placeholder="Enter the number of relationships"
            type="number"
            isValid={formData.numberOfRelationships?.isValid}
            helperText="Please enter the total number of relationships you've been in."
          />
          </div>
          <div className="question-row">
          <Dropdown
            question="What is your attachment style?"
            items={["Secure", "Anxious", "Avoidant", "Fearful-avoidant", "Not sure"]}
            placeholder="Select your attachment style"
            value={formData.attachmentStyle?.value || ""}
            onSelect={(value) => handleInputChange("attachmentStyle", value, setFormData)}
            isValid={formData.attachmentStyle?.isValid}
            helperText="Please select your attachment style."
          />
          <TextInput
            question="If you have been in a relationship, what is the longest relationship you have been in? (in months)"
            value={formData.longestRelationship?.value || ""}
            onChange={(value) => handleInputChange("longestRelationship", value, setFormData)}
            placeholder="Enter the duration of your longest relationship"
            type="number"
            isValid={formData.longestRelationship?.isValid}
            helperText="Please enter the duration of your longest relationship."
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <MultipleChoice
            question="Do you actively use social media?"
            items={yesNoOptions}
            value={formData.activeSocialMedia.value}
            onSelect={(value) =>
              handleMultipleChoiceSelect("activeSocialMedia", value, setFormData)
            }
            isValid={formData.activeSocialMedia.isValid}
          />
          <TextInput
            question="Estimated follower count across all platforms"
            value={formData.totalFollowers.value}
            onChange={(value) =>
              handleInputChange("totalFollowers", value, setFormData)
            }
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
          onSelect={(value) =>
            handleMultipleChoiceSelect("engagementFrequency", value, setFormData)
          }
          isValid={formData.engagementFrequency.isValid}
        />
        <MultipleChoice
          question="How many professional connections do you have on LinkedIn?"
          items={linkedinConnectionsOptions}
          value={formData.linkedinConnections.value}
          onSelect={(value) =>
            handleMultipleChoiceSelect("linkedinConnections", value, setFormData)
          }
          isValid={formData.linkedinConnections.isValid}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <MultipleChoice
            question="Have you mentored someone in a formal or informal capacity in the past year?"
            items={yesNoOptions}
            value={formData.mentoredSomeone.value}
            onSelect={(value) =>
              handleMultipleChoiceSelect("mentoredSomeone", value, setFormData)
            }
            isValid={formData.mentoredSomeone.isValid}
          />
          <MultipleChoice
            question="Have you been mentored by someone in the past year?"
            items={yesNoOptions}
            value={formData.beenMentored.value}
            onSelect={(value) =>
              handleMultipleChoiceSelect("beenMentored", value, setFormData)
            }
            isValid={formData.beenMentored.isValid}
          />
        </div>
        <NavigationButtons currentPath={"/social"} isNextEnabled={!!isNextEnabled} />
      </div>
    </div>
  );
};

export default Social;