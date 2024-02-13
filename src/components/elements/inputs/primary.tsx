import {ChangeEvent} from "react";
import "./style.css";
import { useAtom } from "jotai";
import { regAtom } from "../../../atom";
import { authAtom } from "../../../atom";

interface PrimaryInputProps {
  onChange: (value: string) => void;
  text: string;
  type: string;
  name: string;
}

const PrimaryInput: React.FC<PrimaryInputProps> = ({ onChange, type, text, name }) => {
  const [, setReg] = useAtom(regAtom)
  const [, setAuth] = useAtom(authAtom)
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Получаем значение из input
    console.log(e.target.name)
    if (e.target.name === 'emailAuth' || e.target.name === 'password') {
      setAuth((elem) => ({
        ...elem,
        [e.target.name] : e.target.value
      }))
    } else {
      setReg((elem) => ({
        ...elem,
        [e.target.name] : e.target.value
      }))
    }
    onChange(value); // Вызываем колбэк onChange и передаем значение ввода
  };
  return <input className="primaryInput" type={type} name={name} onChange={handleChange} placeholder={text}/>;
};

export default PrimaryInput;
