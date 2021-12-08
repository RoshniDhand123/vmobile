import Request from "../request";

export const submitFeedbackAPI = (data) => {
    const resp = Request({
        method: "POST",
        api: "feedback",
        data,
        token: true,
    });

    return resp;
};
