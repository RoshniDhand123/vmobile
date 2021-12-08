import Request from "../request";

export const newConsultAPI = () => {
    const resp = Request({
        method: "GET",
        api: "patient/consult/new",
        token: true,
    });

    return resp;
};
