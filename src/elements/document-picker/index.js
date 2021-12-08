import React from "react";

import * as Assets from "app/assets";

import { View, Text, Image, TouchableOpacity } from "react-native";
import DocumentPicker from "react-native-document-picker";
import ImgToBase64 from "react-native-image-base64";

import styles from "./styles";

const DocumentPickerCustom = () => {
    const documentBaseConverter = (documentPath) => {
        ImgToBase64.getBase64String(documentPath)
            .then((base64String) =>
                console.log("Base string../////", base64String)
            )
            .catch((err) => console.log("error", err));
    };

    const documentSelectHandler = async () => {
        // Pick multiple files
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles],
            });
            // for (const res of results) {
            //     console.log(
            //         res.uri,
            //         res.type, // mime type
            //         res.name,
            //         res.size
            //     );
            // }
            console.log("results...", results);
            documentBaseConverter(results[0].uri);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log("errr", err);
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err;
            }
        }
    };

    return (
        <View style={styles.root}>
            <View>
                <Text style={styles.label}>Upload Documents</Text>
            </View>
            <TouchableOpacity
                style={styles.uploadContainer}
                onPress={documentSelectHandler}
            >
                <View style={styles.imageContainer}>
                    <Image source={Assets.Upload} style={styles.image} />
                </View>
                <View>
                    <Text style={styles.txt}>
                        Drag images here or click to choose and upload.
                    </Text>
                    <Text style={styles.txt}>
                        Supported formats: PNG, JPEG, JPG
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default DocumentPickerCustom;
