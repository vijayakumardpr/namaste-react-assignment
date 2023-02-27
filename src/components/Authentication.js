import React, { useState } from "react";

const Authentication = ({ isLogging }) => {
  let isTrue = false;
  return (
    <div className="restaurant-login">
      <div>
        <input className="login-username" type="text" placeholder="username" />
      </div>
      <div>
        <input className="login-password" type="password" placeholder="password" />
      </div>
      <div>
        <button className="login" onClick={() => isLogging(isTrue)}>Login</button>
      </div>
    </div>
  );
};

export default Authentication;
