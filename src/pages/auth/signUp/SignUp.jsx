import SigningPage from "../../../components/signingPage/SigningPage";

const SignUp = () => {
  return (
    <>
      <SigningPage
        page={"SignUp"}
        pageTitle={"Sign Up"}
        button={"Sign Up"}
        navText={"Already subscribed to NetFlix?"}
        navLink={"Sign in"}
        navLinkName={"/signIn"}
      />
    </>
  );
};

export default SignUp;
