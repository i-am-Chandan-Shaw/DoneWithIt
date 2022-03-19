import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';


import AppText from './AppText';
import Icon from './Icon';



function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Icon name={item.icon} size={60} backgroundColor={item.backgroundColor} />
                <AppText title={item.label} style={styles.categoryickerItem} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        alignItems: 'center',
        width: 125
    },
    categoryickerItem: {
        paddingTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem;