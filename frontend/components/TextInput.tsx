import React from 'react';

interface TextInputProps {
  question: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: "text" | "number";
  isValid?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  question,
  placeholder = 'Enter text',
  value = '',
  onChange,
  type = "text",
  isValid = true,
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
    </div>
  );
};

export default TextInput;
