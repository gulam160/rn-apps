import { StyleSheet, StatusBar, Platform } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight! + 15 : 0,
  },
});
