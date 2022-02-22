import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    name="trash-can"
                    color="white"
                    size={35}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        backgroundColor: colors.danger,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default ListItemDeleteAction;