import React from "react";
import Input from "./input";
export default {
  title: "form/Input",
  component: Input,
};

export const Primary = () => (
  <Input variant="primary" placeholder="Enter Your Name" />
);

export const Secondary = () => (
  <Input variant="secondary" placeholder="Enter Your Password" />
);
