import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AppText from './AppText';

function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText title={item.label} style={styles.pickerItem} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    pickerItem: {
        padding: 15
    }
})

export default PickerItem;