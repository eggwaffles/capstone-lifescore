import React from "react";

interface DateInputProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  isValid: boolean;
  helperText?: string;
}

const DateInput: React.FC<DateInputProps> = ({ question, value, onChange, isValid, helperText }) => {
  return (
    <div className="textinputcontainer">
      <label className="question">{question}</label>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`input ${isValid ? "" : "invalid"}`}
      />
      {!isValid && <p className="helper-text">{helperText}</p>}
    </div>
  );
};

export default DateInput;