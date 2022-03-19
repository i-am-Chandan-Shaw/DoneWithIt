import React from "react";
import { View, StyleSheet } from "react-native";


import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./app/Navigation/AuthNAvigation";
import navigationTheme from "./app/Navigation/navigationTheme";
import AppNavigator from "./app/Navigation/AppNavigator";



export default function App() {
  return <View style={styles.screen}>
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  </View >
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    flex: 1,
  },

})
