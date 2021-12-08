import { Field } from "app/elements";
import {
    verifyEmail,
    email_conditions,
    password_conditions,
    verifyPassword,
    phone_conditions,
    verifyPhone,
    name_conditions,
    verifyName,
} from "app/services/utils";

import { User, Phone, Email, Home } from "app/assets";

const fields = [
    {
        name: "name",
        // placeholder: "Name",
        type: "name",
        required: true,
        iconName: "name",
        label: "Name",
        iconImg: User,
        component: Field,
        min: 3,
        max: 50,
        matches: name_conditions,
        create_err_msg: verifyName,
    },
    {
        name: "email",
        // placeholder: "Email",
        type: "email",
        required: true,
        iconName: "name",
        label: "Email",
        editable: false,

        component: Field,
        iconImg: Email,
        matches: email_conditions,
        create_err_msg: verifyEmail,
    },
    {
        name: "address",
        // placeholder: "Address",
        type: "text",
        iconName: "name",
        label: "Address",

        component: Field,
        iconImg: Home,
        required: true,
    },
    {
        name: "contact",
        // placeholder: "Contact No.",
        type: "phone",
        required: true,
        iconName: "name",
        label: "Phone Number",
        editable: false,

        component: Field,
        iconImg: Phone,
        min: 5,
        max: 15,
        matches: phone_conditions,
        create_err_msg: verifyPhone,
    },
    // {
    //     name: "password",
    //     // placeholder: "Password",
    //     type: "password",
    //     required: true,
    //     label: "Password",

    //     iconName: "name",
    //     component: Field,
    //     matches: password_conditions,
    //     create_err_msg: verifyPassword,
    // },
];

export default fields;
