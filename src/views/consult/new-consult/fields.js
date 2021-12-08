import { Field, DocumentPickerCustom } from "app/elements";
import { Email } from "app/assets";

const fields = [
    {
        name: "faxNumber",
        placeholder: "Fax Number",
        type: "text",
        required: true,
        component: Field,
        iconImg: Email,
        // iconName: "name",
        // matches: email_conditions,
        // create_err_msg: verifyEmail,
    },
    {
        name: "details",
        placeholder: "Details",
        type: "text",
        required: true,
        component: Field,
        iconImg: Email,

        // iconName: "name",
        // matches: password_conditions,
        // create_err_msg: verifyPassword,
    },
    {
        name: "document",
        placeholder: "Details",
        type: "text",
        required: true,
        component: DocumentPickerCustom,
        iconImg: Email,

        // iconName: "name",
        // matches: password_conditions,
        // create_err_msg: verifyPassword,
    },
];

export { fields };
