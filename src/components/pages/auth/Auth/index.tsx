import { useNavigate } from "react-router-dom";

import PrimaryBtn from "../../../elements/buttons/primary";
import SecondaryBtn from "../../../elements/buttons/secondary";

import Logo from "./Logo.svg";
import painter from "./painter.svg";

import "./style.css";

const Auth = () => {
  const Navigate = useNavigate();

  const logInHandler = () => {
    Navigate("/log");
  };
  const regWayHandler = () => {
    Navigate("/reg");
  };

  return (
    <div className="authBox">
      <div className="logoImg">
        <img src={Logo} alt="" />
      </div>
      <div className="painterImg">
        <img src={painter} alt="" />
      </div>
      <div className="contentBox">
        <h2>Привет</h2>
        <p>
          В своём стремлении повысить качество жизни, они забывают, что
          экономическая повестка сегодняшнего дня
        </p>
        <PrimaryBtn onClick={logInHandler} text="Войти" />
        <SecondaryBtn onClick={regWayHandler} text="Регистрация" />
      </div>
    </div>
  );
};

export default Auth;
