import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface DropdownMenuProps {
  children: React.ReactNode;
}

interface DropdownMenuItemProps {
  onClick: () => void;
  children: React.ReactNode;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <div onClick={toggleMenu}>{children}</div>
      {isOpen && <div className="absolute z-10">{children}</div>}
    </div>
  );
};

const DropdownMenuTrigger: React.FC<{ asChild?: boolean; children: React.ReactNode }> = ({
  asChild = false,
  children,
}) => {
  return asChild ? <>{children}</> : <div>{children}</div>;
};

const DropdownMenuContent: React.FC<{ align: "start" | "end"; children: React.ReactNode }> = ({
  align,
  children,
}) => {
  return (
    <div
      className={`absolute ${align === "end" ? "right-0" : "left-0"} mt-2`}
    >
      {children}
    </div>
  );
};

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  onClick,
  children,
}) => {
  return (
    <div
      className="cursor-pointer py-1 px-2 hover:bg-gray-200"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem };
