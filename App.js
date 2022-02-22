import React from "react";
import { View, StyleSheet } from "react-native";

import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import colors from "./app/config/colors";




export default function App() {
  return <View style={styles.screen}>
    <AppTextInput name="email" placeholder="User Name" />
    <AppPicker name="apps" placeholder="Category" />
  </View>

}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: colors.white
  }
})
