import React from "react";
import InputField from "./inputField/InputField";

const CustomForm = ({ button }) => {
  return (
    <form action="" className="form_btn">
      <InputField
        id={"email"}
        type={"email"}
        helpertext={"Please enter a valid email address or phone number."}
        error={true}
        label={"EMAIL ADDRESS"}
      />
      <InputField
        id={"password"}
        type={"password"}
        helpertext={"Your password must contain between 4 and 60 characters."}
        error={true}
        label={"PASSWORD"}
      />
      <button className="btn">{button}</button>
    </form>
  );
};

export default CustomForm;
