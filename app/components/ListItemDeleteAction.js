import React from 'react';
import { View, StyleSheet } from 'react-native';

import colors from '../config/colors';

function ListItemDeleteAction() {
    return (
        <View style={styles.container}>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:70,
        height:40,
        backgroundColor: colors.black,
    }
})

export default ListItemDeleteAction;