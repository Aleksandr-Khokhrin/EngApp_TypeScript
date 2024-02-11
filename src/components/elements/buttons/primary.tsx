import React from "react";
import './style.css'

interface PrimaryBtnProps {
  onClick: () => void;
  text: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ onClick, text }) => {
  return (
    <button className="primary btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryBtn;
