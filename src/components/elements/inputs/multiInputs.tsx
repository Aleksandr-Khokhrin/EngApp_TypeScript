import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from "react";
import "./style.css"; // Создайте стиль для красивого отображения
import { useAtom } from "jotai";
import { regAtom } from "../../../atom";

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
  const [regCode, setRegCode] = useAtom(regAtom);

  const inputRefs = useRef<Array<HTMLInputElement | null>>(Array(6).fill(null)); // Рефы для каждого input

  useEffect(() => {
    setRegCode((prevUserState) => ({
      ...prevUserState,
      regCode: Number(inputValues.join(""))
    }));
  }, [inputValues]);

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

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && inputValues[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        setInputValues((prevValues) => {
          const newValues = [...prevValues];
          newValues[index - 1] = "";
          return newValues;
        });
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
          inputMode="numeric"
          value={value}
          onChange={(e) => handleInputChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="single-input"
        />
      ))}
    </div>
  );
};

export default MultiInput;
