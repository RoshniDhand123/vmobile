import React from "react";
import { View, TextInput } from "react-native";

import styles from "./styles";

const CustomInput = (props) => {
    console.log("custom>>>>>>>>>>>>>>>>>>");
    const { placeholder } = props;

    return (
        <View style={styles.inputContainer}>
            <TextInput
                multiline={true}
                numberOfLines={15}
                placeholderTextColor="grey"
                placeholder={placeholder}
                style={styles.input}
                // onChangeText={(text) => this.setState({text})}
                // value={this.state.text}
                // value={field.value}
                // onChangeText={handleChange(field.name)}
                // onBlur={handleBlur(field.name)}
            />
        </View>
    );
};

export default CustomInput;
