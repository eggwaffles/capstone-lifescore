import React, { useState } from "react";
import "./styles.css";

interface DropdownProps {
  score: number;
  section: string;
  explanation: string;
  improvement: string;
}

const DropdownInfo: React.FC<DropdownProps> = ({
  score,
  section,
  explanation,
  improvement,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const getScoreColor = () => {
    if (score <= 150) return "#E00303";
    if (score > 150 && score < 170) return "#F2C01A";
    return "var(--variable-collection-primary)";
  };

  return (
    <div className="dropdown-info-container">
      <div className="dropdown-info-header" onClick={toggleDropdown}>
        <div className="sub-score-header">
          <h4 style={{ color: getScoreColor() }}>{score}</h4>
          <p>{section}</p>
        </div>
        <button className="dropdown-info-toggle">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
            >
              <path
                d="M9.47884 10.0001L0.655273 1.17656L1.83183 0L9.47884 7.647L17.1258 0L18.3024 1.17656L9.47884 10.0001Z"
                fill="#5E6366"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="10"
              viewBox="0 0 19 10"
              fill="none"
            >
              <path
                d="M9.78743 -0.000118595L0.963867 8.82344L2.14043 10L9.78743 2.353L17.4344 10L18.611 8.82344L9.78743 -0.000118595Z"
                fill="#5E6366"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-info-content">
          <p>{explanation}</p>
          {improvement !== "None" && (
            <p style={{ fontWeight: "500" }}>{improvement}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownInfo;