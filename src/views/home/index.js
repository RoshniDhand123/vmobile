import React, { useState, useEffect } from "react";
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    BackHandler,
    SafeAreaView,
    StatusBar,
} from "react-native";
import styles, { headerStyle, profileStyle } from "./styles";
import {
    Logout,
    Doctors,
    Notification,
    MyConsults,
    NewConsult,
    AboutMe,
    AboutUs,
    Invite,
    Feedback,
} from "app/assets";
import { Loader } from "app/elements";
import Card from "./card";
import { deleteToken, getToken } from "app/services/local-store/token";
import { getGreeting } from "./utils";
import { profileAPI } from "../../services/api-services/account";
import { loader } from "app/services/utils";

import { CustomNavigationHeaderBar } from "app/elements";

const MenuItem = [
    {
        colors: ["#e0cd34", "#f88c2d", "#f7802c"],
        name: "new consult",
        icon: NewConsult,
        route: "NewConsult",
    },
    {
        colors: ["#ee9b2e", "#e76026", "#e35a24"],
        name: "my consults",
        icon: MyConsults,
        route: "MyConsults",
    },
    {
        colors: ["#38bdfa", "#2175e9", "#215ada"],
        name: "about me",
        icon: AboutMe,
        route: "AboutMe",
    },
    {
        colors: ["#37b2d9", "#157293", "#0a4558"],
        name: "about us",
        icon: AboutUs,
        route: "AboutUs",
    },
    {
        colors: ["#f27377", "#db476b", "#a93a65"],
        name: "invite friends",
        icon: Invite,
        route: "InviteFriends",
    },
    {
        colors: ["#f07461", "#e9402e", "#e54032"],
        name: "app feedback",
        icon: Feedback,
        route: "Feedback",
    },
];
const RenderMenu = ({ navigation }) =>
    MenuItem.map((item, index) => (
        <View style={{ width: "50%" }} key={index}>
            <Card {...item} navigation={navigation} />
        </View>
    ));

const Home = ({ navigation }) => {
    const [user, setUser] = useState(null);
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        checkLogin();

        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: "Home" }],
        // });

        BackHandler.addEventListener(
            "hardwareBackPress",
            handleBackButtonClick
        );

        return () => {
            console.log("hhhh..//");
            BackHandler.removeEventListener("hardwareBackPress");
        };
    }, []);

    const handleBackButtonClick = () => {
        // BackHandler.exitApp();
    };

    const checkLogin = async () => {
        setShowLoader(true);
        const token = await getToken();
        console.log("token from backend", token);
        if (token) {
            loadProfile();
            setShowLoader(false);
        } else {
            setShowLoader(false);
            checkOut("Signin");
        }
    };

    const checkOut = (screen) => {
        if (navigation && navigation.navigate && screen === "Signin")
            navigation.replace(screen);
        else {
            navigation.navigate(screen);
        }
    };

    // const logout = async () => {
    //     await deleteToken();
    //     checkOut("Signin");
    // };
    const loadProfile = async () => {
        setShowLoader(true);
        // loader.show();
        const resp = await profileAPI();
        console.log("RESP:", resp);
        if (resp && resp.status) setUser(resp.data || null);
        else alert(resp.error || resp.msg?.msg[0] || "something went wrong.");

        setShowLoader(false);

        // loader.hide();
    };
    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor="#002347"
                // barStyle={statusBarStyle}
                // showHideTransition={statusBarTransition}
                // hidden={hidden}
            />
            <ScrollView>
                {showLoader && <Loader />}
                <View style={styles.root}>
                    {/* <Header logout={logout} /> */}
                    <CustomNavigationHeaderBar
                        navigation={navigation}
                        title="Home"
                        showBack={false}
                    />
                    <Profile data={user} navigation={navigation} />
                    <View style={styles.flexBox}>
                        <RenderMenu navigation={navigation} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

// export const Header = ({ logout }) => {
//     const styles = headerStyle;
//     return (
//         <View style={styles.root}>
//             <View style={styles.titleContainer}>
//                 <Text style={styles.title}>Home</Text>
//             </View>
//             <View style={styles.iconContainer}>
//                 <TouchableOpacity onPress={logout} style={styles.iconBox}>
//                     <Image
//                         style={styles.icon}
//                         resizeMode="contain"
//                         source={Logout}
//                     />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };

const Profile = ({ data, navigation }) => {
    const styles = profileStyle;
    console.log("data..////...//..", data, navigation);
    const { first_name = "", pic = "" } = data || {};

    const checkOut = (screen, obj = {}) => {
        console.log("checkout");
        navigation.navigate(screen, obj);
    };
    return (
        <View style={styles.root}>
            <TouchableOpacity
                style={styles.container}
                onPress={() => checkOut("Profile", data)}
            >
                <View style={styles.profileRoot}>
                    <Image
                        style={styles.profile}
                        resizeMode="cover"
                        source={pic ? { uri: pic } : Doctors}
                    />
                </View>
                <View style={styles.detailsRoot}>
                    <View style={styles.details}>
                        <Text style={styles.greeting}>{getGreeting()}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.name}>{first_name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity style={styles.iconBox}>
                    <Image
                        style={styles.icon}
                        resizeMode="contain"
                        source={Notification}
                    />
                    <View style={styles.badgeRoot}>
                        <Text style={styles.badge}>1</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
