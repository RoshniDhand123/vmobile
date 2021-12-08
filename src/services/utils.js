import { PixelRatio, Platform, Dimensions } from "react-native";
import { loader } from "../elements/loader";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size) {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}

export const password_conditions =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const verifyPassword = (value) => {
    if (/\ /.test(value)) return "Password should not contain blank spaces";
    if (!/[A-Z]/.test(value))
        return "Password must contain Atleast 1 Uppercase letter";
    else if (!/[a-z]/.test(value))
        return "Password must contain Atleast 1 Lowercase letter";
    else if (!/[0-9]/.test(value))
        return "Password must contain Atleast 1 Numeric character";
    else if (!/[!@#\$%\^&\*]/.test(value))
        return "Password must contain Atleast 1 Special character";
    else if (value.length < 8)
        return "Password must contain Minimum length of 8 characters";

    return "";
};

export const email_conditions =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export const verifyEmail = (value) => {
    if (!email_conditions.test(value)) return "Must be a valid email address";
    return "";
};

export const phone_conditions = /([+]{1}[0-9]+[-\s]?[0-9]+)$/;

export const verifyPhone = (value) => {
    if (!phone_conditions.test(value))
        return "Must be a valid phone number(+18004444444)";
    return "Phone no. length should be between 5-15";
};

export const income_conditions = /^([0-9]+[.]?[0-9]+)+$/;

export const verifyIncome = (value) => {
    if (!income_conditions.test(value)) return "Must be a valid Income";
    return "Income length should be between 1-20";
};

export const name_conditions = /^([a-zA-Z]+['\s-]?[a-zA-Z]+)+$/;

export const verifyName = (value) => {
    if (!name_conditions.test(value)) return "Must be a valid Name";
    return "Name length should be between 2-50";
};

export const zipcode_conditions = /^([0-9]+[-]?[0-9]+)+$/;

export const verifyZipcode = (value) => {
    if (!zipcode_conditions.test(value)) return "Must be a valid Zip code";
    return "Zipcode length should be between 5-10";
};

export { loader };
