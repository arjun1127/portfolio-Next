import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large" | "icon";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
}) => {
  const baseStyles = "rounded focus:outline-none";
  let variantStyles = "";
  let sizeStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = "text-white bg-blue-500 hover:bg-blue-600";
      break;
    case "secondary":
      variantStyles = "text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-50";
      break;
    case "outline":
      variantStyles = "text-blue-500 bg-transparent border border-blue-500 hover:bg-blue-50";
      break;
    default:
      break;
  }

  switch (size) {
    case "small":
      sizeStyles = "px-2 py-1 text-sm";
      break;
    case "medium":
      sizeStyles = "px-4 py-2 text-base";
      break;
    case "large":
      sizeStyles = "px-6 py-3 text-lg";
      break;
    case "icon":
      sizeStyles = "p-2";
      break;
    default:
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export { Button };
