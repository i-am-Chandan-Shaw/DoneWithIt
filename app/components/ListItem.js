import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';

import AppText from "./AppText";
import colors from "../config/colors";

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title} title={title} />
              {subTitle && <AppText style={styles.subTitle} title={subTitle} />}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    paddingLeft: 10,
    marginRight: 10,
    justifyContent: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
