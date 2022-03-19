import React from 'react';

import { FormikContext, useFormikContext } from 'formik'
import AppErrorMessage from './AppErrorMessage';
import AppTextInput from './AppTextInput';


function AppFormField({ icon, fieldName, ...otherProps }) {

    const { setFieldTouched, handleChange, touched, errors } = useFormikContext();

    return (
        <>
            <AppTextInput
                onBlur={() => setFieldTouched(fieldName)}
                onChangeText={handleChange(fieldName)}
                {...otherProps}
                name={icon}
            />
            <AppErrorMessage error={errors[fieldName]} isVisible={touched[fieldName]} />
        </>
    );
}

export default AppFormField;