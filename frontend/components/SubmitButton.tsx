import React from "react";

interface SubmitButtonProps {
  label: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="submit-button">
      {label}
    </button>
  );
};

export default SubmitButton;