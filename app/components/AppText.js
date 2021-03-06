import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ title, style, ...otherProps }) {
  style = style || defaultStyles.text;
  return <Text style={[defaultStyles.text, style]} {...otherProps}>{title}</Text>;
}


export default AppText;
