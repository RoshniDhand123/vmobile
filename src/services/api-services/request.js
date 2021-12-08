import axios from "axios";
import { errorHandler } from "./error-handler";
import { getToken } from "../local-store/token";

// const BASEURL = "http://45.79.127.100:8000/api/v1/";

const BASEURL = "http://vdoc.ellocent.com/api/v1/";

const getHeader = async (status) => {
    const header = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };
    if (status) {
        const token = await getToken("access_token");
        if (token) header["Authorization"] = token;
    }
    return header;
};

export default ({ method, api, data, token }) => {
    return new Promise(async (resolve, reject) => {
        const headers = await getHeader(token);
        console.log("headers", headers);
        try {
            console.log("method+++++++++++", method);
            console.log("url...........", `${BASEURL}${api}`);
            console.log("data in request//////////", data);
            console.log("headers", headers);

            axios({ method, url: `${BASEURL}${api}`, data, headers })
                .then((response) => {
                    if (response && response.data && "status" in response.data)
                        resolve(response.data);
                    resolve({ status: true, data: response.data });
                })
                .catch((error) => {
                    resolve(errorHandler(error));
                });
        } catch (error) {
            resolve(errorHandler(error));
        }
    });
};
