import CustomButton from "../../../components/button/CustomButton";
const LandingPage = () => {
  const handleClick = () => {
    alert("hi btn clicked");
  };
  return (
    <>
      <h1>Landing Page</h1>
      <CustomButton btnText={"Sign In"} handleClick={handleClick} />
    </>
  );
};
export default LandingPage;
