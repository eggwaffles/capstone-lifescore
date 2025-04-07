"use client";

import React from "react";
import Link from "next/link";

interface SideMenuItemProps {
  label: string;
  link: string;
  isSelected: boolean;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({ label, link, isSelected }) => {
  return (
    <Link href={link} passHref>
      <div className={`sidemenu-item ${isSelected ? "selected" : ""}`}>
        <span className="sidemenu-label">{label}</span>
      </div>
    </Link>
  );
};

export default SideMenuItem;