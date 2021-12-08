import { Button, Text, View } from "react-native";
import { Field, Form, Formik } from "formik";

import { CustomButton } from "../../elements";
import React from "react";
import { createSchema } from "./utils";

export function getInitialValues(fields, initialValues) {
    console.log("in", initialValues);
    let values = {};
    if (initialValues && !Object.keys(initialValues).length && fields) {
        for (const field of fields) {
            values[field.name] = "";
        }
        return values;
    }
    return initialValues;
}

const FormContainer = ({
    step = false,
    fields,
    initialValues,
    onSubmit,
    customSubmit,
}) => {
    const schema = createSchema(fields);

    const renderField = (props, index) => (
        <Field key={props.name || index} {...props} />
    );
    return (
        <Formik
            initialValues={
                step ? initialValues : getInitialValues(fields, initialValues)
            }
            onSubmit={onSubmit}
            enableReinitialize
            validationSchema={schema}
        >
            {({ handleSubmit, errors }) => (
                <View style={{}}>
                    {fields.map(renderField)}
                    {customSubmit ? (
                        customSubmit(handleSubmit)
                    ) : (
                        <View style={{ marginVertical: 40 }}>
                            <CustomButton
                                onPress={handleSubmit}
                                title="submit"
                            />
                        </View>
                    )}
                </View>
            )}
        </Formik>
    );
};

export default FormContainer;