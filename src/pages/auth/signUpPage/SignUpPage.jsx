import SigningPage from "../../../components/signingPage/SigningPage";

const SignUpPage = () => {
  return (
    <>
      <SigningPage
        page={"SignUp"}
        pageTitle={"Sign Up"}
        button={"Sign Up"}
        navText={"Already subscribed to NetFlix?"}
        navLink={"Sign in"}
      />
    </>
  );
};

export default SignUpPage;
