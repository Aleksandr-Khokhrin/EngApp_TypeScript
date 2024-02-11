import React from "react";
import "./style.css";

interface PrimaryInputProps {
  onChange: () => void;
  text: string;
  type: string;
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({ onChange, type, text }) => {
  return <input className="primaryInput" type={type} onChange={onChange} placeholder={text}/>;
};

export default PrimaryInput;
