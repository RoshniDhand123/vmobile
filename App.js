import React, { useEffect } from "react";
import App from "./src";

import SplashScreen from "react-native-splash-screen";

export default function () {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return <App />;
}
