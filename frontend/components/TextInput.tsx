import React from 'react';

interface TextInputProps {
  question: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: "text" | "number";
  isValid?: boolean;
  helperText?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  question,
  placeholder = 'Enter text',
  value = '',
  onChange,
  type = "text",
  isValid = true,
  helperText = '',
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="textinputcontainer">
      <label className="question">{question}</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`textinputfield ${!isValid ? "invalid" : ""}`}
      />
      {!isValid && <div className="helpertext">{helperText}</div>}
    </div>
  );
};

export default TextInput;
