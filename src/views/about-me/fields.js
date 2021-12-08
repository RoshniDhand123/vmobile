import {
    password_conditions,
    verifyPassword,
    verifyEmail,
    email_conditions,
} from "app/services/utils";

import { Field, CustomHeight } from "app/elements";
import { Email } from "app/assets";

const fields = [
    {
        name: "height",
        type: "height",
        component: CustomHeight,
        placeholder: "ft | in",
        // iconImg: Email,
        label: "Height",
        // matches: email_conditions,
        // create_err_msg: verifyEmail,
    },
    {
        name: "weight",
        type: "weight",
        component: Field,
        // iconImg: Email,
        label: "Weight in lbs",

        // matches: password_conditions,
        // create_err_msg: verifyPassword,
    },
    {
        name: "BMI",
        type: "bmi",
        component: Field,
        // iconImg: Email,
        label: "BMI",

        // matches: password_conditions,
        // create_err_msg: verifyPassword,
    },
    {
        name: "blood",
        type: "text",
        component: Field,
        // iconImg: Email,
        label: "Blood Group",
        required: true,
        // matches: password_conditions,
        // create_err_msg: verifyPassword,
    },
];

export { fields };
