import React from "react";
import "./Button.scss";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  label: string;
  icon: any;
  onClick?: () => void;
}

export const Button = ({
  size = "small",
  label,
  icon: Icon,
  ...props
}: ButtonProps) => {
  return (
    <div className={`button ${size}`} {...props}>
      {Icon && (
        <div className={size}>
          <Icon />
        </div>
      )}
      {label && <span className="label">{label}</span>}
    </div>
  );
};
