import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from './AppPicker';
import AppErrorMessage from './AppErrorMessage';

function AppFormPicker({ items, name, nosOfColumns, PickerItemComponent, placeholder }) {
    const { errors, setFieldValue, touched, values } = useFormikContext();
    return (
        <>
            <AppPicker
                items={items}
                nosOfColumns={nosOfColumns}
                PickerItemComponent={PickerItemComponent}
                onSelectItem={(item) => setFieldValue(name, item)}
                placeholder={placeholder}
                selectedItem={values[name]}
            />
            <AppErrorMessage error={errors[name]} isVisible={touched[name]} />
        </>
    );
}

export default AppFormPicker;