import { useState } from "react";
import "./header.css";
export const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="./images/logo.png" alt="company name"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              loginbtn === "Login"
                ? setLoginbtn("Logout")
                : setLoginbtn("Login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
