import NavBar from "../../../components/navbar/NavBar";
import SigningPage from "../../../components/signingPage/SigningPage";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <SigningPage
        page={"signIn"}
        pageTitle={"Sign In"}
        button={"Sign In"}
        reCAPTCHA={
          "This page is protected by Google reCAPTCHA to ensure you're not abot."
        }
        navText={"New to NetFlix?"}
        navLink={"Sign up now"}
        navLinkName={"/signUp"}
      />
      ;
    </>
  );
};

export default SignIn;
