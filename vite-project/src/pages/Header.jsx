import "./header.css";
export const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};
