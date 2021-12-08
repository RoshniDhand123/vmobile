import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    backgroundColor: "#002347",
    minHeight: Dimensions.get("window").height,
  },
  fingerPrintRecognitionContainer: {
    paddingHorizontal: normalize(40),
    paddingVertical: normalize(10),
  },
  fingerPrintRecognitionTitle: {
    color: "#fff",
    fontSize: normalize(20),
    textAlign: "center",
    marginTop: normalize(5),
  },
  fingerPrintRecognitionSubTitle: {
    color: "gray",
    fontSize: normalize(14),
    textAlign: "center",
    marginTop: normalize(4),
  },
  mTopButton: {
    marginTop: normalize(70),
  },
  imgRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: normalize(50),
  },
  img: {
    width: normalize(120),
    height: normalize(120),
  },
});
