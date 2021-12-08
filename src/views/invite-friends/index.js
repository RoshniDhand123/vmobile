import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    Share,
} from "react-native";
import { CustomNavigationHeaderBar, CustomButton } from "app/elements";

import * as Assets from "app/assets";

import styles from "./styles";

const InviteFriends = ({ navigation }) => {
    const inviteFriendsHandler = async () => {
        try {
            const result = await Share.share({
                message: "Volunteer Docs",
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log("if");
                    // shared with activity type of result.activityType
                } else {
                    // shared
                    console.log("else");
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
                console.log("else if");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.root}>
                    {/* <Header logout={logout} /> */}
                    <CustomNavigationHeaderBar
                        navigation={navigation}
                        title="Invite Friends"
                        showBack={true}
                    />
                    <View style={styles.container}>
                        <View style={styles.imageContainer}>
                            <View style={styles.imageRowFirst}>
                                <Image
                                    source={Assets.Doctors}
                                    style={styles.image}
                                />
                                <Image
                                    source={Assets.Doctors}
                                    style={styles.image}
                                />
                                <Image
                                    source={Assets.Doctors}
                                    style={styles.image}
                                />
                            </View>
                            <View style={styles.imageRowSecond}>
                                <Image
                                    source={Assets.Doctors}
                                    style={styles.image}
                                />
                                <Image
                                    source={Assets.Doctors}
                                    style={styles.image}
                                />
                            </View>
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>
                                Invite Your Patients & Physicians
                            </Text>
                            <Text style={styles.txt}>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut
                            </Text>
                        </View>
                        <View>
                            <CustomButton
                                onPress={inviteFriendsHandler}
                                label="INVITE FRIENDS"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default InviteFriends;
