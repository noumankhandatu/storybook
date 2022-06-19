import React from "react";
import Card from "./card";

export default {
  title: "Card",
  component: Card,
};

export const PrimaryCard = () => {
  return <Card variant="primary" />;
};

export const SecondaryCard = () => {
  return <Card variant="secondary" />;
};
