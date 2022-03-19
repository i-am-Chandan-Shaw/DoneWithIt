import React from "react";

import { StyleSheet, View, ImageBackground, Image } from "react-native";

import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <AppText title={"Sell What you Don't Need"} style={styles.text} />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
    padding: 20,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 90,
    height: 90,
  },
  logoContainer: {
    top: 90,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 21,
    fontWeight: "bold",
    padding: 5,
  },
});

export default WelcomeScreen;
