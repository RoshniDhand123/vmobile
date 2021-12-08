import Request from "../request";

export const signupAPI = (data) => {
    const resp = Request({
        method: "POST",
        api: "patient/signup",
        data,
    });

    return resp;
};

export const signinAPI = (data) => {
    const resp = Request({
        method: "POST",
        api: "auth/login",
        data,
    });

    return resp;
};

export const forgotPasswordAPI = (data) => {
    const resp = Request({
        method: "POST",
        api: "auth/send/otp",
        data,
    });

    return resp;
};

export const sendOtpAPI = (data) => {
    const resp = Request({
        method: "POST",
        api: "auth/send/otp",
        data,
    });

    return resp;
};

export const resetPasswordAPI = (data) => {
    const resp = Request({
        method: "POST",
        api: "auth/password/create",
        data,
    });

    return resp;
};

export const verifyOTPAPI = (data) => {
    console.log("data from verify api", data);
    const resp = Request({
        method: "POST",
        api: "auth/verify/otp",
        data,
    });

    return resp;
};

export const verifySignupContactOTPAPI = (data) => {
    console.log("data from verify api", data);
    const resp = Request({
        method: "POST",
        api: "auth/verify/otp",
        data,
    });

    return resp;
};

export const profileAPI = () => {
    const resp = Request({
        method: "GET",
        api: "profile/patient/detail",
        token: true,
    });

    return resp;
};

export const updateProfileAPI = (data) => {
    const resp = Request({
        method: "PUT",
        api: "patient/update",
        data,
        token: true,
    });

    return resp;
};

export const saveAboutMeAPI = (data) => {
    const resp = Request({
        method: "PUT",
        api: "patient/about",
        data,
        token: true,
    });

    return resp;
};

export const getAboutMeAPI = () => {
    const resp = Request({
        method: "GET",
        api: "patient/about",
        token: true,
    });

    return resp;
};

export const getRoomName = (id) => {
    const resp = Request({
        method: "GET",
        api: "/chat/room/patient/" + id,
        token: true,
    });

    return resp;
};
