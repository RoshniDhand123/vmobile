// import statusCodes along with GoogleSignin
import {
    GoogleSignin,
    statusCodes,
} from "@react-native-google-signin/google-signin";

// Somewhere in your code
export const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        console.log("userrInfo", userInfo);
        // this.setState({ userInfo });
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
            console.log("if");
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
            console.log("else if 1");
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
            console.log("else if 2");
        } else {
            // some other error happened
            console.log("else");
        }
    }
};
