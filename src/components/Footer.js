import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import DarkLightMode from "../utils/DarkLightMode";

const Footer = () => {

  const { isDark, setIsDark } = useContext(DarkLightMode)

  return (
    <div className={isDark ? "py-4 border border-t-gray-400" : "py-4 border border-t-gray-400 bg-gray-800 text-white"}>
      <h4 className="text-center">Designed & developed by Vijayakumar(Namaste React)</h4>
    </div>
  );
};

export default Footer;
