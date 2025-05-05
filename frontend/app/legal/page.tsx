"use client";

import React, { useEffect } from "react";
import Dropdown from "../../components/Dropdown";
import MultipleChoice from "../../components/MultipleChoice";
import SideMenu from "../../components/SideMenu";
import NavigationButtons from "../../components/NavigationButtons";

import { useFormData } from "../../context/FormDataContext";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";
import { usePageCompletion } from "../../context/PageCompletionContext";

const Legal: React.FC = () => {
  const { formData, setFormData } = useFormData();
  const { setPageCompletion } = usePageCompletion();

  const yesNoOptions = ["Yes", "No"];
  const driversLicenseOptions = ["Yes", "No", "Not Applicable"];
  const movingViolationsOptions = ["None", "1–2", "3–5", "More than 5"];

  const isNextEnabled = Boolean(
    formData.misdemeanorConviction.value &&
    formData.felonyConviction.value &&
    formData.pendingCharges.value &&
    formData.incarceration.value &&
    formData.rehabilitationProgram.value &&
    formData.lawsuitDefendant.value &&
    formData.bankruptcy.value &&
    formData.eviction.value &&
    formData.validDriversLicense.value &&
    formData.movingViolations.value &&
    formData.duiConviction.value &&
    formData.atFaultAccident.value &&
    formData.paroleViolation.value &&
    formData.legalDisputes.value
  );

  useEffect(() => {
    setPageCompletion("/legal", isNextEnabled);
  }, [isNextEnabled]);

  return (
    <div className="quiz-container">
      <SideMenu />
      <div className="question-set">
        <h3>Legal and Criminal Record</h3>
        <div className="question-wrap">
          <MultipleChoice
            question="Have you ever been convicted of a misdemeanor?"
            items={yesNoOptions}
            value={formData.misdemeanorConviction.value}
            onSelect={(value) =>
              handleDropdownSelect("misdemeanorConviction", value, setFormData)
            }
            isValid={formData.misdemeanorConviction.isValid}
          />
          <MultipleChoice
            question="Have you ever been convicted of a felony?"
            items={yesNoOptions}
            value={formData.felonyConviction.value}
            onSelect={(value) =>
              handleDropdownSelect("felonyConviction", value, setFormData)
            }
            isValid={formData.felonyConviction.isValid}
          />
          <MultipleChoice
            question="Do you have any pending criminal charges?"
            items={yesNoOptions}
            value={formData.pendingCharges.value}
            onSelect={(value) =>
              handleDropdownSelect("pendingCharges", value, setFormData)
            }
            isValid={formData.pendingCharges.isValid}
          />
          <MultipleChoice
            question="Have you ever been incarcerated?"
            items={yesNoOptions}
            value={formData.incarceration.value}
            onSelect={(value) =>
              handleDropdownSelect("incarceration", value, setFormData)
            }
            isValid={formData.incarceration.isValid}
          />
          <MultipleChoice
            question="Have you completed a rehabilitation program?"
            items={yesNoOptions}
            value={formData.rehabilitationProgram.value}
            onSelect={(value) =>
              handleDropdownSelect("rehabilitationProgram", value, setFormData)
            }
            isValid={formData.rehabilitationProgram.isValid}
          />
          <MultipleChoice
            question="Have you ever been involved in a lawsuit as a defendant?"
            items={yesNoOptions}
            value={formData.lawsuitDefendant.value}
            onSelect={(value) =>
              handleDropdownSelect("lawsuitDefendant", value, setFormData)
            }
            isValid={formData.lawsuitDefendant.isValid}
          />
          <MultipleChoice
            question="Have you ever declared bankruptcy?"
            items={yesNoOptions}
            value={formData.bankruptcy.value}
            onSelect={(value) =>
              handleDropdownSelect("bankruptcy", value, setFormData)
            }
            isValid={formData.bankruptcy.isValid}
          />
          <MultipleChoice
            question="Have you ever been evicted due to noncompliance?"
            items={yesNoOptions}
            value={formData.eviction.value}
            onSelect={(value) =>
              handleDropdownSelect("eviction", value, setFormData)
            }
            isValid={formData.eviction.isValid}
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
            question="Do you have a valid driver's license?"
            items={driversLicenseOptions}
            value={formData.validDriversLicense.value}
            placeholder="Select an option"
            onSelect={(value) =>
              handleDropdownSelect("validDriversLicense", value, setFormData)
            }
            isValid={formData.validDriversLicense.isValid}
          />
          <Dropdown
            question="Have you had any moving violations in the past 5 years?"
            items={movingViolationsOptions}
            value={formData.movingViolations.value}
            placeholder="Select an option"
            onSelect={(value) =>
              handleDropdownSelect("movingViolations", value, setFormData)
            }
            isValid={formData.movingViolations.isValid}
          />
        </div>
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <MultipleChoice
            question="Have you ever been convicted of a DUI or DWI?"
            items={yesNoOptions}
            value={formData.duiConviction.value}
            onSelect={(value) =>
              handleDropdownSelect("duiConviction", value, setFormData)
            }
            isValid={formData.duiConviction.isValid}
          />
          <MultipleChoice
            question="Have you ever been involved in an at-fault traffic accident?"
            items={yesNoOptions}
            value={formData.atFaultAccident.value}
            onSelect={(value) =>
              handleDropdownSelect("atFaultAccident", value, setFormData)
            }
            isValid={formData.atFaultAccident.isValid}
          />
          <MultipleChoice
            question="Have you ever violated terms of parole, probation, or court orders?"
            items={yesNoOptions}
            value={formData.paroleViolation.value}
            onSelect={(value) =>
              handleDropdownSelect("paroleViolation", value, setFormData)
            }
            isValid={formData.paroleViolation.isValid}
          />
          <MultipleChoice
            question="Are you currently or have you recently been involved in any legal disputes?"
            items={yesNoOptions}
            value={formData.legalDisputes.value}
            onSelect={(value) =>
              handleDropdownSelect("legalDisputes", value, setFormData)
            }
            isValid={formData.legalDisputes.isValid}
          />
        </div>
        <NavigationButtons currentPath={"/legal"} isNextEnabled={!!isNextEnabled} />
      </div>
    </div>
  );
};

export default Legal;