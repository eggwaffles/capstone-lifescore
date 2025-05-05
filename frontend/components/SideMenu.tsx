"use client";

import React from "react";
import SideMenuItem from "./SideMenuItem";
import { usePathname } from "next/navigation";
import { usePageCompletion } from "../context/PageCompletionContext";

const SideMenu: React.FC = () => {
  const pathname = usePathname();
  const { pageCompletion } = usePageCompletion();

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

  return (
    <div className="sidemenu">
      {menuItems.map((item) => (
        <SideMenuItem
          key={item.id}
          label={item.label}
          link={item.link}
          isSelected={pathname === item.link}
          showIcon={pageCompletion[item.link]} // Show checkmark if the page is complete
        />
      ))}
    </div>
  );
};

export default SideMenu;