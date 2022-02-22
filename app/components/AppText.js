import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

import defaultStyles from "../config/styles";

function AppText({ title, style }) {
  style = style || defaultStyles.text;
  return <Text style={[defaultStyles.text, style]}>{title}</Text>;
}


export default AppText;
