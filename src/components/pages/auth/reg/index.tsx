import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import reg1 from "./reg1.svg";
import reg2 from "./reg2.svg";
import reg3 from "./reg3.svg";
import Logo from "../Auth/Logo.svg";

import SecondaryBtn from "../../../elements/buttons/secondary";
import PrimaryInput from "../../../elements/inputs/primary";
import MultiInput from "../../../elements/inputs/multiInputs";
import BackBtn from "../../../elements/buttons/backBtn";

import "./style.css";

const Reg = () => {
  const regInfo = [
    {
      id: 1,
      title: "Привет!",
      textForClick:
        "При нажатии кнопки войти вы соглашаетесь с политикой конфидинциальности и условиями использования приложения",
      btn: "Войти",
      img: reg1,
      mistake: "Введен неправильне данные",
    },
    {
      id: 2,
      title: "Введите код",
      waitCode: "который отправлен на Email@example.com",
      btn: "Подтвердить",
      img: reg2,
      mistake: "Введен неправилный пароль",
    },
    {
      id: 3,
      title: "Придумай пароль",
      btn: "Подтвердить",
      img: reg3,
      mistake: "Пароль не совпадает",
    },
  ];
  const Navigate = useNavigate();
  const [mistake, setMistake] = useState(false);
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState(regInfo[index]);

  const regRoadHandler = () => {
    setIndex((prevIndex) => {
      if (prevIndex !== 2) {
        return prevIndex + 1;
      } else {
        Navigate("/main");
        return prevIndex; // Возвращаем текущий индекс в случае перехода
      }
    });
  };

  useEffect(() => {
    setContent(regInfo[index]);
  }, [index]);
  const emailHandler = () => {};
  const codeHandler = () => {};
  const firstPasswordHandler = () => {};
  const secondPasswordHandler = () => {};
  const comeBackHandler = () => {
    if (index !== 0) {
      setIndex((i) => i - 1);
    } else {
      Navigate("/");
    }
  };

  return (
    <div className="authBox">
      <div className="headerLogElements">
        <BackBtn onClick={comeBackHandler} />
        {mistake ? <div className="mistakeDiv">{content.mistake}</div> : null}
      </div>
      <div className="guysImg">
        <img src={content.img} alt="" />
      </div>
      <div className="contentBox" style={{ width: "100%" }}>
        <h2>{content.title}</h2>
        {content.waitCode ? (
          <p style={{ color: "rgba(31, 31, 31, 0.5)", fontSize: "12px" }}>
            {content.waitCode}
          </p>
        ) : (
          ""
        )}
        {content.id === 1 ? (
          <PrimaryInput
            onChange={emailHandler}
            type="text"
            text="Email@example.com"
          />
        ) : content.id === 2 ? (
          <MultiInput onChange={codeHandler} />
        ) : (
          <div className="finishRegBox">
            <PrimaryInput
              onChange={firstPasswordHandler}
              type="password"
              text="Password"
            />
            <PrimaryInput
              onChange={secondPasswordHandler}
              type="password"
              text="Confirm password"
            />
          </div>
        )}
        {/* <PrimaryInput onChange={emailHandler} type="text" text="Password" /> */}
        <SecondaryBtn onClick={regRoadHandler} text="Войти" />
        {content.textForClick ? <p>{content.textForClick}</p> : ""}
      </div>
      <div className="logoImgDown">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Reg;
