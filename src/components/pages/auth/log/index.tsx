import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import logImg from "./logImg.svg";
import Logo from "../Auth/Logo.svg";

import SecondaryBtn from "../../../elements/buttons/secondary";
import PrimaryInput from "../../../elements/inputs/primary";
import BackBtn from "../../../elements/buttons/backBtn";

import "./style.css";

const LogIn = () => {
  const Navigate = useNavigate();
  const [mistake, setMistake] = useState(true)

  const goToAppHandler = () => {
    Navigate("/main");
  };
  const emailHandler = () => {};
  const comeBackHandler = () => {
    Navigate("/");
  };

  return (
    <div className="authBox">
      <div className="headerLogElements">
        <BackBtn onClick={comeBackHandler} />
        {
            mistake ? <div className="mistakeDiv">Введены неправильне данные</div> : <div></div>
        }
      </div>
      <div className="guysImg">
        <img src={logImg} alt="" />
      </div>
      <div className="contentBox" style={{ width: "100%" }}>
        <h2>Рад тебя видеть!</h2>
        <PrimaryInput
          onChange={emailHandler}
          type="text"
          text="Email@example.com"
        />
        <PrimaryInput onChange={emailHandler} type="text" text="Password" />
        <SecondaryBtn onClick={goToAppHandler} text="Войти" />
        <button className="anotherBtn">Забыл пароль?</button>
      </div>
      <div className="logoImgDown">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default LogIn;
