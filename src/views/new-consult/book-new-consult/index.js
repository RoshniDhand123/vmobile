import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./styles";
import { Checked } from "app/assets";
import { Header } from "../../home";

const BookNewConsult = ({ navigation, route }) => {
  const checkOut = (screen) => {
    console.log("screen", screen);
    if (navigation && navigation.navigate) navigation.navigate(screen);
  };
  const { msg, img, heading, back } = route?.params || {};
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={checkOut.bind({}, back || "Signin")}>
        <View style={styles.root}>
          <Header logout={() => {}} />
          <View>
            <Text>Describe briefly the reason for consult today.</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

export default BookNewConsult;
