import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons"
import defaultStyles from '../config/styles';


function AppTextInput({ name, ...otherProps }) {
    return (
        <View style={styles.container}>
            {name && <MaterialCommunityIcons name={name} size={25} style={styles.icon} />}
            <TextInput style={[defaultStyles.text, styles.text]} {...otherProps} />
        </View>
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
        flex: 1,
    }

})

export default AppTextInput;