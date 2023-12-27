import React from "react";
import { TextInputPropTypes } from "../../Models/Components/TextInputModel";
import "../../Styles/Components/TextInput.css";

const TextInput: React.FC<TextInputPropTypes> = ({
  type,
  value,
  onChange,
  label,
  required,
  autoFocus,
  placeholder,
  name,
}) => {
  return (
    <div className="textinput">
      <label>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        autoFocus={autoFocus}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default TextInput;
