import React from "react";

interface Props {
  label: string;
  className: string;
  onClick?: () => void;
}

const Button = ({ className, label, onClick }: Props) => (
  <button className={className} onClick={onClick}>
    {" "}
    {label}{" "}
  </button>
);

export default Button;
