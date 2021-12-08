import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    Linking,
    TouchableOpacity,
} from "react-native";
import {
    CustomNavigationHeaderBar,
    CustomButton,
    FormContainer,
    Loader,
} from "app/elements";

import { updateProfileAPI } from "app/services/api-services/account";

import * as Assets from "app/assets";
import fields from "./fields";

import styles from "./styles";

const parseDataToFormik = ({ first_name, pic, ...rest }) => {
    return {
        name: first_name,
        ...rest,
    };
};

const parseReqData = ({ name, ...rest }) => {
    return {
        first_name: name,
        ...rest,
    };
};

const Profile = ({ navigation, route }) => {
    const { pic = "" } = route?.params || {};

    const [showLoader, setShowLoader] = useState(false);
    const [isEditable, setIsEditable] = useState(false);

    const submitHandler = async (payload) => {
        setShowLoader(true);
        const data = parseReqData(payload);

        const resp = await updateProfileAPI(data);
        if (resp && resp.status) {
            alert(resp.msg || "Profile Updated Successfully");
            setIsEditable(false);
        } else {
            alert(resp.error || resp.msg?.msg[0] || "something went wrong.");
        }
        setShowLoader(false);

        console.log("Data to..", data);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                {showLoader && <Loader />}
                <View style={styles.root}>
                    {/* <Header logout={logout} /> */}
                    <CustomNavigationHeaderBar
                        navigation={navigation}
                        title="Profile"
                        showBack={true}
                    />
                    <View style={styles.container}>
                        {!isEditable && (
                            <TouchableOpacity
                                style={styles.editContainer}
                                onPress={() =>
                                    setIsEditable((preVal) => !preVal)
                                }
                            >
                                <Image source={Assets.Edit} />
                            </TouchableOpacity>
                        )}

                        <View style={styles.imageContainer}>
                            <Image
                                resizeMode="cover"
                                source={pic ? { uri: pic } : Assets.Doctors}
                                style={styles.image}
                            />
                            {isEditable && (
                                <TouchableOpacity
                                    style={styles.imageEdit}
                                    onPress={() =>
                                        setIsEditable((preVal) => !preVal)
                                    }
                                >
                                    <Image source={Assets.Edit} />
                                </TouchableOpacity>
                            )}
                        </View>
                        <View>
                            <FormContainer
                                fields={fields}
                                initialValues={
                                    parseDataToFormik(route?.params || {}) || {}
                                }
                                onSubmit={submitHandler}
                                customSubmit={(handleSubmit) => (
                                    <View>
                                        {isEditable && (
                                            <View style={styles.btnContainer}>
                                                <CustomButton
                                                    onPress={handleSubmit}
                                                    label="SAVE"
                                                />
                                            </View>
                                        )}
                                    </View>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
