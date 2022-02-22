import React from "react";

import { View, Image, StyleSheet } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.cardImage} source={image}></Image>
      <View style={styles.cardDetails}>
        <AppText title={title} />
        <AppText title={subTitle} style={styles.subTitleStyle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    top: 40,
    margin: 20,
    borderRadius: 25,
    backgroundColor: "#f4f4f4",
    overflow: "hidden",
  },
  cardDetails: {
    padding: 15,
  },
  cardImage: {
    width: "100%",
    height: 200,
  },
  subTitleStyle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card;
