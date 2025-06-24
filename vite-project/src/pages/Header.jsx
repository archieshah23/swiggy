import { useState } from "react";
import { Link } from "react-router-dom";
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
