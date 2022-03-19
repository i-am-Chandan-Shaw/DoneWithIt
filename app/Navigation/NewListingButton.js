import React from 'react';
import { View, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'

function NewListingButton({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name='plus-circle' color={colors.white} size={40} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        height: 80,
        width: 80,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 40,
        bottom: 32
    }
});
export default NewListingButton;