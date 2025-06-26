import { useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../useOnlineStatus";
import "./header.css";
// @import "tailwindcss";
export const Header = () => {
  const [loginbtn, setLoginbtn] = useState("Login");
  const online = useOnlineStatus(true);
  return (
    <div className="header bg-amber-300">
      <div className="logo-container">
        <img className="logo" src="./images/logo.png" alt="company name"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact us
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="nav-link">
              Grocery
            </Link>
          </li>
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
          <li>{online ? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};
