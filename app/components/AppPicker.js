import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons"
import defaultStyles from '../config/styles';
import AppText from './AppText';


function AppPicker({ name, placeholder }) {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
                <View style={styles.container}>
                    {name && <MaterialCommunityIcons name={name} size={25} style={styles.icon} />}
                    <AppText style={styles.text} title={placeholder} />
                    <MaterialCommunityIcons name="chevron-down" size={25} style={styles.icon} />
                </View>
            </TouchableWithoutFeedback>
            <Modal animationType='slide' visible={isVisible}>
                <Button title='Close' onPress={() => setIsVisible(false)} />
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
    text: {
        flexDirection: 'row',
        flex: 1
    }

})

export default AppPicker;