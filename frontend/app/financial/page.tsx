"use client";

import React from "react";
import TextInput from "../../components/TextInput";
import Dropdown from "../../components/Dropdown";
import MultiSelect from "../../components/MultiSelect";
import SideMenu from "../../components/SideMenu";
import { useFormData } from "../../context/FormDataContext";
import { handleInputChange } from "../../utils/handleInputChange";
import { handleDropdownSelect } from "../../utils/handleDropdownSelect";

const Financial: React.FC = () => {
  const { formData, setFormData } = useFormData();

  const yesNoOptions = ["Yes", "No"];
  const emergencyFundOptions = ["Yes", "No", "Partially"];
  const creditUtilizationOptions = [
    "Less than 10%", "10–30%", "30–50%", "50–75%", "Over 75%"
  ];
  const financialAssistanceOptions = [
    "FAFSA", "Unemployment Benefits", "SNAP (Food Stamps)", "Section 8 Housing",
    "Disability or SSI", "Other", "None"
  ];

  return (
    <div className="quiz-container">
        <SideMenu />
        <div className="question-set">
          <h3>Financial Information</h3>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
          <TextInput
            question="Total monthly income after taxes"
            value={formData.monthlyIncome.value}
            onChange={(value) => handleInputChange("monthlyIncome", value, setFormData)}
            placeholder="Enter your monthly income"
            type="number"
            isValid={formData.monthlyIncome.isValid}
            helperText="Please enter your monthly income."
          />
          <TextInput
            question="Average total monthly expenses"
            value={formData.monthlyExpenses.value}
            onChange={(value) => handleInputChange("monthlyExpenses", value, setFormData)}
            placeholder="Enter your monthly expenses"
            type="number"
            isValid={formData.monthlyExpenses.isValid}
            helperText="Please enter your monthly expenses."
          />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>
          <TextInput
            question="Total liquid assets"
            value={formData.liquidAssets.value}
            onChange={(value) => handleInputChange("liquidAssets", value, setFormData)}
            placeholder="Enter your liquid assets"
            type="number"
            isValid={formData.liquidAssets.isValid}
            helperText="Please enter your liquid assets."
          />
          <TextInput
            question="Net worth of long-term investments"
            value={formData.longTermInvestments.value}
            onChange={(value) => handleInputChange("longTermInvestments", value, setFormData)}
            placeholder="Enter your long-term investments"
            type="number"
            isValid={formData.longTermInvestments.isValid}
            helperText="Please enter your long-term investments."
          />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", justifyContent:"end", width: "100%" }}>
          <TextInput
            question="Total outstanding debt"
            value={formData.outstandingDebt.value}
            onChange={(value) => handleInputChange("outstandingDebt", value, setFormData)}
            placeholder="Outstanding Debt"
            type="number"
            isValid={formData.outstandingDebt.isValid}
            helperText="Please enter your outstanding debt."
          />
          <Dropdown
            question="Do you pay your credit cards and bills on time each month?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("onTimePayments", value, setFormData)}
            isValid={formData.onTimePayments.isValid}
            helperText="Please select Yes or No."
          />
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px", alignItems: "center", width: "100%" }}>

          <Dropdown
            question="Credit utilization rate"
            items={creditUtilizationOptions}
            placeholder="Select your credit utilization rate"
            onSelect={(value) => handleDropdownSelect("creditUtilization", value, setFormData)}
            isValid={formData.creditUtilization.isValid}
            helperText="Please select your credit utilization rate."
          />
          <TextInput
            question="Total available credit limit"
            value={formData.creditLimit.value}
            onChange={(value) => handleInputChange("creditLimit", value, setFormData)}
            placeholder="Enter your total credit limit"
            type="number"
            isValid={formData.creditLimit.isValid}
            helperText="Please enter your total credit limit."
          />
          </div>
          <Dropdown
            question="Do you have an emergency fund (3+ months of living expenses)?"
            items={emergencyFundOptions}
            placeholder="Select Yes, No, or Partially"
            onSelect={(value) => handleDropdownSelect("emergencyFund", value, setFormData)}
            isValid={formData.emergencyFund.isValid}
            helperText="Please select Yes, No, or Partially."
          />
          <Dropdown
            question="Have you filed for bankruptcy in the past 10 years?"
            items={yesNoOptions}
            placeholder="Select Yes or No"
            onSelect={(value) => handleDropdownSelect("bankruptcy", value, setFormData)}
            isValid={formData.bankruptcy.isValid}
            helperText="Please select Yes or No."
          />
          <MultiSelect
            question="Are you currently enrolled in or receiving any of the following financial assistance programs?"
            items={financialAssistanceOptions}
            selectedValues={formData.financialAssistance.value.split(",")}
            onChange={(values) => handleInputChange("financialAssistance", values.join(","), setFormData)}
            isValid={formData.financialAssistance.isValid}
            helperText="Please select all that apply."
          />
        </div>
      </div>
  );
};

export default Financial;