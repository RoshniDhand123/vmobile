import React, { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { CustomNavigationHeaderBar, Loader } from "app/elements";
import { Doctors, ArrowBack, Calendar } from "app/assets";

const MockData = [
  { msg: "Hello Sir/Ma'am", self: false, date: "Today 10:00 AM" },
];

const MyMconsults = ({ navigation }) => {
  const checkOut = () => {
    if (navigation && navigation.navigate) navigation.navigate("Chat");
  };
  return (
    <>
      <ScrollView>
        <CustomNavigationHeaderBar
          navigation={navigation}
          title="My Consults"
          showBack={true}
        />
        <View style={styles.root}>
          <View style={{ marginVertical: 20 }}>
            <TouchableOpacity onPress={checkOut} style={styles.container}>
              <View style={styles.profileRoot}>
                <Image
                  style={styles.profile}
                  resizeMode="cover"
                  source={Doctors}
                />
              </View>
              <View style={styles.details}>
                <View>
                  <Text style={[styles.txt, styles.name]}>Heart Patient</Text>
                </View>
                <View>
                  <Text style={[styles.txt, styles.type]}>Heart Patient</Text>
                </View>
                <View style={styles.row}>
                  <Image
                    source={Calendar}
                    resizeMode="contain"
                    style={styles.arrowIcon}
                  />
                  <Text style={[styles.txt, styles.pLeft]}>Oct 14, 2021</Text>
                </View>
                <View style={styles.row}>
                  <Image
                    source={Calendar}
                    resizeMode="contain"
                    style={styles.arrowIcon}
                  />
                  <Text style={[styles.txt, styles.pLeft]}>6:00 pm</Text>
                </View>
              </View>
              <View style={styles.nextRoot}>
                <Text style={[styles.txt, styles.next]}>1 hour</Text>
                <View style={styles.arrowRoot}>
                  <Image
                    source={ArrowBack}
                    resizeMode="contain"
                    style={styles.arrowIcon}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default MyMconsults;
