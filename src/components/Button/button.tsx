import React from "react";
import "./button.css";
type ButtonProps = {
  children: React.ReactNode | any;
  variant: any;
};
const Button = (props: ButtonProps) => {
  const { variant = "primary", children } = props;
  return <button className={`button ${variant}`}>{children}</button>;
};

export default Button;
