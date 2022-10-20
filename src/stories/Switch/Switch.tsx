// External deps
import React from "react";

// Internal deps
import "./Switch.scss";

interface SwitchProps {
  isChecked: boolean;
  handleChange: React.ChangeEventHandler;
  size: "small" | "medium" | "large";
}

const Switch = ({
  isChecked = false,
  handleChange,
  size = "small",
}: SwitchProps) => {
  return (
    <div className="switch">
      <input
        checked={isChecked}
        onChange={handleChange}
        id="switch-comp"
        className="switch-checkbox"
        type="checkbox"
      />
      <label
        className={`switch-label ${size} ${isChecked ? "checked" : ""}`}
        htmlFor="switch-comp"
      >
        <span
          className={`switch-button ${size} ${isChecked ? "checked" : ""}`}
        />
      </label>
    </div>
  );
};

export default Switch;
