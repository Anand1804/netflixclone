import "../button/customButton.css";
const CustomButton = ({ btnText = "submit", handleClick }) => {
  return (
    <>
      <div sx={{ width: "500px", height: "300px", padding: "30px" }}>
        <button className="medium" onClick={handleClick}>
          {btnText}
        </button>
      </div>
    </>
  );
};
export default CustomButton;
