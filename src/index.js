import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FingerPrintLock from "app/views/finger-print-lock";
import Signup from "app/views/auth/sign-up";
import Signin from "app/views/auth/sign-in";
import ForgotPassword from "app/views/auth/forgot-password";
import Verify from "app/views/auth/verify";
import SignupVerify from "app/views/auth/signup-verify";
import ResetPassword from "app/views/auth/reset-password";
import Home from "app/views/home";
import Success from "app/views/success";
import FigerprintRecognition from "./views/figerprint-recognition";
import FaceRecognition from "./views/face-recognition";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import ChooseRole from "./views/role";
import { getToken } from "./services/local-store/token";
import NewConsult from "app/views/consult/new-consult";
import InviteFriends from "./views/invite-friends";
import AboutUs from "./views/about-us";
import Feedback from "./views/feedback";
import AboutMe from "./views/about-me";
import Profile from "./views/profile";

import { Button } from "react-native";
import { Chat, MyConsults } from "app/views/my-consults";
const Stack = createNativeStackNavigator();

export default () => {
    const [isLoggedIn, setLogin] = useState(false);
    const handleLogin = () => {};

    const checkLogin = async () => {
        // setShowLoader(true);

        // loader.show();
        console.log("checkLogin");
        const token = await getToken();
        console.log("token from backend", token);
        if (token) setLogin(true);
        // setShowLoader(false);

        // loader.hide();
        console.log("isloggedin", isLoggedIn);
    };

    useEffect(() => {
        GoogleSignin.configure();
        // checkLogin();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ animation: "none" }}>
                <Stack.Screen
                    name="FingerPrintLock"
                    component={FingerPrintLock}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Role"
                    component={ChooseRole}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signin"
                    component={Signin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MyConsults"
                    component={MyConsults}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignupVerify"
                    component={SignupVerify}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Success"
                    component={Success}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Verify"
                    component={Verify}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                        // title: "Home",
                        // headerStyle: {
                        //     height: 100,
                        //     backgroundColor: "#0052A2",
                        //     paddingTop: 50,
                        //     paddingBottom: 50,
                        // },
                        // headerTintColor: "#fff",
                        // headerTitleAlign: "center",
                        // headerBackVisible: true,
                        // headerRight: () => (
                        //     <Button
                        //         onPress={() => alert("Clicked !!")}
                        //         title="menu"
                        //         color="#000"
                        //     />
                        // ),
                    }}
                />
                <Stack.Screen
                    name="Chat"
                    component={Chat}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="NewConsult"
                    component={NewConsult}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="InviteFriends"
                    component={InviteFriends}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AboutUs"
                    component={AboutUs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Feedback"
                    component={Feedback}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AboutMe"
                    component={AboutMe}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
