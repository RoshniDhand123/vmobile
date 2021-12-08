import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { Header, CustomButton, Circles } from "app/elements";
import styles from "./styles";
import { Scan } from "app/assets";

// FigerprintRecognition
const FaceRecognition = ({ navigation }) => {
  const checkOut = (screen) => {
    if (navigation && navigation.navigate) navigation.navigate(screen);
  };
  const faceRecognitionHandler = () => {
    console.log("started..//");
    checkOut("FigerprintRecognition");
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Header />

        <View style={styles.faceRecognitionContainer}>
          <View style={styles.imgRoot}>
            <TouchableOpacity onPress={faceRecognitionHandler}>
              <Image source={Scan} style={styles.img} resizeMode="contain" />
            </TouchableOpacity>
          </View>

          {/* <Circles
            onPress={faceRecognitionHandler}
            imageUrl={Assets.Calendar}
          /> */}

          <View>
            <Text style={styles.faceRecognitionTitle}>Face Recognition</Text>
          </View>
          <View>
            <Text style={styles.faceRecognitionSubTitle}>
              Scan your face to reorganize your ID
            </Text>
          </View>
          <View style={styles.mTopButton}>
            <CustomButton label="GET START" onPress={faceRecognitionHandler} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FaceRecognition;
