import React, { useState } from "react";

import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    Linking,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { CustomNavigationHeaderBar, CustomButton, Loader } from "app/elements";
import { submitFeedbackAPI } from "app/services/api-services/feedback";

import { Rating } from "react-native-elements";

import styles from "./styles";

const Feedback = ({ navigation }) => {
    const [rating, setRating] = useState(1);
    const [feedback, setFeedback] = useState("");
    const [showLoader, setShowLoader] = useState(false);

    const feedbackHandler = async () => {
        const payload = {
            rating,
            feedback,
        };
        setShowLoader(true);
        console.log("payload", payload);
        const resp = await submitFeedbackAPI(payload);
        if (resp && resp.status) {
            console.log("resp", resp);
            alert(resp.msg || "Feedback Submited Successfully");
            setFeedback("");
        } else {
            alert(resp.error || resp.msg?.msg[0] || "something went wrong.");
            setFeedback("");
        }
        setShowLoader(false);
    };

    const ratingCompletedHandler = (ratings) => {
        setRating(ratings);
    };

    return (
        <SafeAreaView>
            <ScrollView>
                {showLoader && <Loader />}
                <View style={styles.root}>
                    {/* <Header logout={logout} /> */}
                    <CustomNavigationHeaderBar
                        navigation={navigation}
                        title="Feedback"
                        showBack={true}
                    />
                    <View style={styles.container}>
                        <View style={styles.txtContainer}>
                            <Text style={styles.title}>
                                VolunteerDocs Feedback
                            </Text>
                            <Text style={styles.txt}>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                            </Text>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Rating
                                type="custom"
                                ratingColor="#D6AF12"
                                ratingBackgroundColor="gray"
                                tintColor="#002347"
                                imageSize={55}
                                onFinishRating={ratingCompletedHandler}
                                style={{
                                    paddingVertical: 10,
                                }}
                                startingValue="1"
                                minValue="1"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                multiline={true}
                                numberOfLines={6}
                                placeholder="Feedback..."
                                placeholderTextColor="grey"
                                style={styles.input}
                                value={feedback}
                                onChangeText={(value) => setFeedback(value)}
                            />
                        </View>
                        <View>
                            <CustomButton
                                onPress={feedbackHandler}
                                label="SEND FEEDBACK"
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Feedback;
