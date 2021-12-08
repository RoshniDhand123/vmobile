import { AsyncStorage } from "react-native";

const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log("ERROR ++storeData++' :", error);
    return false;
  }
};

const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("VALUE: ", value);
      return JSON.parse(value);
    }
  } catch (error) {
    console.log("ERROR ++retrieveData++ :", error);
  }
  return null;
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  } catch (error) {
    console.log("ERROR ++removeData++ :", error);
  }
  return false;
};

export { storeData, removeData, retrieveData };
