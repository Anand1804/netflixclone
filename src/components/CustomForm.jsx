import CustomButton from "./button/CustomButton";
import InputField from "./inputField/InputField";

const CustomForm = ({ button, isSignUp }) => {
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
      <CustomButton
        value={button}
        bg="bg-2"
        size="x-large"
        rounded="rounded"
        color="white"
        type="submit"
      />
    </form>
  );
};

export default CustomForm;
