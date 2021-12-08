import { Field } from "app/elements";
import { password_conditions, verifyPassword } from "app/services/utils";

const fields = [
  {
    name: "password",
    placeholder: "Password",
    type: "password",
    required: true,
    iconName: "name",
    component: Field,
    matches: password_conditions,
    create_err_msg: verifyPassword,
  },
  {
    name: "cpassword",
    placeholder: "Confirm Password",
    type: "password",
    required: true,
    iconName: "name",
    component: Field,
    matches: password_conditions,
    create_err_msg: verifyPassword,
  },
];

export { fields };
