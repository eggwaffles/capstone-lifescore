import React from "react";
import Link from "next/link";

interface SideMenuItemProps {
  label: string;
  link: string;
  isSelected: boolean;
  showIcon?: boolean;
}

const SideMenuItem: React.FC<SideMenuItemProps> = ({
  label,
  link,
  isSelected,
  showIcon,
}) => {
  return (
    <Link href={link} passHref>
      <div className={`sidemenu-item ${isSelected ? "selected" : ""}`}>
        <span className="sidemenu-label">{label}</span>
        {showIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM18.707 6.79297C18.3409 6.42685 17.7619 6.40426 17.3691 6.72461L17.293 6.79297L9.75 14.3359L6.70703 11.293L6.63086 11.2246C6.23809 10.9043 5.65908 10.9269 5.29297 11.293C4.92685 11.6591 4.90426 12.2381 5.22461 12.6309L5.29297 12.707L9.04297 16.457L9.11914 16.5254C9.51191 16.8457 10.0909 16.8231 10.457 16.457L18.707 8.20703L18.7754 8.13086C19.0957 7.73809 19.0731 7.15908 18.707 6.79297Z"
              fill="#5570F1"
            />
          </svg>
        )}
      </div>
    </Link>
  );
};

export default SideMenuItem;
