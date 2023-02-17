import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Authentication from "./components/Authentication";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import "./style.css"

const AppLayout = () => {
  const [isTrue, setIsTrue] = useState(true);

  function isLogging(message) {
    setIsTrue(message);
  }

  return (
    <>
      {isTrue ? (
        <Authentication isLogging={isLogging} />
      ) : (
        <>
          <Header isLogging={isLogging}/>
          <Body />
          <Footer />
        </>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
