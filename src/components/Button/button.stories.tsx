import React from "react";
import Button from "./button";

export default {
  title: "form/Button",
  component: Button,
};

export const Primary = () => <Button variant="primary">Primary</Button>;

export const Secondary = () => <Button variant="secondary">Secondary</Button>;

export const Success = () => {
  return <Button variant="success">Success</Button>;
};
export const Danger = () => {
  return <Button variant="danger">Danger</Button>;
};
