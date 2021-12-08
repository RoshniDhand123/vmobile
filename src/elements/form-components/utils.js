import * as Yup from "yup";
import moment from "moment";

export const createSchema = (validations) => {
    let shape = {};
    for (let i = 0; i < validations.length; i++) {
        let _type = validations[i].type;
        let _key = validations[i].name;
        let _label = validations[i].labelTxt;
        let _required = validations[i].required;
        let _req_msg = validations[i].req_msg;
        let _err_msg = validations[i].err_msg;
        // let _min_date = validations[i].min_date;
        // let _max_date = validations[i].max_date;
        let _matches = validations[i].matches;
        let _min = validations[i].min;
        let _max = validations[i].max;

        if (_type === "email") {
            shape[_key] = Yup.string().email(
                _err_msg || "Please provide a valid email addess"
            );
        } else if (_type === "name") {
            shape[_key] = Yup.string();

            if (_matches)
                shape[_key] = shape[_key].matches(
                    _matches,
                    _err_msg || "Invalid value"
                );

            if (_min) {
                shape[_key] = shape[_key].min(
                    _min,
                    "Minimum length should " + _min + ""
                );
            }

            if (_max) {
                shape[_key] = shape[_key].max(
                    _max,
                    "Maximum length should " + _max + ""
                );
            }
        } else if (_type === "phone") {
            shape[_key] = Yup.string();

            if (_matches)
                shape[_key] = shape[_key].matches(
                    _matches,
                    _err_msg || "Invalid value"
                );

            if (_min) {
                shape[_key] = shape[_key].min(
                    _min,
                    "Minimum length should " + _min + ""
                );
            }

            if (_max) {
                shape[_key] = shape[_key].max(
                    _max,
                    "Maximum length should " + _max + ""
                );
            }
        } else if (_type === "income") {
            shape[_key] = Yup.string();

            if (_matches)
                shape[_key] = shape[_key].matches(
                    _matches,
                    _err_msg || "Invalid value"
                );

            if (_max) {
                shape[_key] = shape[_key].max(
                    _max,
                    "Maximum length should " + _max + ""
                );
            }
        } else if (_type === "zip") {
            shape[_key] = Yup.string();

            if (_min) {
                shape[_key] = shape[_key].min(
                    _min,
                    "Minimum length should " + _min + ""
                );
            }

            if (_max) {
                shape[_key] = shape[_key].max(
                    _max,
                    "Maximum length should " + _max + ""
                );
            }

            if (_matches)
                shape[_key] = shape[_key].matches(
                    _matches,
                    _err_msg || "Invalid value"
                );
        } else if (_type === "number") {
            shape[_key] = Yup.number();
            if (_min)
                shape[_key] = shape[_key].min(
                    _min,
                    "Minimum length should " + _min + ""
                );
            if (_max)
                shape[_key] = shape[_key].max(
                    _max,
                    "Maximum length should " + _max + ""
                );
        } else if (_type === "full_name") {
            shape[_key] = Yup.mixed().test(
                "match",
                "Full Name is required",
                function (name) {
                    return name && name["First name"] && name["Last name"];
                }
            );
        } else if (_type === "date") {
            shape[_key] = Yup.mixed().test(
                "match",
                `${_label || _key} is required`,
                function (date) {
                    return moment(date, "YYYY-MM-DD").isValid();
                }
            );
        } else {
            shape[_key] = Yup.string();
            if (_matches)
                shape[_key] = shape[_key].matches(
                    _matches,
                    _err_msg || "Invalid value"
                );
        }
        if (_required) {
            shape[_key] = shape[_key].required(
                _req_msg || `The field ${_label || _key} is required`
            );
        }
        if (_key === "cpassword") {
            shape["cpassword"] = Yup.mixed().test(
                "match",
                "Password and re-enter password does not match",
                function (password) {
                    return password === this.parent.password;
                }
            );
        }
    }
    return Yup.object().shape(shape);
};

export const createInitialValues = (fields) => {
    let initialValues = {};
    fields &&
        fields.map((field) => {
            if (field.type === "CheckBox") {
                field.options.map((option) => {
                    initialValues[option.name] = option.value;
                });
            } else {
                initialValues[field.name] = field.value ? field.value : "";
            }
        });
    return initialValues;
};

// else if (_type === "full_name") {
//     shape[_key] = Yup.mixed().test(
//         "match",
//         "Full Name is required",
//         function (name) {
//             return name && name["First name"] && name["Last name"];
//         }
//     );
