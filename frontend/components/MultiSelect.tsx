import React, { useState } from "react";

interface MultiSelectProps {
  question: string;
  items: string[];
  selectedValues: string[];
  onChange: (selected: string[]) => void;
  isValid: boolean;
  helperText?: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ question, items, selectedValues, onChange, isValid, helperText }) => {
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
      <label>{question}</label>
      <div className="multi-select">
        {items.map((item, index) => (
          <label key={index} className="multi-select-item">
            <input
              type="checkbox"
              value={item}
              checked={selected.includes(item)}
              onChange={() => handleSelect(item)}
            />
            {item}
          </label>
        ))}
      </div>
      {!isValid && <p className="helper-text">{helperText}</p>}
    </div>
  );
};

export default MultiSelect;