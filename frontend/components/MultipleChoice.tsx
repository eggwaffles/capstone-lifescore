import React, { useState, useEffect } from "react";
import "./styles.css";

interface MultipleChoiceProps {
  question: string;
  items: string[];
  value?: string;
  onSelect?: (selected: string) => void;
  isValid?: boolean; 
  helperText?: string;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({
  question,
  items,
  value = "",
  onSelect,
  isValid = true,
  helperText = "",
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

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
      {!isValid && <div className="helpertext">{helperText}</div>}
    </div>
  );
};

export default MultipleChoice;
