import React from 'react';

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="submit-button"
    >
      Submit
    </button>
  );
};

export default SubmitButton;