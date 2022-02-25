import React from 'react';
import { StyleSheet } from 'react-native';


import * as Yup from 'yup';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppFormPicker from '../components/AppFormPicker';
import AppSubmitButton from '../components/AppSubmitButton';




const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Titile"),
    price: Yup.number().required().min(1).max(100).label("Price"),
    decription: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category")
});

const categories = [
    { label: "Furniture", value: 1 },
    { label: "Camera", value: 2 },
    { label: "Clothing", value: 3 },
]

function ListingEditScreen(props) {
    return (
        <AppForm style={styles.form}
            initialValues={{
                title: "",
                price: "",
                description: "",
                category: null,
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
        >
            <AppFormField maxLength={225} fieldName="title" placeholder="Title" />
            <AppFormField
                keyboardType="numeric"
                maxLength={8}
                fieldName="price"
                placeholder="Price"
            />
            <AppFormPicker
                items={categories}
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