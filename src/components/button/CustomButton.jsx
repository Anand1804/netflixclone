import "./customButton.css";

const CustomButton = ({
  bg = " ",
  size = " ",
  color = " ",
  value,
  rounded = " ",
  icon,
  iconProp = " ",
  type,
  onClick,
}) => {
  return (
    <button
      className={`${bg} ${color} ${rounded} ${size} `}
      type={type}
      onClick={onClick}
    >
      {value}
      {icon && <div className={`${iconProp}`}>{icon}</div>}
    </button>
  );
};

export default CustomButton;
