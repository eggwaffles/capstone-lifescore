import React, { useState } from "react";
import SideMenuItem from "./SideMenuItem";

const SideMenu: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const menuItems = [
    { id: 1, label: "Home", link: "/" },
    { id: 2, label: "Profile", link: "/" },
    { id: 3, label: "Settings", link: "/" },
  ];

  const handleItemClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="sidemenu">
      {menuItems.map((item) => (
        <SideMenuItem
          key={item.id}
          label={item.label}
          link={item.link}
          isSelected={selectedId === item.id}
          onClick={() => handleItemClick(item.id)}
        />
      ))}
    </div>
  );
};

export default SideMenu;