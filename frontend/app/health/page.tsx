"use client";

import React from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import MultiSelect from "../../components/MultiSelect";
import MultipleChoice from "../../components/MultipleChoice";
import SideMenu from "../../components/SideMenu";
import NavigationButtons from "../../components/NavigationButtons";

import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";

const Health: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const generalHealthOptions = ["Excellent", "Good", "Fair", "Poor"];
  const yesNoOptions = ["Yes", "No"];
  const alcoholConsumptionOptions = ["Never", "Occasionally", "Weekly", "Daily"];
  const exerciseFrequencyOptions = ["0", "1–2", "3–4", "5+"];
  const checkupOptions = ["Annual physical", "Eye exam", "Dental checkup", "None"];

  const isNextEnabled =
    formData.abnormalBleeding.value &&
    formData.convulsionsEpilepsy.value &&
    formData.heartSurgery.value &&
    formData.pacemaker.value &&
    formData.addAdhd.value &&
    formData.crohnsDisease.value &&
    formData.hemophilia.value &&
    formData.psychiatricCare.value &&
    formData.aids.value &&
    formData.depression.value &&
    formData.hepatitis.value &&
    formData.radiationTreatments.value &&
    formData.anemia.value &&
    formData.diabetes.value &&
    formData.herpes.value &&
    formData.respiratoryDisease.value &&
    formData.anxiety.value &&
    formData.difficultyBreathing.value &&
    formData.highBloodPressure.value &&
    formData.rheumaticScarletFever.value &&
    formData.arthritis.value &&
    formData.emphysema.value &&
    formData.hiv.value &&
    formData.seizures.value &&
    formData.artificialHeartValve.value &&
    formData.epilepsyOrSeizures.value &&
    formData.hivesSkinRash.value &&
    formData.shingles.value &&
    formData.artificialJoint.value &&
    formData.faintingSpellsDizziness.value &&
    formData.kidneyProblems.value &&
    formData.shortnessOfBreath.value &&
    formData.asthma.value &&
    formData.feverBlisters.value &&
    formData.lesionsDefect.value &&
    formData.sickleCell.value &&
    formData.bleedingExtractions.value &&
    formData.glaucoma.value &&
    formData.liverProblems.value &&
    formData.sinusProblems.value &&
    formData.bloodDisease.value &&
    formData.handicapsDisabilities.value &&
    formData.lowBloodPressure.value &&
    formData.stroke.value &&
    formData.drugAlcoholAbuse.value &&
    formData.tobaccoUse.value &&
    formData.birthControl.value &&
    formData.otherMedicalConditions.value &&
    formData.generalHealth.value &&
    formData.smokeOrVape.value &&
    formData.alcoholConsumption.value &&
    formData.exerciseFrequency.value &&
    formData.sleepHours.value &&
    formData.completedCheckups.value &&
    formData.medications.value &&
    formData.mentalHealthSupport.value &&
    formData.wearableDevice.value;

  return (
    <div className="quiz-container">
      <SideMenu />
      <div className="question-set">
        <h3>Health Information</h3>
        <p>Please indicate if you have ever had any of the following diseases or medical conditions. If No, please select No for each.</p>
        <div className="question-wrap">
        <MultipleChoice
          question="Abnormal Bleeding"
          items={yesNoOptions}
          value={formData.abnormalBleeding.value}
          onSelect={(value) => handleDropdownSelect("abnormalBleeding", value, setFormData)}
          isValid={formData.abnormalBleeding.isValid}
        />
        <MultipleChoice
          question="Convulsions/Epilepsy"
          items={yesNoOptions}
          value={formData.convulsionsEpilepsy.value}
          onSelect={(value) => handleDropdownSelect("convulsionsEpilepsy", value, setFormData)}
          isValid={formData.convulsionsEpilepsy.isValid}
        />
        <MultipleChoice
          question="Heart Surgery"
          items={yesNoOptions}
          value={formData.heartSurgery.value}
          onSelect={(value) => handleDropdownSelect("heartSurgery", value, setFormData)}
          isValid={formData.heartSurgery.isValid}
        />
        <MultipleChoice
          question="Pacemaker"
          items={yesNoOptions}
          value={formData.pacemaker.value}
          onSelect={(value) => handleDropdownSelect("pacemaker", value, setFormData)}
          isValid={formData.pacemaker.isValid}
        />
        <MultipleChoice
          question="ADD/ADHD"
          items={yesNoOptions}
          value={formData.addAdhd.value}
          onSelect={(value) => handleDropdownSelect("addAdhd", value, setFormData)}
          isValid={formData.addAdhd.isValid}
        />
        <MultipleChoice
          question="Crohn's Disease"
          items={yesNoOptions}
          value={formData.crohnsDisease.value}
          onSelect={(value) => handleDropdownSelect("crohnsDisease", value, setFormData)}
          isValid={formData.crohnsDisease.isValid}
        />
        <MultipleChoice
          question="Hemophilia"
          items={yesNoOptions}
          value={formData.hemophilia.value}
          onSelect={(value) => handleDropdownSelect("hemophilia", value, setFormData)}
          isValid={formData.hemophilia.isValid}
        />
        <MultipleChoice
          question="Psychiatric Care"
          items={yesNoOptions}
          value={formData.psychiatricCare.value}
          onSelect={(value) => handleDropdownSelect("psychiatricCare", value, setFormData)}
          isValid={formData.psychiatricCare.isValid}
        />
                <MultipleChoice
          question="AIDS"
          items={yesNoOptions}
          value={formData.aids.value}
          onSelect={(value) => handleDropdownSelect("aids", value, setFormData)}
          isValid={formData.aids.isValid}
        />
        <MultipleChoice
          question="Depression"
          items={yesNoOptions}
          value={formData.depression.value}
          onSelect={(value) => handleDropdownSelect("depression", value, setFormData)}
          isValid={formData.depression.isValid}
        />
        <MultipleChoice
          question="Hepatitis"
          items={yesNoOptions}
          value={formData.hepatitis.value}
          onSelect={(value) => handleDropdownSelect("hepatitis", value, setFormData)}
          isValid={formData.hepatitis.isValid}
        />
        <MultipleChoice
          question="Radiation Treatments"
          items={yesNoOptions}
          value={formData.radiationTreatments.value}
          onSelect={(value) => handleDropdownSelect("radiationTreatments", value, setFormData)}
          isValid={formData.radiationTreatments.isValid}
        />
        <MultipleChoice
          question="Anemia"
          items={yesNoOptions}
          value={formData.anemia.value}
          onSelect={(value) => handleDropdownSelect("anemia", value, setFormData)}
          isValid={formData.anemia.isValid}
        />
        <MultipleChoice
          question="Diabetes"
          items={yesNoOptions}
          value={formData.diabetes.value}
          onSelect={(value) => handleDropdownSelect("diabetes", value, setFormData)}
          isValid={formData.diabetes.isValid}
        />
        <MultipleChoice
          question="Herpes"
          items={yesNoOptions}
          value={formData.herpes.value}
          onSelect={(value) => handleDropdownSelect("herpes", value, setFormData)}
          isValid={formData.herpes.isValid}
        />
        <MultipleChoice
          question="Respiratory Disease"
          items={yesNoOptions}
          value={formData.respiratoryDisease.value}
          onSelect={(value) => handleDropdownSelect("respiratoryDisease", value, setFormData)}
          isValid={formData.respiratoryDisease.isValid}
        />
        <MultipleChoice
          question="Anxiety"
          items={yesNoOptions}
          value={formData.anxiety.value}
          onSelect={(value) => handleDropdownSelect("anxiety", value, setFormData)}
          isValid={formData.anxiety.isValid}
        />
        <MultipleChoice
          question="Difficulty Breathing"
          items={yesNoOptions}
          value={formData.difficultyBreathing.value}
          onSelect={(value) => handleDropdownSelect("difficultyBreathing", value, setFormData)}
          isValid={formData.difficultyBreathing.isValid}
        />
        <MultipleChoice
          question="High Blood Pressure"
          items={yesNoOptions}
          value={formData.highBloodPressure.value}
          onSelect={(value) => handleDropdownSelect("highBloodPressure", value, setFormData)}
          isValid={formData.highBloodPressure.isValid}
        />
        <MultipleChoice
          question="Rheumatic/Scarlet Fever"
          items={yesNoOptions}
          value={formData.rheumaticScarletFever.value}
          onSelect={(value) => handleDropdownSelect("rheumaticScarletFever", value, setFormData)}
          isValid={formData.rheumaticScarletFever.isValid}
        />
        <MultipleChoice
          question="Arthritis"
          items={yesNoOptions}
          value={formData.arthritis.value}
          onSelect={(value) => handleDropdownSelect("arthritis", value, setFormData)}
          isValid={formData.arthritis.isValid}
        />
        <MultipleChoice
          question="Emphysema"
          items={yesNoOptions}
          value={formData.emphysema.value}
          onSelect={(value) => handleDropdownSelect("emphysema", value, setFormData)}
          isValid={formData.emphysema.isValid}
        />
        <MultipleChoice
          question="HIV"
          items={yesNoOptions}
          value={formData.hiv.value}
          onSelect={(value) => handleDropdownSelect("hiv", value, setFormData)}
          isValid={formData.hiv.isValid}
        />
        <MultipleChoice
          question="Seizures"
          items={yesNoOptions}
          value={formData.seizures.value}
          onSelect={(value) => handleDropdownSelect("seizures", value, setFormData)}
          isValid={formData.seizures.isValid}
        />
        <MultipleChoice
          question="Artificial Heart Valve"
          items={yesNoOptions}
          value={formData.artificialHeartValve.value}
          onSelect={(value) => handleDropdownSelect("artificialHeartValve", value, setFormData)}
          isValid={formData.artificialHeartValve.isValid}
        />
        <MultipleChoice
          question="Epilepsy or Seizures"
          items={yesNoOptions}
          value={formData.epilepsyOrSeizures.value}
          onSelect={(value) => handleDropdownSelect("epilepsyOrSeizures", value, setFormData)}
          isValid={formData.epilepsyOrSeizures.isValid}
        />
        <MultipleChoice
          question="Hives/Skin Rash"
          items={yesNoOptions}
          value={formData.hivesSkinRash.value}
          onSelect={(value) => handleDropdownSelect("hivesSkinRash", value, setFormData)}
          isValid={formData.hivesSkinRash.isValid}
        />
        <MultipleChoice
          question="Shingles"
          items={yesNoOptions}
          value={formData.shingles.value}
          onSelect={(value) => handleDropdownSelect("shingles", value, setFormData)}
          isValid={formData.shingles.isValid}
        />
        <MultipleChoice
          question="Artificial Joint"
          items={yesNoOptions}
          value={formData.artificialJoint.value}
          onSelect={(value) => handleDropdownSelect("artificialJoint", value, setFormData)}
          isValid={formData.artificialJoint.isValid}
        />
        <MultipleChoice
          question="Fainting Spells/Dizziness"
          items={yesNoOptions}
          value={formData.faintingSpellsDizziness.value}
          onSelect={(value) => handleDropdownSelect("faintingSpellsDizziness", value, setFormData)}
          isValid={formData.faintingSpellsDizziness.isValid}
        />
        <MultipleChoice
          question="Kidney Problems"
          items={yesNoOptions}
          value={formData.kidneyProblems.value}
          onSelect={(value) => handleDropdownSelect("kidneyProblems", value, setFormData)}
          isValid={formData.kidneyProblems.isValid}
        />
        <MultipleChoice
          question="Shortness of Breath"
          items={yesNoOptions}
          value={formData.shortnessOfBreath.value}
          onSelect={(value) => handleDropdownSelect("shortnessOfBreath", value, setFormData)}
          isValid={formData.shortnessOfBreath.isValid}
        />
        <MultipleChoice
          question="Asthma"
          items={yesNoOptions}
          value={formData.asthma.value}
          onSelect={(value) => handleDropdownSelect("asthma", value, setFormData)}
          isValid={formData.asthma.isValid}
        />
        <MultipleChoice
          question="Fever Blisters"
          items={yesNoOptions}
          value={formData.feverBlisters.value}
          onSelect={(value) => handleDropdownSelect("feverBlisters", value, setFormData)}
          isValid={formData.feverBlisters.isValid}
        />
        <MultipleChoice
          question="Lesions/Defect"
          items={yesNoOptions}
          value={formData.lesionsDefect.value}
          onSelect={(value) => handleDropdownSelect("lesionsDefect", value, setFormData)}
          isValid={formData.lesionsDefect.isValid}
        />
        <MultipleChoice
          question="Sickle Cell Trait/Disease"
          items={yesNoOptions}
          value={formData.sickleCell.value}
          onSelect={(value) => handleDropdownSelect("sickleCell", value, setFormData)}
          isValid={formData.sickleCell.isValid}
        />
        <MultipleChoice
          question="Bleeding abnormally, with extractions or surgery"
          items={yesNoOptions}
          value={formData.bleedingExtractions.value}
          onSelect={(value) => handleDropdownSelect("bleedingExtractions", value, setFormData)}
          isValid={formData.bleedingExtractions.isValid}
        />
        <MultipleChoice
          question="Glaucoma"
          items={yesNoOptions}
          value={formData.glaucoma.value}
          onSelect={(value) => handleDropdownSelect("glaucoma", value, setFormData)}
          isValid={formData.glaucoma.isValid}
        />
        <MultipleChoice
          question="Liver Problems"
          items={yesNoOptions}
          value={formData.liverProblems.value}
          onSelect={(value) => handleDropdownSelect("liverProblems", value, setFormData)}
          isValid={formData.liverProblems.isValid}
        />
        <MultipleChoice
          question="Sinus Problems"
          items={yesNoOptions}
          value={formData.sinusProblems.value}
          onSelect={(value) => handleDropdownSelect("sinusProblems", value, setFormData)}
          isValid={formData.sinusProblems.isValid}
        />
        <MultipleChoice
          question="Blood Disease"
          items={yesNoOptions}
          value={formData.bloodDisease.value}
          onSelect={(value) => handleDropdownSelect("bloodDisease", value, setFormData)}
          isValid={formData.bloodDisease.isValid}
        />
        <MultipleChoice
          question="Handicaps/Disabilities"
          items={yesNoOptions}
          value={formData.handicapsDisabilities.value}
          onSelect={(value) => handleDropdownSelect("handicapsDisabilities", value, setFormData)}
          isValid={formData.handicapsDisabilities.isValid}
        />
        <MultipleChoice
          question="Low Blood Pressure"
          items={yesNoOptions}
          value={formData.lowBloodPressure.value}
          onSelect={(value) => handleDropdownSelect("lowBloodPressure", value, setFormData)}
          isValid={formData.lowBloodPressure.isValid}
        />
        <MultipleChoice
          question="Stroke"
          items={yesNoOptions}
          value={formData.stroke.value}
          onSelect={(value) => handleDropdownSelect("stroke", value, setFormData)}
          isValid={formData.stroke.isValid}
        />
        <MultipleChoice
          question="Any current or history of drug or alcohol abuse?"
          items={yesNoOptions}
          value={formData.drugAlcoholAbuse.value}
          onSelect={(value) => handleDropdownSelect("drugAlcoholAbuse", value, setFormData)}
          isValid={formData.drugAlcoholAbuse.isValid}
        />
        <MultipleChoice
          question="Do you smoke or use chewing tobacco?"
          items={yesNoOptions}
          value={formData.tobaccoUse.value}
          onSelect={(value) => handleDropdownSelect("tobaccoUse", value, setFormData)}
          isValid={formData.tobaccoUse.isValid}
        />
        <MultipleChoice
          question="Do you take any form of birth control?"
          items={yesNoOptions}
          value={formData.birthControl.value}
          onSelect={(value) => handleDropdownSelect("birthControl", value, setFormData)}
          isValid={formData.birthControl.isValid}
        />
          <Dropdown
            question="How often do you exercise per week?"
            items={exerciseFrequencyOptions}
            value={formData.exerciseFrequency.value}
            placeholder="Select your exercise frequency"
            onSelect={(value) => handleDropdownSelect("exerciseFrequency", value, setFormData)}
            isValid={formData.exerciseFrequency.isValid}
            helperText="Please select your exercise frequency."
          />
          <Dropdown
            question="Do you sleep at least 7 hours per night on average?"
            items={yesNoOptions}
            value={formData.sleepHours.value}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("sleepHours", value, setFormData)}
            isValid={formData.sleepHours.isValid}
            helperText="Please select Yes or No."
          />
        </div>
        <TextInput
          question="Please list any other existing or past medical conditions or diagnoses."
          value={formData.otherMedicalConditions.value}
          onChange={(value) => handleInputChange("otherMedicalConditions", value, setFormData)}
          placeholder="Enter any other medical conditions"
          isValid={formData.otherMedicalConditions.isValid}
          helperText="Please enter any other medical conditions."
        />
        <Dropdown
          question="How would you rate your general health?"
          items={generalHealthOptions}
          value={formData.generalHealth.value}
          placeholder="Select your general health"
          onSelect={(value) => handleDropdownSelect("generalHealth", value, setFormData)}
          isValid={formData.generalHealth.isValid}
          helperText="Please select your general health."
        />
        <MultiSelect
          question="Which of the following checkups have you completed in the past year?"
          items={checkupOptions}
          selectedValues={formData.completedCheckups.value.split(",")}
          onChange={(values) => handleInputChange("completedCheckups", values.join(","), setFormData)}
          isValid={formData.completedCheckups.isValid}
          helperText="Please select all that apply."
        />
        <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
          <TextInput
            question="What medications do you currently take for physical or mental health?"
            value={formData.medications.value}
            isValid={formData.medications.isValid}
            helperText="Please select Yes or No."
          />

          <Dropdown
            question="Have you been in therapy or sought mental health support in the past year?"
            items={yesNoOptions}
            value={formData.mentalHealthSupport.value}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("mentalHealthSupport", value, setFormData)}
            isValid={formData.mentalHealthSupport.isValid}
            helperText="Please select Yes or No."
          />
        </div>
        <Dropdown
          question="Do you use a wearable device to track your health (Fitbit, Apple Watch, etc.)?"
          items={yesNoOptions}
          value={formData.wearableDevice.value}
          placeholder="Select Yes or No"
          onSelect={(value) => handleDropdownSelect("wearableDevice", value, setFormData)}
          isValid={formData.wearableDevice.isValid}
          helperText="Please select Yes or No."
        />
        <NavigationButtons currentPath={"/health"} isNextEnabled={!!isNextEnabled} />
      </div>
    </div>
  );
};

export default Health;