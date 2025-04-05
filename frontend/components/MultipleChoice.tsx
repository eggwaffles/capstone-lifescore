import React, { useState } from "react";
import "./styles.css";

interface MultipleChoiceProps {
  question: string;
  items: string[];
  onSelect?: (selected: string) => void;
  isValid?: boolean; 
  helperText?: string;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  items,
  onSelect,
  isValid = true,
  helperText = "",
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = (item: string) => {
    setSelectedOption(item);
    if (onSelect) onSelect(item);
  };

  return (
    <div className="multiple-choice-container">
      <div className="question">{question}</div>
      <div className="options">
        {items.map((item) => (
          <div
            key={item}
            className={`option-box ${
              selectedOption === item ? "selected" : ""
            }`}
            onClick={() => handleSelect(item)}
          >
            <div className="radio-button"></div>
            {item}
          </div>
        ))}
      </div>
      {!isValid && <div className="helpertext">{helperText}</div>} {/* Show helper text if invalid */}
    </div>
  );
};

export default MultipleChoice;
