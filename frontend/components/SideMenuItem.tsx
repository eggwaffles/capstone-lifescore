import React from "react";

interface SideMenuItemProps {
  label: string;
  link: string;
  isSelected: boolean;
  onClick: () => void;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  label,
  link,
  isSelected,
  onClick,
}) => {
  const handleNavigation = () => {
    window.location.href = link;
    onClick();
  };

  return (
    <div
      className={`sidemenu-item ${isSelected ? "selected" : ""}`}
      onClick={handleNavigation}
    >
      <span className="sidemenu-label">{label}</span>
    </div>
  );
};

export default SideMenuItem;