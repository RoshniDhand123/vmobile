import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    backgroundColor: "#002347",
    minHeight: Dimensions.get("window").height,
  },
  msgContainer: {
    marginVertical: normalize(25),
    marginHorizontal: normalize(15),
  },
});

export const MsgInputBoxStyles = StyleSheet.create({
  root: {
    backgroundColor: "#002347",
    display: "flex",
    flexDirection: "row",
  },
  input: {
    borderColor: "#1866BF",
    borderWidth: 1,
    flex: 5,
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: normalize(20),
  },
  btnRoot: {
    flex: 1,
    backgroundColor: "#2BA1C7",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: normalize(5),
  },
  btnTxt: {
    textAlignVertical: "center",
    textAlign: "center",
    color: "white",
  },
});

export const chatStyles = (self) =>
  StyleSheet.create({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: self ? "flex-end" : "flex-start",
      margin: 10,
    },
    timeContainer: {
      paddingVertical: normalize(5),
    },
    msgContainer: {
      borderWidth: 2,
      borderColor: self ? "#707070" : "#1866BF",
      paddingVertical: normalize(10),
      paddingHorizontal: normalize(15),
      borderTopLeftRadius: 14,
      borderTopRightRadius: 14,
      borderBottomLeftRadius: self ? 14 : 0,
      borderBottomRightRadius: self ? 0 : 14,
    },
    msgTxt: {
      textAlign: self ? "right" : "left",
      textAlignVertical: "center",
      color: "white",
    },
    msg: {
      fontSize: normalize(12),
    },
    time: {
      fontSize: normalize(10),
    },
  });
