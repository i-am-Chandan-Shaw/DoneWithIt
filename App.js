import React from "react";
import { View, StyleSheet } from "react-native";
import ListItem from "./app/components/ListItem";

import colors from "./app/config/colors";
import ListingEditScreen from "./app/screen/ListingEditScreen";
import ListingScreen from "./app/screen/ListingScreen";



export default function App() {
  return <View style={styles.screen}>
    <ListItem image={require("./app/assets/mosh.jpg")} title="Mosh" subTitle="programmer" />

  </View>

}
const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: colors.white
  }
})
