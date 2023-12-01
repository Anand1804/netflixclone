import CustomButton from "../button/CustomButton";
import netflix from "../../source/Netflix_Logo.png";
import profile from "../../source/profile_btn.png";
import "./navBarCss.css";

const NavBar = ({ isUser, handleLogin, handleLogout }) => {
  return (
    <div className="navbar">
      <div className="logo_sec">
        <img src={netflix} alt="Netflix" width={152} height={64} />
        {isUser && (
          <div className="start">
            <p>Home</p>
            <p>My List</p>
            <p>Search</p>
          </div>
        )}
      </div>
      {isUser ? (
        <div className="pro_btn">
          <img src={profile} alt="profile" width={40} height={40} />
          <CustomButton
            btnText="Log Out"
            className="large"
            handleClick={handleLogout}
          />
        </div>
      ) : (
        <div className="menu">
          <select className="lang">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
          <CustomButton
            className="medium"
            btnText="Sign In"
            handleClick={handleLogin}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
