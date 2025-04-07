import React, { useState } from "react";

interface MultiSelectProps {
  question: string;
  items: string[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
  isValid: boolean;
  helperText?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  question,
  items,
  selectedValues,
  onChange,
  isValid,
  helperText,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedValues);

  const handleSelect = (value: string) => {
    const updatedSelected = selected.includes(value)
      ? selected.filter((item) => item !== value)
      : [...selected, value];
    setSelected(updatedSelected);
    onChange(updatedSelected);
  };

  return (
    <div className="multi-select-container">
      <div className="question">{question}</div>
      <div className="multi-select">
        {items.map((item) => (
          <div
            key={item}
            className={`option-box ${
              selected.includes(item) ? "selected" : ""
            }`}
            onClick={() => handleSelect(item)}
          >
            <div className="checkbox"></div>
            {item}
          </div>
        ))}
      </div>
      {!isValid && <div className="helpertext">{helperText}</div>}
    </div>
  );
};

export default MultiSelect;