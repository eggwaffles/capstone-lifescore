"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface NavigationButtonsProps {
  currentPath: string;
  isNextEnabled: boolean; // Add a prop to control the "Next" button state
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ currentPath, isNextEnabled }) => {
  const router = useRouter();

  const menuItems = [
    { id: 1, label: "Personal & Contact", link: "/personal" },
    { id: 2, label: "Demographic & Background", link: "/demographic" },
    { id: 3, label: "Education", link: "/education" },
    { id: 4, label: "Work", link: "/work" },
    { id: 5, label: "Financial", link: "/financial" },
    { id: 6, label: "Health", link: "/health" },
    { id: 7, label: "Social", link: "/social" },
    { id: 8, label: "Community Involvement", link: "/community" },
    { id: 9, label: "Legal and Criminal Record", link: "/legal" },
    { id: 10, label: "Submit", link: "/submit" },
  ];

  const currentIndex = menuItems.findIndex((item) => item.link === currentPath);

  const handleNext = () => {
    if (currentIndex < menuItems.length - 1) {
      router.push(menuItems[currentIndex + 1].link);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      router.push(menuItems[currentIndex - 1].link);
    }
  };

  return (
    <div className="navigation-buttons">
      {currentIndex > 0 && (
        <button onClick={handleBack} className="back-button">
          Back
        </button>
      )}
      {currentIndex < menuItems.length - 1 && (
        <button
          onClick={handleNext}
          className={`next-button ${isNextEnabled ? "active" : ""}`}
        >
          Next Section
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;