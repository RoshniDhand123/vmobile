import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ScrollView } from "react-native";

import {
    CustomNavigationHeaderBar,
    Loader,
    FormContainer,
    CustomButton,
    ConsultButton,
} from "app/elements";
import { newConsultAPI } from "app/services/api-services";
import styles from "./styles";

import data from "./consult.json";
import { fields } from "./fields";

const parseReqData = (payload) => {
    return {
        ...payload,
    };
};

const NewConsult = ({ navigation }) => {
    const [showLoader, setShowLoader] = useState(false);
    const [step, setStep] = useState(0);
    const [consultQueData, setCounsultQueData] = useState([]);

    useEffect(() => {
        getConsult();
    }, []);

    const getConsult = async () => {
        setShowLoader(true);
        // console.log("data", data.data);
        setCounsultQueData(data.data);
        console.log("counsult data", consultQueData);

        // const resp = await newConsultAPI();
        // if (resp && resp.status) {
        //     console.log("resp from consult api", resp);

        //     // resp.data.map((item) => {
        //     //     console.log("option", item.option);
        //     // });
        // } else {
        //     alert(resp.error || resp.msg?.msg[0] || "something went wrong.");
        // }
        setShowLoader(false);
    };

    const addConsultHandler = (data) => {
        console.log("data submitted to backend", data);
    };

    const submitHandler = (payload, { resetForm }) => {
        console.log("payload", payload);
        if (step != consultQueData.length) {
            setStep(step + 1);
        } else {
            addConsultHandler(parseReqData(payload), resetForm);
        }
    };

    const backHandler = () => {
        setStep(step - 1);
    };

    return (
        <SafeAreaView>
            {showLoader && <Loader />}
            <ScrollView>
                <CustomNavigationHeaderBar
                    navigation={navigation}
                    title="New Consult"
                    showBack={true}
                />
                <View style={styles.root}>
                    <View>
                        {consultQueData.length > 0 && (
                            <FormContainer
                                fields={
                                    step !== consultQueData.length
                                        ? [consultQueData[step]] || []
                                        : fields
                                }
                                initialValues={{}}
                                onSubmit={submitHandler}
                                customSubmit={(handleSubmit) => (
                                    <View style={styles.buttonContainer}>
                                        <View style={{ flex: 2 }}>
                                            {step > 0 && (
                                                <ConsultButton
                                                    onPress={backHandler}
                                                    label="Back"
                                                />
                                            )}
                                        </View>

                                        <ConsultButton
                                            onPress={handleSubmit}
                                            label="Next"
                                        />
                                    </View>
                                )}
                            />
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NewConsult;
