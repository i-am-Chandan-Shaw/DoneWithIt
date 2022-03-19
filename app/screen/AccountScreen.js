import React from 'react';
import { StyleSheet, View, FlatList } from "react-native"


import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import colors from '../config/colors';

const menuItem = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetSceen: "Messages"
    }
]


function AccountScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ListItem title={"Chandan Shaw"} subTitle={"chandan.shaw2050@gmail.com"}
                image={require("../assets/mosh.jpg")} />
            <View style={styles.middleContainer}>
                <FlatList
                    data={menuItem}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                            onPress={() => navigation.navigate(item.targetSceen)}
                        />
                    }
                />
            </View>
            <ListItem title={"Logout"}
                IconComponent={<Icon name={"logout"} backgroundColor={"#ffe66d"} />} />
        </View>
    );
}

const styles = StyleSheet.create({

    middleContainer: {
        marginTop: 50,
        marginBottom: 50
    }
})

export default AccountScreen;