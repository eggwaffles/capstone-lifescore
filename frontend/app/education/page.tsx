"use client";

import React, { useEffect } from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import MultipleChoice from "../../components/MultipleChoice";
import SideMenu from "../../components/SideMenu";
import NavigationButtons from "../../components/NavigationButtons";

import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";
import { usePageCompletion } from "../../context/PageCompletionContext";

const Education: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const { setPageCompletion } = usePageCompletion();

  const educationOptions = [
    "No formal education",
    "Some high school",
    "High school diploma / GED",
    "Some college (no degree)",
    "Associate degree",
    "Bachelor's degree",
    "Master's degree",
    "Doctorate or professional degree",
    "Vocational/technical certification",
  ];

  const programTypeOptions = [
    "High school",
    "Community college",
    "Undergraduate",
    "Graduate school",
    "Vocational/trade school",
    "Online certificate or bootcamp",
    "Not enrolled",
  ];

  const yesNoOptions = ["Yes", "No"];

  const learningAttitudeOptions = [
    "I avoid it unless required",
    "I learn only what I need for work",
    "I'm open to learning when it's interesting",
    "I actively seek new skills",
    "I am always learning, even outside work/school",
  ];

  const languageFluencyOptions = ["1", "2", "3", "4+"];

  // Check if all required fields are filled and valid
  const isNextEnabled = Boolean(
    formData.highestEducation.value &&
    formData.currentEnrollment.value &&
    formData.programType.value &&
    formData.recentSchool.value &&
    formData.fieldOfStudy.value &&
    formData.graduatedOnTime.value &&
    formData.honorsReceived.value &&
    formData.extraCertifications.value &&
    formData.languagesSpoken.value &&
    formData.educationGap.value &&
    formData.firstGen.value &&
    formData.academicProbation.value &&
    formData.learningAttitude.value
  );

  useEffect(() => {
    setPageCompletion("/education", isNextEnabled);
  }, [isNextEnabled]);

  return (
    <div className="quiz-container">
      <SideMenu />
      <div className="question-set">
        <h3>Education</h3>
        <div className="question-row">
          <MultipleChoice
            question="Are you currently enrolled in an educational program?"
            items={yesNoOptions}
            value={formData.currentEnrollment.value}
            onSelect={(value) =>
              handleDropdownSelect("currentEnrollment", value, setFormData)
            }
            isValid={formData.currentEnrollment.isValid}
          />
          <Dropdown
            question="Highest Level of Education Completed"
            items={educationOptions}
            placeholder="Select"
            value={formData.highestEducation.value}
            onSelect={(value) =>
              handleDropdownSelect("highestEducation", value, setFormData)
            }
            isValid={formData.highestEducation.isValid}
            helperText="Please select your highest education level."
          />
        </div>
        <div className="question-row">
          <Dropdown
            question="What is your current or most recent educational program?"
            items={programTypeOptions}
            placeholder="Select a program type"
            value={formData.programType.value}
            onSelect={(value) =>
              handleDropdownSelect("programType", value, setFormData)
            }
            isValid={formData.programType.isValid}
          />

          <TextInput
            question="Most Recent School or Institution Attended"
            value={formData.recentSchool.value}
            onChange={(value) =>
              handleInputChange("recentSchool", value, setFormData)
            }
            placeholder="Enter school name"
            isValid={formData.recentSchool.isValid}
            helperText="Please enter the name of your most recent school."
          />
        </div>
        <TextInput
          question="Field of Study (if applicable)"
          value={formData.fieldOfStudy.value}
          onChange={(value) =>
            handleInputChange("fieldOfStudy", value, setFormData)
          }
          placeholder="e.g. Computer Science, Nursing, Literature"
          isValid={formData.fieldOfStudy.isValid}
        />
        <div className="question-wrap">
          <MultipleChoice
            question="Did you graduate early/on time?"
            items={yesNoOptions}
            value={formData.graduatedOnTime.value}
            onSelect={(value) =>
              handleDropdownSelect("graduatedOnTime", value, setFormData)
            }
            isValid={formData.graduatedOnTime.isValid}
          />

          <MultipleChoice
            question="Have you received any academic honors or scholarships?"
            items={yesNoOptions}
            value={formData.honorsReceived.value}
            onSelect={(value) =>
              handleDropdownSelect("honorsReceived", value, setFormData)
            }
            isValid={formData.honorsReceived.isValid}
          />

          <MultipleChoice
            question="Have you completed any certifications or continuing education outside of school?"
            items={yesNoOptions}
            value={formData.extraCertifications.value}
            onSelect={(value) =>
              handleDropdownSelect("extraCertifications", value, setFormData)
            }
            isValid={formData.extraCertifications.isValid}
          />

          <Dropdown
            question="How many languages do you speak fluently?"
            items={languageFluencyOptions}
            placeholder="Select a number"
            value={formData.languagesSpoken.value}
            onSelect={(value) =>
              handleDropdownSelect("languagesSpoken", value, setFormData)
            }
            isValid={formData.languagesSpoken.isValid}
          />

          <MultipleChoice
            question="Have you had a gap of more than 1 year in your educational journey?"
            items={yesNoOptions}
            value={formData.educationGap.value}
            onSelect={(value) =>
              handleDropdownSelect("educationGap", value, setFormData)
            }
            isValid={formData.educationGap.isValid}
          />

          <MultipleChoice
            question="Are you a first-generation college student?"
            items={yesNoOptions}
            value={formData.firstGen.value}
            onSelect={(value) =>
              handleDropdownSelect("firstGen", value, setFormData)
            }
            isValid={formData.firstGen.isValid}
          />

          <MultipleChoice
            question="Have you ever been placed on academic probation or dismissed from a program?"
            items={yesNoOptions}
            value={formData.academicProbation.value}
            onSelect={(value) =>
              handleDropdownSelect("academicProbation", value, setFormData)
            }
            isValid={formData.academicProbation.isValid}
          />
        </div>
        <Dropdown
          question="How would you describe your current attitude toward learning?"
          items={learningAttitudeOptions}
          placeholder="Select an option"
          value={formData.learningAttitude.value}
          onSelect={(value) =>
            handleDropdownSelect("learningAttitude", value, setFormData)
          }
          isValid={formData.learningAttitude.isValid}
        />
        <p>Please list your standardized testing scores below. If you have not taken the test, please leave the field blank.</p>
<div className="question-wrap">
            
            <TextInput
              question="SAT Score"
              value={formData.satScore?.value || ""}
              onChange={(value) => handleInputChange("satScore", value, setFormData)}
              placeholder="Enter your SAT score"
              type="number"
              isValid={formData.satScore?.isValid}
              helperText="Please enter a valid SAT score (if applicable)."
            />
            <TextInput
              question="ACT Score"
              value={formData.actScore?.value || ""}
              onChange={(value) => handleInputChange("actScore", value, setFormData)}
              placeholder="Enter your ACT score"
              type="number"
              isValid={formData.actScore?.isValid}
              helperText="Please enter a valid ACT score (if applicable)."
            />
            <TextInput
              question="LSAT Score"
              value={formData.lsatScore?.value || ""}
              onChange={(value) => handleInputChange("lsatScore", value, setFormData)}
              placeholder="Enter your LSAT score"
              type="number"
              isValid={formData.lsatScore?.isValid}
              helperText="Please enter a valid LSAT score (if applicable)."
            />
            <TextInput
              question="GRE Score"
              value={formData.greScore?.value || ""}
              onChange={(value) => handleInputChange("greScore", value, setFormData)}
              placeholder="Enter your GRE score"
              type="number"
              isValid={formData.greScore?.isValid}
              helperText="Please enter a valid GRE score (if applicable)."
            />
            <TextInput
              question="GMAT Score"
              value={formData.gmatScore?.value || ""}
              onChange={(value) => handleInputChange("gmatScore", value, setFormData)}
              placeholder="Enter your GMAT score"
              type="number"
              isValid={formData.gmatScore?.isValid}
              helperText="Please enter a valid GMAT score (if applicable)."
            />
            <TextInput
              question="MCAT Score"
              value={formData.mcatScore?.value || ""}
              onChange={(value) => handleInputChange("mcatScore", value, setFormData)}
              placeholder="Enter your MCAT score"
              type="number"
              isValid={formData.mcatScore?.isValid}
              helperText="Please enter a valid MCAT score (if applicable)."
            />
          </div>
        <NavigationButtons
          currentPath={"/education"}
          isNextEnabled={!!isNextEnabled}
        />
      </div>
    </div>
  );
};

export default Education;
