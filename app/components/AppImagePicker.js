import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Alert } from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function AppImagePicker({ imageURI, onImageChange }) {

    useEffect(() => {
        requestpermission();

    }, [])

    const requestpermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) {
            Alert("You need to give camera permission to proceed !")
        }
    }

    const handlePress = () => {
        if (!imageURI) {
            selectImage();
        } else {
            deleteImage()
        }
    }

    const selectImage = async () => {
        let result;
        try {
            result = await ImagePicker.launchImageLibraryAsync({
                quality: 0.5,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
            });
            if (!result.cancelled) {
                onImageChange(result.uri)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const deleteImage = () => {
        Alert.alert('Delete Image', 'Are you sure you want to delete this image?', [
            {
                text: 'Cancel',
            },
            { text: 'OK', onPress: () => onImageChange(null) },
        ]);

    }

    return (
        <TouchableWithoutFeedback onPress={() => handlePress()}>
            <View style={styles.container}>
                {!imageURI && <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />}
                {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
            </View>

        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: colors.light,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 15,
        margin: 5
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 15,
        margin: 10
    }
});
export default AppImagePicker;