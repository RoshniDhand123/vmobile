import React from "react";
import { View, TouchableWithoutFeedback, Image, Text } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import ImgToBase64 from "react-native-image-base64";

import styles from "./styles";

import * as Assets from "../../assets";

const ImagePickerCustom = ({
    form: { errors, handleBlur, handleChange, touched, setFieldValue },
    field,
}) => {
    const imageConverter = (imagePath) => {
        ImgToBase64.getBase64String(imagePath)
            .then((base64String) => setFieldValue(field.name, base64String))
            .catch((err) => console.log("error", err));
    };

    const selectFile = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: "images",
            },
        };

        launchImageLibrary(options, (res) => {
            console.log("Response = ", res);

            if (res.didCancel) {
                console.log("User cancelled image picker");
            } else if (res.error) {
                console.log("ImagePicker Error: ", res.error);
            } else if (res.customButton) {
                console.log("User tapped custom button: ", res.customButton);

                alert(res.customButton);
            } else {
                console.log("image details", res);
                let imagePath = res.assets[0].uri;
                console.log("imagePath", imagePath);

                imageConverter(imagePath);
            }
        });
    };

    return (
        <TouchableWithoutFeedback onPress={selectFile}>
            <View style={styles.root}>
                <View style={styles.imageContainer}>
                    <Image source={Assets.Camera} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.text}>Choose profile picture</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ImagePickerCustom;
