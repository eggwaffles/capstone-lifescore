"use client";

import React, { useEffect } from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import SubmitButton from "../../components/SubmitButton";
import SideMenu from "../../components/SideMenu";
import NavigationButtons from "../../components/NavigationButtons";

import { useFormData } from "../../context/FormDataContext";
import { usePageCompletion } from "../../context/PageCompletionContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";
import { handleSubmit } from "../../utils/handleSubmit";

const Work: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const { setPageCompletion } = usePageCompletion();

  const employmentStatusOptions = [
    "Full-time",
    "Part-time",
    "Freelancer",
    "Student",
    "Unemployed",
    "Retired",
  ];
  const yesNoOptions = ["Yes", "No"];

  const isNextEnabled = Boolean(
    formData.industry.value &&
    formData.employmentStatus.value &&
    formData.jobTitle.value &&
    formData.company.value &&
    formData.yearsInRole.value &&
    formData.promotionReceived.value &&
    formData.employmentGaps.value &&
    formData.referenceEmail.value
  );

  useEffect(() => {
    setPageCompletion("/work", isNextEnabled); // Update completion status for the work page
  }, [isNextEnabled]);

  return (
    <div className="quiz-container">
      <SideMenu />
      <div className="question-set">
        <h3>Work</h3>
        <TextInput
          question="Industry"
          value={formData.industry.value}
          onChange={(value) =>
            handleInputChange("industry", value, setFormData)
          }
          placeholder="Enter your industry"
          isValid={formData.industry.isValid}
          helperText="Please enter your industry."
        />
        <Dropdown
          question="Employment Status"
          items={employmentStatusOptions}
          placeholder="Select your employment status"
          value={formData.employmentStatus.value}
          onSelect={(value) =>
            handleDropdownSelect("employmentStatus", value, setFormData)
          }
          isValid={formData.employmentStatus.isValid}
          helperText="Please select your employment status."
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <TextInput
            question="Current or Most Recent Job Title"
            value={formData.jobTitle.value}
            onChange={(value) =>
              handleInputChange("jobTitle", value, setFormData)
            }
            placeholder="Enter your job title"
            isValid={formData.jobTitle.isValid}
            helperText="Please enter your job title."
          />
          <TextInput
            question="Company"
            value={formData.company.value}
            onChange={(value) =>
              handleInputChange("company", value, setFormData)
            }
            placeholder="Enter your company"
            isValid={formData.company.isValid}
            helperText="Please enter your company."
          />
          <TextInput
            question="Years in Current/Most Recent Role"
            value={formData.yearsInRole.value}
            onChange={(value) =>
              handleInputChange("yearsInRole", value, setFormData)
            }
            placeholder="Enter the number of years"
            type="number"
            isValid={formData.yearsInRole.isValid}
            helperText="Please enter the number of years."
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Dropdown
            question="Have you received a promotion or title change within your current company?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            value={formData.promotionReceived.value}
            onSelect={(value) =>
              handleDropdownSelect("promotionReceived", value, setFormData)
            }
            isValid={formData.promotionReceived.isValid}
            helperText="Please select Yes or No."
          />
          <Dropdown
            question="Have you had any employment gaps exceeding 9 months in the last 5 years?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            value={formData.employmentGaps.value}
            onSelect={(value) =>
              handleDropdownSelect("employmentGaps", value, setFormData)
            }
            isValid={formData.employmentGaps.isValid}
            helperText="Please select Yes or No."
          />
        </div>
        <TextInput
          question="Reference Email (Manager or Colleague)"
          value={formData.referenceEmail.value}
          onChange={(value) =>
            handleInputChange("referenceEmail", value, setFormData)
          }
          placeholder="Enter a reference email"
          type="email"
          isValid={formData.referenceEmail.isValid}
          helperText="Please enter a valid email address."
        />

        <NavigationButtons
          currentPath={"/work"}
          isNextEnabled={!!isNextEnabled}
        />
      </div>
    </div>
  );
};

export default Work;
