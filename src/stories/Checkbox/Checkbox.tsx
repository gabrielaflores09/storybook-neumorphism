// External deps
import React from "react";
import { BsCheck2 } from "react-icons/bs";

// Internal deps
import "./Checkbox.scss";

interface CheckboxProps {
  isChecked: boolean;
  handleChange: React.ChangeEventHandler;
  size: "small" | "medium" | "large";
  label: string;
}
const Checkbox = ({
  isChecked = false,
  handleChange,
  size = "small",
  label = "Checkbox",
}: CheckboxProps) => {
  return (
    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className={`${isChecked ? "checked" : ""} ${size}`}
        />
        <BsCheck2 className={`${isChecked ? "checked" : ""} icon ${size}`} />
        <span className={`${size}`}>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
