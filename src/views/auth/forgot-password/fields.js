import { Field } from "app/elements";
import { verifyEmail, email_conditions } from "app/services/utils";
import { Email } from "app/assets";

const fields = [
    {
        name: "contact",
        placeholder: "Email or Phone Number",
        type: "text",
        required: true,
        iconName: "name",
        iconImg: Email,
        component: Field,
        // matches: email_conditions,
        // create_err_msg: verifyEmail,
    },
];

export { fields };
