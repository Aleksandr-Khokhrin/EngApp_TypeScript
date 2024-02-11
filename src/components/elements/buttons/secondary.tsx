import React from "react";
import "./style.css";

interface PrimaryBtnProps {
  onClick: () => void;
  text: string;
}

const SecondaryBtn: React.FC<PrimaryBtnProps> = ({ onClick, text }) => {
  return (
    <button className="secondary btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default SecondaryBtn;
