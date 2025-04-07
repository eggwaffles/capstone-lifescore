"use client";

import React, { useState } from "react";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
import Dropdown from "../components/Dropdown";
import MultipleChoice from "../components/MultipleChoice";
import SideMenu from "../components/SideMenu";
import { validateFormData, isFormValid } from "../utils/validation";

const Behavioral: React.FC = () => {
  return (
    <div className="question-set">
      <h1>Legal and Criminal Record</h1>
      {/* Add family-related questions here */}
    </div>
  );
};

export default Behavioral;