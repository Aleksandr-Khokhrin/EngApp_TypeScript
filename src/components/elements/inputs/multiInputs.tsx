import React, { useState, useRef, ChangeEvent } from "react";
import "./style.css"; // Создайте стиль для красивого отображения

interface MultiInputProps {
  onChange: () => void;
}

const MultiInput: React.FC<MultiInputProps> = () => {
  const [inputValues, setInputValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]); // Массив для хранения значений каждого input
  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(4).fill(null)); // Рефы для каждого input

  const handleInputChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (value.length <= 1) {
      const newInputValues = [...inputValues];
      newInputValues[index] = value;
      setInputValues(newInputValues);

      if (index < inputRefs.current.length - 1 && value.length === 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  return (
    <div className="multi-input-container">
      {inputValues.map((value, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          value={value}
          onChange={(e) => handleInputChange(index, e)}
          className="single-input"
        />
      ))}
    </div>
  );
};

export default MultiInput;
