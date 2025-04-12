"use client";

import React, { useState } from "react";

interface DropdownProps {
  question: string;
  items: string[];
  value: string;
  placeholder?: string;
  onSelect?: (selectedItem: string) => void;
  isValid?: boolean;
  helperText?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  question,
  items,
  value,
  placeholder = "Select an option",
  onSelect,
  isValid = true,
  helperText = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (item: string) => {
    if (onSelect) onSelect(item);
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown-container ${
        !isValid
          ? "invalid"
          : isOpen
          ? "focused"
          : value
          ? "filled"
          : "default"
      }`}
    >
      <label className="question">{question}</label>
      <div className="dropdown">
        <button
          className={`dropdown-toggle ${
            !isValid
              ? "invalid"
              : isOpen
              ? "focused"
              : value
              ? "filled"
              : "default"
          }`}
          onClick={handleToggle}
        >
          {value || placeholder}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#5E6366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <ul className="dropdown-menu">
            {items.map((item, index) => (
              <li
                className="dropdown-item"
                key={index}
                onClick={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      {!isValid && <div className="helpertext">{helperText}</div>}
    </div>
  );
};

export default Dropdown;
