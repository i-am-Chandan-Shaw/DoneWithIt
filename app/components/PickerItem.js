import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

function PickerItem({ label, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText title={label} style={styles.pickerItem} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    pickerItem: {
        padding: 15
    }
})

export default PickerItem;