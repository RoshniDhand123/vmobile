import {
    password_conditions,
    verifyPassword,
    verifyEmail,
    email_conditions,
} from "app/services/utils";

import { Field } from "app/elements";
import { Email } from "app/assets";

const fields = [
    {
        name: "contact",
        placeholder: "Email or Phone Number",
        type: "text",
        required: true,
        iconName: "name",
        component: Field,
        iconImg: Email,
        // matches: email_conditions,
        // create_err_msg: verifyEmail,
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password",
        required: true,
        iconName: "name",
        component: Field,
        // matches: password_conditions,
        // create_err_msg: verifyPassword,
    },
];

export { fields };
