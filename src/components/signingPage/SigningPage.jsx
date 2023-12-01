import InputField from "../inputField/InputField";
import CustomForm from "../CustomForm";
import "./signingPageCss.css";
import { Link } from "react-router-dom";
import nflogo from "../../source/Netflix_Logo.png";

const SigningPage = ({
  reCAPTCHA,
  pageTitle,
  button,
  page,
  navText,
  navLink,
  navLinkName,
}) => {
  return (
    <div className="signin_page">
      <div className="shadow">
        <img className="nflogo" src={nflogo} alt="" width={152} height={64} />
        <div className="signin">
          <h1 className="head">{pageTitle}</h1>
          <CustomForm button={button} />
          {page === "signIn" && (
            <div className="check">
              <div className="remember">
                <InputField type={"checkbox"} />
                <p>Remember me</p>
              </div>
              <p>Need help?</p>
            </div>
          )}
          <div className="new">
            {navText && <p>{navText}</p>}
            {navLink && <Link to={navLinkName}>{navLink}</Link>}
          </div>
          {reCAPTCHA && <p className="capt">{reCAPTCHA}</p>}
        </div>
      </div>
    </div>
  );
};

export default SigningPage;
