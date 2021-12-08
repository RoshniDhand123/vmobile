import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { Header, CustomButton, Circles } from "app/elements";
import styles from "./styles";
import { Scan } from "app/assets";

const FingerPrintRecognition = ({ navigation }) => {
  const checkOut = (screen) => {
    if (navigation && navigation.navigate) navigation.navigate(screen);
  };
  const fingerPrintRecognitionHandler = () => {
    console.log("started finger recognition..//");
    checkOut("Signin");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Header />

        <View style={styles.fingerPrintRecognitionContainer}>
          {/* <Circles
            onPress={fingerPrintRecognitionHandler}
            imageUrl={Assets.Calendar}
          /> */}
          <View style={styles.imgRoot}>
            <TouchableOpacity onPress={fingerPrintRecognitionHandler}>
              <Image source={Scan} style={styles.img} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.fingerPrintRecognitionTitle}>
              Fingerprint Recognition
            </Text>
          </View>
          <View>
            <Text style={styles.fingerPrintRecognitionSubTitle}>
              Scan your finger to reorganize your ID
            </Text>
          </View>
          <View style={styles.mTopButton}>
            <CustomButton
              label="GET START"
              onPress={fingerPrintRecognitionHandler}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FingerPrintRecognition;
