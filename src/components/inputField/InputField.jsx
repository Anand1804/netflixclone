import "./inputFieldCss.css";

const InputField = ({
  id,
  type,
  helpertext,
  className,
  error,
  label,
  inputBg = " ",
  getStarted,
}) => {
  console.log(id);
  return (
    <div className="input-field">
      <input
        type={type}
        className={`input ${className} ${inputBg}`}
        placeholder=" "
      />
      <label className={`label ${getStarted}`} htmlFor={id}>
        {label}
      </label>
      {error && <span className="helpertext">{helpertext}</span>}
    </div>
  );
};

export default InputField;
