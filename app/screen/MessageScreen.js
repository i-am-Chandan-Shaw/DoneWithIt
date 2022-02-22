import React, { useState } from "react";

import { FlatList, SafeAreaView, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";
import Constants from "expo-constants";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Title 1",
    subTitle: "SubTitle 1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "Title 2",
    subTitle: "SubTitle 2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "Title 3",
    subTitle: "SubTitle 3",
    image: require("../assets/mosh.jpg"),
  },
];

function MessageScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false)
  const handleDelete = (item) => {
    const refreshedList = messages.filter(msg => msg.id != item.id);
    setMessages(refreshedList);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => { console.log(item); }}
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "Title 2",
              subTitle: "SubTitle 2",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 3,
              title: "Title 3",
              subTitle: "SubTitle 3",
              image: require("../assets/mosh.jpg"),
            },
          ])
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,

  },
});

export default MessageScreen;
