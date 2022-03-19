import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppImagePicker from './AppImagePicker';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();

    return (
        <View>
            <ScrollView
                horizontal
                ref={scrollView}
                onContentSizeChange={() => scrollView.current.scrollToEnd()}
            >
                <View style={styles.container}>
                    {imageUris.map((uri) => <AppImagePicker
                        imageURI={uri}
                        key={uri}
                        onImageChange={() => onRemoveImage(uri)}
                    />)}
                    <AppImagePicker onImageChange={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }
});
export default ImageInputList;