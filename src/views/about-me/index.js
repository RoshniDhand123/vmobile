import React, { useState, useEffect } from "react";

import { View, SafeAreaView, ScrollView } from "react-native";
import {
    CustomNavigationHeaderBar,
    FormContainer,
    CustomButton,
    Loader,
} from "app/elements";
import { fields } from "./fields";
import { saveAboutMeAPI, getAboutMeAPI } from "../../services/api-services";

import styles from "./styles";

const parseReqData = ({ height, ...rest }) => {
    return {
        heightFT: height?.ft,
        heightIN: height?.in,
        ...rest,
    };
};

const parseDataToFormik = ({ heightFT, heightIN, ...rest }) => {
    return {
        height: { ft: heightFT, in: heightIN },
        ...rest,
    };
};

const AboutMe = ({ navigation }) => {
    const [showLoader, setShowLoader] = useState(false);
    const [initialAboutMeValues, setInitialAboutMeValues] = useState({});

    useEffect(() => {
        getAboutMeHandler();
    }, []);

    const getAboutMeHandler = async () => {
        setShowLoader(true);
        const resp = await getAboutMeAPI();

        if (resp && resp.status) {
            setShowLoader(false);
            const initialValues = parseDataToFormik(resp.data);
            setInitialAboutMeValues(initialValues);
        } else alert(resp.error || resp.msg?.msg[0] || "something went wrong.");
        setShowLoader(false);
    };

    const submitHandler = async (payload, { resetForm }) => {
        console.log("payload", payload);
        const parseData = parseReqData(payload);
        console.log("parseData", parseData);

        setShowLoader(true);
        const resp = await saveAboutMeAPI(parseData);

        if (resp && resp.status) {
            setShowLoader(false);
            console.log("resp", resp);
            alert(resp.msg || "Data saved successfully");
            // resetForm();
            // checkOut("Home");
        } else alert(resp.error || resp.msg?.msg[0] || "something went wrong.");
        setShowLoader(false);
    };
    return (
        <SafeAreaView>
            <ScrollView>
                {showLoader && <Loader />}
                <View style={styles.root}>
                    {/* <Header logout={logout} /> */}
                    <CustomNavigationHeaderBar
                        navigation={navigation}
                        title="About Me"
                        showBack={true}
                    />
                    <View style={styles.container}>
                        <FormContainer
                            fields={fields}
                            initialValues={initialAboutMeValues || {}}
                            onSubmit={submitHandler}
                            customSubmit={(handleSubmit) => (
                                <View>
                                    <View style={styles.btnContainer}>
                                        <CustomButton
                                            onPress={handleSubmit}
                                            label="Save"
                                        />
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AboutMe;
