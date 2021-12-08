import { StyleSheet, Dimensions } from "react-native";
import { normalize } from "app/services/utils";

export default StyleSheet.create({
  root: {
    backgroundColor: "#002347",
    minHeight: Dimensions.get("window").height,
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: normalize(15),
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(15),
    backgroundColor: "#062E55",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "#0052A2",
  },
  profileRoot: {
    flex: 1,
    width: normalize(70),
    height: normalize(70),
    borderRadius: 50,
    overflow: "hidden",
    marginRight: normalize(7),
    borderWidth: 2,
    borderColor: "#198EDC",
  },
  profile: {
    width: normalize(70),
    height: normalize(70),
    borderRadius: 50,
  },
  details: {
    paddingLeft: normalize(5),
    flex: 2,
  },
  txt: {
    color: "white",
  },
  type: {
    paddingVertical: normalize(5),
  },
  name: {
    fontSize: normalize(18),
  },
  nextRoot: {
    flex: 1,
  },
  next: {
    textAlign: "right",
    marginTop: normalize(-25),
    marginBottom: normalize(20),
    fontSize: normalize(10),
  },
  arrowRoot: {
    display: "flex",
    alignItems: "flex-end",
  },
  pLeft: { paddingLeft: normalize(5) },
  arrowIcon: {
    width: normalize(15),
    height: normalize(15),
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: normalize(4),
  },
});
