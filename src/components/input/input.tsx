import React from "react";
import "./input.css";
interface InputProps {
  variant: string | boolean;
  placeholder?: string;
}

const Input = ({ variant, placeholder }: InputProps) => {
  return (
    <div>
      <input
        className={`input ${variant} `}
        placeholder={`${placeholder}`}
        type="text"
      />
    </div>
  );
};

export default Input;
