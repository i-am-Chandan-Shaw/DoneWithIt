import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, FlatList, Modal, Button } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons"
import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';
import colors from '../config/colors';


function AppPicker({ items, iconName, onSelectItem, placeholder, selectedItem }) {


    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
                <View style={styles.container}>
                    {iconName && <MaterialCommunityIcons name={iconName} size={25} style={styles.icon} />}
                    {selectedItem ? (
                        <AppText style={styles.text} title={selectedItem.label} />
                    ) : (
                        <AppText style={styles.placeholder} title={placeholder} />
                    )}
                    <MaterialCommunityIcons name="chevron-down" size={25} style={styles.icon} />
                </View>
            </TouchableWithoutFeedback>
            <Modal animationType='slide' visible={isVisible}>
                <Button title='Close' onPress={() => setIsVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItem label={item.label} onPress={() => {
                        onSelectItem(item);
                        setIsVisible(false);
                    }} />}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        flexDirection: 'row',
        borderRadius: 25,
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        paddingRight: 15,
    },
    placeholder: {
        flexDirection: 'row',
        flex: 1,
        color: colors.medium
    },
    text: {
        flexDirection: 'row',
        flex: 1
    }

})

export default AppPicker;