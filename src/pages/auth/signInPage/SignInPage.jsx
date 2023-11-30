import SigningPage from "../../../components/signingPage/SigningPage";

const SignInPage = () => {
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
      />
      ;
    </>
  );
};

export default SignInPage;
