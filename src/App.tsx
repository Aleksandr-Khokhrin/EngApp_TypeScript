import React from "react";
import { Routes, Route } from 'react-router-dom'

import Auth from "./components/pages/auth/Auth";
import Reg from "./components/pages/auth/reg";
import LogIn from "./components/pages/auth/log";
import MainPage from "./components/pages/mainPage";

import "./main.style/App.css";
import "./main.style/colors.css";

function App() {
  return (
    <div className="mainBox">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/log" element={<LogIn />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/main" element={<MainPage />} />
        {/* <Route path='/' element={<MainPage/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
