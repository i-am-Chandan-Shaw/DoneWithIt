import { Formik } from 'formik';
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';


import * as Yup from 'yup';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import AppSubmitButton from '../components/AppSubmitButton';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo-red.png")} />

            <AppForm initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema} >
                <AppFormField
                    name="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="emailAddress"
                    fieldName="email"
                />
                <AppFormField
                    name="lock"
                    placeholder="Password"
                    autoCapitalize="none"
                    textContentType="password"
                    secureTextEntry
                    fieldName="password"
                />
                <AppSubmitButton title="Login" />

            </AppForm>





        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    image: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 40
    }
})

export default LoginScreen;