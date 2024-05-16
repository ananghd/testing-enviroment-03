import React from "react";
import "./Card.css";

interface CardProps {
  label?: string;
  children: React.ReactNode;
  id?: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { label, children, id } = props;

  return (
    <div className="card" id={id}>
      <div className="card-header">{label}</div>
      <div className="card-conten">{children}</div>
    </div>
  );
};
