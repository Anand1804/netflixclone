import "./inputFieldCss.css";

const InputField = ({ id, type, helpertext, error, label }) => {
  console.log(id);
  return (
    <div className="input-field">
      <input type={type} className="input" placeholder="  " />
      <label className="label " htmlFor={id}>
        {label}
      </label>
      {error && <span className="helpertext">{helpertext}</span>}
    </div>
  );
};

export default InputField;
