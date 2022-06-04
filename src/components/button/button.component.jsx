import { Children } from "react";
import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton
} from "./button.styles";

/**
 * there are 3 kinds of btn
 * a. Invert Btn
 * b. Google
 * c. Btn
 * @returns
 */

export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASS.base) => {
     return {
        [BUTTON_TYPE_CLASS.base]: BaseButton,
        [BUTTON_TYPE_CLASS.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
    }[buttonType]
};
const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
