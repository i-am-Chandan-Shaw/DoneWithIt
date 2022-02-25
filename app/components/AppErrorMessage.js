import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';



function AppErrorMessage({ error, isVisible }) {
    if (!isVisible || !error) {
        return null;
    }
    return (
        <View style={styles.container} >
            <MaterialCommunityIcons name='alert-outline' size={20} color="red" />
            <AppText style={styles.text} title={error} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    text: {
        color: colors.danger,
        paddingLeft: 10,
    }
})

export default AppErrorMessage;