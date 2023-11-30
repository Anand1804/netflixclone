import InputField from "../inputField/InputField";
import CustomForm from "../CustomForm";
import "./signingPageCss.css";

const SigningPage = ({
  reCAPTCHA,
  pageTitle,
  button,
  page,
  navText,
  navLink,
}) => {
  return (
    <div className="signin_page">
      <div className="shadow">
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
            {navLink && <a href="/">{navLink}</a>}
          </div>
          {reCAPTCHA && <p className="capt">{reCAPTCHA}</p>}
        </div>
      </div>
    </div>
  );
};

export default SigningPage;
