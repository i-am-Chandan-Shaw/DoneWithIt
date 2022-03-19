import React from 'react';
import { StyleSheet } from 'react-native';


import * as Yup from 'yup';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import AppSubmitButton from '../components/AppSubmitButton';
import CategoryPickerItem from '../components/CategoryPickerItem';
import AppFormImagePicker from '../components/AppFormImagePicker'





const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Titile"),
    price: Yup.number().required().min(1).max(100000).label("Price"),
    decription: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please select at least one image !")
});

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];

function ListingEditScreen(props) {
    return (
        <AppForm style={styles.form}
            initialValues={{
                title: "",
                price: "",
                description: "",
                category: null,
                images: []
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <AppFormImagePicker name="images" />
            <AppFormField maxLength={225} fieldName="title" placeholder="Title" />
            <AppFormField
                keyboardType="numeric"
                maxLength={8}
                fieldName="price"
                placeholder="Price"
            />
            <AppFormPicker
                items={categories}
                nosOfColumns="3"
                PickerItemComponent={CategoryPickerItem}
                name="category"
                placeholder="Categories"
            />
            <AppFormField
                maxLength={255}
                multiline
                fieldName="description"
                numberOfLines={3}
                placeholder="Description"
            />
            <AppSubmitButton title="Post" />
        </AppForm>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 15
    }
})

export default ListingEditScreen;

