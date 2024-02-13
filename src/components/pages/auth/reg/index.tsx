import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { regAtom } from "../../../../atom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister } from "../../../../redux/slices/auth";

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
  const [regData] = useAtom(regAtom);
  const data = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(regData);

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
  const [mistake, ] = useState(false);
  const [index, setIndex] = useState(0);
  const [content, setContent] = useState(regInfo[index]);

  const regRoadHandler = async () => {
    setIndex((prevIndex) => {
      if (prevIndex !== 2) {
        return prevIndex + 1;
      } else {
        if (regData.passwordOne === regData.passwordTwo) {
          Navigate("/main");
          const data: { email: string, password: string } = {
            email: regData.email,
            password: regData.passwordOne
          };
          try {
            // const response = await fetchRegisterFunction(data)
            return prevIndex;
          } catch (error) {
            alert("Ошибка при регистрации: " + (error as Error).message);
            return prevIndex;
          }
        } else {
          alert("Пароли не совпадают!");
          return prevIndex; // Возвращаем текущий индекс в случае перехода
        }
      }
    });
  };
  // const fetchRegisterFunction = async (data: { email: string, password: string }) => {
  //   try {
  //     const response = await dispatch(fetchRegister(data));
  //     return response;
  //   } catch (error) {
  //     throw error;
  //   }
  // }

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
            name="email"
          />
        ) : content.id === 2 ? (
          <MultiInput onChange={codeHandler} />
        ) : (
          <div className="finishRegBox">
            <PrimaryInput
              onChange={firstPasswordHandler}
              type="password"
              text="Password"
              name="passwordOne"
            />
            <PrimaryInput
              onChange={secondPasswordHandler}
              type="password"
              text="Confirm password"
              name="passwordTwo"
            />
          </div>
        )}
        {/* <PrimaryInput onChange={emailHandler} type="text" text="Password" /> */}
        <SecondaryBtn onClick={regRoadHandler} text={content.btn} />
        {content.textForClick ? <p>{content.textForClick}</p> : ""}
      </div>
      <div className="logoImgDown">
        <img src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Reg;
