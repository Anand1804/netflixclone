import { useNavigate } from "react-router-dom";
import CustomButton from "../button/CustomButton";
import netflix from "../../source/Netflix_Logo.png";
import profile from "../../source/profile_btn.png";
import "./navBarCss.css";

const NavBar = ({ isUser }) => {
  const navigator = useNavigate();
  const handleLogin = () => {
    navigator("/signIn");
  };

  const handleLogout = () => {
    navigator("/home");
  };
  return (
    <div className="navbar-container">
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
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div className="menu">
          <select className="language">
            <option value="english">English</option>
            <option value="tamil">தமிழ்</option>
            <option value="hindi">हिंदी</option>
          </select>
          <CustomButton
            bg="bg-2"
            size="medium"
            value="Sign In"
            rounded="rounded"
            color="white"
            onClick={handleLogin}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
